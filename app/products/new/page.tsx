'use client';

import React from 'react';
import Link from 'next/link';
import {HugeiconsIcon} from '@hugeicons/react';
import {ArrowLeft01Icon, BoxIcon,} from '@hugeicons/core-free-icons';

import PageHeadbar from '@/components/page-headbar';
import {Button} from '@/components/ui/button';
import {ProductCreateForm} from '@/components/products/product-create-form';

export default function NewProductPage() {
    return (
        <div className="space-y-6 pb-12">
            <PageHeadbar
                title="New Product"
                icon={<HugeiconsIcon icon={BoxIcon}/>}
            >
                <div className="flex items-center gap-2">
                    <Link href="/products">
                        <Button variant="outline" size="sm" className="gap-1.5">
                            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4"/>
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </PageHeadbar>

            <div className="px-2">
                <ProductCreateForm/>
            </div>
        </div>
    );
}
