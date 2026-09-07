'use client';

import * as React from 'react';
import Webcam from 'react-webcam';
import {HugeiconsIcon} from '@hugeicons/react';
import {
    Alert02Icon,
    Camera01Icon,
    CheckmarkCircle02Icon,
    Delete02Icon,
    ImageUpload01Icon,
    Loading03Icon,
    RefreshIcon,
} from '@hugeicons/core-free-icons';

import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {toast} from '@/components/ui/toast';
import {dataURItoBlob} from '@/lib/utils';
import {uploadDirectusFile} from '@/services/directus';

export interface ProductImageCaptureProps {
    accessToken?: string;
    value?: string;
    onChange: (fileId?: string) => void;
    disabled?: boolean;
}

export function ProductImageCapture({
                                        accessToken,
                                        value,
                                        onChange,
                                        disabled = false,
                                    }: ProductImageCaptureProps) {
    const webcamRef = React.useRef<Webcam>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [capturedDataUrl, setCapturedDataUrl] = React.useState<string | null>(null);
    const [lastUploadPayload, setLastUploadPayload] = React.useState<{
        fileOrBlob: Blob | File;
        filename: string;
    } | null>(null);
    const [facingMode, setFacingMode] = React.useState<'environment' | 'user'>('environment');
    const [devices, setDevices] = React.useState<MediaDeviceInfo[]>([]);
    const [selectedDeviceId, setSelectedDeviceId] = React.useState<string>('');
    const [isCameraActive, setIsCameraActive] = React.useState<boolean>(false);
    const [cameraError, setCameraError] = React.useState<string | null>(null);
    const [isUploading, setIsUploading] = React.useState<boolean>(false);
    const [uploadError, setUploadError] = React.useState<string | null>(null);

    // Sync external value reset when form is reset
    const [prevValue, setPrevValue] = React.useState(value);
    if (value !== prevValue) {
        setPrevValue(value);
        if (!value) {
            setCapturedDataUrl(null);
            setUploadError(null);
            setLastUploadPayload(null);
        }
    }

    const handleDevices = React.useCallback(
        (mediaDevices: MediaDeviceInfo[]) => {
            const videoDevices = mediaDevices.filter(({kind}) => kind === 'videoinput');
            setDevices(videoDevices);
            if (videoDevices.length > 0 && !selectedDeviceId) {
                // Default to last device (often back camera on phones) or first
                setSelectedDeviceId(videoDevices[videoDevices.length - 1].deviceId);
            }
        },
        [selectedDeviceId]
    );

    React.useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.mediaDevices?.enumerateDevices) {
            navigator.mediaDevices.enumerateDevices().then(handleDevices).catch(() => {
                // Ignore failure to enumerate
            });
        }
    }, [handleDevices]);

    const handleUpload = React.useCallback(
        async (fileOrBlob: Blob | File, filename: string) => {
            if (!accessToken) {
                const msg = 'Authentication session missing or expired. Please re-authenticate.';
                setUploadError(msg);
                toast.add({
                    type: 'error',
                    description: msg,
                });
                return;
            }

            setIsUploading(true);
            setUploadError(null);
            setLastUploadPayload({fileOrBlob, filename});

            try {
                const uploadPromise = (async () => {
                    const uploaded = await uploadDirectusFile(accessToken, fileOrBlob, filename);
                    if (!uploaded?.id) {
                        throw new Error('Directus returned empty file payload');
                    }
                    return uploaded;
                })();

                const uploaded = await toast.promise(uploadPromise, {
                    loading: 'Uploading image to Directus...',
                    success: (file) => `Image uploaded successfully (File #${file.id})`,
                    error: (err: unknown) => (err instanceof Error ? err.message : 'Failed to upload image to Directus'),
                });

                onChange(uploaded.id);
            } catch (err: unknown) {
                const msg = err instanceof Error ? err.message : 'Failed to upload image to Directus';
                setUploadError(msg);
            } finally {
                setIsUploading(false);
            }
        },
        [accessToken, onChange]
    );

    const handleCapture = React.useCallback(() => {
        if (!webcamRef.current) return;
        const imageSrc = webcamRef.current.getScreenshot({
            width: 1920,
            height: 1080,
        });
        if (imageSrc) {
            setCapturedDataUrl(imageSrc);
            setIsCameraActive(false);
            const blob = dataURItoBlob(imageSrc);
            const filename = `product-capture-${Date.now()}.jpg`;
            handleUpload(blob, filename);
        }
    }, [webcamRef, handleUpload]);

    const handleFileSelect = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (!file) return;

            // Reset input value so the same file can be selected again
            event.target.value = '';

            if (!file.type.startsWith('image/')) {
                toast.add({
                    type: 'error',
                    description: 'Please select a valid image file (e.g. JPEG, PNG, WebP).',
                });
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                const dataUrl = reader.result as string;
                setCapturedDataUrl(dataUrl);
                setIsCameraActive(false);
                setCameraError(null);
                handleUpload(file, file.name || `product-upload-${Date.now()}.jpg`);
            };
            reader.readAsDataURL(file);
        },
        [handleUpload]
    );

    const handleRetry = () => {
        if (lastUploadPayload) {
            handleUpload(lastUploadPayload.fileOrBlob, lastUploadPayload.filename);
        } else if (capturedDataUrl) {
            const blob = dataURItoBlob(capturedDataUrl);
            const filename = `product-capture-${Date.now()}.jpg`;
            handleUpload(blob, filename);
        }
    };

    const handleRetake = () => {
        setCapturedDataUrl(null);
        setUploadError(null);
        setLastUploadPayload(null);
        onChange(undefined);
        setIsCameraActive(true);
    };

    const handleRemove = () => {
        setCapturedDataUrl(null);
        setUploadError(null);
        setLastUploadPayload(null);
        setIsCameraActive(false);
        onChange(undefined);
    };

    const toggleFacingMode = () => {
        setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
    };

    const videoConstraints: MediaTrackConstraints = React.useMemo(() => {
        if (selectedDeviceId && devices.length > 1) {
            return {
                deviceId: {exact: selectedDeviceId},
                width: {ideal: 1920},
                height: {ideal: 1080},
            };
        }
        return {
            facingMode,
            width: {ideal: 1920},
            height: {ideal: 1080},
        };
    }, [selectedDeviceId, devices, facingMode]);

    return (
        <div className="space-y-3">
            {/* Hidden File Input for Image Upload */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileSelect}
                disabled={disabled || isUploading}
            />

            {/* Camera Error Display */}
            {cameraError && (
                <Alert variant="destructive" className="py-2.5">
                    <HugeiconsIcon icon={Alert02Icon} className="size-4"/>
                    <AlertTitle className="text-sm font-semibold">Camera Access Issue</AlertTitle>
                    <AlertDescription
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                        <span>
                            {cameraError} - Please check browser camera permissions or select an image file instead.
                        </span>
                        <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={disabled || isUploading}
                            className="h-7 px-2 text-xs gap-1.5 self-start sm:self-auto bg-background/80 hover:bg-background"
                        >
                            <HugeiconsIcon icon={ImageUpload01Icon} className="size-3.5"/>
                            Upload Image Instead
                        </Button>
                    </AlertDescription>
                </Alert>
            )}

            {/* Upload Error Display */}
            {uploadError && (
                <Alert variant="destructive" className="py-2.5">
                    <HugeiconsIcon icon={Alert02Icon} className="size-4"/>
                    <AlertTitle className="text-sm font-semibold">Upload Failed</AlertTitle>
                    <AlertDescription className="flex items-center justify-between gap-2 text-xs">
                        <span>{uploadError}</span>
                        {(lastUploadPayload || capturedDataUrl) && (
                            <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={handleRetry}
                                disabled={isUploading || disabled}
                                className="h-7 px-2 text-xs"
                            >
                                Retry Upload
                            </Button>
                        )}
                    </AlertDescription>
                </Alert>
            )}

            {/* Inactive State - Start Camera or Upload Image */}
            {!isCameraActive && !capturedDataUrl && (
                <div
                    className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border p-6 text-center bg-muted/20">
                    <div
                        className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <HugeiconsIcon icon={Camera01Icon} className="size-6"/>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium">Capture or Upload Image</p>
                        <p className="text-xs text-muted-foreground">
                            Take a photo using your camera or upload an image file from your device.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                                setCameraError(null);
                                setIsCameraActive(true);
                            }}
                            disabled={disabled || isUploading}
                            className="gap-2"
                        >
                            <HugeiconsIcon icon={Camera01Icon} className="size-4"/>
                            Open Camera
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={disabled || isUploading}
                            className="gap-2"
                        >
                            <HugeiconsIcon icon={ImageUpload01Icon} className="size-4"/>
                            Upload Image
                        </Button>
                    </div>
                </div>
            )}

            {/* Active Live Video Stream */}
            {isCameraActive && !capturedDataUrl && (
                <div className="space-y-3">
                    <div
                        className="relative overflow-hidden rounded-lg border border-border bg-black aspect-video flex items-center justify-center max-h-80">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            screenshotQuality={0.9}
                            videoConstraints={videoConstraints}
                            onUserMedia={() => setCameraError(null)}
                            onUserMediaError={(err) => {
                                const errorStr = typeof err === 'string' ? err : err?.message || 'Permission denied or camera unavailable';
                                setCameraError(errorStr);
                                setIsCameraActive(false);
                            }}
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute top-2 right-2 flex items-center gap-1.5">
                            <Badge variant="secondary" className="bg-background/80 backdrop-blur-xs text-[10px]">
                                Live Feed
                            </Badge>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            {devices.length > 1 ? (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        const currentIndex = devices.findIndex((d) => d.deviceId === selectedDeviceId);
                                        const nextIndex = (currentIndex + 1) % devices.length;
                                        setSelectedDeviceId(devices[nextIndex].deviceId);
                                    }}
                                    className="gap-1.5 text-xs h-8"
                                >
                                    <HugeiconsIcon icon={RefreshIcon} className="size-3.5"/>
                                    Switch Camera
                                    ({devices.findIndex((d) => d.deviceId === selectedDeviceId) + 1}/{devices.length})
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={toggleFacingMode}
                                    className="gap-1.5 text-xs h-8"
                                >
                                    <HugeiconsIcon icon={RefreshIcon} className="size-3.5"/>
                                    Facing: {facingMode === 'environment' ? 'Back' : 'Front'}
                                </Button>
                            )}

                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={disabled || isUploading}
                                className="gap-1.5 text-xs h-8"
                            >
                                <HugeiconsIcon icon={ImageUpload01Icon} className="size-3.5"/>
                                Upload Image
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsCameraActive(false)}
                                className="text-xs h-8"
                            >
                                Cancel
                            </Button>
                        </div>

                        <Button
                            type="button"
                            onClick={handleCapture}
                            disabled={disabled || isUploading}
                            className="gap-2 h-8 font-medium"
                        >
                            <HugeiconsIcon icon={Camera01Icon} className="size-4"/>
                            Capture Photo
                        </Button>
                    </div>
                </div>
            )}

            {/* Captured Image Preview */}
            {capturedDataUrl && (
                <div className="space-y-3">
                    <div
                        className="relative overflow-hidden rounded-lg border border-border bg-muted/40 aspect-video flex items-center justify-center max-h-80">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={capturedDataUrl}
                            alt="Captured device photo"
                            className="w-full h-full object-contain"
                        />

                        <div className="absolute top-2 right-2 flex items-center gap-1.5">
                            {isUploading && (
                                <Badge variant="secondary"
                                       className="bg-background/90 backdrop-blur-xs text-[10px] gap-1">
                                    <HugeiconsIcon icon={Loading03Icon} className="size-3 animate-spin text-primary"/>
                                    Uploading...
                                </Badge>
                            )}
                            {!isUploading && value && (
                                <Badge variant="default"
                                       className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] gap-1">
                                    <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-3"/>
                                    Uploaded
                                </Badge>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                                {value ? `Directus File ID: ${value}` : isUploading ? 'Uploading file...' : 'Image captured'}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={handleRetake}
                                disabled={isUploading || disabled}
                                className="gap-1.5 text-xs h-8"
                            >
                                <HugeiconsIcon icon={RefreshIcon} className="size-3.5"/>
                                Retake
                            </Button>
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={handleRemove}
                                disabled={isUploading || disabled}
                                className="gap-1.5 text-xs h-8"
                            >
                                <HugeiconsIcon icon={Delete02Icon} className="size-3.5"/>
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
