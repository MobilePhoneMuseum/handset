import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "List and work with Products.",
};

export {ProductCreateForm as default, ProductCreateForm} from '@/components/products/product-create-form';
