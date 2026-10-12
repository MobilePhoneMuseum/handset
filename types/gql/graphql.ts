 
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

export type Boolean_Filter_Operators = {
    _eq?: boolean | null | undefined;
    _neq?: boolean | null | undefined;
    _nnull?: boolean | null | undefined;
    _null?: boolean | null | undefined;
};

export type Brand_Filter = {
    _and?: Array<Brand_Filter | null | undefined> | null | undefined;
    _or?: Array<Brand_Filter | null | undefined> | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    slug?: String_Filter_Operators | null | undefined;
    sort?: Number_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
};

export type Count_Function_Filter_Operators = {
    count?: Number_Filter_Operators | null | undefined;
};

export type Create_Brand_Input = {
    id?: string | number | null | undefined;
    name?: string | null | undefined;
    slug?: string | null | undefined;
    sort?: number | null | undefined;
    status?: string | null | undefined;
};

export type Create_Directus_Files_Input = {
    charset?: string | null | undefined;
    description?: string | null | undefined;
    duration?: number | null | undefined;
    embed?: string | null | undefined;
    filename_disk?: string | null | undefined;
    filename_download: string;
    filesize?: unknown;
    folder?: Create_Directus_Folders_Input | null | undefined;
    height?: number | null | undefined;
    id?: string | number | null | undefined;
    location?: string | null | undefined;
    metadata?: unknown;
    model?: Array<Create_Model_Directus_Files_Input | null | undefined> | null | undefined;
    modified_by?: Create_Directus_Users_Input | null | undefined;
    modified_on?: unknown;
    storage: string;
    tags?: unknown;
    title?: string | null | undefined;
    type?: string | null | undefined;
    uploaded_by?: Create_Directus_Users_Input | null | undefined;
    uploaded_on?: unknown;
    width?: number | null | undefined;
};

export type Create_Directus_Folders_Input = {
    id?: string | number | null | undefined;
    name: string;
    parent?: Create_Directus_Folders_Input | null | undefined;
};

export type Create_Directus_Roles_Input = {
    admin_access: boolean;
    app_access?: boolean | null | undefined;
    description?: string | null | undefined;
    enforce_tfa: boolean;
    icon?: string | null | undefined;
    id?: string | number | null | undefined;
    ip_access?: Array<string | null | undefined> | null | undefined;
    name: string;
    users?: Array<Create_Directus_Users_Input | null | undefined> | null | undefined;
};

export type Create_Directus_Users_Input = {
    appearance?: string | null | undefined;
    auth_data?: unknown;
    avatar?: Create_Directus_Files_Input | null | undefined;
    description?: string | null | undefined;
    email?: string | null | undefined;
    email_notifications?: boolean | null | undefined;
    external_identifier?: string | null | undefined;
    first_name?: string | null | undefined;
    id?: string | number | null | undefined;
    language?: string | null | undefined;
    last_access?: unknown;
    last_name?: string | null | undefined;
    last_page?: string | null | undefined;
    location?: string | null | undefined;
    password?: unknown;
    provider?: string | null | undefined;
    role?: Create_Directus_Roles_Input | null | undefined;
    status?: string | null | undefined;
    tags?: unknown;
    tfa_secret?: unknown;
    theme_dark?: string | null | undefined;
    theme_dark_overrides?: unknown;
    theme_light?: string | null | undefined;
    theme_light_overrides?: unknown;
    title?: string | null | undefined;
    token?: unknown;
};

export type Create_Donor_Input = {
    description?: string | null | undefined;
    id?: string | number | null | undefined;
    linkedin_url?: string | null | undefined;
    name?: string | null | undefined;
    slug?: string | null | undefined;
    sort?: number | null | undefined;
    status?: string | null | undefined;
};

export type Create_Form_Factor_Input = {
    description?: string | null | undefined;
    id?: string | number | null | undefined;
    name?: string | null | undefined;
    slug?: string | null | undefined;
    sort?: number | null | undefined;
    status?: string | null | undefined;
};

