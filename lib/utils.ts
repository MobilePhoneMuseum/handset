import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const handleError = (error: string) => {
    throw new Error(error)
}

/**
 * Escape the given string to make it safe for use in XML documents.
 * @param unsafe String to escape
 * @returns Escaped string
 */
export function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&apos;';
            case '"':
                return '&quot;';
            default:
                return c;
        }
    });
}