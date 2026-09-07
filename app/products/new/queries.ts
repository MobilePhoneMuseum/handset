import {gql} from '@apollo/client';

export const SEARCH_MODELS = gql`
    query SearchModels($search: String, $limit: Int, $page: Int, $filter: model_filter) {
        model(search: $search, limit: $limit, page: $page, filter: $filter, sort: ["name"]) {
            id
            name
            display_name
            slug
            codename
            release_year
            weight
            brand_id {
                id
                name
            }
            form_factor_id {
                id
                name
            }
        }
        model_aggregated(search: $search, filter: $filter) {
            count {
                id
            }
        }
    }
`;

export const SEARCH_DONORS = gql`
    query SearchDonors($search: String, $limit: Int, $page: Int, $filter: donor_filter) {
        donor(search: $search, limit: $limit, page: $page, filter: $filter, sort: ["name"]) {
            id
            name
            slug
            linkedin_url
            description
        }
        donor_aggregated(search: $search, filter: $filter) {
            count {
                id
            }
        }
    }
`;

export const SEARCH_BRANDS = gql`
    query SearchBrands($search: String, $limit: Int, $filter: brand_filter) {
        brand(search: $search, limit: $limit, filter: $filter, sort: ["name"]) {
            id
            name
        }
    }
`;

export const SEARCH_FORM_FACTORS = gql`
    query SearchFormFactors($search: String, $limit: Int, $filter: form_factor_filter) {
        form_factor(search: $search, limit: $limit, filter: $filter, sort: ["name"]) {
            id
            name
            slug
        }
    }
`;

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($data: create_product_input!) {
        create_product_item(data: $data) {
            id
            imei
            description
            note
            status
            image_front {
                id
            }
            model_id {
                id
                name
                display_name
                slug
                brand_id {
                    id
                    name
                }
            }
            donor_id {
                id
                name
                slug
            }
        }
    }
`;

export const CREATE_MODEL = gql`
    mutation CreateModel($data: create_model_input!) {
        create_model_item(data: $data) {
            id
            name
            display_name
            slug
            codename
            release_year
            release_month
            release_day
            description
            weight
            status
            brand_id {
                id
                name
            }
            form_factor_id {
                id
                name
            }
        }
    }
`;

export const CREATE_DONOR = gql`
    mutation CreateDonor($data: create_donor_input!) {
        create_donor_item(data: $data) {
            id
            name
            slug
            linkedin_url
            description
            status
        }
    }
`;
