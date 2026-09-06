import type {IDocument} from 'webzlp';
import {LabelDocumentBuilder, ReadyToPrintDocuments} from 'webzlp';
import {DATAMatrix, encodeToMatrix} from 'datamatrix-svg-ts';
import icon from '@/public/icon.svg';
import type {LabelDimensions, LabelSize, PrintOptions} from './types';
import {Product} from "@/types/gql/graphql";
import {escapeXml} from "@/lib/utils";

export const LABEL_DIMENSIONS: Record<LabelSize, LabelDimensions> = {
    small_47x20: {
        widthDots: 406,
        heightDots: 160,
        dotsPerMm: 8,
    },
    // small_50x25: {
    //     widthDots: 406,
    //     heightDots: 203,
    //     dotsPerMm: 8,
    // },
    // medium_57x32: {
    //     widthDots: 457,
    //     heightDots: 254,
    //     dotsPerMm: 8,
    // },
    // large_100x150: {
    //     widthDots: 812,
    //     heightDots: 1218,
    //     dotsPerMm: 8,
    // },
};

/**
 * Renders a DataMatrix barcode SVG block using datamatrix-svg-ts.
 */
function renderDataMatrixSvg(
    message: string,
    x: number,
    y: number,
    size: number
): string {
    try {
        if (typeof document !== 'undefined') {
            const dataMatrixEl = DATAMatrix({
                message,
                allowEmptyMessage: true,
                padding: 1,
                palette: {foreground: '#000000', background: '#ffffff'},
            });
            dataMatrixEl.setAttribute('x', String(x));
            dataMatrixEl.setAttribute('y', String(y));
            dataMatrixEl.setAttribute('width', String(size));
            dataMatrixEl.setAttribute('height', String(size));
            return dataMatrixEl.outerHTML;
        }

        const {matrix, width, height} = encodeToMatrix(message, false, true);
        const padding = 1;
        const svgWidth = width + padding * 2;
        const svgHeight = height + padding * 2;
        let pathData = '';
        let currentY = height;
        while (currentY--) {
            let runLength = 0;
            let currentX = width;
            while (currentX--) {
                const row = matrix[currentY];
                if (row && row[currentX]) {
                    runLength++;
                    if (!row[currentX - 1]) {
                        pathData += `M${currentX},${currentY}h${runLength}v1h-${runLength}v-1z`;
                        runLength = 0;
                    }
                }
            }
        }
        return `
<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="#000000" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" d="M0,0v${svgHeight}h${svgWidth}V0H0Z"/>
  <path transform="matrix(1,0,0,1,${padding},${padding})" d="${pathData}"/>
</svg>
    `.trim();
    } catch (err) {
        console.error('Failed to generate DataMatrix SVG:', err);
        return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="none" stroke="black" stroke-width="1" />`;
    }
}

/**
 * Renders the Mobile Phone Museum icon SVG block.
 */
function renderMuseumLogo(
    x: number,
    y: number,
    height: number,
    width?: number
): string {
    const iconWidth = width ?? Math.round(height * (icon.width / icon.height));
    return `
<svg x="${x}" y="${y}" width="${iconWidth}" height="${height}" viewBox="0 0 31 49" fill="black" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(1,0,0,1,-77.782,-89.764)">
    <path d="M81.617,134.272L98.969,134.272L104.312,128.929L104.312,93.6L86.96,93.6L81.617,98.943L81.617,134.272ZM100.557,138.107L77.782,138.107L77.782,97.417L78.343,96.792L85.371,89.764L108.147,89.764L108.147,130.517L100.557,138.107Z" fill="black" fill-rule="nonzero"/>
  </g>
</svg>
  `.trim();
}

/**
 * Generate an SVG representation of the label layout.
 * Used for both on-screen visual preview and WebZLP GRF bitmap compilation.
 */
export function generateProductLabelSvg(
    product: Product,
    options: PrintOptions = {}
): string {
    const sizeKey = options.labelSize || 'small_47x20';
    const dimensions = LABEL_DIMENSIONS[sizeKey] || LABEL_DIMENSIONS.small_47x20;
    const {widthDots, heightDots} = dimensions;

    const productModelName = escapeXml(product.model_id?.name || 'MPM Asset'
    );
    const productModelManu = escapeXml(product.model_id?.brand_id?.name || '');
    const productId = escapeXml(product.id || '');
    const imei = product.imei ? escapeXml(product.imei) : '';
    const targetUrl = product.id
        ? `https://i.mpm.ax/pr/${product.id}`
        : 'https://i.mpm.ax';

    const isCompact = heightDots <= 203;
    const qrMargin = isCompact ? 8 : 20;
    const qrSize = isCompact
        ? Math.max(heightDots - qrMargin * 2, 60)
        : Math.min(heightDots - 75, 180);
    const qrX = qrMargin;
    const qrY = isCompact ? qrMargin : 55;

    const qrSvgBlock = renderDataMatrixSvg(targetUrl, qrX, qrY, qrSize);

    if (isCompact) {
        const textX = qrX + qrSize + 10;
        const textRight = widthDots - 8;
        const logoHeight = 16;
        const logoWidth = Math.round(logoHeight * (icon.width / icon.height));
        const logoSvg = renderMuseumLogo(textX, 8, logoHeight, logoWidth);
        const brandingTextX = textX + logoWidth + 6;

        return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${widthDots} ${heightDots}" width="${widthDots}" height="${heightDots}">
  <rect width="${widthDots}" height="${heightDots}" fill="white" />
  <rect x="4" y="4" width="${widthDots - 8}" height="${heightDots - 8}" fill="none" />

  <!-- Barcode on left side -->
  ${qrSvgBlock}

  <!-- Compact Header / Branding with Museum Logo -->
  ${logoSvg}
  <text x="${brandingTextX}" y="21" font-family="sans-serif" font-size="14" font-weight="bold" fill="black" letter-spacing="0.5">
    Mobile Phone Museum
  </text>
  <line x1="${textX}" y1="28" x2="${textRight}" y2="28" stroke="black" stroke-width="1" />

  <!-- Device Manufacturer -->
  <text x="${textX}" y="48" font-family="sans-serif" font-size="15" fill="black">
    ${productModelManu.length > 25 ? productModelManu.substring(0, 23) + '...' : productModelManu}
  </text>

  <!-- Device Title -->
  <text x="${textX}" y="75" font-family="sans-serif" font-size="18" font-weight="bold" fill="black">
    ${productModelName.length > 25 ? productModelName.substring(0, 23) + '...' : productModelName}
  </text>
  

  <!-- Product ID and IMEI -->
  ${
            imei != ""
                ? `<text x="${textX}" y="98" font-family="monospace, sans-serif" font-size="12" fill="black">S/N: ${imei}</text>`
                : ''
        }
  
  <line x1="${textX}" y1="110" x2="${textRight}" y2="110" stroke="black" stroke-width="1" />

  <!-- Short URL -->
  <text x="${textX}" y="140" font-family="monospace, sans-serif" font-size="22" fill="black">
    i.mpm.ax/pr/${productId}
  </text>
</svg>
    `.trim();
    }

    const textX = qrX + qrSize + 20;
    const logoHeight = 22;
    const logoWidth = Math.round(logoHeight * (icon.width / icon.height));
    const logoSvg = renderMuseumLogo(20, 14, logoHeight, logoWidth);
    const brandingTextX = 20 + logoWidth + 8;

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${widthDots} ${heightDots}" width="${widthDots}" height="${heightDots}">
  <rect width="${widthDots}" height="${heightDots}" fill="white" />
  <rect x="8" y="8" width="${widthDots - 16}" height="${heightDots - 16}" fill="none" stroke="black" stroke-width="2" />
  
  <!-- Header / Museum Branding with Logo -->
  ${logoSvg}
  <text x="${brandingTextX}" y="31" font-family="monospace, sans-serif" font-size="14" font-weight="bold" fill="black" letter-spacing="1">
    Mobile Phone Museum
  </text>
  <line x1="20" y1="40" x2="${widthDots - 20}" y2="40" stroke="black" stroke-width="1" />

  <!-- Barcode on left side below header -->
  ${qrSvgBlock}

  <!-- Device Manufacturer -->
  <text x="${textX}" y="80" font-family="sans-serif" font-size="15" fill="black">
    ${productModelManu.length > 25 ? productModelManu.substring(0, 23) + '...' : productModelManu}
  </text>

  <!-- Device Title -->
  <text x="${textX}" y="115" font-family="sans-serif" font-size="18" font-weight="bold" fill="black">
    ${productModelName.length > 25 ? productModelName.substring(0, 23) + '...' : productModelName}
  </text>

  <!-- Product IMEI -->

  ${
        imei
            ? `<text x="${textX}" y="145" font-family="monospace, sans-serif" font-size="13" fill="black">IMEI: ${imei}</text>`
            : ''
    }

  <!-- Short URL -->
  <text x="${textX}" y="${imei ? 175 : 145}" font-family="monospace, sans-serif" font-size="12" fill="black">
    i.mpm.ax/pr/${productId}
  </text>
</svg>
  `.trim();
}

/**
 * Builds a printable label document for WebZLP.
 */
export async function buildProductLabelDocument(
    product: Product,
    options: PrintOptions = {}
): Promise<IDocument> {
    const sizeKey = options.labelSize || 'small_47x20';
    const dimensions = LABEL_DIMENSIONS[sizeKey] || LABEL_DIMENSIONS.small_47x20;
    const builder = new LabelDocumentBuilder();

    builder.startNewLabel();
    builder.clearImageBuffer();

    const svg = generateProductLabelSvg(product, options);
    await builder.addImageFromSVG(svg, dimensions.widthDots, dimensions.heightDots);

    const copies = options.copies && options.copies > 1 ? options.copies : 1;
    builder.addPrintCmd(copies);

    return builder.finalize();
}

export function buildFeedDocument(): IDocument {
    return ReadyToPrintDocuments.feedLabelDocument;
}
