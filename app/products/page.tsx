"use client"
import {columns} from "@/app/products/columns";
import {DataTable} from "@/components/data-table";
import {useSuspenseQuery} from "@apollo/client/react";
import PageHeadbar from "@/components/page-headbar";
import {Button} from "@/components/ui/button";
import {HugeiconsIcon} from "@hugeicons/react";
import {BoxIcon, WandSparkles} from "@hugeicons/core-free-icons";
import {gql} from "@/types/gql";

const GET_PRODUCTS = gql(`
    query QueryProducts {
        product {
            id
            status
            imei
            description
            model: model_id {
                id
                name
                display_name
            }
        }
    }
`);

export default function Page() {
    const {data} = useSuspenseQuery(GET_PRODUCTS);
    return (
        <>
            <PageHeadbar title="Library Products" icon={<HugeiconsIcon icon={BoxIcon}/>}>
                    <span className="ml-3">
                              <Button>
                                  <HugeiconsIcon icon={WandSparkles}/>
                                  Create New
                              </Button>
                    </span>
            </PageHeadbar>
            {/*<Suspense fallback={<CardsSkeleton />}>*/}
            {/*    <CardTable />*/}
            {/*</Suspense>*/}
            <div>
                <DataTable columns={columns} data={data.product}/>
            </div>
        </>

        // <DataTable data={data} />
    )
}

// export default async function Page() {
//     const products = await getProducts();
//     return (
//         <div className="container mx-auto py-10">
//             <DataTable columns={columns} data={products.product} />
//         </div>
//         // <DataTable data={data} />
//     )
// }