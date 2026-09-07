import {z} from 'zod';

export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}

export const productFormSchema = z.object({
    model_id: z.string().min(1, 'Model is required'),
    donor_id: z.string().optional(),
    imei: z.string().max(64, 'IMEI/Serial must be 64 characters or less').optional(),
    description: z.string().max(500, 'Description must be 500 characters or less').optional(),
    note: z.string().max(1000, 'Note must be 1000 characters or less').optional(),
    status: z.enum(['draft', 'published', 'archived']),
    image_id: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export const modelFormSchema = z.object({
    brand_id: z.string().min(1, 'Brand is required'),
    name: z.string().min(1, 'Model name is required'),
    slug: z.string().min(1, 'Slug is required'),
    codename: z.string().optional(),
    form_factor_id: z.string(),
    release_year: z.string().optional(),
    release_month: z.string().optional(),
    release_day: z.string().optional(),
    weight: z.int().optional(),
    description: z.string().optional(),
    status: z.enum(['draft', 'published', 'archived']),
});

export type ModelFormValues = z.infer<typeof modelFormSchema>;

export const donorFormSchema = z.object({
    name: z.string().min(1, 'Donor name is required'),
    slug: z.string().min(1, 'Slug is required'),
    linkedin_url: z
        .string()
        .url('Must be a valid URL')
        .optional()
        .or(z.literal('')),
    description: z.string().optional(),
    status: z.enum(['draft', 'published', 'archived']),
});

export type DonorFormValues = z.infer<typeof donorFormSchema>;