export type Create_List_Input = {
    created_on?: unknown;
    id?: string | number | null | undefined;
    image?: Create_Directus_Files_Input | null | undefined;
    model?: Array<Create_Model_List_Input | null | undefined> | null | undefined;
    name: string;
    sort?: number | null | undefined;
    status?: string | null | undefined;
};

export type Create_Model_Directus_Files_Input = {
    directus_files_id?: Create_Directus_Files_Input | null | undefined;
    id?: string | number | null | undefined;
    model_id?: Create_Model_Input | null | undefined;
};

export type Create_Model_Input = {
    brand_id?: Create_Brand_Input | null | undefined;
    /** The Codename of the Model. This is NOT necessarily the same as the model name / number - for example, a Nexus 5 is "grouper". */
    codename?: string | null | undefined;
    collection?: Array<Create_Model_List_Input | null | undefined> | null | undefined;
    /** A reasonably-lengthed writeup that goes on the website, with a brief history of the device and its quirks / features. */
    description?: string | null | undefined;
    /** Generated from Brand and Model name */
    display_name?: string | null | undefined;
    docs?: Array<Create_Model_Directus_Files_Input | null | undefined> | null | undefined;
    form_factor_id?: Create_Form_Factor_Input | null | undefined;
    /** Hide on Homepage */
    hideonhp?: boolean | null | undefined;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id?: string | number | null | undefined;
    image?: Create_Directus_Files_Input | null | undefined;
    model?: Array<Create_Related_Model_Input | null | undefined> | null | undefined;
    /** The Model Name. For example, "Fairphone 4" */
    name?: string | null | undefined;
    related_phones?: Array<Create_Related_Model_Input | null | undefined> | null | undefined;
    /** The day this model was announced. Note: Where possible, use the date of announcement, not the day of first order / release. */
    release_day?: string | null | undefined;
    /** The month this model was released. */
    release_month?: string | null | undefined;
    /** The year this product was announced. */
    release_year?: string | null | undefined;
    /** The short-form name used in URLs. */
    slug: string;
    /** The visibility of this model. */
    status?: string | null | undefined;
    video?: string | null | undefined;
    video2?: string | null | undefined;
    video3?: string | null | undefined;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: number | null | undefined;
};

export type Create_Model_List_Input = {
    id?: string | number | null | undefined;
    list_id?: Create_List_Input | null | undefined;
    model_id?: Create_Model_Input | null | undefined;
};

export type Create_Product_Input = {
    created_by?: Create_Directus_Users_Input | null | undefined;
    created_on?: unknown;
    /** Describe what makes this Product unique, for example if we've got two of them, you might say something like "black, good condition, scuff on corner" or "prototype unit, has KVM1 embossed on face" */
    description?: string | null | undefined;
    donor_id?: Create_Donor_Input | null | undefined;
    id?: string | number | null | undefined;
    image_back?: Create_Directus_Files_Input | null | undefined;
    image_camera?: Create_Directus_Files_Input | null | undefined;
    image_detail?: Create_Directus_Files_Input | null | undefined;
    image_detail_2?: Create_Directus_Files_Input | null | undefined;
    image_front?: Create_Directus_Files_Input | null | undefined;
    image_open?: Create_Directus_Files_Input | null | undefined;
    image_reference?: Create_Directus_Files_Input | null | undefined;
    image_side?: Create_Directus_Files_Input | null | undefined;
    /** The IMEI of this Product. If the Product does not have an IMEI (for example, because it's not GSM), use the serial number. If multiple IMEIs are present, prefer IMEI1. */
    imei?: string | null | undefined;
    model_id?: Create_Model_Input | null | undefined;
    /** Notes for internal use. For example, you might want to mention when this specific Product was donated to the Museum. */
    note?: string | null | undefined;
    sort?: number | null | undefined;
    status?: string | null | undefined;
};

export type Create_Related_Model_Input = {
    id?: string | number | null | undefined;
    model_id?: Create_Model_Input | null | undefined;
    related_id?: Create_Model_Input | null | undefined;
};

