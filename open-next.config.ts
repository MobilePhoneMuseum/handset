import {defineCloudflareConfig} from "@opennextjs/cloudflare";

// Default config: no ISR/revalidation is used, so no incremental cache is needed.
export default {
    ...defineCloudflareConfig(),
    // Skip `npm run build`'s codegen step: the generated types in types/gql are committed,
    // and regenerating them needs a Directus admin token that deploy builds shouldn't have.
    buildCommand: "npx next build",
};