export type Date_Filter_Operators = {
    _between?: Array<unknown> | null | undefined;
    _eq?: string | null | undefined;
    _gt?: string | null | undefined;
    _gte?: string | null | undefined;
    _in?: Array<string | null | undefined> | null | undefined;
    _lt?: string | null | undefined;
    _lte?: string | null | undefined;
    _nbetween?: Array<unknown> | null | undefined;
    _neq?: string | null | undefined;
    _nin?: Array<string | null | undefined> | null | undefined;
    _nnull?: boolean | null | undefined;
    _null?: boolean | null | undefined;
};

export type Datetime_Function_Filter_Operators = {
    day?: Number_Filter_Operators | null | undefined;
    hour?: Number_Filter_Operators | null | undefined;
    minute?: Number_Filter_Operators | null | undefined;
    month?: Number_Filter_Operators | null | undefined;
    second?: Number_Filter_Operators | null | undefined;
    week?: Number_Filter_Operators | null | undefined;
    weekday?: Number_Filter_Operators | null | undefined;
    year?: Number_Filter_Operators | null | undefined;
};

export type Directus_Files_Filter = {
    _and?: Array<Directus_Files_Filter | null | undefined> | null | undefined;
    _or?: Array<Directus_Files_Filter | null | undefined> | null | undefined;
    charset?: String_Filter_Operators | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    duration?: Number_Filter_Operators | null | undefined;
    embed?: String_Filter_Operators | null | undefined;
    filename_disk?: String_Filter_Operators | null | undefined;
    filename_download?: String_Filter_Operators | null | undefined;
    filesize?: Number_Filter_Operators | null | undefined;
    folder?: Directus_Folders_Filter | null | undefined;
    height?: Number_Filter_Operators | null | undefined;
    id?: String_Filter_Operators | null | undefined;
    location?: String_Filter_Operators | null | undefined;
    metadata?: String_Filter_Operators | null | undefined;
    metadata_func?: Count_Function_Filter_Operators | null | undefined;
    model?: Model_Directus_Files_Filter | null | undefined;
    modified_by?: Directus_Users_Filter | null | undefined;
    modified_on?: Date_Filter_Operators | null | undefined;
    modified_on_func?: Datetime_Function_Filter_Operators | null | undefined;
    storage?: String_Filter_Operators | null | undefined;
    tags?: String_Filter_Operators | null | undefined;
    tags_func?: Count_Function_Filter_Operators | null | undefined;
    title?: String_Filter_Operators | null | undefined;
    type?: String_Filter_Operators | null | undefined;
    uploaded_by?: Directus_Users_Filter | null | undefined;
    uploaded_on?: Date_Filter_Operators | null | undefined;
    uploaded_on_func?: Datetime_Function_Filter_Operators | null | undefined;
    width?: Number_Filter_Operators | null | undefined;
};

export type Directus_Folders_Filter = {
    _and?: Array<Directus_Folders_Filter | null | undefined> | null | undefined;
    _or?: Array<Directus_Folders_Filter | null | undefined> | null | undefined;
    id?: String_Filter_Operators | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    parent?: Directus_Folders_Filter | null | undefined;
};

export type Directus_Roles_Filter = {
    _and?: Array<Directus_Roles_Filter | null | undefined> | null | undefined;
    _or?: Array<Directus_Roles_Filter | null | undefined> | null | undefined;
    admin_access?: Boolean_Filter_Operators | null | undefined;
    app_access?: Boolean_Filter_Operators | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    enforce_tfa?: Boolean_Filter_Operators | null | undefined;
    icon?: String_Filter_Operators | null | undefined;
    id?: String_Filter_Operators | null | undefined;
    ip_access?: String_Filter_Operators | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    users?: Directus_Users_Filter | null | undefined;
    users_func?: Count_Function_Filter_Operators | null | undefined;
};

export type Directus_Users_Filter = {
    _and?: Array<Directus_Users_Filter | null | undefined> | null | undefined;
    _or?: Array<Directus_Users_Filter | null | undefined> | null | undefined;
    appearance?: String_Filter_Operators | null | undefined;
    auth_data?: String_Filter_Operators | null | undefined;
    auth_data_func?: Count_Function_Filter_Operators | null | undefined;
    avatar?: Directus_Files_Filter | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    email?: String_Filter_Operators | null | undefined;
    email_notifications?: Boolean_Filter_Operators | null | undefined;
    external_identifier?: String_Filter_Operators | null | undefined;
    first_name?: String_Filter_Operators | null | undefined;
    id?: String_Filter_Operators | null | undefined;
    language?: String_Filter_Operators | null | undefined;
    last_access?: Date_Filter_Operators | null | undefined;
    last_access_func?: Datetime_Function_Filter_Operators | null | undefined;
    last_name?: String_Filter_Operators | null | undefined;
    last_page?: String_Filter_Operators | null | undefined;
    location?: String_Filter_Operators | null | undefined;
    password?: Hash_Filter_Operators | null | undefined;
    provider?: String_Filter_Operators | null | undefined;
    role?: Directus_Roles_Filter | null | undefined;
    status?: String_Filter_Operators | null | undefined;
    tags?: String_Filter_Operators | null | undefined;
    tags_func?: Count_Function_Filter_Operators | null | undefined;
    tfa_secret?: Hash_Filter_Operators | null | undefined;
    theme_dark?: String_Filter_Operators | null | undefined;
    theme_dark_overrides?: String_Filter_Operators | null | undefined;
    theme_dark_overrides_func?: Count_Function_Filter_Operators | null | undefined;
    theme_light?: String_Filter_Operators | null | undefined;
    theme_light_overrides?: String_Filter_Operators | null | undefined;
    theme_light_overrides_func?: Count_Function_Filter_Operators | null | undefined;
    title?: String_Filter_Operators | null | undefined;
    token?: Hash_Filter_Operators | null | undefined;
};

export type Donor_Filter = {
    _and?: Array<Donor_Filter | null | undefined> | null | undefined;
    _or?: Array<Donor_Filter | null | undefined> | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    linkedin_url?: String_Filter_Operators | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    slug?: String_Filter_Operators | null | undefined;
    sort?: Number_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
};

export type Form_Factor_Filter = {
    _and?: Array<Form_Factor_Filter | null | undefined> | null | undefined;
    _or?: Array<Form_Factor_Filter | null | undefined> | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    slug?: String_Filter_Operators | null | undefined;
    sort?: Number_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
};

export type Hash_Filter_Operators = {
    _empty?: boolean | null | undefined;
    _nempty?: boolean | null | undefined;
    _nnull?: boolean | null | undefined;
    _null?: boolean | null | undefined;
};

export type List_Filter = {
    _and?: Array<List_Filter | null | undefined> | null | undefined;
    _or?: Array<List_Filter | null | undefined> | null | undefined;
    created_on?: Date_Filter_Operators | null | undefined;
    created_on_func?: Datetime_Function_Filter_Operators | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    image?: Directus_Files_Filter | null | undefined;
    model?: Model_List_Filter | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    sort?: Number_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
};

export type Model_Directus_Files_Filter = {
    _and?: Array<Model_Directus_Files_Filter | null | undefined> | null | undefined;
    _or?: Array<Model_Directus_Files_Filter | null | undefined> | null | undefined;
    directus_files_id?: Directus_Files_Filter | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    model_id?: Model_Filter | null | undefined;
};

export type Model_Filter = {
    _and?: Array<Model_Filter | null | undefined> | null | undefined;
    _or?: Array<Model_Filter | null | undefined> | null | undefined;
    brand_id?: Brand_Filter | null | undefined;
    codename?: String_Filter_Operators | null | undefined;
    collection?: Model_List_Filter | null | undefined;
    collection_func?: Count_Function_Filter_Operators | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    display_name?: String_Filter_Operators | null | undefined;
    docs?: Model_Directus_Files_Filter | null | undefined;
    docs_func?: Count_Function_Filter_Operators | null | undefined;
    form_factor_id?: Form_Factor_Filter | null | undefined;
    hideonhp?: Boolean_Filter_Operators | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    image?: Directus_Files_Filter | null | undefined;
    model?: Related_Model_Filter | null | undefined;
    name?: String_Filter_Operators | null | undefined;
    related_phones?: Related_Model_Filter | null | undefined;
    related_phones_func?: Count_Function_Filter_Operators | null | undefined;
    release_day?: String_Filter_Operators | null | undefined;
    release_month?: String_Filter_Operators | null | undefined;
    release_year?: String_Filter_Operators | null | undefined;
    slug?: String_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
    video?: String_Filter_Operators | null | undefined;
    video2?: String_Filter_Operators | null | undefined;
    video3?: String_Filter_Operators | null | undefined;
    weight?: Number_Filter_Operators | null | undefined;
};

export type Model_List_Filter = {
    _and?: Array<Model_List_Filter | null | undefined> | null | undefined;
    _or?: Array<Model_List_Filter | null | undefined> | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    list_id?: List_Filter | null | undefined;
    model_id?: Model_Filter | null | undefined;
};

export type Number_Filter_Operators = {
    _between?: Array<unknown> | null | undefined;
    _eq?: unknown;
    _gt?: unknown;
    _gte?: unknown;
    _in?: Array<unknown> | null | undefined;
    _lt?: unknown;
    _lte?: unknown;
    _nbetween?: Array<unknown> | null | undefined;
    _neq?: unknown;
    _nin?: Array<unknown> | null | undefined;
    _nnull?: boolean | null | undefined;
    _null?: boolean | null | undefined;
};

export type Product_Filter = {
    _and?: Array<Product_Filter | null | undefined> | null | undefined;
    _or?: Array<Product_Filter | null | undefined> | null | undefined;
    created_by?: Directus_Users_Filter | null | undefined;
    created_on?: Date_Filter_Operators | null | undefined;
    created_on_func?: Datetime_Function_Filter_Operators | null | undefined;
    description?: String_Filter_Operators | null | undefined;
    donor_id?: Donor_Filter | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    image_back?: Directus_Files_Filter | null | undefined;
    image_camera?: Directus_Files_Filter | null | undefined;
    image_detail?: Directus_Files_Filter | null | undefined;
    image_detail_2?: Directus_Files_Filter | null | undefined;
    image_front?: Directus_Files_Filter | null | undefined;
    image_open?: Directus_Files_Filter | null | undefined;
    image_reference?: Directus_Files_Filter | null | undefined;
    image_side?: Directus_Files_Filter | null | undefined;
    imei?: String_Filter_Operators | null | undefined;
    model_id?: Model_Filter | null | undefined;
    note?: String_Filter_Operators | null | undefined;
    sort?: Number_Filter_Operators | null | undefined;
    status?: String_Filter_Operators | null | undefined;
};

export type Related_Model_Filter = {
    _and?: Array<Related_Model_Filter | null | undefined> | null | undefined;
    _or?: Array<Related_Model_Filter | null | undefined> | null | undefined;
    id?: Number_Filter_Operators | null | undefined;
    model_id?: Model_Filter | null | undefined;
    related_id?: Model_Filter | null | undefined;
};

export type String_Filter_Operators = {
    _contains?: string | null | undefined;
    _empty?: boolean | null | undefined;
    _ends_with?: string | null | undefined;
    _eq?: string | null | undefined;
    _icontains?: string | null | undefined;
    _iends_with?: string | null | undefined;
    _in?: Array<string | null | undefined> | null | undefined;
    _istarts_with?: string | null | undefined;
    _ncontains?: string | null | undefined;
    _nempty?: boolean | null | undefined;
    _nends_with?: string | null | undefined;
    _neq?: string | null | undefined;
    _niends_with?: string | null | undefined;
    _nin?: Array<string | null | undefined> | null | undefined;
    _nistarts_with?: string | null | undefined;
    _nnull?: boolean | null | undefined;
    _nstarts_with?: string | null | undefined;
    _null?: boolean | null | undefined;
    _starts_with?: string | null | undefined;
};

export type SearchModelsQueryVariables = Exact<{
    search?: string | null | undefined;
    limit?: number | null | undefined;
    page?: number | null | undefined;
    filter?: Model_Filter | null | undefined;
}>;


export type SearchModelsQuery = {
    model: Array<{
        __typename: 'model',
        id: string,
        name: string | null,
        display_name: string | null,
        slug: string,
        codename: string | null,
        release_year: string | null,
        weight: number | null,
        brand_id: { __typename: 'brand', id: string, name: string | null } | null,
        form_factor_id: { __typename: 'form_factor', id: string, name: string | null } | null
    }>,
    model_aggregated: Array<{
        __typename: 'model_aggregated',
        count: { __typename: 'model_aggregated_count', id: number | null } | null
    }>
};

export type SearchDonorsQueryVariables = Exact<{
    search?: string | null | undefined;
    limit?: number | null | undefined;
    page?: number | null | undefined;
    filter?: Donor_Filter | null | undefined;
}>;


export type SearchDonorsQuery = {
    donor: Array<{
        __typename: 'donor',
        id: string,
        name: string | null,
        slug: string | null,
        linkedin_url: string | null,
        description: string | null
    }>,
    donor_aggregated: Array<{
        __typename: 'donor_aggregated',
        count: { __typename: 'donor_aggregated_count', id: number | null } | null
    }>
};

export type SearchBrandsQueryVariables = Exact<{
    search?: string | null | undefined;
    limit?: number | null | undefined;
    filter?: Brand_Filter | null | undefined;
}>;


export type SearchBrandsQuery = { brand: Array<{ __typename: 'brand', id: string, name: string | null }> };

export type SearchFormFactorsQueryVariables = Exact<{
    search?: string | null | undefined;
    limit?: number | null | undefined;
    filter?: Form_Factor_Filter | null | undefined;
}>;


export type SearchFormFactorsQuery = {
    form_factor: Array<{ __typename: 'form_factor', id: string, name: string | null, slug: string | null }>
};

export type CreateProductMutationVariables = Exact<{
    data: Create_Product_Input;
}>;


export type CreateProductMutation = {
    create_product_item: {
        __typename: 'product',
        id: string,
        imei: string | null,
        description: string | null,
        note: string | null,
        status: string | null,
        image_front: { __typename: 'directus_files', id: string } | null,
        model_id: {
            __typename: 'model',
            id: string,
            name: string | null,
            display_name: string | null,
            slug: string,
            brand_id: { __typename: 'brand', id: string, name: string | null } | null
        } | null,
        donor_id: { __typename: 'donor', id: string, name: string | null, slug: string | null } | null
    } | null
};

export type CreateModelMutationVariables = Exact<{
    data: Create_Model_Input;
}>;


export type CreateModelMutation = {
    create_model_item: {
        __typename: 'model',
        id: string,
        name: string | null,
        display_name: string | null,
        slug: string,
        codename: string | null,
        release_year: string | null,
        release_month: string | null,
        release_day: string | null,
        description: string | null,
        weight: number | null,
        status: string | null,
        brand_id: { __typename: 'brand', id: string, name: string | null } | null,
        form_factor_id: { __typename: 'form_factor', id: string, name: string | null } | null
    } | null
};

export type CreateDonorMutationVariables = Exact<{
    data: Create_Donor_Input;
}>;


export type CreateDonorMutation = {
    create_donor_item: {
        __typename: 'donor',
        id: string,
        name: string | null,
        slug: string | null,
        linkedin_url: string | null,
        description: string | null,
        status: string | null
    } | null
};

export type QueryProductsQueryVariables = Exact<{
    limit?: number | null | undefined;
    page?: number | null | undefined;
    search?: string | null | undefined;
    filter?: Product_Filter | null | undefined;
    sort?: Array<string | null | undefined> | string | null | undefined;
}>;


export type QueryProductsQuery = {
    product: Array<{
        __typename: 'product',
        id: string,
        status: string | null,
        imei: string | null,
        description: string | null,
        model_id: {
            __typename: 'model',
            id: string,
            name: string | null,
            display_name: string | null,
            slug: string,
            brand_id: { __typename: 'brand', id: string, name: string | null } | null
        } | null
    }>,
    product_aggregated: Array<{
        __typename: 'product_aggregated',
        count: { __typename: 'product_aggregated_count', id: number | null } | null
    }>
};


export const SearchModelsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "SearchModels"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "model_filter"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet", "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "model"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "limit"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "page"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "sort"},
                    "value": {"kind": "ListValue", "values": [{"kind": "StringValue", "value": "name", "block": false}]}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "display_name"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "slug"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "codename"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "release_year"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "weight"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "brand_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }]
                        }
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "form_factor_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }]
                        }
                    }]
                }
            }, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "model_aggregated"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "count"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SearchModelsQuery, SearchModelsQueryVariables>;
export const SearchDonorsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "SearchDonors"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "donor_filter"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet", "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "donor"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "limit"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "page"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "sort"},
                    "value": {"kind": "ListValue", "values": [{"kind": "StringValue", "value": "name", "block": false}]}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "slug"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "linkedin_url"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}]
                }
            }, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "donor_aggregated"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "count"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SearchDonorsQuery, SearchDonorsQueryVariables>;
export const SearchBrandsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "SearchBrands"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "brand_filter"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "brand"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "limit"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "sort"},
                    "value": {"kind": "ListValue", "values": [{"kind": "StringValue", "value": "name", "block": false}]}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SearchBrandsQuery, SearchBrandsQueryVariables>;
export const SearchFormFactorsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "SearchFormFactors"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "form_factor_filter"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "form_factor"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "limit"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "sort"},
                    "value": {"kind": "ListValue", "values": [{"kind": "StringValue", "value": "name", "block": false}]}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "slug"}}]
                }
            }]
        }
    }]
} as unknown as DocumentNode<SearchFormFactorsQuery, SearchFormFactorsQueryVariables>;
export const CreateProductDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {"kind": "Name", "value": "CreateProduct"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
            "type": {
                "kind": "NonNullType",
                "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "create_product_input"}}
            }
        }],
        "selectionSet": {
            "kind": "SelectionSet", "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "create_product_item"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "data"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "imei"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "note"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "image_front"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}]
                        }
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "model_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }, {"kind": "Field", "name": {"kind": "Name", "value": "display_name"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "slug"}
                            }, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "brand_id"},
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [{
                                        "kind": "Field",
                                        "name": {"kind": "Name", "value": "id"}
                                    }, {"kind": "Field", "name": {"kind": "Name", "value": "name"}}]
                                }
                            }]
                        }
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "donor_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }, {"kind": "Field", "name": {"kind": "Name", "value": "slug"}}]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const CreateModelDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {"kind": "Name", "value": "CreateModel"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
            "type": {
                "kind": "NonNullType",
                "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "create_model_input"}}
            }
        }],
        "selectionSet": {
            "kind": "SelectionSet", "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "create_model_item"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "data"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "display_name"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "slug"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "codename"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "release_year"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "release_month"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "release_day"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "weight"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "status"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "brand_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }]
                        }
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "form_factor_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateModelMutation, CreateModelMutationVariables>;
export const CreateDonorDocument = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "mutation",
        "name": {"kind": "Name", "value": "CreateDonor"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}},
            "type": {
                "kind": "NonNullType",
                "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "create_donor_input"}}
            }
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "create_donor_item"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "data"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "data"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "slug"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "linkedin_url"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "description"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "status"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<CreateDonorMutation, CreateDonorMutationVariables>;
export const QueryProductsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "QueryProducts"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "product_filter"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "sort"}},
            "type": {"kind": "ListType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}}
        }],
        "selectionSet": {
            "kind": "SelectionSet", "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "product"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "limit"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "page"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "sort"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "sort"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "status"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "imei"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "description"}
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "model_id"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"}
                            }, {"kind": "Field", "name": {"kind": "Name", "value": "display_name"}}, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "brand_id"},
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [{
                                        "kind": "Field",
                                        "name": {"kind": "Name", "value": "id"}
                                    }, {"kind": "Field", "name": {"kind": "Name", "value": "name"}}]
                                }
                            }, {"kind": "Field", "name": {"kind": "Name", "value": "slug"}}]
                        }
                    }]
                }
            }, {
                "kind": "Field",
                "name": {"kind": "Name", "value": "product_aggregated"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "search"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "filter"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "count"},
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<QueryProductsQuery, QueryProductsQueryVariables>;