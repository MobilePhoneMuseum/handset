/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type {GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig} from 'graphql';
import type {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type QueryProductsQueryVariables = Exact<{
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    filter?: InputMaybe<Product_Filter>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type QueryProductsQuery = {
    product: Array<{
        __typename: 'product';
        id: string;
        status: string | null;
        imei: string | null;
        description: string | null;
        model: {
            __typename: 'model';
            id: string;
            name: string | null;
            display_name: string | null;
            slug: string;
            brand: { __typename: 'brand'; name: string | null } | null;
        } | null;
    }>;
    product_aggregated: Array<{
        __typename: 'product_aggregated';
        count: {
            __typename: 'product_aggregated_count';
            id: number | null;
        } | null;
    }>;
};


export const QueryProductsDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "QueryProducts"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "limit"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}},
            "directives": []
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "page"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "Int"}},
            "directives": []
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "search"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}},
            "directives": []
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "filter"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "product_filter"}},
            "directives": []
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "sort"}},
            "type": {"kind": "ListType", "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}},
            "directives": []
        }],
        "directives": [],
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
                "directives": [],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "id"},
                        "arguments": [],
                        "directives": []
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "status"},
                        "arguments": [],
                        "directives": []
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "imei"},
                        "arguments": [],
                        "directives": []
                    }, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "description"},
                        "arguments": [],
                        "directives": []
                    }, {
                        "kind": "Field",
                        "alias": {"kind": "Name", "value": "model"},
                        "name": {"kind": "Name", "value": "model_id"},
                        "arguments": [],
                        "directives": [],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "id"},
                                "arguments": [],
                                "directives": []
                            }, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "name"},
                                "arguments": [],
                                "directives": []
                            }, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "display_name"},
                                "arguments": [],
                                "directives": []
                            }, {
                                "kind": "Field",
                                "alias": {"kind": "Name", "value": "brand"},
                                "name": {"kind": "Name", "value": "brand_id"},
                                "arguments": [],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [{
                                        "kind": "Field",
                                        "name": {"kind": "Name", "value": "name"},
                                        "arguments": [],
                                        "directives": []
                                    }]
                                }
                            }, {
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "slug"},
                                "arguments": [],
                                "directives": []
                            }]
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
                "directives": [],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "count"},
                        "arguments": [],
                        "directives": [],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [{
                                "kind": "Field",
                                "name": {"kind": "Name", "value": "id"},
                                "arguments": [],
                                "directives": []
                            }]
                        }
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<QueryProductsQuery, QueryProductsQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
    /** ISO8601 Date values */
    Date: { input: unknown; output: unknown; }
    /** BigInt value */
    GraphQLBigInt: { input: unknown; output: unknown; }
    /** A Float or a String */
    GraphQLStringOrFloat: { input: unknown; output: unknown; }
    /** Hashed string values */
    Hash: { input: unknown; output: unknown; }
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: { input: unknown; output: unknown; }
};

export enum EventEnum {
    Create = 'create',
    Delete = 'delete',
    Update = 'update'
}

export type Mutation = {
    __typename: 'Mutation';
    create_blog_item?: Maybe<Blog>;
    create_blog_items: Array<Blog>;
    create_blog_like_item?: Maybe<Blog_Like>;
    create_blog_like_items: Array<Blog_Like>;
    create_brand_item?: Maybe<Brand>;
    create_brand_items: Array<Brand>;
    create_build_log_item?: Maybe<Build_Log>;
    create_build_log_items: Array<Build_Log>;
    create_contact_form_item?: Maybe<Contact_Form>;
    create_contact_form_items: Array<Contact_Form>;
    create_donor_item?: Maybe<Donor>;
    create_donor_items: Array<Donor>;
    create_educational_docs_item?: Maybe<Educational_Docs>;
    create_educational_docs_items: Array<Educational_Docs>;
    create_form_factor_item?: Maybe<Form_Factor>;
    create_form_factor_items: Array<Form_Factor>;
    create_git_pull_item?: Maybe<Git_Pull>;
    create_git_pull_items: Array<Git_Pull>;
    create_homepage_slides_item?: Maybe<Homepage_Slides>;
    create_homepage_slides_items: Array<Homepage_Slides>;
    create_import_raw_item?: Maybe<Import_Raw>;
    create_import_raw_items: Array<Import_Raw>;
    create_import_update_item?: Maybe<Import_Update>;
    create_import_update_items: Array<Import_Update>;
    create_list_item?: Maybe<List>;
    create_list_items: Array<List>;
    create_model_directus_files_item?: Maybe<Model_Directus_Files>;
    create_model_directus_files_items: Array<Model_Directus_Files>;
    create_model_files_item?: Maybe<Model_Files>;
    create_model_files_items: Array<Model_Files>;
    create_model_item?: Maybe<Model>;
    create_model_items: Array<Model>;
    create_model_like_item?: Maybe<Model_Like>;
    create_model_like_items: Array<Model_Like>;
    create_model_list_item?: Maybe<Model_List>;
    create_model_list_items: Array<Model_List>;
    create_model_tag_item?: Maybe<Model_Tag>;
    create_model_tag_items: Array<Model_Tag>;
    create_most_wanted_item?: Maybe<Most_Wanted>;
    create_most_wanted_items: Array<Most_Wanted>;
    create_page_item?: Maybe<Page>;
    create_page_items: Array<Page>;
    create_product_item?: Maybe<Product>;
    create_product_items: Array<Product>;
    create_related_model_item?: Maybe<Related_Model>;
    create_related_model_items: Array<Related_Model>;
    create_release_item?: Maybe<Release>;
    create_release_items: Array<Release>;
    create_reset_build_process_item?: Maybe<Reset_Build_Process>;
    create_reset_build_process_items: Array<Reset_Build_Process>;
    create_resources_item?: Maybe<Resources>;
    create_resources_items: Array<Resources>;
    create_sponsors_item?: Maybe<Sponsors>;
    create_sponsors_items: Array<Sponsors>;
    create_team_item?: Maybe<Team>;
    create_team_items: Array<Team>;
    delete_blog_item?: Maybe<Delete_One>;
    delete_blog_items?: Maybe<Delete_Many>;
    delete_blog_like_item?: Maybe<Delete_One>;
    delete_blog_like_items?: Maybe<Delete_Many>;
    delete_brand_item?: Maybe<Delete_One>;
    delete_brand_items?: Maybe<Delete_Many>;
    delete_build_log_item?: Maybe<Delete_One>;
    delete_build_log_items?: Maybe<Delete_Many>;
    delete_contact_form_item?: Maybe<Delete_One>;
    delete_contact_form_items?: Maybe<Delete_Many>;
    delete_donor_item?: Maybe<Delete_One>;
    delete_donor_items?: Maybe<Delete_Many>;
    delete_educational_docs_item?: Maybe<Delete_One>;
    delete_educational_docs_items?: Maybe<Delete_Many>;
    delete_form_factor_item?: Maybe<Delete_One>;
    delete_form_factor_items?: Maybe<Delete_Many>;
    delete_git_pull_item?: Maybe<Delete_One>;
    delete_git_pull_items?: Maybe<Delete_Many>;
    delete_homepage_slides_item?: Maybe<Delete_One>;
    delete_homepage_slides_items?: Maybe<Delete_Many>;
    delete_import_raw_item?: Maybe<Delete_One>;
    delete_import_raw_items?: Maybe<Delete_Many>;
    delete_import_update_item?: Maybe<Delete_One>;
    delete_import_update_items?: Maybe<Delete_Many>;
    delete_list_item?: Maybe<Delete_One>;
    delete_list_items?: Maybe<Delete_Many>;
    delete_model_directus_files_item?: Maybe<Delete_One>;
    delete_model_directus_files_items?: Maybe<Delete_Many>;
    delete_model_files_item?: Maybe<Delete_One>;
    delete_model_files_items?: Maybe<Delete_Many>;
    delete_model_item?: Maybe<Delete_One>;
    delete_model_items?: Maybe<Delete_Many>;
    delete_model_like_item?: Maybe<Delete_One>;
    delete_model_like_items?: Maybe<Delete_Many>;
    delete_model_list_item?: Maybe<Delete_One>;
    delete_model_list_items?: Maybe<Delete_Many>;
    delete_model_tag_item?: Maybe<Delete_One>;
    delete_model_tag_items?: Maybe<Delete_Many>;
    delete_most_wanted_item?: Maybe<Delete_One>;
    delete_most_wanted_items?: Maybe<Delete_Many>;
    delete_page_item?: Maybe<Delete_One>;
    delete_page_items?: Maybe<Delete_Many>;
    delete_product_item?: Maybe<Delete_One>;
    delete_product_items?: Maybe<Delete_Many>;
    delete_related_model_item?: Maybe<Delete_One>;
    delete_related_model_items?: Maybe<Delete_Many>;
    delete_release_item?: Maybe<Delete_One>;
    delete_release_items?: Maybe<Delete_Many>;
    delete_reset_build_process_item?: Maybe<Delete_One>;
    delete_reset_build_process_items?: Maybe<Delete_Many>;
    delete_resources_item?: Maybe<Delete_One>;
    delete_resources_items?: Maybe<Delete_Many>;
    delete_sponsors_item?: Maybe<Delete_One>;
    delete_sponsors_items?: Maybe<Delete_Many>;
    delete_team_item?: Maybe<Delete_One>;
    delete_team_items?: Maybe<Delete_Many>;
    update_blog_batch: Array<Blog>;
    update_blog_item?: Maybe<Blog>;
    update_blog_items: Array<Blog>;
    update_blog_like_batch: Array<Blog_Like>;
    update_blog_like_item?: Maybe<Blog_Like>;
    update_blog_like_items: Array<Blog_Like>;
    update_brand_batch: Array<Brand>;
    update_brand_item?: Maybe<Brand>;
    update_brand_items: Array<Brand>;
    update_build_log_batch: Array<Build_Log>;
    update_build_log_item?: Maybe<Build_Log>;
    update_build_log_items: Array<Build_Log>;
    update_contact_form_batch: Array<Contact_Form>;
    update_contact_form_item?: Maybe<Contact_Form>;
    update_contact_form_items: Array<Contact_Form>;
    update_donor_batch: Array<Donor>;
    update_donor_item?: Maybe<Donor>;
    update_donor_items: Array<Donor>;
    update_educational_docs_batch: Array<Educational_Docs>;
    update_educational_docs_item?: Maybe<Educational_Docs>;
    update_educational_docs_items: Array<Educational_Docs>;
    update_form_factor_batch: Array<Form_Factor>;
    update_form_factor_item?: Maybe<Form_Factor>;
    update_form_factor_items: Array<Form_Factor>;
    update_git_pull_batch: Array<Git_Pull>;
    update_git_pull_item?: Maybe<Git_Pull>;
    update_git_pull_items: Array<Git_Pull>;
    update_homepage_slides_batch: Array<Homepage_Slides>;
    update_homepage_slides_item?: Maybe<Homepage_Slides>;
    update_homepage_slides_items: Array<Homepage_Slides>;
    update_import_raw_batch: Array<Import_Raw>;
    update_import_raw_item?: Maybe<Import_Raw>;
    update_import_raw_items: Array<Import_Raw>;
    update_import_update_batch: Array<Import_Update>;
    update_import_update_item?: Maybe<Import_Update>;
    update_import_update_items: Array<Import_Update>;
    update_list_batch: Array<List>;
    update_list_item?: Maybe<List>;
    update_list_items: Array<List>;
    update_model_batch: Array<Model>;
    update_model_directus_files_batch: Array<Model_Directus_Files>;
    update_model_directus_files_item?: Maybe<Model_Directus_Files>;
    update_model_directus_files_items: Array<Model_Directus_Files>;
    update_model_files_batch: Array<Model_Files>;
    update_model_files_item?: Maybe<Model_Files>;
    update_model_files_items: Array<Model_Files>;
    update_model_item?: Maybe<Model>;
    update_model_items: Array<Model>;
    update_model_like_batch: Array<Model_Like>;
    update_model_like_item?: Maybe<Model_Like>;
    update_model_like_items: Array<Model_Like>;
    update_model_list_batch: Array<Model_List>;
    update_model_list_item?: Maybe<Model_List>;
    update_model_list_items: Array<Model_List>;
    update_model_tag_batch: Array<Model_Tag>;
    update_model_tag_item?: Maybe<Model_Tag>;
    update_model_tag_items: Array<Model_Tag>;
    update_most_wanted_batch: Array<Most_Wanted>;
    update_most_wanted_item?: Maybe<Most_Wanted>;
    update_most_wanted_items: Array<Most_Wanted>;
    update_page_batch: Array<Page>;
    update_page_item?: Maybe<Page>;
    update_page_items: Array<Page>;
    update_product_batch: Array<Product>;
    update_product_item?: Maybe<Product>;
    update_product_items: Array<Product>;
    update_related_model_batch: Array<Related_Model>;
    update_related_model_item?: Maybe<Related_Model>;
    update_related_model_items: Array<Related_Model>;
    update_release_batch: Array<Release>;
    update_release_item?: Maybe<Release>;
    update_release_items: Array<Release>;
    update_reset_build_process_batch: Array<Reset_Build_Process>;
    update_reset_build_process_item?: Maybe<Reset_Build_Process>;
    update_reset_build_process_items: Array<Reset_Build_Process>;
    update_resources_batch: Array<Resources>;
    update_resources_item?: Maybe<Resources>;
    update_resources_items: Array<Resources>;
    update_sponsors_batch: Array<Sponsors>;
    update_sponsors_item?: Maybe<Sponsors>;
    update_sponsors_items: Array<Sponsors>;
    update_team_batch: Array<Team>;
    update_team_item?: Maybe<Team>;
    update_team_items: Array<Team>;
};


export type MutationCreate_Blog_ItemArgs = {
    data: Create_Blog_Input;
};


export type MutationCreate_Blog_ItemsArgs = {
    data?: InputMaybe<Array<Create_Blog_Input>>;
    filter?: InputMaybe<Blog_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Blog_Like_ItemArgs = {
    data: Create_Blog_Like_Input;
};


export type MutationCreate_Blog_Like_ItemsArgs = {
    data?: InputMaybe<Array<Create_Blog_Like_Input>>;
    filter?: InputMaybe<Blog_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Brand_ItemArgs = {
    data: Create_Brand_Input;
};


export type MutationCreate_Brand_ItemsArgs = {
    data?: InputMaybe<Array<Create_Brand_Input>>;
    filter?: InputMaybe<Brand_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Build_Log_ItemArgs = {
    data: Create_Build_Log_Input;
};


export type MutationCreate_Build_Log_ItemsArgs = {
    data?: InputMaybe<Array<Create_Build_Log_Input>>;
    filter?: InputMaybe<Build_Log_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Contact_Form_ItemArgs = {
    data: Create_Contact_Form_Input;
};


export type MutationCreate_Contact_Form_ItemsArgs = {
    data?: InputMaybe<Array<Create_Contact_Form_Input>>;
    filter?: InputMaybe<Contact_Form_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Donor_ItemArgs = {
    data: Create_Donor_Input;
};


export type MutationCreate_Donor_ItemsArgs = {
    data?: InputMaybe<Array<Create_Donor_Input>>;
    filter?: InputMaybe<Donor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Educational_Docs_ItemArgs = {
    data: Create_Educational_Docs_Input;
};


export type MutationCreate_Educational_Docs_ItemsArgs = {
    data?: InputMaybe<Array<Create_Educational_Docs_Input>>;
    filter?: InputMaybe<Educational_Docs_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Form_Factor_ItemArgs = {
    data: Create_Form_Factor_Input;
};


export type MutationCreate_Form_Factor_ItemsArgs = {
    data?: InputMaybe<Array<Create_Form_Factor_Input>>;
    filter?: InputMaybe<Form_Factor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Git_Pull_ItemArgs = {
    data: Create_Git_Pull_Input;
};


export type MutationCreate_Git_Pull_ItemsArgs = {
    data?: InputMaybe<Array<Create_Git_Pull_Input>>;
    filter?: InputMaybe<Git_Pull_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Homepage_Slides_ItemArgs = {
    data: Create_Homepage_Slides_Input;
};


export type MutationCreate_Homepage_Slides_ItemsArgs = {
    data?: InputMaybe<Array<Create_Homepage_Slides_Input>>;
    filter?: InputMaybe<Homepage_Slides_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Import_Raw_ItemArgs = {
    data: Create_Import_Raw_Input;
};


export type MutationCreate_Import_Raw_ItemsArgs = {
    data?: InputMaybe<Array<Create_Import_Raw_Input>>;
    filter?: InputMaybe<Import_Raw_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Import_Update_ItemArgs = {
    data: Create_Import_Update_Input;
};


export type MutationCreate_Import_Update_ItemsArgs = {
    data?: InputMaybe<Array<Create_Import_Update_Input>>;
    filter?: InputMaybe<Import_Update_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_List_ItemArgs = {
    data: Create_List_Input;
};


export type MutationCreate_List_ItemsArgs = {
    data?: InputMaybe<Array<Create_List_Input>>;
    filter?: InputMaybe<List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_Directus_Files_ItemArgs = {
    data: Create_Model_Directus_Files_Input;
};


export type MutationCreate_Model_Directus_Files_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_Directus_Files_Input>>;
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_Files_ItemArgs = {
    data: Create_Model_Files_Input;
};


export type MutationCreate_Model_Files_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_Files_Input>>;
    filter?: InputMaybe<Model_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_ItemArgs = {
    data: Create_Model_Input;
};


export type MutationCreate_Model_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_Input>>;
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_Like_ItemArgs = {
    data: Create_Model_Like_Input;
};


export type MutationCreate_Model_Like_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_Like_Input>>;
    filter?: InputMaybe<Model_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_List_ItemArgs = {
    data: Create_Model_List_Input;
};


export type MutationCreate_Model_List_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_List_Input>>;
    filter?: InputMaybe<Model_List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Model_Tag_ItemArgs = {
    data: Create_Model_Tag_Input;
};


export type MutationCreate_Model_Tag_ItemsArgs = {
    data?: InputMaybe<Array<Create_Model_Tag_Input>>;
    filter?: InputMaybe<Model_Tag_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Most_Wanted_ItemArgs = {
    data: Create_Most_Wanted_Input;
};


export type MutationCreate_Most_Wanted_ItemsArgs = {
    data?: InputMaybe<Array<Create_Most_Wanted_Input>>;
    filter?: InputMaybe<Most_Wanted_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Page_ItemArgs = {
    data: Create_Page_Input;
};


export type MutationCreate_Page_ItemsArgs = {
    data?: InputMaybe<Array<Create_Page_Input>>;
    filter?: InputMaybe<Page_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Product_ItemArgs = {
    data: Create_Product_Input;
};


export type MutationCreate_Product_ItemsArgs = {
    data?: InputMaybe<Array<Create_Product_Input>>;
    filter?: InputMaybe<Product_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Related_Model_ItemArgs = {
    data: Create_Related_Model_Input;
};


export type MutationCreate_Related_Model_ItemsArgs = {
    data?: InputMaybe<Array<Create_Related_Model_Input>>;
    filter?: InputMaybe<Related_Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Release_ItemArgs = {
    data: Create_Release_Input;
};


export type MutationCreate_Release_ItemsArgs = {
    data?: InputMaybe<Array<Create_Release_Input>>;
    filter?: InputMaybe<Release_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Reset_Build_Process_ItemArgs = {
    data: Create_Reset_Build_Process_Input;
};


export type MutationCreate_Reset_Build_Process_ItemsArgs = {
    data?: InputMaybe<Array<Create_Reset_Build_Process_Input>>;
    filter?: InputMaybe<Reset_Build_Process_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Resources_ItemArgs = {
    data: Create_Resources_Input;
};


export type MutationCreate_Resources_ItemsArgs = {
    data?: InputMaybe<Array<Create_Resources_Input>>;
    filter?: InputMaybe<Resources_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Sponsors_ItemArgs = {
    data: Create_Sponsors_Input;
};


export type MutationCreate_Sponsors_ItemsArgs = {
    data?: InputMaybe<Array<Create_Sponsors_Input>>;
    filter?: InputMaybe<Sponsors_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Team_ItemArgs = {
    data: Create_Team_Input;
};


export type MutationCreate_Team_ItemsArgs = {
    data?: InputMaybe<Array<Create_Team_Input>>;
    filter?: InputMaybe<Team_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Blog_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Blog_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Blog_Like_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Blog_Like_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Brand_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Brand_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Build_Log_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Build_Log_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Contact_Form_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Contact_Form_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Donor_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Donor_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Educational_Docs_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Educational_Docs_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Form_Factor_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Form_Factor_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Git_Pull_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Git_Pull_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Homepage_Slides_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Homepage_Slides_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Import_Raw_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Import_Raw_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Import_Update_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Import_Update_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_List_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_List_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_Directus_Files_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_Directus_Files_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_Files_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_Files_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_Like_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_Like_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_List_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_List_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Model_Tag_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Model_Tag_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Most_Wanted_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Most_Wanted_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Page_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Page_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Product_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Product_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Related_Model_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Related_Model_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Release_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Release_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Reset_Build_Process_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Reset_Build_Process_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Resources_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Resources_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Sponsors_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Sponsors_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Team_ItemArgs = {
    id: Scalars['ID']['input'];
};


export type MutationDelete_Team_ItemsArgs = {
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Blog_BatchArgs = {
    data?: InputMaybe<Array<Update_Blog_Input>>;
    filter?: InputMaybe<Blog_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Blog_ItemArgs = {
    data: Update_Blog_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Blog_ItemsArgs = {
    data: Update_Blog_Input;
    filter?: InputMaybe<Blog_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Blog_Like_BatchArgs = {
    data?: InputMaybe<Array<Update_Blog_Like_Input>>;
    filter?: InputMaybe<Blog_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Blog_Like_ItemArgs = {
    data: Update_Blog_Like_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Blog_Like_ItemsArgs = {
    data: Update_Blog_Like_Input;
    filter?: InputMaybe<Blog_Like_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Brand_BatchArgs = {
    data?: InputMaybe<Array<Update_Brand_Input>>;
    filter?: InputMaybe<Brand_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Brand_ItemArgs = {
    data: Update_Brand_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Brand_ItemsArgs = {
    data: Update_Brand_Input;
    filter?: InputMaybe<Brand_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Build_Log_BatchArgs = {
    data?: InputMaybe<Array<Update_Build_Log_Input>>;
    filter?: InputMaybe<Build_Log_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Build_Log_ItemArgs = {
    data: Update_Build_Log_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Build_Log_ItemsArgs = {
    data: Update_Build_Log_Input;
    filter?: InputMaybe<Build_Log_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Contact_Form_BatchArgs = {
    data?: InputMaybe<Array<Update_Contact_Form_Input>>;
    filter?: InputMaybe<Contact_Form_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Contact_Form_ItemArgs = {
    data: Update_Contact_Form_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Contact_Form_ItemsArgs = {
    data: Update_Contact_Form_Input;
    filter?: InputMaybe<Contact_Form_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Donor_BatchArgs = {
    data?: InputMaybe<Array<Update_Donor_Input>>;
    filter?: InputMaybe<Donor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Donor_ItemArgs = {
    data: Update_Donor_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Donor_ItemsArgs = {
    data: Update_Donor_Input;
    filter?: InputMaybe<Donor_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Educational_Docs_BatchArgs = {
    data?: InputMaybe<Array<Update_Educational_Docs_Input>>;
    filter?: InputMaybe<Educational_Docs_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Educational_Docs_ItemArgs = {
    data: Update_Educational_Docs_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Educational_Docs_ItemsArgs = {
    data: Update_Educational_Docs_Input;
    filter?: InputMaybe<Educational_Docs_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Factor_BatchArgs = {
    data?: InputMaybe<Array<Update_Form_Factor_Input>>;
    filter?: InputMaybe<Form_Factor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Form_Factor_ItemArgs = {
    data: Update_Form_Factor_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Form_Factor_ItemsArgs = {
    data: Update_Form_Factor_Input;
    filter?: InputMaybe<Form_Factor_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Git_Pull_BatchArgs = {
    data?: InputMaybe<Array<Update_Git_Pull_Input>>;
    filter?: InputMaybe<Git_Pull_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Git_Pull_ItemArgs = {
    data: Update_Git_Pull_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Git_Pull_ItemsArgs = {
    data: Update_Git_Pull_Input;
    filter?: InputMaybe<Git_Pull_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Homepage_Slides_BatchArgs = {
    data?: InputMaybe<Array<Update_Homepage_Slides_Input>>;
    filter?: InputMaybe<Homepage_Slides_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Homepage_Slides_ItemArgs = {
    data: Update_Homepage_Slides_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Homepage_Slides_ItemsArgs = {
    data: Update_Homepage_Slides_Input;
    filter?: InputMaybe<Homepage_Slides_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Import_Raw_BatchArgs = {
    data?: InputMaybe<Array<Update_Import_Raw_Input>>;
    filter?: InputMaybe<Import_Raw_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Import_Raw_ItemArgs = {
    data: Update_Import_Raw_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Import_Raw_ItemsArgs = {
    data: Update_Import_Raw_Input;
    filter?: InputMaybe<Import_Raw_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Import_Update_BatchArgs = {
    data?: InputMaybe<Array<Update_Import_Update_Input>>;
    filter?: InputMaybe<Import_Update_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Import_Update_ItemArgs = {
    data: Update_Import_Update_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Import_Update_ItemsArgs = {
    data: Update_Import_Update_Input;
    filter?: InputMaybe<Import_Update_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_List_BatchArgs = {
    data?: InputMaybe<Array<Update_List_Input>>;
    filter?: InputMaybe<List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_List_ItemArgs = {
    data: Update_List_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_List_ItemsArgs = {
    data: Update_List_Input;
    filter?: InputMaybe<List_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_Input>>;
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Directus_Files_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_Directus_Files_Input>>;
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Directus_Files_ItemArgs = {
    data: Update_Model_Directus_Files_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_Directus_Files_ItemsArgs = {
    data: Update_Model_Directus_Files_Input;
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Files_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_Files_Input>>;
    filter?: InputMaybe<Model_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Files_ItemArgs = {
    data: Update_Model_Files_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_Files_ItemsArgs = {
    data: Update_Model_Files_Input;
    filter?: InputMaybe<Model_Files_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_ItemArgs = {
    data: Update_Model_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_ItemsArgs = {
    data: Update_Model_Input;
    filter?: InputMaybe<Model_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Like_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_Like_Input>>;
    filter?: InputMaybe<Model_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Like_ItemArgs = {
    data: Update_Model_Like_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_Like_ItemsArgs = {
    data: Update_Model_Like_Input;
    filter?: InputMaybe<Model_Like_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_List_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_List_Input>>;
    filter?: InputMaybe<Model_List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_List_ItemArgs = {
    data: Update_Model_List_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_List_ItemsArgs = {
    data: Update_Model_List_Input;
    filter?: InputMaybe<Model_List_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Tag_BatchArgs = {
    data?: InputMaybe<Array<Update_Model_Tag_Input>>;
    filter?: InputMaybe<Model_Tag_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Model_Tag_ItemArgs = {
    data: Update_Model_Tag_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Model_Tag_ItemsArgs = {
    data: Update_Model_Tag_Input;
    filter?: InputMaybe<Model_Tag_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Most_Wanted_BatchArgs = {
    data?: InputMaybe<Array<Update_Most_Wanted_Input>>;
    filter?: InputMaybe<Most_Wanted_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Most_Wanted_ItemArgs = {
    data: Update_Most_Wanted_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Most_Wanted_ItemsArgs = {
    data: Update_Most_Wanted_Input;
    filter?: InputMaybe<Most_Wanted_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_BatchArgs = {
    data?: InputMaybe<Array<Update_Page_Input>>;
    filter?: InputMaybe<Page_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Page_ItemArgs = {
    data: Update_Page_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Page_ItemsArgs = {
    data: Update_Page_Input;
    filter?: InputMaybe<Page_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_BatchArgs = {
    data?: InputMaybe<Array<Update_Product_Input>>;
    filter?: InputMaybe<Product_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Product_ItemArgs = {
    data: Update_Product_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Product_ItemsArgs = {
    data: Update_Product_Input;
    filter?: InputMaybe<Product_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Model_BatchArgs = {
    data?: InputMaybe<Array<Update_Related_Model_Input>>;
    filter?: InputMaybe<Related_Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Related_Model_ItemArgs = {
    data: Update_Related_Model_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Related_Model_ItemsArgs = {
    data: Update_Related_Model_Input;
    filter?: InputMaybe<Related_Model_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Release_BatchArgs = {
    data?: InputMaybe<Array<Update_Release_Input>>;
    filter?: InputMaybe<Release_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Release_ItemArgs = {
    data: Update_Release_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Release_ItemsArgs = {
    data: Update_Release_Input;
    filter?: InputMaybe<Release_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Reset_Build_Process_BatchArgs = {
    data?: InputMaybe<Array<Update_Reset_Build_Process_Input>>;
    filter?: InputMaybe<Reset_Build_Process_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Reset_Build_Process_ItemArgs = {
    data: Update_Reset_Build_Process_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Reset_Build_Process_ItemsArgs = {
    data: Update_Reset_Build_Process_Input;
    filter?: InputMaybe<Reset_Build_Process_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Resources_BatchArgs = {
    data?: InputMaybe<Array<Update_Resources_Input>>;
    filter?: InputMaybe<Resources_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Resources_ItemArgs = {
    data: Update_Resources_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Resources_ItemsArgs = {
    data: Update_Resources_Input;
    filter?: InputMaybe<Resources_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Sponsors_BatchArgs = {
    data?: InputMaybe<Array<Update_Sponsors_Input>>;
    filter?: InputMaybe<Sponsors_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Sponsors_ItemArgs = {
    data: Update_Sponsors_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Sponsors_ItemsArgs = {
    data: Update_Sponsors_Input;
    filter?: InputMaybe<Sponsors_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_BatchArgs = {
    data?: InputMaybe<Array<Update_Team_Input>>;
    filter?: InputMaybe<Team_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Team_ItemArgs = {
    data: Update_Team_Input;
    id: Scalars['ID']['input'];
};


export type MutationUpdate_Team_ItemsArgs = {
    data: Update_Team_Input;
    filter?: InputMaybe<Team_Filter>;
    ids: Array<InputMaybe<Scalars['ID']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
    __typename: 'Query';
    blog: Array<Blog>;
    blog_aggregated: Array<Blog_Aggregated>;
    blog_by_id?: Maybe<Blog>;
    blog_like: Array<Blog_Like>;
    blog_like_aggregated: Array<Blog_Like_Aggregated>;
    blog_like_by_id?: Maybe<Blog_Like>;
    brand: Array<Brand>;
    brand_aggregated: Array<Brand_Aggregated>;
    brand_by_id?: Maybe<Brand>;
    build_log: Array<Build_Log>;
    build_log_aggregated: Array<Build_Log_Aggregated>;
    build_log_by_id?: Maybe<Build_Log>;
    contact_form: Array<Contact_Form>;
    contact_form_aggregated: Array<Contact_Form_Aggregated>;
    contact_form_by_id?: Maybe<Contact_Form>;
    donor: Array<Donor>;
    donor_aggregated: Array<Donor_Aggregated>;
    donor_by_id?: Maybe<Donor>;
    educational_docs: Array<Educational_Docs>;
    educational_docs_aggregated: Array<Educational_Docs_Aggregated>;
    educational_docs_by_id?: Maybe<Educational_Docs>;
    form_factor: Array<Form_Factor>;
    form_factor_aggregated: Array<Form_Factor_Aggregated>;
    form_factor_by_id?: Maybe<Form_Factor>;
    git_pull: Array<Git_Pull>;
    git_pull_aggregated: Array<Git_Pull_Aggregated>;
    git_pull_by_id?: Maybe<Git_Pull>;
    homepage_slides: Array<Homepage_Slides>;
    homepage_slides_aggregated: Array<Homepage_Slides_Aggregated>;
    homepage_slides_by_id?: Maybe<Homepage_Slides>;
    import_raw: Array<Import_Raw>;
    import_raw_aggregated: Array<Import_Raw_Aggregated>;
    import_raw_by_id?: Maybe<Import_Raw>;
    import_update: Array<Import_Update>;
    import_update_aggregated: Array<Import_Update_Aggregated>;
    import_update_by_id?: Maybe<Import_Update>;
    list: Array<List>;
    list_aggregated: Array<List_Aggregated>;
    list_by_id?: Maybe<List>;
    model: Array<Model>;
    model_aggregated: Array<Model_Aggregated>;
    model_by_id?: Maybe<Model>;
    model_directus_files: Array<Model_Directus_Files>;
    model_directus_files_aggregated: Array<Model_Directus_Files_Aggregated>;
    model_directus_files_by_id?: Maybe<Model_Directus_Files>;
    model_files: Array<Model_Files>;
    model_files_aggregated: Array<Model_Files_Aggregated>;
    model_files_by_id?: Maybe<Model_Files>;
    model_like: Array<Model_Like>;
    model_like_aggregated: Array<Model_Like_Aggregated>;
    model_like_by_id?: Maybe<Model_Like>;
    model_list: Array<Model_List>;
    model_list_aggregated: Array<Model_List_Aggregated>;
    model_list_by_id?: Maybe<Model_List>;
    model_tag: Array<Model_Tag>;
    model_tag_aggregated: Array<Model_Tag_Aggregated>;
    model_tag_by_id?: Maybe<Model_Tag>;
    most_wanted: Array<Most_Wanted>;
    most_wanted_aggregated: Array<Most_Wanted_Aggregated>;
    most_wanted_by_id?: Maybe<Most_Wanted>;
    page: Array<Page>;
    page_aggregated: Array<Page_Aggregated>;
    page_by_id?: Maybe<Page>;
    product: Array<Product>;
    product_aggregated: Array<Product_Aggregated>;
    product_by_id?: Maybe<Product>;
    related_model: Array<Related_Model>;
    related_model_aggregated: Array<Related_Model_Aggregated>;
    related_model_by_id?: Maybe<Related_Model>;
    release: Array<Release>;
    release_aggregated: Array<Release_Aggregated>;
    release_by_id?: Maybe<Release>;
    reset_build_process: Array<Reset_Build_Process>;
    reset_build_process_aggregated: Array<Reset_Build_Process_Aggregated>;
    reset_build_process_by_id?: Maybe<Reset_Build_Process>;
    resources: Array<Resources>;
    resources_aggregated: Array<Resources_Aggregated>;
    resources_by_id?: Maybe<Resources>;
    sponsors: Array<Sponsors>;
    sponsors_aggregated: Array<Sponsors_Aggregated>;
    sponsors_by_id?: Maybe<Sponsors>;
    team: Array<Team>;
    team_aggregated: Array<Team_Aggregated>;
    team_by_id?: Maybe<Team>;
};


export type QueryBlogArgs = {
    filter?: InputMaybe<Blog_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_AggregatedArgs = {
    filter?: InputMaybe<Blog_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlog_LikeArgs = {
    filter?: InputMaybe<Blog_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_Like_AggregatedArgs = {
    filter?: InputMaybe<Blog_Like_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlog_Like_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBrandArgs = {
    filter?: InputMaybe<Brand_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrand_AggregatedArgs = {
    filter?: InputMaybe<Brand_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBrand_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBuild_LogArgs = {
    filter?: InputMaybe<Build_Log_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBuild_Log_AggregatedArgs = {
    filter?: InputMaybe<Build_Log_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBuild_Log_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContact_FormArgs = {
    filter?: InputMaybe<Contact_Form_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_AggregatedArgs = {
    filter?: InputMaybe<Contact_Form_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDonorArgs = {
    filter?: InputMaybe<Donor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDonor_AggregatedArgs = {
    filter?: InputMaybe<Donor_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDonor_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEducational_DocsArgs = {
    filter?: InputMaybe<Educational_Docs_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEducational_Docs_AggregatedArgs = {
    filter?: InputMaybe<Educational_Docs_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryEducational_Docs_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryForm_FactorArgs = {
    filter?: InputMaybe<Form_Factor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Factor_AggregatedArgs = {
    filter?: InputMaybe<Form_Factor_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryForm_Factor_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGit_PullArgs = {
    filter?: InputMaybe<Git_Pull_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGit_Pull_AggregatedArgs = {
    filter?: InputMaybe<Git_Pull_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGit_Pull_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomepage_SlidesArgs = {
    filter?: InputMaybe<Homepage_Slides_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Slides_AggregatedArgs = {
    filter?: InputMaybe<Homepage_Slides_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomepage_Slides_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryImport_RawArgs = {
    filter?: InputMaybe<Import_Raw_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImport_Raw_AggregatedArgs = {
    filter?: InputMaybe<Import_Raw_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImport_Raw_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryImport_UpdateArgs = {
    filter?: InputMaybe<Import_Update_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImport_Update_AggregatedArgs = {
    filter?: InputMaybe<Import_Update_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryImport_Update_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListArgs = {
    filter?: InputMaybe<List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryList_AggregatedArgs = {
    filter?: InputMaybe<List_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryList_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModelArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_AggregatedArgs = {
    filter?: InputMaybe<Model_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModel_Directus_FilesArgs = {
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Directus_Files_AggregatedArgs = {
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Directus_Files_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModel_FilesArgs = {
    filter?: InputMaybe<Model_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Files_AggregatedArgs = {
    filter?: InputMaybe<Model_Files_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Files_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModel_LikeArgs = {
    filter?: InputMaybe<Model_Like_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Like_AggregatedArgs = {
    filter?: InputMaybe<Model_Like_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Like_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModel_ListArgs = {
    filter?: InputMaybe<Model_List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_List_AggregatedArgs = {
    filter?: InputMaybe<Model_List_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_List_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryModel_TagArgs = {
    filter?: InputMaybe<Model_Tag_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Tag_AggregatedArgs = {
    filter?: InputMaybe<Model_Tag_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryModel_Tag_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMost_WantedArgs = {
    filter?: InputMaybe<Most_Wanted_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMost_Wanted_AggregatedArgs = {
    filter?: InputMaybe<Most_Wanted_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMost_Wanted_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
    filter?: InputMaybe<Page_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_AggregatedArgs = {
    filter?: InputMaybe<Page_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPage_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
    filter?: InputMaybe<Product_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_AggregatedArgs = {
    filter?: InputMaybe<Product_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProduct_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRelated_ModelArgs = {
    filter?: InputMaybe<Related_Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Model_AggregatedArgs = {
    filter?: InputMaybe<Related_Model_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelated_Model_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReleaseArgs = {
    filter?: InputMaybe<Release_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelease_AggregatedArgs = {
    filter?: InputMaybe<Release_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRelease_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReset_Build_ProcessArgs = {
    filter?: InputMaybe<Reset_Build_Process_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReset_Build_Process_AggregatedArgs = {
    filter?: InputMaybe<Reset_Build_Process_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReset_Build_Process_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryResourcesArgs = {
    filter?: InputMaybe<Resources_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResources_AggregatedArgs = {
    filter?: InputMaybe<Resources_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResources_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySponsorsArgs = {
    filter?: InputMaybe<Sponsors_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySponsors_AggregatedArgs = {
    filter?: InputMaybe<Sponsors_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySponsors_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamArgs = {
    filter?: InputMaybe<Team_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_AggregatedArgs = {
    filter?: InputMaybe<Team_Filter>;
    groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_By_IdArgs = {
    id: Scalars['ID']['input'];
    version?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
    __typename: 'Subscription';
    blog_like_mutated?: Maybe<Blog_Like_Mutated>;
    blog_mutated?: Maybe<Blog_Mutated>;
    brand_mutated?: Maybe<Brand_Mutated>;
    build_log_mutated?: Maybe<Build_Log_Mutated>;
    contact_form_mutated?: Maybe<Contact_Form_Mutated>;
    directus_activity_mutated?: Maybe<Directus_Activity_Mutated>;
    directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>;
    directus_files_mutated?: Maybe<Directus_Files_Mutated>;
    directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
    directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
    directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>;
    directus_operations_mutated?: Maybe<Directus_Operations_Mutated>;
    directus_panels_mutated?: Maybe<Directus_Panels_Mutated>;
    directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>;
    directus_presets_mutated?: Maybe<Directus_Presets_Mutated>;
    directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>;
    directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
    directus_settings_mutated?: Maybe<Directus_Settings_Mutated>;
    directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
    directus_translations_mutated?: Maybe<Directus_Translations_Mutated>;
    directus_users_mutated?: Maybe<Directus_Users_Mutated>;
    directus_versions_mutated?: Maybe<Directus_Versions_Mutated>;
    directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>;
    donor_mutated?: Maybe<Donor_Mutated>;
    educational_docs_mutated?: Maybe<Educational_Docs_Mutated>;
    form_factor_mutated?: Maybe<Form_Factor_Mutated>;
    git_pull_mutated?: Maybe<Git_Pull_Mutated>;
    homepage_slides_mutated?: Maybe<Homepage_Slides_Mutated>;
    import_raw_mutated?: Maybe<Import_Raw_Mutated>;
    import_update_mutated?: Maybe<Import_Update_Mutated>;
    list_mutated?: Maybe<List_Mutated>;
    model_directus_files_mutated?: Maybe<Model_Directus_Files_Mutated>;
    model_files_mutated?: Maybe<Model_Files_Mutated>;
    model_like_mutated?: Maybe<Model_Like_Mutated>;
    model_list_mutated?: Maybe<Model_List_Mutated>;
    model_mutated?: Maybe<Model_Mutated>;
    model_tag_mutated?: Maybe<Model_Tag_Mutated>;
    most_wanted_mutated?: Maybe<Most_Wanted_Mutated>;
    page_mutated?: Maybe<Page_Mutated>;
    product_mutated?: Maybe<Product_Mutated>;
    related_model_mutated?: Maybe<Related_Model_Mutated>;
    release_mutated?: Maybe<Release_Mutated>;
    reset_build_process_mutated?: Maybe<Reset_Build_Process_Mutated>;
    resources_mutated?: Maybe<Resources_Mutated>;
    sponsors_mutated?: Maybe<Sponsors_Mutated>;
    team_mutated?: Maybe<Team_Mutated>;
};


export type SubscriptionBlog_Like_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlog_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionBrand_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionBuild_Log_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionContact_Form_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Versions_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionDonor_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionEducational_Docs_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionForm_Factor_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionGit_Pull_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionHomepage_Slides_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionImport_Raw_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionImport_Update_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionList_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_Directus_Files_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_Files_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_Like_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_List_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionModel_Tag_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionMost_Wanted_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionPage_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionProduct_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionRelated_Model_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionRelease_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionReset_Build_Process_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionResources_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionSponsors_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};


export type SubscriptionTeam_MutatedArgs = {
    event?: InputMaybe<EventEnum>;
};

export type Blog = {
    __typename: 'blog';
    content?: Maybe<Scalars['String']['output']>;
    created_by?: Maybe<Directus_Users>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    date?: Maybe<Scalars['Date']['output']>;
    date_func?: Maybe<Date_Functions>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    modified_by?: Maybe<Directus_Users>;
    modified_on?: Maybe<Scalars['Date']['output']>;
    modified_on_func?: Maybe<Datetime_Functions>;
    owner?: Maybe<Directus_Users>;
    show_featured_image_in_blog_post_body?: Maybe<Scalars['Boolean']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};


export type BlogCreated_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogModified_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BlogOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Blog_Aggregated = {
    __typename: 'blog_aggregated';
    avg?: Maybe<Blog_Aggregated_Fields>;
    avgDistinct?: Maybe<Blog_Aggregated_Fields>;
    count?: Maybe<Blog_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Blog_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Blog_Aggregated_Fields>;
    min?: Maybe<Blog_Aggregated_Fields>;
    sum?: Maybe<Blog_Aggregated_Fields>;
    sumDistinct?: Maybe<Blog_Aggregated_Fields>;
};

export type Blog_Aggregated_Count = {
    __typename: 'blog_aggregated_count';
    content?: Maybe<Scalars['Int']['output']>;
    created_by?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    date?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    modified_by?: Maybe<Scalars['Int']['output']>;
    modified_on?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    show_featured_image_in_blog_post_body?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
};

export type Blog_Aggregated_Fields = {
    __typename: 'blog_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Blog_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Blog_Filter>>>;
    content?: InputMaybe<String_Filter_Operators>;
    created_by?: InputMaybe<Directus_Users_Filter>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date?: InputMaybe<Date_Filter_Operators>;
    date_func?: InputMaybe<Date_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    modified_by?: InputMaybe<Directus_Users_Filter>;
    modified_on?: InputMaybe<Date_Filter_Operators>;
    modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    show_featured_image_in_blog_post_body?: InputMaybe<Boolean_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Blog_Like = {
    __typename: 'blog_like';
    blog_id?: Maybe<Blog>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
};


export type Blog_LikeBlog_IdArgs = {
    filter?: InputMaybe<Blog_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Blog_Like_Aggregated = {
    __typename: 'blog_like_aggregated';
    avg?: Maybe<Blog_Like_Aggregated_Fields>;
    avgDistinct?: Maybe<Blog_Like_Aggregated_Fields>;
    count?: Maybe<Blog_Like_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Blog_Like_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Blog_Like_Aggregated_Fields>;
    min?: Maybe<Blog_Like_Aggregated_Fields>;
    sum?: Maybe<Blog_Like_Aggregated_Fields>;
    sumDistinct?: Maybe<Blog_Like_Aggregated_Fields>;
};

export type Blog_Like_Aggregated_Count = {
    __typename: 'blog_like_aggregated_count';
    blog_id?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
};

export type Blog_Like_Aggregated_Fields = {
    __typename: 'blog_like_aggregated_fields';
    blog_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
};

export type Blog_Like_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Blog_Like_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Blog_Like_Filter>>>;
    blog_id?: InputMaybe<Blog_Filter>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
};

export type Blog_Like_Mutated = {
    __typename: 'blog_like_mutated';
    data?: Maybe<Blog_Like>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Blog_Mutated = {
    __typename: 'blog_mutated';
    data?: Maybe<Blog>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Boolean_Filter_Operators = {
    _eq?: InputMaybe<Scalars['Boolean']['input']>;
    _neq?: InputMaybe<Scalars['Boolean']['input']>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Brand = {
    __typename: 'brand';
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};

export type Brand_Aggregated = {
    __typename: 'brand_aggregated';
    avg?: Maybe<Brand_Aggregated_Fields>;
    avgDistinct?: Maybe<Brand_Aggregated_Fields>;
    count?: Maybe<Brand_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Brand_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Brand_Aggregated_Fields>;
    min?: Maybe<Brand_Aggregated_Fields>;
    sum?: Maybe<Brand_Aggregated_Fields>;
    sumDistinct?: Maybe<Brand_Aggregated_Fields>;
};

export type Brand_Aggregated_Count = {
    __typename: 'brand_aggregated_count';
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Brand_Aggregated_Fields = {
    __typename: 'brand_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Brand_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Brand_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Brand_Filter>>>;
    id?: InputMaybe<Number_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Brand_Mutated = {
    __typename: 'brand_mutated';
    data?: Maybe<Brand>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Build_Log = {
    __typename: 'build_log';
    date_canceled?: Maybe<Scalars['Date']['output']>;
    date_canceled_func?: Maybe<Datetime_Functions>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_finished?: Maybe<Scalars['Date']['output']>;
    date_finished_func?: Maybe<Datetime_Functions>;
    date_running?: Maybe<Scalars['Date']['output']>;
    date_running_func?: Maybe<Datetime_Functions>;
    date_started?: Maybe<Scalars['Date']['output']>;
    date_started_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    release_id?: Maybe<Release>;
    type?: Maybe<Scalars['String']['output']>;
};


export type Build_LogRelease_IdArgs = {
    filter?: InputMaybe<Release_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Build_Log_Aggregated = {
    __typename: 'build_log_aggregated';
    count?: Maybe<Build_Log_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Build_Log_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
};

export type Build_Log_Aggregated_Count = {
    __typename: 'build_log_aggregated_count';
    date_canceled?: Maybe<Scalars['Int']['output']>;
    date_created?: Maybe<Scalars['Int']['output']>;
    date_finished?: Maybe<Scalars['Int']['output']>;
    date_running?: Maybe<Scalars['Int']['output']>;
    date_started?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    release_id?: Maybe<Scalars['Int']['output']>;
    type?: Maybe<Scalars['Int']['output']>;
};

export type Build_Log_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Build_Log_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Build_Log_Filter>>>;
    date_canceled?: InputMaybe<Date_Filter_Operators>;
    date_canceled_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_finished?: InputMaybe<Date_Filter_Operators>;
    date_finished_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_running?: InputMaybe<Date_Filter_Operators>;
    date_running_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_started?: InputMaybe<Date_Filter_Operators>;
    date_started_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    release_id?: InputMaybe<Release_Filter>;
    type?: InputMaybe<String_Filter_Operators>;
};

export type Build_Log_Mutated = {
    __typename: 'build_log_mutated';
    data?: Maybe<Build_Log>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Contact_Form = {
    __typename: 'contact_form';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    email?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    message?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    subject?: Maybe<Scalars['String']['output']>;
};

export type Contact_Form_Aggregated = {
    __typename: 'contact_form_aggregated';
    avg?: Maybe<Contact_Form_Aggregated_Fields>;
    avgDistinct?: Maybe<Contact_Form_Aggregated_Fields>;
    count?: Maybe<Contact_Form_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Contact_Form_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Contact_Form_Aggregated_Fields>;
    min?: Maybe<Contact_Form_Aggregated_Fields>;
    sum?: Maybe<Contact_Form_Aggregated_Fields>;
    sumDistinct?: Maybe<Contact_Form_Aggregated_Fields>;
};

export type Contact_Form_Aggregated_Count = {
    __typename: 'contact_form_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    email?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    message?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    subject?: Maybe<Scalars['Int']['output']>;
};

export type Contact_Form_Aggregated_Fields = {
    __typename: 'contact_form_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Contact_Form_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Contact_Form_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Contact_Form_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    email?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    message?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    subject?: InputMaybe<String_Filter_Operators>;
};

export type Contact_Form_Mutated = {
    __typename: 'contact_form_mutated';
    data?: Maybe<Contact_Form>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
    count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
    __typename: 'count_functions';
    count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Blog_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_by?: InputMaybe<Create_Directus_Users_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    date?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    modified_by?: InputMaybe<Create_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    show_featured_image_in_blog_post_body?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type Create_Blog_Like_Input = {
    blog_id?: InputMaybe<Create_Blog_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Brand_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Build_Log_Input = {
    date_canceled?: InputMaybe<Scalars['Date']['input']>;
    date_created?: InputMaybe<Scalars['Date']['input']>;
    date_finished?: InputMaybe<Scalars['Date']['input']>;
    date_running?: InputMaybe<Scalars['Date']['input']>;
    date_started?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    release_id?: InputMaybe<Create_Release_Input>;
    type?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Contact_Form_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    message?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    subject?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Directus_Files_Input = {
    charset?: InputMaybe<Scalars['String']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    duration?: InputMaybe<Scalars['Int']['input']>;
    embed?: InputMaybe<Scalars['String']['input']>;
    filename_disk?: InputMaybe<Scalars['String']['input']>;
    filename_download: Scalars['String']['input'];
    filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    folder?: InputMaybe<Create_Directus_Folders_Input>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    location?: InputMaybe<Scalars['String']['input']>;
    metadata?: InputMaybe<Scalars['JSON']['input']>;
    model?: InputMaybe<Array<InputMaybe<Create_Model_Directus_Files_Input>>>;
    modified_by?: InputMaybe<Create_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    storage: Scalars['String']['input'];
    tags?: InputMaybe<Scalars['JSON']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
    uploaded_on?: InputMaybe<Scalars['Date']['input']>;
    width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Folders_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    name: Scalars['String']['input'];
    parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
    admin_access: Scalars['Boolean']['input'];
    app_access?: InputMaybe<Scalars['Boolean']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    enforce_tfa: Scalars['Boolean']['input'];
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name: Scalars['String']['input'];
    users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
    appearance?: InputMaybe<Scalars['String']['input']>;
    auth_data?: InputMaybe<Scalars['JSON']['input']>;
    avatar?: InputMaybe<Create_Directus_Files_Input>;
    description?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
    external_identifier?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    language?: InputMaybe<Scalars['String']['input']>;
    last_access?: InputMaybe<Scalars['Date']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    last_page?: InputMaybe<Scalars['String']['input']>;
    location?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['Hash']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    role?: InputMaybe<Create_Directus_Roles_Input>;
    status?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['JSON']['input']>;
    tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
    theme_dark?: InputMaybe<Scalars['String']['input']>;
    theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
    theme_light?: InputMaybe<Scalars['String']['input']>;
    theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Create_Donor_Input = {
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    linkedin_url?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Educational_Docs_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    file?: InputMaybe<Create_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type Create_Form_Factor_Input = {
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Git_Pull_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Homepage_Slides_Input = {
    background_image?: InputMaybe<Create_Directus_Files_Input>;
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    read_more_label?: InputMaybe<Scalars['String']['input']>;
    read_more_link?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    /** (CSS class name) */
    style?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
};

export type Create_Import_Raw_Input = {
    Brand?: InputMaybe<Scalars['String']['input']>;
    Codename?: InputMaybe<Scalars['String']['input']>;
    Day?: InputMaybe<Scalars['String']['input']>;
    Description?: InputMaybe<Scalars['String']['input']>;
    DonatedBy?: InputMaybe<Scalars['String']['input']>;
    FormFactor?: InputMaybe<Scalars['String']['input']>;
    IMEI?: InputMaybe<Scalars['String']['input']>;
    Model?: InputMaybe<Scalars['String']['input']>;
    Month?: InputMaybe<Scalars['String']['input']>;
    Notes?: InputMaybe<Scalars['String']['input']>;
    Publish?: InputMaybe<Scalars['String']['input']>;
    Video?: InputMaybe<Scalars['String']['input']>;
    Weight?: InputMaybe<Scalars['String']['input']>;
    Year?: InputMaybe<Scalars['String']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    donor_id?: InputMaybe<Scalars['Int']['input']>;
    id: Scalars['ID']['input'];
    model_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Import_Update_Input = {
    Brand?: InputMaybe<Scalars['String']['input']>;
    Codename?: InputMaybe<Scalars['String']['input']>;
    Day?: InputMaybe<Scalars['String']['input']>;
    Description?: InputMaybe<Scalars['String']['input']>;
    DonatedBy?: InputMaybe<Scalars['String']['input']>;
    FormFactor?: InputMaybe<Scalars['String']['input']>;
    ID: Scalars['ID']['input'];
    IMEI?: InputMaybe<Scalars['String']['input']>;
    Model?: InputMaybe<Scalars['String']['input']>;
    Month?: InputMaybe<Scalars['String']['input']>;
    Notes?: InputMaybe<Scalars['String']['input']>;
    Publish?: InputMaybe<Scalars['String']['input']>;
    Video?: InputMaybe<Scalars['String']['input']>;
    Weight?: InputMaybe<Scalars['String']['input']>;
    Year?: InputMaybe<Scalars['String']['input']>;
    bla?: InputMaybe<Scalars['String']['input']>;
    brand_id: Scalars['Int']['input'];
    donor_id: Scalars['Int']['input'];
    model_id: Scalars['Int']['input'];
};

export type Create_List_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    model?: InputMaybe<Array<InputMaybe<Create_Model_List_Input>>>;
    name: Scalars['String']['input'];
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Model_Directus_Files_Input = {
    directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Create_Model_Input>;
};

export type Create_Model_Files_Input = {
    directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Create_Model_Input>;
};

export type Create_Model_Input = {
    brand_id?: InputMaybe<Create_Brand_Input>;
    /** The Codename of the Model. This is NOT necessarily the same as the model name / number - for example, a Nexus 5 is "grouper". */
    codename?: InputMaybe<Scalars['String']['input']>;
    collection?: InputMaybe<Array<InputMaybe<Create_Model_List_Input>>>;
    /** A reasonably-lengthed writeup that goes on the website, with a brief history of the device and its quirks / features. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Generated from Brand and Model name */
    display_name?: InputMaybe<Scalars['String']['input']>;
    docs?: InputMaybe<Array<InputMaybe<Create_Model_Directus_Files_Input>>>;
    form_factor_id?: InputMaybe<Create_Form_Factor_Input>;
    /** Hide on Homepage */
    hideonhp?: InputMaybe<Scalars['Boolean']['input']>;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    model?: InputMaybe<Array<InputMaybe<Create_Related_Model_Input>>>;
    /** The Model Name. For example, "Fairphone 4" */
    name?: InputMaybe<Scalars['String']['input']>;
    related_phones?: InputMaybe<Array<InputMaybe<Create_Related_Model_Input>>>;
    /** The day this model was announced. Note: Where possible, use the date of announcement, not the day of first order / release. */
    release_day?: InputMaybe<Scalars['String']['input']>;
    /** The month this model was released. */
    release_month?: InputMaybe<Scalars['String']['input']>;
    /** The year this product was announced. */
    release_year?: InputMaybe<Scalars['String']['input']>;
    /** The short-form name used in URLs. */
    slug: Scalars['String']['input'];
    /** The visibility of this model. */
    status?: InputMaybe<Scalars['String']['input']>;
    video?: InputMaybe<Scalars['String']['input']>;
    video2?: InputMaybe<Scalars['String']['input']>;
    video3?: InputMaybe<Scalars['String']['input']>;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Model_Like_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Create_Model_Input>;
};

export type Create_Model_List_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    list_id?: InputMaybe<Create_List_Input>;
    model_id?: InputMaybe<Create_Model_Input>;
};

export type Create_Model_Tag_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id: Scalars['Int']['input'];
    tag_id: Scalars['Int']['input'];
};

export type Create_Most_Wanted_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Page_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    modified_by?: InputMaybe<Create_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Product_Input = {
    created_by?: InputMaybe<Create_Directus_Users_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    /** Describe what makes this Product unique, for example if we've got two of them, you might say something like "black, good condition, scuff on corner" or "prototype unit, has KVM1 embossed on face" */
    description?: InputMaybe<Scalars['String']['input']>;
    donor_id?: InputMaybe<Create_Donor_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image_back?: InputMaybe<Create_Directus_Files_Input>;
    image_camera?: InputMaybe<Create_Directus_Files_Input>;
    image_detail?: InputMaybe<Create_Directus_Files_Input>;
    image_detail_2?: InputMaybe<Create_Directus_Files_Input>;
    image_front?: InputMaybe<Create_Directus_Files_Input>;
    image_open?: InputMaybe<Create_Directus_Files_Input>;
    image_reference?: InputMaybe<Create_Directus_Files_Input>;
    image_side?: InputMaybe<Create_Directus_Files_Input>;
    /** The IMEI of this Product. If the Product does not have an IMEI (for example, because it's not GSM), use the serial number. If multiple IMEIs are present, prefer IMEI1. */
    imei?: InputMaybe<Scalars['String']['input']>;
    model_id?: InputMaybe<Create_Model_Input>;
    /** Notes for internal use. For example, you might want to mention when this specific Product was donated to the Museum. */
    note?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Related_Model_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Create_Model_Input>;
    related_id?: InputMaybe<Create_Model_Input>;
};

export type Create_Release_Input = {
    date_created?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
    user_created?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Reset_Build_Process_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Resources_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Sponsors_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    supersponsor?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Team_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Create_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Create_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Date_Filter_Operators = {
    _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _eq?: InputMaybe<Scalars['String']['input']>;
    _gt?: InputMaybe<Scalars['String']['input']>;
    _gte?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _lt?: InputMaybe<Scalars['String']['input']>;
    _lte?: InputMaybe<Scalars['String']['input']>;
    _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Date_Function_Filter_Operators = {
    day?: InputMaybe<Number_Filter_Operators>;
    month?: InputMaybe<Number_Filter_Operators>;
    week?: InputMaybe<Number_Filter_Operators>;
    weekday?: InputMaybe<Number_Filter_Operators>;
    year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
    __typename: 'date_functions';
    day?: Maybe<Scalars['Int']['output']>;
    month?: Maybe<Scalars['Int']['output']>;
    week?: Maybe<Scalars['Int']['output']>;
    weekday?: Maybe<Scalars['Int']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

export type Datetime_Function_Filter_Operators = {
    day?: InputMaybe<Number_Filter_Operators>;
    hour?: InputMaybe<Number_Filter_Operators>;
    minute?: InputMaybe<Number_Filter_Operators>;
    month?: InputMaybe<Number_Filter_Operators>;
    second?: InputMaybe<Number_Filter_Operators>;
    week?: InputMaybe<Number_Filter_Operators>;
    weekday?: InputMaybe<Number_Filter_Operators>;
    year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
    __typename: 'datetime_functions';
    day?: Maybe<Scalars['Int']['output']>;
    hour?: Maybe<Scalars['Int']['output']>;
    minute?: Maybe<Scalars['Int']['output']>;
    month?: Maybe<Scalars['Int']['output']>;
    second?: Maybe<Scalars['Int']['output']>;
    week?: Maybe<Scalars['Int']['output']>;
    weekday?: Maybe<Scalars['Int']['output']>;
    year?: Maybe<Scalars['Int']['output']>;
};

export type Delete_Many = {
    __typename: 'delete_many';
    ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
    __typename: 'delete_one';
    id: Scalars['ID']['output'];
};

export type Directus_Activity = {
    __typename: 'directus_activity';
    action: Scalars['String']['output'];
    collection: Scalars['String']['output'];
    comment?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    ip?: Maybe<Scalars['String']['output']>;
    item: Scalars['String']['output'];
    origin?: Maybe<Scalars['String']['output']>;
    revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
    revisions_func?: Maybe<Count_Functions>;
    timestamp?: Maybe<Scalars['Date']['output']>;
    timestamp_func?: Maybe<Datetime_Functions>;
    user?: Maybe<Directus_Users>;
    user_agent?: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
    filter?: InputMaybe<Directus_Revisions_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
    action?: InputMaybe<String_Filter_Operators>;
    collection?: InputMaybe<String_Filter_Operators>;
    comment?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    ip?: InputMaybe<String_Filter_Operators>;
    item?: InputMaybe<String_Filter_Operators>;
    origin?: InputMaybe<String_Filter_Operators>;
    revisions?: InputMaybe<Directus_Revisions_Filter>;
    revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
    timestamp?: InputMaybe<Date_Filter_Operators>;
    timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    user?: InputMaybe<Directus_Users_Filter>;
    user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
    __typename: 'directus_activity_mutated';
    data?: Maybe<Directus_Activity>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Dashboards = {
    __typename: 'directus_dashboards';
    color?: Maybe<Scalars['String']['output']>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    note?: Maybe<Scalars['String']['output']>;
    panels?: Maybe<Array<Maybe<Directus_Panels>>>;
    panels_func?: Maybe<Count_Functions>;
    user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
    filter?: InputMaybe<Directus_Panels_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
    color?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    icon?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    note?: InputMaybe<String_Filter_Operators>;
    panels?: InputMaybe<Directus_Panels_Filter>;
    panels_func?: InputMaybe<Count_Function_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
    __typename: 'directus_dashboards_mutated';
    data?: Maybe<Directus_Dashboards>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Files = {
    __typename: 'directus_files';
    charset?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    duration?: Maybe<Scalars['Int']['output']>;
    embed?: Maybe<Scalars['String']['output']>;
    filename_disk?: Maybe<Scalars['String']['output']>;
    filename_download: Scalars['String']['output'];
    filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
    folder?: Maybe<Directus_Folders>;
    height?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    location?: Maybe<Scalars['String']['output']>;
    metadata?: Maybe<Scalars['JSON']['output']>;
    metadata_func?: Maybe<Count_Functions>;
    model?: Maybe<Array<Maybe<Model_Directus_Files>>>;
    modified_by?: Maybe<Directus_Users>;
    modified_on?: Maybe<Scalars['Date']['output']>;
    modified_on_func?: Maybe<Datetime_Functions>;
    storage: Scalars['String']['output'];
    tags?: Maybe<Scalars['JSON']['output']>;
    tags_func?: Maybe<Count_Functions>;
    title?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    uploaded_by?: Maybe<Directus_Users>;
    uploaded_on?: Maybe<Scalars['Date']['output']>;
    uploaded_on_func?: Maybe<Datetime_Functions>;
    width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
    filter?: InputMaybe<Directus_Folders_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModelArgs = {
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    charset?: InputMaybe<String_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    duration?: InputMaybe<Number_Filter_Operators>;
    embed?: InputMaybe<String_Filter_Operators>;
    filename_disk?: InputMaybe<String_Filter_Operators>;
    filename_download?: InputMaybe<String_Filter_Operators>;
    filesize?: InputMaybe<Number_Filter_Operators>;
    folder?: InputMaybe<Directus_Folders_Filter>;
    height?: InputMaybe<Number_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    location?: InputMaybe<String_Filter_Operators>;
    metadata?: InputMaybe<String_Filter_Operators>;
    metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
    model?: InputMaybe<Model_Directus_Files_Filter>;
    modified_by?: InputMaybe<Directus_Users_Filter>;
    modified_on?: InputMaybe<Date_Filter_Operators>;
    modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    storage?: InputMaybe<String_Filter_Operators>;
    tags?: InputMaybe<String_Filter_Operators>;
    tags_func?: InputMaybe<Count_Function_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
    type?: InputMaybe<String_Filter_Operators>;
    uploaded_by?: InputMaybe<Directus_Users_Filter>;
    uploaded_on?: InputMaybe<Date_Filter_Operators>;
    uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
    __typename: 'directus_files_mutated';
    data?: Maybe<Directus_Files>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Flows = {
    __typename: 'directus_flows';
    accountability?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    operation?: Maybe<Directus_Operations>;
    operations?: Maybe<Array<Maybe<Directus_Operations>>>;
    operations_func?: Maybe<Count_Functions>;
    options?: Maybe<Scalars['JSON']['output']>;
    options_func?: Maybe<Count_Functions>;
    status?: Maybe<Scalars['String']['output']>;
    trigger?: Maybe<Scalars['String']['output']>;
    user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
    filter?: InputMaybe<Directus_Operations_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
    filter?: InputMaybe<Directus_Operations_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
    accountability?: InputMaybe<String_Filter_Operators>;
    color?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    icon?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    operation?: InputMaybe<Directus_Operations_Filter>;
    operations?: InputMaybe<Directus_Operations_Filter>;
    operations_func?: InputMaybe<Count_Function_Filter_Operators>;
    options?: InputMaybe<String_Filter_Operators>;
    options_func?: InputMaybe<Count_Function_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    trigger?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
    __typename: 'directus_flows_mutated';
    data?: Maybe<Directus_Flows>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Folders = {
    __typename: 'directus_folders';
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
    filter?: InputMaybe<Directus_Folders_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
    __typename: 'directus_folders_mutated';
    data?: Maybe<Directus_Folders>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
    __typename: 'directus_notifications';
    collection?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    item?: Maybe<Scalars['String']['output']>;
    message?: Maybe<Scalars['String']['output']>;
    recipient?: Maybe<Directus_Users>;
    sender?: Maybe<Directus_Users>;
    status?: Maybe<Scalars['String']['output']>;
    subject: Scalars['String']['output'];
    timestamp?: Maybe<Scalars['Date']['output']>;
    timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
    __typename: 'directus_notifications_mutated';
    data?: Maybe<Directus_Notifications>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Operations = {
    __typename: 'directus_operations';
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    flow?: Maybe<Directus_Flows>;
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    name?: Maybe<Scalars['String']['output']>;
    options?: Maybe<Scalars['JSON']['output']>;
    options_func?: Maybe<Count_Functions>;
    position_x: Scalars['Int']['output'];
    position_y: Scalars['Int']['output'];
    reject?: Maybe<Directus_Operations>;
    resolve?: Maybe<Directus_Operations>;
    type: Scalars['String']['output'];
    user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
    filter?: InputMaybe<Directus_Flows_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
    filter?: InputMaybe<Directus_Operations_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
    filter?: InputMaybe<Directus_Operations_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    flow?: InputMaybe<Directus_Flows_Filter>;
    id?: InputMaybe<String_Filter_Operators>;
    key?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    options?: InputMaybe<String_Filter_Operators>;
    options_func?: InputMaybe<Count_Function_Filter_Operators>;
    position_x?: InputMaybe<Number_Filter_Operators>;
    position_y?: InputMaybe<Number_Filter_Operators>;
    reject?: InputMaybe<Directus_Operations_Filter>;
    resolve?: InputMaybe<Directus_Operations_Filter>;
    type?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
    __typename: 'directus_operations_mutated';
    data?: Maybe<Directus_Operations>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Panels = {
    __typename: 'directus_panels';
    color?: Maybe<Scalars['String']['output']>;
    dashboard?: Maybe<Directus_Dashboards>;
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    height: Scalars['Int']['output'];
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    note?: Maybe<Scalars['String']['output']>;
    options?: Maybe<Scalars['JSON']['output']>;
    options_func?: Maybe<Count_Functions>;
    position_x: Scalars['Int']['output'];
    position_y: Scalars['Int']['output'];
    show_header: Scalars['Boolean']['output'];
    type: Scalars['String']['output'];
    user_created?: Maybe<Directus_Users>;
    width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
    filter?: InputMaybe<Directus_Dashboards_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
    color?: InputMaybe<String_Filter_Operators>;
    dashboard?: InputMaybe<Directus_Dashboards_Filter>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    height?: InputMaybe<Number_Filter_Operators>;
    icon?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    note?: InputMaybe<String_Filter_Operators>;
    options?: InputMaybe<String_Filter_Operators>;
    options_func?: InputMaybe<Count_Function_Filter_Operators>;
    position_x?: InputMaybe<Number_Filter_Operators>;
    position_y?: InputMaybe<Number_Filter_Operators>;
    show_header?: InputMaybe<Boolean_Filter_Operators>;
    type?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
    width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
    __typename: 'directus_panels_mutated';
    data?: Maybe<Directus_Panels>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Permissions = {
    __typename: 'directus_permissions';
    action: Scalars['String']['output'];
    collection: Scalars['String']['output'];
    fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    id: Scalars['ID']['output'];
    permissions?: Maybe<Scalars['JSON']['output']>;
    permissions_func?: Maybe<Count_Functions>;
    presets?: Maybe<Scalars['JSON']['output']>;
    presets_func?: Maybe<Count_Functions>;
    role?: Maybe<Directus_Roles>;
    validation?: Maybe<Scalars['JSON']['output']>;
    validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Mutated = {
    __typename: 'directus_permissions_mutated';
    data?: Maybe<Directus_Permissions>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Presets = {
    __typename: 'directus_presets';
    bookmark?: Maybe<Scalars['String']['output']>;
    collection?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    filter?: Maybe<Scalars['JSON']['output']>;
    filter_func?: Maybe<Count_Functions>;
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    layout?: Maybe<Scalars['String']['output']>;
    layout_options?: Maybe<Scalars['JSON']['output']>;
    layout_options_func?: Maybe<Count_Functions>;
    layout_query?: Maybe<Scalars['JSON']['output']>;
    layout_query_func?: Maybe<Count_Functions>;
    refresh_interval?: Maybe<Scalars['Int']['output']>;
    role?: Maybe<Directus_Roles>;
    search?: Maybe<Scalars['String']['output']>;
    user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
    __typename: 'directus_presets_mutated';
    data?: Maybe<Directus_Presets>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Revisions = {
    __typename: 'directus_revisions';
    activity?: Maybe<Directus_Activity>;
    collection: Scalars['String']['output'];
    data?: Maybe<Scalars['JSON']['output']>;
    data_func?: Maybe<Count_Functions>;
    delta?: Maybe<Scalars['JSON']['output']>;
    delta_func?: Maybe<Count_Functions>;
    id: Scalars['ID']['output'];
    item: Scalars['String']['output'];
    parent?: Maybe<Directus_Revisions>;
    version?: Maybe<Directus_Versions>;
};


export type Directus_RevisionsActivityArgs = {
    filter?: InputMaybe<Directus_Activity_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
    filter?: InputMaybe<Directus_Revisions_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsVersionArgs = {
    filter?: InputMaybe<Directus_Versions_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
    activity?: InputMaybe<Directus_Activity_Filter>;
    collection?: InputMaybe<String_Filter_Operators>;
    data?: InputMaybe<String_Filter_Operators>;
    data_func?: InputMaybe<Count_Function_Filter_Operators>;
    delta?: InputMaybe<String_Filter_Operators>;
    delta_func?: InputMaybe<Count_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    item?: InputMaybe<String_Filter_Operators>;
    parent?: InputMaybe<Directus_Revisions_Filter>;
    version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Revisions_Mutated = {
    __typename: 'directus_revisions_mutated';
    data?: Maybe<Directus_Revisions>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Roles = {
    __typename: 'directus_roles';
    admin_access: Scalars['Boolean']['output'];
    app_access?: Maybe<Scalars['Boolean']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    enforce_tfa: Scalars['Boolean']['output'];
    icon?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    name: Scalars['String']['output'];
    users?: Maybe<Array<Maybe<Directus_Users>>>;
    users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
    admin_access?: InputMaybe<Boolean_Filter_Operators>;
    app_access?: InputMaybe<Boolean_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
    icon?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    ip_access?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    users?: InputMaybe<Directus_Users_Filter>;
    users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
    __typename: 'directus_roles_mutated';
    data?: Maybe<Directus_Roles>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Settings = {
    __typename: 'directus_settings';
    auth_login_attempts?: Maybe<Scalars['Int']['output']>;
    auth_password_policy?: Maybe<Scalars['String']['output']>;
    basemaps?: Maybe<Scalars['JSON']['output']>;
    basemaps_func?: Maybe<Count_Functions>;
    custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
    custom_aspect_ratios_func?: Maybe<Count_Functions>;
    custom_css?: Maybe<Scalars['String']['output']>;
    default_appearance?: Maybe<Scalars['String']['output']>;
    default_language?: Maybe<Scalars['String']['output']>;
    default_theme_dark?: Maybe<Scalars['String']['output']>;
    default_theme_light?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    mapbox_key?: Maybe<Scalars['String']['output']>;
    module_bar?: Maybe<Scalars['JSON']['output']>;
    module_bar_func?: Maybe<Count_Functions>;
    /** $t:field_options.directus_settings.project_color_note */
    project_color?: Maybe<Scalars['String']['output']>;
    project_descriptor?: Maybe<Scalars['String']['output']>;
    project_logo?: Maybe<Directus_Files>;
    project_name?: Maybe<Scalars['String']['output']>;
    project_url?: Maybe<Scalars['String']['output']>;
    public_background?: Maybe<Directus_Files>;
    public_favicon?: Maybe<Directus_Files>;
    public_foreground?: Maybe<Directus_Files>;
    public_note?: Maybe<Scalars['String']['output']>;
    storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
    storage_asset_presets_func?: Maybe<Count_Functions>;
    storage_asset_transform?: Maybe<Scalars['String']['output']>;
    storage_default_folder?: Maybe<Directus_Folders>;
    theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
    theme_dark_overrides_func?: Maybe<Count_Functions>;
    theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
    theme_light_overrides_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_FaviconArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
    filter?: InputMaybe<Directus_Folders_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Settings_Mutated = {
    __typename: 'directus_settings_mutated';
    data?: Maybe<Directus_Settings>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Shares = {
    __typename: 'directus_shares';
    collection: Scalars['String']['output'];
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    /** $t:shared_leave_blank_for_unlimited */
    date_end?: Maybe<Scalars['Date']['output']>;
    date_end_func?: Maybe<Datetime_Functions>;
    /** $t:shared_leave_blank_for_unlimited */
    date_start?: Maybe<Scalars['Date']['output']>;
    date_start_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    item: Scalars['String']['output'];
    /** $t:shared_leave_blank_for_unlimited */
    max_uses?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    /** $t:shared_leave_blank_for_passwordless_access */
    password?: Maybe<Scalars['Hash']['output']>;
    role?: Maybe<Directus_Roles>;
    times_used?: Maybe<Scalars['Int']['output']>;
    user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
    __typename: 'directus_shares_mutated';
    data?: Maybe<Directus_Shares>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Translations = {
    __typename: 'directus_translations';
    id: Scalars['ID']['output'];
    key: Scalars['String']['output'];
    language: Scalars['String']['output'];
    value: Scalars['String']['output'];
};

export type Directus_Translations_Mutated = {
    __typename: 'directus_translations_mutated';
    data?: Maybe<Directus_Translations>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Users = {
    __typename: 'directus_users';
    appearance?: Maybe<Scalars['String']['output']>;
    auth_data?: Maybe<Scalars['JSON']['output']>;
    auth_data_func?: Maybe<Count_Functions>;
    avatar?: Maybe<Directus_Files>;
    description?: Maybe<Scalars['String']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    email_notifications?: Maybe<Scalars['Boolean']['output']>;
    external_identifier?: Maybe<Scalars['String']['output']>;
    first_name?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    language?: Maybe<Scalars['String']['output']>;
    last_access?: Maybe<Scalars['Date']['output']>;
    last_access_func?: Maybe<Datetime_Functions>;
    last_name?: Maybe<Scalars['String']['output']>;
    last_page?: Maybe<Scalars['String']['output']>;
    location?: Maybe<Scalars['String']['output']>;
    password?: Maybe<Scalars['Hash']['output']>;
    provider?: Maybe<Scalars['String']['output']>;
    role?: Maybe<Directus_Roles>;
    status?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Scalars['JSON']['output']>;
    tags_func?: Maybe<Count_Functions>;
    tfa_secret?: Maybe<Scalars['Hash']['output']>;
    theme_dark?: Maybe<Scalars['String']['output']>;
    theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
    theme_dark_overrides_func?: Maybe<Count_Functions>;
    theme_light?: Maybe<Scalars['String']['output']>;
    theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
    theme_light_overrides_func?: Maybe<Count_Functions>;
    title?: Maybe<Scalars['String']['output']>;
    token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
    filter?: InputMaybe<Directus_Roles_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
    appearance?: InputMaybe<String_Filter_Operators>;
    auth_data?: InputMaybe<String_Filter_Operators>;
    auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
    avatar?: InputMaybe<Directus_Files_Filter>;
    description?: InputMaybe<String_Filter_Operators>;
    email?: InputMaybe<String_Filter_Operators>;
    email_notifications?: InputMaybe<Boolean_Filter_Operators>;
    external_identifier?: InputMaybe<String_Filter_Operators>;
    first_name?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    language?: InputMaybe<String_Filter_Operators>;
    last_access?: InputMaybe<Date_Filter_Operators>;
    last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    last_name?: InputMaybe<String_Filter_Operators>;
    last_page?: InputMaybe<String_Filter_Operators>;
    location?: InputMaybe<String_Filter_Operators>;
    password?: InputMaybe<Hash_Filter_Operators>;
    provider?: InputMaybe<String_Filter_Operators>;
    role?: InputMaybe<Directus_Roles_Filter>;
    status?: InputMaybe<String_Filter_Operators>;
    tags?: InputMaybe<String_Filter_Operators>;
    tags_func?: InputMaybe<Count_Function_Filter_Operators>;
    tfa_secret?: InputMaybe<Hash_Filter_Operators>;
    theme_dark?: InputMaybe<String_Filter_Operators>;
    theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
    theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
    theme_light?: InputMaybe<String_Filter_Operators>;
    theme_light_overrides?: InputMaybe<String_Filter_Operators>;
    theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
    token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
    __typename: 'directus_users_mutated';
    data?: Maybe<Directus_Users>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Versions = {
    __typename: 'directus_versions';
    collection: Scalars['String']['output'];
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    date_updated?: Maybe<Scalars['Date']['output']>;
    date_updated_func?: Maybe<Datetime_Functions>;
    hash?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    item: Scalars['String']['output'];
    key: Scalars['String']['output'];
    name?: Maybe<Scalars['String']['output']>;
    user_created?: Maybe<Directus_Users>;
    user_updated?: Maybe<Directus_Users>;
};


export type Directus_VersionsUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_VersionsUser_UpdatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Versions_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
    collection?: InputMaybe<String_Filter_Operators>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated?: InputMaybe<Date_Filter_Operators>;
    date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    hash?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    item?: InputMaybe<String_Filter_Operators>;
    key?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
    user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Versions_Mutated = {
    __typename: 'directus_versions_mutated';
    data?: Maybe<Directus_Versions>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Directus_Webhooks = {
    __typename: 'directus_webhooks';
    actions: Array<Maybe<Scalars['String']['output']>>;
    collections: Array<Maybe<Scalars['String']['output']>>;
    data?: Maybe<Scalars['Boolean']['output']>;
    headers?: Maybe<Scalars['JSON']['output']>;
    headers_func?: Maybe<Count_Functions>;
    id: Scalars['ID']['output'];
    method?: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    status?: Maybe<Scalars['String']['output']>;
    url: Scalars['String']['output'];
};

export type Directus_Webhooks_Mutated = {
    __typename: 'directus_webhooks_mutated';
    data?: Maybe<Directus_Webhooks>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Donor = {
    __typename: 'donor';
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    linkedin_url?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};

export type Donor_Aggregated = {
    __typename: 'donor_aggregated';
    avg?: Maybe<Donor_Aggregated_Fields>;
    avgDistinct?: Maybe<Donor_Aggregated_Fields>;
    count?: Maybe<Donor_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Donor_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Donor_Aggregated_Fields>;
    min?: Maybe<Donor_Aggregated_Fields>;
    sum?: Maybe<Donor_Aggregated_Fields>;
    sumDistinct?: Maybe<Donor_Aggregated_Fields>;
};

export type Donor_Aggregated_Count = {
    __typename: 'donor_aggregated_count';
    description?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    linkedin_url?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Donor_Aggregated_Fields = {
    __typename: 'donor_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Donor_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Donor_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Donor_Filter>>>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    linkedin_url?: InputMaybe<String_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Donor_Mutated = {
    __typename: 'donor_mutated';
    data?: Maybe<Donor>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Educational_Docs = {
    __typename: 'educational_docs';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']['output']>;
    file?: Maybe<Directus_Files>;
    id: Scalars['ID']['output'];
    owner?: Maybe<Directus_Users>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};


export type Educational_DocsFileArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Educational_DocsOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Educational_Docs_Aggregated = {
    __typename: 'educational_docs_aggregated';
    avg?: Maybe<Educational_Docs_Aggregated_Fields>;
    avgDistinct?: Maybe<Educational_Docs_Aggregated_Fields>;
    count?: Maybe<Educational_Docs_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Educational_Docs_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Educational_Docs_Aggregated_Fields>;
    min?: Maybe<Educational_Docs_Aggregated_Fields>;
    sum?: Maybe<Educational_Docs_Aggregated_Fields>;
    sumDistinct?: Maybe<Educational_Docs_Aggregated_Fields>;
};

export type Educational_Docs_Aggregated_Count = {
    __typename: 'educational_docs_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['Int']['output']>;
    file?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
};

export type Educational_Docs_Aggregated_Fields = {
    __typename: 'educational_docs_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Educational_Docs_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Educational_Docs_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Educational_Docs_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    file?: InputMaybe<Directus_Files_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Educational_Docs_Mutated = {
    __typename: 'educational_docs_mutated';
    data?: Maybe<Educational_Docs>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Form_Factor = {
    __typename: 'form_factor';
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    name?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};

export type Form_Factor_Aggregated = {
    __typename: 'form_factor_aggregated';
    avg?: Maybe<Form_Factor_Aggregated_Fields>;
    avgDistinct?: Maybe<Form_Factor_Aggregated_Fields>;
    count?: Maybe<Form_Factor_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Form_Factor_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Form_Factor_Aggregated_Fields>;
    min?: Maybe<Form_Factor_Aggregated_Fields>;
    sum?: Maybe<Form_Factor_Aggregated_Fields>;
    sumDistinct?: Maybe<Form_Factor_Aggregated_Fields>;
};

export type Form_Factor_Aggregated_Count = {
    __typename: 'form_factor_aggregated_count';
    description?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Form_Factor_Aggregated_Fields = {
    __typename: 'form_factor_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Form_Factor_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Form_Factor_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Form_Factor_Filter>>>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    name?: InputMaybe<String_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Form_Factor_Mutated = {
    __typename: 'form_factor_mutated';
    data?: Maybe<Form_Factor>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Git_Pull = {
    __typename: 'git_pull';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    note?: Maybe<Scalars['String']['output']>;
    owner?: Maybe<Directus_Users>;
};


export type Git_PullOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Git_Pull_Aggregated = {
    __typename: 'git_pull_aggregated';
    avg?: Maybe<Git_Pull_Aggregated_Fields>;
    avgDistinct?: Maybe<Git_Pull_Aggregated_Fields>;
    count?: Maybe<Git_Pull_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Git_Pull_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Git_Pull_Aggregated_Fields>;
    min?: Maybe<Git_Pull_Aggregated_Fields>;
    sum?: Maybe<Git_Pull_Aggregated_Fields>;
    sumDistinct?: Maybe<Git_Pull_Aggregated_Fields>;
};

export type Git_Pull_Aggregated_Count = {
    __typename: 'git_pull_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    note?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
};

export type Git_Pull_Aggregated_Fields = {
    __typename: 'git_pull_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Git_Pull_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Git_Pull_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Git_Pull_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    note?: InputMaybe<String_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
};

export type Git_Pull_Mutated = {
    __typename: 'git_pull_mutated';
    data?: Maybe<Git_Pull>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
    _empty?: InputMaybe<Scalars['Boolean']['input']>;
    _nempty?: InputMaybe<Scalars['Boolean']['input']>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Homepage_Slides = {
    __typename: 'homepage_slides';
    background_image?: Maybe<Directus_Files>;
    content?: Maybe<Scalars['String']['output']>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    owner?: Maybe<Directus_Users>;
    read_more_label?: Maybe<Scalars['String']['output']>;
    read_more_link?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    /** (CSS class name) */
    style?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
};


export type Homepage_SlidesBackground_ImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Homepage_SlidesOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Homepage_Slides_Aggregated = {
    __typename: 'homepage_slides_aggregated';
    avg?: Maybe<Homepage_Slides_Aggregated_Fields>;
    avgDistinct?: Maybe<Homepage_Slides_Aggregated_Fields>;
    count?: Maybe<Homepage_Slides_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Homepage_Slides_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Homepage_Slides_Aggregated_Fields>;
    min?: Maybe<Homepage_Slides_Aggregated_Fields>;
    sum?: Maybe<Homepage_Slides_Aggregated_Fields>;
    sumDistinct?: Maybe<Homepage_Slides_Aggregated_Fields>;
};

export type Homepage_Slides_Aggregated_Count = {
    __typename: 'homepage_slides_aggregated_count';
    background_image?: Maybe<Scalars['Int']['output']>;
    content?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    read_more_label?: Maybe<Scalars['Int']['output']>;
    read_more_link?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    /** (CSS class name) */
    style?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
};

export type Homepage_Slides_Aggregated_Fields = {
    __typename: 'homepage_slides_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Homepage_Slides_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Homepage_Slides_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Homepage_Slides_Filter>>>;
    background_image?: InputMaybe<Directus_Files_Filter>;
    content?: InputMaybe<String_Filter_Operators>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    read_more_label?: InputMaybe<String_Filter_Operators>;
    read_more_link?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    style?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Homepage_Slides_Mutated = {
    __typename: 'homepage_slides_mutated';
    data?: Maybe<Homepage_Slides>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Import_Raw = {
    __typename: 'import_raw';
    Brand?: Maybe<Scalars['String']['output']>;
    Codename?: Maybe<Scalars['String']['output']>;
    Day?: Maybe<Scalars['String']['output']>;
    Description?: Maybe<Scalars['String']['output']>;
    DonatedBy?: Maybe<Scalars['String']['output']>;
    FormFactor?: Maybe<Scalars['String']['output']>;
    IMEI?: Maybe<Scalars['String']['output']>;
    Model?: Maybe<Scalars['String']['output']>;
    Month?: Maybe<Scalars['String']['output']>;
    Notes?: Maybe<Scalars['String']['output']>;
    Publish?: Maybe<Scalars['String']['output']>;
    Video?: Maybe<Scalars['String']['output']>;
    Weight?: Maybe<Scalars['String']['output']>;
    Year?: Maybe<Scalars['String']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    donor_id?: Maybe<Scalars['Int']['output']>;
    id: Scalars['ID']['output'];
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Import_Raw_Aggregated = {
    __typename: 'import_raw_aggregated';
    avg?: Maybe<Import_Raw_Aggregated_Fields>;
    avgDistinct?: Maybe<Import_Raw_Aggregated_Fields>;
    count?: Maybe<Import_Raw_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Import_Raw_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Import_Raw_Aggregated_Fields>;
    min?: Maybe<Import_Raw_Aggregated_Fields>;
    sum?: Maybe<Import_Raw_Aggregated_Fields>;
    sumDistinct?: Maybe<Import_Raw_Aggregated_Fields>;
};

export type Import_Raw_Aggregated_Count = {
    __typename: 'import_raw_aggregated_count';
    Brand?: Maybe<Scalars['Int']['output']>;
    Codename?: Maybe<Scalars['Int']['output']>;
    Day?: Maybe<Scalars['Int']['output']>;
    Description?: Maybe<Scalars['Int']['output']>;
    DonatedBy?: Maybe<Scalars['Int']['output']>;
    FormFactor?: Maybe<Scalars['Int']['output']>;
    IMEI?: Maybe<Scalars['Int']['output']>;
    Model?: Maybe<Scalars['Int']['output']>;
    Month?: Maybe<Scalars['Int']['output']>;
    Notes?: Maybe<Scalars['Int']['output']>;
    Publish?: Maybe<Scalars['Int']['output']>;
    Video?: Maybe<Scalars['Int']['output']>;
    Weight?: Maybe<Scalars['Int']['output']>;
    Year?: Maybe<Scalars['Int']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    donor_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Import_Raw_Aggregated_Fields = {
    __typename: 'import_raw_aggregated_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    donor_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Import_Raw_Filter = {
    Brand?: InputMaybe<String_Filter_Operators>;
    Codename?: InputMaybe<String_Filter_Operators>;
    Day?: InputMaybe<String_Filter_Operators>;
    Description?: InputMaybe<String_Filter_Operators>;
    DonatedBy?: InputMaybe<String_Filter_Operators>;
    FormFactor?: InputMaybe<String_Filter_Operators>;
    IMEI?: InputMaybe<String_Filter_Operators>;
    Model?: InputMaybe<String_Filter_Operators>;
    Month?: InputMaybe<String_Filter_Operators>;
    Notes?: InputMaybe<String_Filter_Operators>;
    Publish?: InputMaybe<String_Filter_Operators>;
    Video?: InputMaybe<String_Filter_Operators>;
    Weight?: InputMaybe<String_Filter_Operators>;
    Year?: InputMaybe<String_Filter_Operators>;
    _and?: InputMaybe<Array<InputMaybe<Import_Raw_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Import_Raw_Filter>>>;
    brand_id?: InputMaybe<Number_Filter_Operators>;
    donor_id?: InputMaybe<Number_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Number_Filter_Operators>;
};

export type Import_Raw_Mutated = {
    __typename: 'import_raw_mutated';
    data?: Maybe<Import_Raw>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Import_Update = {
    __typename: 'import_update';
    Brand?: Maybe<Scalars['String']['output']>;
    Codename?: Maybe<Scalars['String']['output']>;
    Day?: Maybe<Scalars['String']['output']>;
    Description?: Maybe<Scalars['String']['output']>;
    DonatedBy?: Maybe<Scalars['String']['output']>;
    FormFactor?: Maybe<Scalars['String']['output']>;
    ID: Scalars['ID']['output'];
    IMEI?: Maybe<Scalars['String']['output']>;
    Model?: Maybe<Scalars['String']['output']>;
    Month?: Maybe<Scalars['String']['output']>;
    Notes?: Maybe<Scalars['String']['output']>;
    Publish?: Maybe<Scalars['String']['output']>;
    Video?: Maybe<Scalars['String']['output']>;
    Weight?: Maybe<Scalars['String']['output']>;
    Year?: Maybe<Scalars['String']['output']>;
    bla?: Maybe<Scalars['String']['output']>;
    brand_id: Scalars['Int']['output'];
    donor_id: Scalars['Int']['output'];
    model_id: Scalars['Int']['output'];
};

export type Import_Update_Aggregated = {
    __typename: 'import_update_aggregated';
    avg?: Maybe<Import_Update_Aggregated_Fields>;
    avgDistinct?: Maybe<Import_Update_Aggregated_Fields>;
    count?: Maybe<Import_Update_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Import_Update_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Import_Update_Aggregated_Fields>;
    min?: Maybe<Import_Update_Aggregated_Fields>;
    sum?: Maybe<Import_Update_Aggregated_Fields>;
    sumDistinct?: Maybe<Import_Update_Aggregated_Fields>;
};

export type Import_Update_Aggregated_Count = {
    __typename: 'import_update_aggregated_count';
    Brand?: Maybe<Scalars['Int']['output']>;
    Codename?: Maybe<Scalars['Int']['output']>;
    Day?: Maybe<Scalars['Int']['output']>;
    Description?: Maybe<Scalars['Int']['output']>;
    DonatedBy?: Maybe<Scalars['Int']['output']>;
    FormFactor?: Maybe<Scalars['Int']['output']>;
    ID?: Maybe<Scalars['Int']['output']>;
    IMEI?: Maybe<Scalars['Int']['output']>;
    Model?: Maybe<Scalars['Int']['output']>;
    Month?: Maybe<Scalars['Int']['output']>;
    Notes?: Maybe<Scalars['Int']['output']>;
    Publish?: Maybe<Scalars['Int']['output']>;
    Video?: Maybe<Scalars['Int']['output']>;
    Weight?: Maybe<Scalars['Int']['output']>;
    Year?: Maybe<Scalars['Int']['output']>;
    bla?: Maybe<Scalars['Int']['output']>;
    brand_id?: Maybe<Scalars['Int']['output']>;
    donor_id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Import_Update_Aggregated_Fields = {
    __typename: 'import_update_aggregated_fields';
    ID?: Maybe<Scalars['Float']['output']>;
    brand_id?: Maybe<Scalars['Float']['output']>;
    donor_id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Import_Update_Filter = {
    Brand?: InputMaybe<String_Filter_Operators>;
    Codename?: InputMaybe<String_Filter_Operators>;
    Day?: InputMaybe<String_Filter_Operators>;
    Description?: InputMaybe<String_Filter_Operators>;
    DonatedBy?: InputMaybe<String_Filter_Operators>;
    FormFactor?: InputMaybe<String_Filter_Operators>;
    ID?: InputMaybe<Number_Filter_Operators>;
    IMEI?: InputMaybe<String_Filter_Operators>;
    Model?: InputMaybe<String_Filter_Operators>;
    Month?: InputMaybe<String_Filter_Operators>;
    Notes?: InputMaybe<String_Filter_Operators>;
    Publish?: InputMaybe<String_Filter_Operators>;
    Video?: InputMaybe<String_Filter_Operators>;
    Weight?: InputMaybe<String_Filter_Operators>;
    Year?: InputMaybe<String_Filter_Operators>;
    _and?: InputMaybe<Array<InputMaybe<Import_Update_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Import_Update_Filter>>>;
    bla?: InputMaybe<String_Filter_Operators>;
    brand_id?: InputMaybe<Number_Filter_Operators>;
    donor_id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Number_Filter_Operators>;
};

export type Import_Update_Mutated = {
    __typename: 'import_update_mutated';
    data?: Maybe<Import_Update>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type List = {
    __typename: 'list';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    model?: Maybe<Array<Maybe<Model_List>>>;
    name: Scalars['String']['output'];
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};


export type ListImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ListModelArgs = {
    filter?: InputMaybe<Model_List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type List_Aggregated = {
    __typename: 'list_aggregated';
    avg?: Maybe<List_Aggregated_Fields>;
    avgDistinct?: Maybe<List_Aggregated_Fields>;
    count?: Maybe<List_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<List_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<List_Aggregated_Fields>;
    min?: Maybe<List_Aggregated_Fields>;
    sum?: Maybe<List_Aggregated_Fields>;
    sumDistinct?: Maybe<List_Aggregated_Fields>;
};

export type List_Aggregated_Count = {
    __typename: 'list_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type List_Aggregated_Fields = {
    __typename: 'list_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type List_Filter = {
    _and?: InputMaybe<Array<InputMaybe<List_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<List_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    model?: InputMaybe<Model_List_Filter>;
    name?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type List_Mutated = {
    __typename: 'list_mutated';
    data?: Maybe<List>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model = {
    __typename: 'model';
    brand_id?: Maybe<Brand>;
    /** The Codename of the Model. This is NOT necessarily the same as the model name / number - for example, a Nexus 5 is "grouper". */
    codename?: Maybe<Scalars['String']['output']>;
    collection?: Maybe<Array<Maybe<Model_List>>>;
    collection_func?: Maybe<Count_Functions>;
    /** A reasonably-lengthed writeup that goes on the website, with a brief history of the device and its quirks / features. */
    description?: Maybe<Scalars['String']['output']>;
    /** Generated from Brand and Model name */
    display_name?: Maybe<Scalars['String']['output']>;
    docs?: Maybe<Array<Maybe<Model_Directus_Files>>>;
    docs_func?: Maybe<Count_Functions>;
    form_factor_id?: Maybe<Form_Factor>;
    /** Hide on Homepage */
    hideonhp?: Maybe<Scalars['Boolean']['output']>;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    model?: Maybe<Array<Maybe<Related_Model>>>;
    /** The Model Name. For example, "Fairphone 4" */
    name?: Maybe<Scalars['String']['output']>;
    related_phones?: Maybe<Array<Maybe<Related_Model>>>;
    related_phones_func?: Maybe<Count_Functions>;
    /** The day this model was announced. Note: Where possible, use the date of announcement, not the day of first order / release. */
    release_day?: Maybe<Scalars['String']['output']>;
    /** The month this model was released. */
    release_month?: Maybe<Scalars['String']['output']>;
    /** The year this product was announced. */
    release_year?: Maybe<Scalars['String']['output']>;
    /** The short-form name used in URLs. */
    slug: Scalars['String']['output'];
    /** The visibility of this model. */
    status?: Maybe<Scalars['String']['output']>;
    video?: Maybe<Scalars['String']['output']>;
    video2?: Maybe<Scalars['String']['output']>;
    video3?: Maybe<Scalars['String']['output']>;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: Maybe<Scalars['Int']['output']>;
};


export type ModelBrand_IdArgs = {
    filter?: InputMaybe<Brand_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelCollectionArgs = {
    filter?: InputMaybe<Model_List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelDocsArgs = {
    filter?: InputMaybe<Model_Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelForm_Factor_IdArgs = {
    filter?: InputMaybe<Form_Factor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelModelArgs = {
    filter?: InputMaybe<Related_Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ModelRelated_PhonesArgs = {
    filter?: InputMaybe<Related_Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Model_Aggregated = {
    __typename: 'model_aggregated';
    avg?: Maybe<Model_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_Aggregated_Fields>;
    count?: Maybe<Model_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_Aggregated_Fields>;
    min?: Maybe<Model_Aggregated_Fields>;
    sum?: Maybe<Model_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_Aggregated_Fields>;
};

export type Model_Aggregated_Count = {
    __typename: 'model_aggregated_count';
    brand_id?: Maybe<Scalars['Int']['output']>;
    /** The Codename of the Model. This is NOT necessarily the same as the model name / number - for example, a Nexus 5 is "grouper". */
    codename?: Maybe<Scalars['Int']['output']>;
    collection?: Maybe<Scalars['Int']['output']>;
    /** A reasonably-lengthed writeup that goes on the website, with a brief history of the device and its quirks / features. */
    description?: Maybe<Scalars['Int']['output']>;
    /** Generated from Brand and Model name */
    display_name?: Maybe<Scalars['Int']['output']>;
    /** PDF manual, leaflets, etc */
    docs?: Maybe<Scalars['Int']['output']>;
    form_factor_id?: Maybe<Scalars['Int']['output']>;
    /** Hide on Homepage */
    hideonhp?: Maybe<Scalars['Int']['output']>;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    /** The Model Name. For example, "Fairphone 4" */
    name?: Maybe<Scalars['Int']['output']>;
    /** The other models that this model is related to (for example, an iPhone 16 would be related to the other iPhones) */
    related_phones?: Maybe<Scalars['Int']['output']>;
    /** The day this model was announced. Note: Where possible, use the date of announcement, not the day of first order / release. */
    release_day?: Maybe<Scalars['Int']['output']>;
    /** The month this model was released. */
    release_month?: Maybe<Scalars['Int']['output']>;
    /** The year this product was announced. */
    release_year?: Maybe<Scalars['Int']['output']>;
    /** The short-form name used in URLs. */
    slug?: Maybe<Scalars['Int']['output']>;
    /** The visibility of this model. */
    status?: Maybe<Scalars['Int']['output']>;
    video?: Maybe<Scalars['Int']['output']>;
    video2?: Maybe<Scalars['Int']['output']>;
    video3?: Maybe<Scalars['Int']['output']>;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: Maybe<Scalars['Int']['output']>;
};

export type Model_Aggregated_Fields = {
    __typename: 'model_aggregated_fields';
    brand_id?: Maybe<Scalars['Float']['output']>;
    form_factor_id?: Maybe<Scalars['Float']['output']>;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id?: Maybe<Scalars['Float']['output']>;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: Maybe<Scalars['Float']['output']>;
};

export type Model_Directus_Files = {
    __typename: 'model_directus_files';
    directus_files_id?: Maybe<Directus_Files>;
    id: Scalars['ID']['output'];
    model_id?: Maybe<Model>;
};


export type Model_Directus_FilesDirectus_Files_IdArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Model_Directus_FilesModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Model_Directus_Files_Aggregated = {
    __typename: 'model_directus_files_aggregated';
    avg?: Maybe<Model_Directus_Files_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_Directus_Files_Aggregated_Fields>;
    count?: Maybe<Model_Directus_Files_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_Directus_Files_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_Directus_Files_Aggregated_Fields>;
    min?: Maybe<Model_Directus_Files_Aggregated_Fields>;
    sum?: Maybe<Model_Directus_Files_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_Directus_Files_Aggregated_Fields>;
};

export type Model_Directus_Files_Aggregated_Count = {
    __typename: 'model_directus_files_aggregated_count';
    directus_files_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Model_Directus_Files_Aggregated_Fields = {
    __typename: 'model_directus_files_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Model_Directus_Files_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_Directus_Files_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_Directus_Files_Filter>>>;
    directus_files_id?: InputMaybe<Directus_Files_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Model_Filter>;
};

export type Model_Directus_Files_Mutated = {
    __typename: 'model_directus_files_mutated';
    data?: Maybe<Model_Directus_Files>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model_Files = {
    __typename: 'model_files';
    directus_files_id?: Maybe<Directus_Files>;
    id: Scalars['ID']['output'];
    model_id?: Maybe<Model>;
};


export type Model_FilesDirectus_Files_IdArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Model_FilesModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Model_Files_Aggregated = {
    __typename: 'model_files_aggregated';
    avg?: Maybe<Model_Files_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_Files_Aggregated_Fields>;
    count?: Maybe<Model_Files_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_Files_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_Files_Aggregated_Fields>;
    min?: Maybe<Model_Files_Aggregated_Fields>;
    sum?: Maybe<Model_Files_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_Files_Aggregated_Fields>;
};

export type Model_Files_Aggregated_Count = {
    __typename: 'model_files_aggregated_count';
    directus_files_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Model_Files_Aggregated_Fields = {
    __typename: 'model_files_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Model_Files_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_Files_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_Files_Filter>>>;
    directus_files_id?: InputMaybe<Directus_Files_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Model_Filter>;
};

export type Model_Files_Mutated = {
    __typename: 'model_files_mutated';
    data?: Maybe<Model_Files>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_Filter>>>;
    brand_id?: InputMaybe<Brand_Filter>;
    codename?: InputMaybe<String_Filter_Operators>;
    collection?: InputMaybe<Model_List_Filter>;
    collection_func?: InputMaybe<Count_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    display_name?: InputMaybe<String_Filter_Operators>;
    docs?: InputMaybe<Model_Directus_Files_Filter>;
    docs_func?: InputMaybe<Count_Function_Filter_Operators>;
    form_factor_id?: InputMaybe<Form_Factor_Filter>;
    hideonhp?: InputMaybe<Boolean_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    model?: InputMaybe<Related_Model_Filter>;
    name?: InputMaybe<String_Filter_Operators>;
    related_phones?: InputMaybe<Related_Model_Filter>;
    related_phones_func?: InputMaybe<Count_Function_Filter_Operators>;
    release_day?: InputMaybe<String_Filter_Operators>;
    release_month?: InputMaybe<String_Filter_Operators>;
    release_year?: InputMaybe<String_Filter_Operators>;
    slug?: InputMaybe<String_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    video?: InputMaybe<String_Filter_Operators>;
    video2?: InputMaybe<String_Filter_Operators>;
    video3?: InputMaybe<String_Filter_Operators>;
    weight?: InputMaybe<Number_Filter_Operators>;
};

export type Model_Like = {
    __typename: 'model_like';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    model_id?: Maybe<Model>;
};


export type Model_LikeModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Model_Like_Aggregated = {
    __typename: 'model_like_aggregated';
    avg?: Maybe<Model_Like_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_Like_Aggregated_Fields>;
    count?: Maybe<Model_Like_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_Like_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_Like_Aggregated_Fields>;
    min?: Maybe<Model_Like_Aggregated_Fields>;
    sum?: Maybe<Model_Like_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_Like_Aggregated_Fields>;
};

export type Model_Like_Aggregated_Count = {
    __typename: 'model_like_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Model_Like_Aggregated_Fields = {
    __typename: 'model_like_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Model_Like_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_Like_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_Like_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Model_Filter>;
};

export type Model_Like_Mutated = {
    __typename: 'model_like_mutated';
    data?: Maybe<Model_Like>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model_List = {
    __typename: 'model_list';
    id: Scalars['ID']['output'];
    list_id?: Maybe<List>;
    model_id?: Maybe<Model>;
};


export type Model_ListList_IdArgs = {
    filter?: InputMaybe<List_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Model_ListModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Model_List_Aggregated = {
    __typename: 'model_list_aggregated';
    avg?: Maybe<Model_List_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_List_Aggregated_Fields>;
    count?: Maybe<Model_List_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_List_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_List_Aggregated_Fields>;
    min?: Maybe<Model_List_Aggregated_Fields>;
    sum?: Maybe<Model_List_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_List_Aggregated_Fields>;
};

export type Model_List_Aggregated_Count = {
    __typename: 'model_list_aggregated_count';
    id?: Maybe<Scalars['Int']['output']>;
    list_id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
};

export type Model_List_Aggregated_Fields = {
    __typename: 'model_list_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    list_id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
};

export type Model_List_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_List_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_List_Filter>>>;
    id?: InputMaybe<Number_Filter_Operators>;
    list_id?: InputMaybe<List_Filter>;
    model_id?: InputMaybe<Model_Filter>;
};

export type Model_List_Mutated = {
    __typename: 'model_list_mutated';
    data?: Maybe<Model_List>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model_Mutated = {
    __typename: 'model_mutated';
    data?: Maybe<Model>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Model_Tag = {
    __typename: 'model_tag';
    id: Scalars['ID']['output'];
    model_id: Scalars['Int']['output'];
    tag_id: Scalars['Int']['output'];
};

export type Model_Tag_Aggregated = {
    __typename: 'model_tag_aggregated';
    avg?: Maybe<Model_Tag_Aggregated_Fields>;
    avgDistinct?: Maybe<Model_Tag_Aggregated_Fields>;
    count?: Maybe<Model_Tag_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Model_Tag_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Model_Tag_Aggregated_Fields>;
    min?: Maybe<Model_Tag_Aggregated_Fields>;
    sum?: Maybe<Model_Tag_Aggregated_Fields>;
    sumDistinct?: Maybe<Model_Tag_Aggregated_Fields>;
};

export type Model_Tag_Aggregated_Count = {
    __typename: 'model_tag_aggregated_count';
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
    tag_id?: Maybe<Scalars['Int']['output']>;
};

export type Model_Tag_Aggregated_Fields = {
    __typename: 'model_tag_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
    tag_id?: Maybe<Scalars['Float']['output']>;
};

export type Model_Tag_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Model_Tag_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Model_Tag_Filter>>>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Number_Filter_Operators>;
    tag_id?: InputMaybe<Number_Filter_Operators>;
};

export type Model_Tag_Mutated = {
    __typename: 'model_tag_mutated';
    data?: Maybe<Model_Tag>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Most_Wanted = {
    __typename: 'most_wanted';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    name?: Maybe<Scalars['String']['output']>;
    owner?: Maybe<Directus_Users>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};


export type Most_WantedImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Most_WantedOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Most_Wanted_Aggregated = {
    __typename: 'most_wanted_aggregated';
    avg?: Maybe<Most_Wanted_Aggregated_Fields>;
    avgDistinct?: Maybe<Most_Wanted_Aggregated_Fields>;
    count?: Maybe<Most_Wanted_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Most_Wanted_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Most_Wanted_Aggregated_Fields>;
    min?: Maybe<Most_Wanted_Aggregated_Fields>;
    sum?: Maybe<Most_Wanted_Aggregated_Fields>;
    sumDistinct?: Maybe<Most_Wanted_Aggregated_Fields>;
};

export type Most_Wanted_Aggregated_Count = {
    __typename: 'most_wanted_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Most_Wanted_Aggregated_Fields = {
    __typename: 'most_wanted_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Most_Wanted_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Most_Wanted_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Most_Wanted_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    name?: InputMaybe<String_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Most_Wanted_Mutated = {
    __typename: 'most_wanted_mutated';
    data?: Maybe<Most_Wanted>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
    _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page = {
    __typename: 'page';
    content?: Maybe<Scalars['String']['output']>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    modified_by?: Maybe<Directus_Users>;
    modified_on?: Maybe<Scalars['Date']['output']>;
    modified_on_func?: Maybe<Datetime_Functions>;
    owner?: Maybe<Directus_Users>;
    status?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};


export type PageImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageModified_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PageOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Aggregated = {
    __typename: 'page_aggregated';
    avg?: Maybe<Page_Aggregated_Fields>;
    avgDistinct?: Maybe<Page_Aggregated_Fields>;
    count?: Maybe<Page_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Page_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Page_Aggregated_Fields>;
    min?: Maybe<Page_Aggregated_Fields>;
    sum?: Maybe<Page_Aggregated_Fields>;
    sumDistinct?: Maybe<Page_Aggregated_Fields>;
};

export type Page_Aggregated_Count = {
    __typename: 'page_aggregated_count';
    content?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    modified_by?: Maybe<Scalars['Int']['output']>;
    modified_on?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
};

export type Page_Aggregated_Fields = {
    __typename: 'page_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Page_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Page_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Page_Filter>>>;
    content?: InputMaybe<String_Filter_Operators>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    modified_by?: InputMaybe<Directus_Users_Filter>;
    modified_on?: InputMaybe<Date_Filter_Operators>;
    modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    status?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Page_Mutated = {
    __typename: 'page_mutated';
    data?: Maybe<Page>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Product = {
    __typename: 'product';
    created_by?: Maybe<Directus_Users>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    /** Describe what makes this Product unique, for example if we've got two of them, you might say something like "black, good condition, scuff on corner" or "prototype unit, has KVM1 embossed on face" */
    description?: Maybe<Scalars['String']['output']>;
    donor_id?: Maybe<Donor>;
    id: Scalars['ID']['output'];
    image_back?: Maybe<Directus_Files>;
    image_camera?: Maybe<Directus_Files>;
    image_detail?: Maybe<Directus_Files>;
    image_detail_2?: Maybe<Directus_Files>;
    image_front?: Maybe<Directus_Files>;
    image_open?: Maybe<Directus_Files>;
    image_reference?: Maybe<Directus_Files>;
    image_side?: Maybe<Directus_Files>;
    /** The IMEI of this Product. If the Product does not have an IMEI (for example, because it's not GSM), use the serial number. If multiple IMEIs are present, prefer IMEI1. */
    imei?: Maybe<Scalars['String']['output']>;
    model_id?: Maybe<Model>;
    /** Notes for internal use. For example, you might want to mention when this specific Product was donated to the Museum. */
    note?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};


export type ProductCreated_ByArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductDonor_IdArgs = {
    filter?: InputMaybe<Donor_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_BackArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_CameraArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_DetailArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_Detail_2Args = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_FrontArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_OpenArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_ReferenceArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductImage_SideArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Aggregated = {
    __typename: 'product_aggregated';
    avg?: Maybe<Product_Aggregated_Fields>;
    avgDistinct?: Maybe<Product_Aggregated_Fields>;
    count?: Maybe<Product_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Product_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Product_Aggregated_Fields>;
    min?: Maybe<Product_Aggregated_Fields>;
    sum?: Maybe<Product_Aggregated_Fields>;
    sumDistinct?: Maybe<Product_Aggregated_Fields>;
};

export type Product_Aggregated_Count = {
    __typename: 'product_aggregated_count';
    created_by?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    /** Describe what makes this Product unique, for example if we've got two of them, you might say something like "black, good condition, scuff on corner" or "prototype unit, has KVM1 embossed on face" */
    description?: Maybe<Scalars['Int']['output']>;
    donor_id?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image_back?: Maybe<Scalars['Int']['output']>;
    image_camera?: Maybe<Scalars['Int']['output']>;
    image_detail?: Maybe<Scalars['Int']['output']>;
    image_detail_2?: Maybe<Scalars['Int']['output']>;
    image_front?: Maybe<Scalars['Int']['output']>;
    image_open?: Maybe<Scalars['Int']['output']>;
    /** A reference image, purely for our own internal use. This is not published. */
    image_reference?: Maybe<Scalars['Int']['output']>;
    image_side?: Maybe<Scalars['Int']['output']>;
    /** The IMEI of this Product. If the Product does not have an IMEI (for example, because it's not GSM), use the serial number. If multiple IMEIs are present, prefer IMEI1. */
    imei?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
    /** Notes for internal use. For example, you might want to mention when this specific Product was donated to the Museum. */
    note?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Product_Aggregated_Fields = {
    __typename: 'product_aggregated_fields';
    donor_id?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Product_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Product_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Product_Filter>>>;
    created_by?: InputMaybe<Directus_Users_Filter>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    donor_id?: InputMaybe<Donor_Filter>;
    id?: InputMaybe<Number_Filter_Operators>;
    image_back?: InputMaybe<Directus_Files_Filter>;
    image_camera?: InputMaybe<Directus_Files_Filter>;
    image_detail?: InputMaybe<Directus_Files_Filter>;
    image_detail_2?: InputMaybe<Directus_Files_Filter>;
    image_front?: InputMaybe<Directus_Files_Filter>;
    image_open?: InputMaybe<Directus_Files_Filter>;
    image_reference?: InputMaybe<Directus_Files_Filter>;
    image_side?: InputMaybe<Directus_Files_Filter>;
    imei?: InputMaybe<String_Filter_Operators>;
    model_id?: InputMaybe<Model_Filter>;
    note?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Product_Mutated = {
    __typename: 'product_mutated';
    data?: Maybe<Product>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Related_Model = {
    __typename: 'related_model';
    id: Scalars['ID']['output'];
    model_id?: Maybe<Model>;
    related_id?: Maybe<Model>;
};


export type Related_ModelModel_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Related_ModelRelated_IdArgs = {
    filter?: InputMaybe<Model_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Related_Model_Aggregated = {
    __typename: 'related_model_aggregated';
    avg?: Maybe<Related_Model_Aggregated_Fields>;
    avgDistinct?: Maybe<Related_Model_Aggregated_Fields>;
    count?: Maybe<Related_Model_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Related_Model_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Related_Model_Aggregated_Fields>;
    min?: Maybe<Related_Model_Aggregated_Fields>;
    sum?: Maybe<Related_Model_Aggregated_Fields>;
    sumDistinct?: Maybe<Related_Model_Aggregated_Fields>;
};

export type Related_Model_Aggregated_Count = {
    __typename: 'related_model_aggregated_count';
    id?: Maybe<Scalars['Int']['output']>;
    model_id?: Maybe<Scalars['Int']['output']>;
    related_id?: Maybe<Scalars['Int']['output']>;
};

export type Related_Model_Aggregated_Fields = {
    __typename: 'related_model_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    model_id?: Maybe<Scalars['Float']['output']>;
    related_id?: Maybe<Scalars['Float']['output']>;
};

export type Related_Model_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Related_Model_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Related_Model_Filter>>>;
    id?: InputMaybe<Number_Filter_Operators>;
    model_id?: InputMaybe<Model_Filter>;
    related_id?: InputMaybe<Model_Filter>;
};

export type Related_Model_Mutated = {
    __typename: 'related_model_mutated';
    data?: Maybe<Related_Model>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Release = {
    __typename: 'release';
    date_created?: Maybe<Scalars['Date']['output']>;
    date_created_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    note?: Maybe<Scalars['String']['output']>;
    user_created?: Maybe<Directus_Users>;
};


export type ReleaseUser_CreatedArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Release_Aggregated = {
    __typename: 'release_aggregated';
    count?: Maybe<Release_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Release_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
};

export type Release_Aggregated_Count = {
    __typename: 'release_aggregated_count';
    date_created?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    note?: Maybe<Scalars['Int']['output']>;
    user_created?: Maybe<Scalars['Int']['output']>;
};

export type Release_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Release_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Release_Filter>>>;
    date_created?: InputMaybe<Date_Filter_Operators>;
    date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<String_Filter_Operators>;
    note?: InputMaybe<String_Filter_Operators>;
    user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Release_Mutated = {
    __typename: 'release_mutated';
    data?: Maybe<Release>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Reset_Build_Process = {
    __typename: 'reset_build_process';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    owner?: Maybe<Directus_Users>;
};


export type Reset_Build_ProcessOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Reset_Build_Process_Aggregated = {
    __typename: 'reset_build_process_aggregated';
    avg?: Maybe<Reset_Build_Process_Aggregated_Fields>;
    avgDistinct?: Maybe<Reset_Build_Process_Aggregated_Fields>;
    count?: Maybe<Reset_Build_Process_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Reset_Build_Process_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Reset_Build_Process_Aggregated_Fields>;
    min?: Maybe<Reset_Build_Process_Aggregated_Fields>;
    sum?: Maybe<Reset_Build_Process_Aggregated_Fields>;
    sumDistinct?: Maybe<Reset_Build_Process_Aggregated_Fields>;
};

export type Reset_Build_Process_Aggregated_Count = {
    __typename: 'reset_build_process_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
};

export type Reset_Build_Process_Aggregated_Fields = {
    __typename: 'reset_build_process_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
};

export type Reset_Build_Process_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Reset_Build_Process_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Reset_Build_Process_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
};

export type Reset_Build_Process_Mutated = {
    __typename: 'reset_build_process_mutated';
    data?: Maybe<Reset_Build_Process>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Resources = {
    __typename: 'resources';
    content?: Maybe<Scalars['String']['output']>;
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    owner?: Maybe<Directus_Users>;
    slug?: Maybe<Scalars['String']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};


export type ResourcesImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ResourcesOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Resources_Aggregated = {
    __typename: 'resources_aggregated';
    avg?: Maybe<Resources_Aggregated_Fields>;
    avgDistinct?: Maybe<Resources_Aggregated_Fields>;
    count?: Maybe<Resources_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Resources_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Resources_Aggregated_Fields>;
    min?: Maybe<Resources_Aggregated_Fields>;
    sum?: Maybe<Resources_Aggregated_Fields>;
    sumDistinct?: Maybe<Resources_Aggregated_Fields>;
};

export type Resources_Aggregated_Count = {
    __typename: 'resources_aggregated_count';
    content?: Maybe<Scalars['Int']['output']>;
    created_on?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    slug?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    title?: Maybe<Scalars['Int']['output']>;
};

export type Resources_Aggregated_Fields = {
    __typename: 'resources_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Resources_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Resources_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Resources_Filter>>>;
    content?: InputMaybe<String_Filter_Operators>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    owner?: InputMaybe<Directus_Users_Filter>;
    slug?: InputMaybe<String_Filter_Operators>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    title?: InputMaybe<String_Filter_Operators>;
};

export type Resources_Mutated = {
    __typename: 'resources_mutated';
    data?: Maybe<Resources>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Sponsors = {
    __typename: 'sponsors';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    name?: Maybe<Scalars['String']['output']>;
    owner?: Maybe<Directus_Users>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    supersponsor?: Maybe<Scalars['Boolean']['output']>;
};


export type SponsorsImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SponsorsOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Sponsors_Aggregated = {
    __typename: 'sponsors_aggregated';
    avg?: Maybe<Sponsors_Aggregated_Fields>;
    avgDistinct?: Maybe<Sponsors_Aggregated_Fields>;
    count?: Maybe<Sponsors_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Sponsors_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Sponsors_Aggregated_Fields>;
    min?: Maybe<Sponsors_Aggregated_Fields>;
    sum?: Maybe<Sponsors_Aggregated_Fields>;
    sumDistinct?: Maybe<Sponsors_Aggregated_Fields>;
};

export type Sponsors_Aggregated_Count = {
    __typename: 'sponsors_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
    supersponsor?: Maybe<Scalars['Int']['output']>;
};

export type Sponsors_Aggregated_Fields = {
    __typename: 'sponsors_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Sponsors_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Sponsors_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Sponsors_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    name?: InputMaybe<String_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
    supersponsor?: InputMaybe<Boolean_Filter_Operators>;
};

export type Sponsors_Mutated = {
    __typename: 'sponsors_mutated';
    data?: Maybe<Sponsors>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
    _contains?: InputMaybe<Scalars['String']['input']>;
    _empty?: InputMaybe<Scalars['Boolean']['input']>;
    _ends_with?: InputMaybe<Scalars['String']['input']>;
    _eq?: InputMaybe<Scalars['String']['input']>;
    _icontains?: InputMaybe<Scalars['String']['input']>;
    _iends_with?: InputMaybe<Scalars['String']['input']>;
    _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _istarts_with?: InputMaybe<Scalars['String']['input']>;
    _ncontains?: InputMaybe<Scalars['String']['input']>;
    _nempty?: InputMaybe<Scalars['Boolean']['input']>;
    _nends_with?: InputMaybe<Scalars['String']['input']>;
    _neq?: InputMaybe<Scalars['String']['input']>;
    _niends_with?: InputMaybe<Scalars['String']['input']>;
    _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    _nistarts_with?: InputMaybe<Scalars['String']['input']>;
    _nnull?: InputMaybe<Scalars['Boolean']['input']>;
    _nstarts_with?: InputMaybe<Scalars['String']['input']>;
    _null?: InputMaybe<Scalars['Boolean']['input']>;
    _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
    __typename: 'team';
    created_on?: Maybe<Scalars['Date']['output']>;
    created_on_func?: Maybe<Datetime_Functions>;
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    image?: Maybe<Directus_Files>;
    name?: Maybe<Scalars['String']['output']>;
    owner?: Maybe<Directus_Users>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['String']['output']>;
};


export type TeamImageArgs = {
    filter?: InputMaybe<Directus_Files_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamOwnerArgs = {
    filter?: InputMaybe<Directus_Users_Filter>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Aggregated = {
    __typename: 'team_aggregated';
    avg?: Maybe<Team_Aggregated_Fields>;
    avgDistinct?: Maybe<Team_Aggregated_Fields>;
    count?: Maybe<Team_Aggregated_Count>;
    countAll?: Maybe<Scalars['Int']['output']>;
    countDistinct?: Maybe<Team_Aggregated_Count>;
    group?: Maybe<Scalars['JSON']['output']>;
    max?: Maybe<Team_Aggregated_Fields>;
    min?: Maybe<Team_Aggregated_Fields>;
    sum?: Maybe<Team_Aggregated_Fields>;
    sumDistinct?: Maybe<Team_Aggregated_Fields>;
};

export type Team_Aggregated_Count = {
    __typename: 'team_aggregated_count';
    created_on?: Maybe<Scalars['Int']['output']>;
    description?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    image?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['Int']['output']>;
    owner?: Maybe<Scalars['Int']['output']>;
    sort?: Maybe<Scalars['Int']['output']>;
    status?: Maybe<Scalars['Int']['output']>;
};

export type Team_Aggregated_Fields = {
    __typename: 'team_aggregated_fields';
    id?: Maybe<Scalars['Float']['output']>;
    sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Filter = {
    _and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
    _or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
    created_on?: InputMaybe<Date_Filter_Operators>;
    created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
    description?: InputMaybe<String_Filter_Operators>;
    id?: InputMaybe<Number_Filter_Operators>;
    image?: InputMaybe<Directus_Files_Filter>;
    name?: InputMaybe<String_Filter_Operators>;
    owner?: InputMaybe<Directus_Users_Filter>;
    sort?: InputMaybe<Number_Filter_Operators>;
    status?: InputMaybe<String_Filter_Operators>;
};

export type Team_Mutated = {
    __typename: 'team_mutated';
    data?: Maybe<Team>;
    event?: Maybe<EventEnum>;
    key: Scalars['ID']['output'];
};

export type Update_Blog_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_by?: InputMaybe<Update_Directus_Users_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    date?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    modified_by?: InputMaybe<Update_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    show_featured_image_in_blog_post_body?: InputMaybe<Scalars['Boolean']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Blog_Like_Input = {
    blog_id?: InputMaybe<Update_Blog_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type Update_Brand_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Build_Log_Input = {
    date_canceled?: InputMaybe<Scalars['Date']['input']>;
    date_created?: InputMaybe<Scalars['Date']['input']>;
    date_finished?: InputMaybe<Scalars['Date']['input']>;
    date_running?: InputMaybe<Scalars['Date']['input']>;
    date_started?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    release_id?: InputMaybe<Update_Release_Input>;
    type?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Contact_Form_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    message?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    subject?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Files_Input = {
    charset?: InputMaybe<Scalars['String']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    duration?: InputMaybe<Scalars['Int']['input']>;
    embed?: InputMaybe<Scalars['String']['input']>;
    filename_disk?: InputMaybe<Scalars['String']['input']>;
    filename_download?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
    folder?: InputMaybe<Update_Directus_Folders_Input>;
    height?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    location?: InputMaybe<Scalars['String']['input']>;
    metadata?: InputMaybe<Scalars['JSON']['input']>;
    model?: InputMaybe<Array<InputMaybe<Update_Model_Directus_Files_Input>>>;
    modified_by?: InputMaybe<Update_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    storage?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['JSON']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
    uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
    uploaded_on?: InputMaybe<Scalars['Date']['input']>;
    width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Folders_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
    admin_access?: InputMaybe<Scalars['Boolean']['input']>;
    app_access?: InputMaybe<Scalars['Boolean']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
    appearance?: InputMaybe<Scalars['String']['input']>;
    auth_data?: InputMaybe<Scalars['JSON']['input']>;
    avatar?: InputMaybe<Update_Directus_Files_Input>;
    description?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
    external_identifier?: InputMaybe<Scalars['String']['input']>;
    first_name?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    language?: InputMaybe<Scalars['String']['input']>;
    last_access?: InputMaybe<Scalars['Date']['input']>;
    last_name?: InputMaybe<Scalars['String']['input']>;
    last_page?: InputMaybe<Scalars['String']['input']>;
    location?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['Hash']['input']>;
    provider?: InputMaybe<Scalars['String']['input']>;
    role?: InputMaybe<Update_Directus_Roles_Input>;
    status?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Scalars['JSON']['input']>;
    tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
    theme_dark?: InputMaybe<Scalars['String']['input']>;
    theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
    theme_light?: InputMaybe<Scalars['String']['input']>;
    theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Update_Donor_Input = {
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    linkedin_url?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Educational_Docs_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    file?: InputMaybe<Update_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Form_Factor_Input = {
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Git_Pull_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Homepage_Slides_Input = {
    background_image?: InputMaybe<Update_Directus_Files_Input>;
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    read_more_label?: InputMaybe<Scalars['String']['input']>;
    read_more_link?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    /** (CSS class name) */
    style?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Import_Raw_Input = {
    Brand?: InputMaybe<Scalars['String']['input']>;
    Codename?: InputMaybe<Scalars['String']['input']>;
    Day?: InputMaybe<Scalars['String']['input']>;
    Description?: InputMaybe<Scalars['String']['input']>;
    DonatedBy?: InputMaybe<Scalars['String']['input']>;
    FormFactor?: InputMaybe<Scalars['String']['input']>;
    IMEI?: InputMaybe<Scalars['String']['input']>;
    Model?: InputMaybe<Scalars['String']['input']>;
    Month?: InputMaybe<Scalars['String']['input']>;
    Notes?: InputMaybe<Scalars['String']['input']>;
    Publish?: InputMaybe<Scalars['String']['input']>;
    Video?: InputMaybe<Scalars['String']['input']>;
    Weight?: InputMaybe<Scalars['String']['input']>;
    Year?: InputMaybe<Scalars['String']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    donor_id?: InputMaybe<Scalars['Int']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Import_Update_Input = {
    Brand?: InputMaybe<Scalars['String']['input']>;
    Codename?: InputMaybe<Scalars['String']['input']>;
    Day?: InputMaybe<Scalars['String']['input']>;
    Description?: InputMaybe<Scalars['String']['input']>;
    DonatedBy?: InputMaybe<Scalars['String']['input']>;
    FormFactor?: InputMaybe<Scalars['String']['input']>;
    ID?: InputMaybe<Scalars['ID']['input']>;
    IMEI?: InputMaybe<Scalars['String']['input']>;
    Model?: InputMaybe<Scalars['String']['input']>;
    Month?: InputMaybe<Scalars['String']['input']>;
    Notes?: InputMaybe<Scalars['String']['input']>;
    Publish?: InputMaybe<Scalars['String']['input']>;
    Video?: InputMaybe<Scalars['String']['input']>;
    Weight?: InputMaybe<Scalars['String']['input']>;
    Year?: InputMaybe<Scalars['String']['input']>;
    bla?: InputMaybe<Scalars['String']['input']>;
    brand_id?: InputMaybe<Scalars['Int']['input']>;
    donor_id?: InputMaybe<Scalars['Int']['input']>;
    model_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_List_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    model?: InputMaybe<Array<InputMaybe<Update_Model_List_Input>>>;
    name?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Model_Directus_Files_Input = {
    directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Update_Model_Input>;
};

export type Update_Model_Files_Input = {
    directus_files_id?: InputMaybe<Update_Directus_Files_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Update_Model_Input>;
};

export type Update_Model_Input = {
    brand_id?: InputMaybe<Update_Brand_Input>;
    /** The Codename of the Model. This is NOT necessarily the same as the model name / number - for example, a Nexus 5 is "grouper". */
    codename?: InputMaybe<Scalars['String']['input']>;
    collection?: InputMaybe<Array<InputMaybe<Update_Model_List_Input>>>;
    /** A reasonably-lengthed writeup that goes on the website, with a brief history of the device and its quirks / features. */
    description?: InputMaybe<Scalars['String']['input']>;
    /** Generated from Brand and Model name */
    display_name?: InputMaybe<Scalars['String']['input']>;
    docs?: InputMaybe<Array<InputMaybe<Update_Model_Directus_Files_Input>>>;
    form_factor_id?: InputMaybe<Update_Form_Factor_Input>;
    /** Hide on Homepage */
    hideonhp?: InputMaybe<Scalars['Boolean']['input']>;
    /** The Unique ID of this Model. (This is not unique across categories!) */
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    model?: InputMaybe<Array<InputMaybe<Update_Related_Model_Input>>>;
    /** The Model Name. For example, "Fairphone 4" */
    name?: InputMaybe<Scalars['String']['input']>;
    related_phones?: InputMaybe<Array<InputMaybe<Update_Related_Model_Input>>>;
    /** The day this model was announced. Note: Where possible, use the date of announcement, not the day of first order / release. */
    release_day?: InputMaybe<Scalars['String']['input']>;
    /** The month this model was released. */
    release_month?: InputMaybe<Scalars['String']['input']>;
    /** The year this product was announced. */
    release_year?: InputMaybe<Scalars['String']['input']>;
    /** The short-form name used in URLs. */
    slug?: InputMaybe<Scalars['String']['input']>;
    /** The visibility of this model. */
    status?: InputMaybe<Scalars['String']['input']>;
    video?: InputMaybe<Scalars['String']['input']>;
    video2?: InputMaybe<Scalars['String']['input']>;
    video3?: InputMaybe<Scalars['String']['input']>;
    /** The weight of the model in grams, including battery and default accessories. */
    weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Model_Like_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Update_Model_Input>;
};

export type Update_Model_List_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    list_id?: InputMaybe<Update_List_Input>;
    model_id?: InputMaybe<Update_Model_Input>;
};

export type Update_Model_Tag_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Scalars['Int']['input']>;
    tag_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Most_Wanted_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Page_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    modified_by?: InputMaybe<Update_Directus_Users_Input>;
    modified_on?: InputMaybe<Scalars['Date']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Product_Input = {
    created_by?: InputMaybe<Update_Directus_Users_Input>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    /** Describe what makes this Product unique, for example if we've got two of them, you might say something like "black, good condition, scuff on corner" or "prototype unit, has KVM1 embossed on face" */
    description?: InputMaybe<Scalars['String']['input']>;
    donor_id?: InputMaybe<Update_Donor_Input>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image_back?: InputMaybe<Update_Directus_Files_Input>;
    image_camera?: InputMaybe<Update_Directus_Files_Input>;
    image_detail?: InputMaybe<Update_Directus_Files_Input>;
    image_detail_2?: InputMaybe<Update_Directus_Files_Input>;
    image_front?: InputMaybe<Update_Directus_Files_Input>;
    image_open?: InputMaybe<Update_Directus_Files_Input>;
    image_reference?: InputMaybe<Update_Directus_Files_Input>;
    image_side?: InputMaybe<Update_Directus_Files_Input>;
    /** The IMEI of this Product. If the Product does not have an IMEI (for example, because it's not GSM), use the serial number. If multiple IMEIs are present, prefer IMEI1. */
    imei?: InputMaybe<Scalars['String']['input']>;
    model_id?: InputMaybe<Update_Model_Input>;
    /** Notes for internal use. For example, you might want to mention when this specific Product was donated to the Museum. */
    note?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Related_Model_Input = {
    id?: InputMaybe<Scalars['ID']['input']>;
    model_id?: InputMaybe<Update_Model_Input>;
    related_id?: InputMaybe<Update_Model_Input>;
};

export type Update_Release_Input = {
    date_created?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    note?: InputMaybe<Scalars['String']['input']>;
    user_created?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Reset_Build_Process_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Resources_Input = {
    content?: InputMaybe<Scalars['String']['input']>;
    created_on?: InputMaybe<Scalars['Date']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    slug?: InputMaybe<Scalars['String']['input']>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Sponsors_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
    supersponsor?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Team_Input = {
    created_on?: InputMaybe<Scalars['Date']['input']>;
    description?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['ID']['input']>;
    image?: InputMaybe<Update_Directus_Files_Input>;
    name?: InputMaybe<Scalars['String']['input']>;
    owner?: InputMaybe<Update_Directus_Users_Input>;
    sort?: InputMaybe<Scalars['Int']['input']>;
    status?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
    ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Date: ResolverTypeWrapper<Scalars['Date']['output']>;
    EventEnum: EventEnum;
    GraphQLBigInt: ResolverTypeWrapper<Scalars['GraphQLBigInt']['output']>;
    GraphQLStringOrFloat: ResolverTypeWrapper<Scalars['GraphQLStringOrFloat']['output']>;
    Hash: ResolverTypeWrapper<Scalars['Hash']['output']>;
    JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
    Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
    Int: ResolverTypeWrapper<Scalars['Int']['output']>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
    Subscription: ResolverTypeWrapper<Record<PropertyKey, never>>;
    blog: ResolverTypeWrapper<Blog>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    blog_aggregated: ResolverTypeWrapper<Blog_Aggregated>;
    blog_aggregated_count: ResolverTypeWrapper<Blog_Aggregated_Count>;
    blog_aggregated_fields: ResolverTypeWrapper<Blog_Aggregated_Fields>;
    Float: ResolverTypeWrapper<Scalars['Float']['output']>;
    blog_filter: Blog_Filter;
    blog_like: ResolverTypeWrapper<Blog_Like>;
    blog_like_aggregated: ResolverTypeWrapper<Blog_Like_Aggregated>;
    blog_like_aggregated_count: ResolverTypeWrapper<Blog_Like_Aggregated_Count>;
    blog_like_aggregated_fields: ResolverTypeWrapper<Blog_Like_Aggregated_Fields>;
    blog_like_filter: Blog_Like_Filter;
    blog_like_mutated: ResolverTypeWrapper<Blog_Like_Mutated>;
    blog_mutated: ResolverTypeWrapper<Blog_Mutated>;
    boolean_filter_operators: Boolean_Filter_Operators;
    brand: ResolverTypeWrapper<Brand>;
    brand_aggregated: ResolverTypeWrapper<Brand_Aggregated>;
    brand_aggregated_count: ResolverTypeWrapper<Brand_Aggregated_Count>;
    brand_aggregated_fields: ResolverTypeWrapper<Brand_Aggregated_Fields>;
    brand_filter: Brand_Filter;
    brand_mutated: ResolverTypeWrapper<Brand_Mutated>;
    build_log: ResolverTypeWrapper<Build_Log>;
    build_log_aggregated: ResolverTypeWrapper<Build_Log_Aggregated>;
    build_log_aggregated_count: ResolverTypeWrapper<Build_Log_Aggregated_Count>;
    build_log_filter: Build_Log_Filter;
    build_log_mutated: ResolverTypeWrapper<Build_Log_Mutated>;
    contact_form: ResolverTypeWrapper<Contact_Form>;
    contact_form_aggregated: ResolverTypeWrapper<Contact_Form_Aggregated>;
    contact_form_aggregated_count: ResolverTypeWrapper<Contact_Form_Aggregated_Count>;
    contact_form_aggregated_fields: ResolverTypeWrapper<Contact_Form_Aggregated_Fields>;
    contact_form_filter: Contact_Form_Filter;
    contact_form_mutated: ResolverTypeWrapper<Contact_Form_Mutated>;
    count_function_filter_operators: Count_Function_Filter_Operators;
    count_functions: ResolverTypeWrapper<Count_Functions>;
    create_blog_input: Create_Blog_Input;
    create_blog_like_input: Create_Blog_Like_Input;
    create_brand_input: Create_Brand_Input;
    create_build_log_input: Create_Build_Log_Input;
    create_contact_form_input: Create_Contact_Form_Input;
    create_directus_files_input: Create_Directus_Files_Input;
    create_directus_folders_input: Create_Directus_Folders_Input;
    create_directus_roles_input: Create_Directus_Roles_Input;
    create_directus_users_input: Create_Directus_Users_Input;
    create_donor_input: Create_Donor_Input;
    create_educational_docs_input: Create_Educational_Docs_Input;
    create_form_factor_input: Create_Form_Factor_Input;
    create_git_pull_input: Create_Git_Pull_Input;
    create_homepage_slides_input: Create_Homepage_Slides_Input;
    create_import_raw_input: Create_Import_Raw_Input;
    create_import_update_input: Create_Import_Update_Input;
    create_list_input: Create_List_Input;
    create_model_directus_files_input: Create_Model_Directus_Files_Input;
    create_model_files_input: Create_Model_Files_Input;
    create_model_input: Create_Model_Input;
    create_model_like_input: Create_Model_Like_Input;
    create_model_list_input: Create_Model_List_Input;
    create_model_tag_input: Create_Model_Tag_Input;
    create_most_wanted_input: Create_Most_Wanted_Input;
    create_page_input: Create_Page_Input;
    create_product_input: Create_Product_Input;
    create_related_model_input: Create_Related_Model_Input;
    create_release_input: Create_Release_Input;
    create_reset_build_process_input: Create_Reset_Build_Process_Input;
    create_resources_input: Create_Resources_Input;
    create_sponsors_input: Create_Sponsors_Input;
    create_team_input: Create_Team_Input;
    date_filter_operators: Date_Filter_Operators;
    date_function_filter_operators: Date_Function_Filter_Operators;
    date_functions: ResolverTypeWrapper<Date_Functions>;
    datetime_function_filter_operators: Datetime_Function_Filter_Operators;
    datetime_functions: ResolverTypeWrapper<Datetime_Functions>;
    delete_many: ResolverTypeWrapper<Delete_Many>;
    delete_one: ResolverTypeWrapper<Delete_One>;
    directus_activity: ResolverTypeWrapper<Directus_Activity>;
    directus_activity_filter: Directus_Activity_Filter;
    directus_activity_mutated: ResolverTypeWrapper<Directus_Activity_Mutated>;
    directus_dashboards: ResolverTypeWrapper<Directus_Dashboards>;
    directus_dashboards_filter: Directus_Dashboards_Filter;
    directus_dashboards_mutated: ResolverTypeWrapper<Directus_Dashboards_Mutated>;
    directus_files: ResolverTypeWrapper<Directus_Files>;
    directus_files_filter: Directus_Files_Filter;
    directus_files_mutated: ResolverTypeWrapper<Directus_Files_Mutated>;
    directus_flows: ResolverTypeWrapper<Directus_Flows>;
    directus_flows_filter: Directus_Flows_Filter;
    directus_flows_mutated: ResolverTypeWrapper<Directus_Flows_Mutated>;
    directus_folders: ResolverTypeWrapper<Directus_Folders>;
    directus_folders_filter: Directus_Folders_Filter;
    directus_folders_mutated: ResolverTypeWrapper<Directus_Folders_Mutated>;
    directus_notifications: ResolverTypeWrapper<Directus_Notifications>;
    directus_notifications_mutated: ResolverTypeWrapper<Directus_Notifications_Mutated>;
    directus_operations: ResolverTypeWrapper<Directus_Operations>;
    directus_operations_filter: Directus_Operations_Filter;
    directus_operations_mutated: ResolverTypeWrapper<Directus_Operations_Mutated>;
    directus_panels: ResolverTypeWrapper<Directus_Panels>;
    directus_panels_filter: Directus_Panels_Filter;
    directus_panels_mutated: ResolverTypeWrapper<Directus_Panels_Mutated>;
    directus_permissions: ResolverTypeWrapper<Directus_Permissions>;
    directus_permissions_mutated: ResolverTypeWrapper<Directus_Permissions_Mutated>;
    directus_presets: ResolverTypeWrapper<Directus_Presets>;
    directus_presets_mutated: ResolverTypeWrapper<Directus_Presets_Mutated>;
    directus_revisions: ResolverTypeWrapper<Directus_Revisions>;
    directus_revisions_filter: Directus_Revisions_Filter;
    directus_revisions_mutated: ResolverTypeWrapper<Directus_Revisions_Mutated>;
    directus_roles: ResolverTypeWrapper<Directus_Roles>;
    directus_roles_filter: Directus_Roles_Filter;
    directus_roles_mutated: ResolverTypeWrapper<Directus_Roles_Mutated>;
    directus_settings: ResolverTypeWrapper<Directus_Settings>;
    directus_settings_mutated: ResolverTypeWrapper<Directus_Settings_Mutated>;
    directus_shares: ResolverTypeWrapper<Directus_Shares>;
    directus_shares_mutated: ResolverTypeWrapper<Directus_Shares_Mutated>;
    directus_translations: ResolverTypeWrapper<Directus_Translations>;
    directus_translations_mutated: ResolverTypeWrapper<Directus_Translations_Mutated>;
    directus_users: ResolverTypeWrapper<Directus_Users>;
    directus_users_filter: Directus_Users_Filter;
    directus_users_mutated: ResolverTypeWrapper<Directus_Users_Mutated>;
    directus_versions: ResolverTypeWrapper<Directus_Versions>;
    directus_versions_filter: Directus_Versions_Filter;
    directus_versions_mutated: ResolverTypeWrapper<Directus_Versions_Mutated>;
    directus_webhooks: ResolverTypeWrapper<Directus_Webhooks>;
    directus_webhooks_mutated: ResolverTypeWrapper<Directus_Webhooks_Mutated>;
    donor: ResolverTypeWrapper<Donor>;
    donor_aggregated: ResolverTypeWrapper<Donor_Aggregated>;
    donor_aggregated_count: ResolverTypeWrapper<Donor_Aggregated_Count>;
    donor_aggregated_fields: ResolverTypeWrapper<Donor_Aggregated_Fields>;
    donor_filter: Donor_Filter;
    donor_mutated: ResolverTypeWrapper<Donor_Mutated>;
    educational_docs: ResolverTypeWrapper<Educational_Docs>;
    educational_docs_aggregated: ResolverTypeWrapper<Educational_Docs_Aggregated>;
    educational_docs_aggregated_count: ResolverTypeWrapper<Educational_Docs_Aggregated_Count>;
    educational_docs_aggregated_fields: ResolverTypeWrapper<Educational_Docs_Aggregated_Fields>;
    educational_docs_filter: Educational_Docs_Filter;
    educational_docs_mutated: ResolverTypeWrapper<Educational_Docs_Mutated>;
    form_factor: ResolverTypeWrapper<Form_Factor>;
    form_factor_aggregated: ResolverTypeWrapper<Form_Factor_Aggregated>;
    form_factor_aggregated_count: ResolverTypeWrapper<Form_Factor_Aggregated_Count>;
    form_factor_aggregated_fields: ResolverTypeWrapper<Form_Factor_Aggregated_Fields>;
    form_factor_filter: Form_Factor_Filter;
    form_factor_mutated: ResolverTypeWrapper<Form_Factor_Mutated>;
    git_pull: ResolverTypeWrapper<Git_Pull>;
    git_pull_aggregated: ResolverTypeWrapper<Git_Pull_Aggregated>;
    git_pull_aggregated_count: ResolverTypeWrapper<Git_Pull_Aggregated_Count>;
    git_pull_aggregated_fields: ResolverTypeWrapper<Git_Pull_Aggregated_Fields>;
    git_pull_filter: Git_Pull_Filter;
    git_pull_mutated: ResolverTypeWrapper<Git_Pull_Mutated>;
    hash_filter_operators: Hash_Filter_Operators;
    homepage_slides: ResolverTypeWrapper<Homepage_Slides>;
    homepage_slides_aggregated: ResolverTypeWrapper<Homepage_Slides_Aggregated>;
    homepage_slides_aggregated_count: ResolverTypeWrapper<Homepage_Slides_Aggregated_Count>;
    homepage_slides_aggregated_fields: ResolverTypeWrapper<Homepage_Slides_Aggregated_Fields>;
    homepage_slides_filter: Homepage_Slides_Filter;
    homepage_slides_mutated: ResolverTypeWrapper<Homepage_Slides_Mutated>;
    import_raw: ResolverTypeWrapper<Import_Raw>;
    import_raw_aggregated: ResolverTypeWrapper<Import_Raw_Aggregated>;
    import_raw_aggregated_count: ResolverTypeWrapper<Import_Raw_Aggregated_Count>;
    import_raw_aggregated_fields: ResolverTypeWrapper<Import_Raw_Aggregated_Fields>;
    import_raw_filter: Import_Raw_Filter;
    import_raw_mutated: ResolverTypeWrapper<Import_Raw_Mutated>;
    import_update: ResolverTypeWrapper<Import_Update>;
    import_update_aggregated: ResolverTypeWrapper<Import_Update_Aggregated>;
    import_update_aggregated_count: ResolverTypeWrapper<Import_Update_Aggregated_Count>;
    import_update_aggregated_fields: ResolverTypeWrapper<Import_Update_Aggregated_Fields>;
    import_update_filter: Import_Update_Filter;
    import_update_mutated: ResolverTypeWrapper<Import_Update_Mutated>;
    list: ResolverTypeWrapper<List>;
    list_aggregated: ResolverTypeWrapper<List_Aggregated>;
    list_aggregated_count: ResolverTypeWrapper<List_Aggregated_Count>;
    list_aggregated_fields: ResolverTypeWrapper<List_Aggregated_Fields>;
    list_filter: List_Filter;
    list_mutated: ResolverTypeWrapper<List_Mutated>;
    model: ResolverTypeWrapper<Model>;
    model_aggregated: ResolverTypeWrapper<Model_Aggregated>;
    model_aggregated_count: ResolverTypeWrapper<Model_Aggregated_Count>;
    model_aggregated_fields: ResolverTypeWrapper<Model_Aggregated_Fields>;
    model_directus_files: ResolverTypeWrapper<Model_Directus_Files>;
    model_directus_files_aggregated: ResolverTypeWrapper<Model_Directus_Files_Aggregated>;
    model_directus_files_aggregated_count: ResolverTypeWrapper<Model_Directus_Files_Aggregated_Count>;
    model_directus_files_aggregated_fields: ResolverTypeWrapper<Model_Directus_Files_Aggregated_Fields>;
    model_directus_files_filter: Model_Directus_Files_Filter;
    model_directus_files_mutated: ResolverTypeWrapper<Model_Directus_Files_Mutated>;
    model_files: ResolverTypeWrapper<Model_Files>;
    model_files_aggregated: ResolverTypeWrapper<Model_Files_Aggregated>;
    model_files_aggregated_count: ResolverTypeWrapper<Model_Files_Aggregated_Count>;
    model_files_aggregated_fields: ResolverTypeWrapper<Model_Files_Aggregated_Fields>;
    model_files_filter: Model_Files_Filter;
    model_files_mutated: ResolverTypeWrapper<Model_Files_Mutated>;
    model_filter: Model_Filter;
    model_like: ResolverTypeWrapper<Model_Like>;
    model_like_aggregated: ResolverTypeWrapper<Model_Like_Aggregated>;
    model_like_aggregated_count: ResolverTypeWrapper<Model_Like_Aggregated_Count>;
    model_like_aggregated_fields: ResolverTypeWrapper<Model_Like_Aggregated_Fields>;
    model_like_filter: Model_Like_Filter;
    model_like_mutated: ResolverTypeWrapper<Model_Like_Mutated>;
    model_list: ResolverTypeWrapper<Model_List>;
    model_list_aggregated: ResolverTypeWrapper<Model_List_Aggregated>;
    model_list_aggregated_count: ResolverTypeWrapper<Model_List_Aggregated_Count>;
    model_list_aggregated_fields: ResolverTypeWrapper<Model_List_Aggregated_Fields>;
    model_list_filter: Model_List_Filter;
    model_list_mutated: ResolverTypeWrapper<Model_List_Mutated>;
    model_mutated: ResolverTypeWrapper<Model_Mutated>;
    model_tag: ResolverTypeWrapper<Model_Tag>;
    model_tag_aggregated: ResolverTypeWrapper<Model_Tag_Aggregated>;
    model_tag_aggregated_count: ResolverTypeWrapper<Model_Tag_Aggregated_Count>;
    model_tag_aggregated_fields: ResolverTypeWrapper<Model_Tag_Aggregated_Fields>;
    model_tag_filter: Model_Tag_Filter;
    model_tag_mutated: ResolverTypeWrapper<Model_Tag_Mutated>;
    most_wanted: ResolverTypeWrapper<Most_Wanted>;
    most_wanted_aggregated: ResolverTypeWrapper<Most_Wanted_Aggregated>;
    most_wanted_aggregated_count: ResolverTypeWrapper<Most_Wanted_Aggregated_Count>;
    most_wanted_aggregated_fields: ResolverTypeWrapper<Most_Wanted_Aggregated_Fields>;
    most_wanted_filter: Most_Wanted_Filter;
    most_wanted_mutated: ResolverTypeWrapper<Most_Wanted_Mutated>;
    number_filter_operators: Number_Filter_Operators;
    page: ResolverTypeWrapper<Page>;
    page_aggregated: ResolverTypeWrapper<Page_Aggregated>;
    page_aggregated_count: ResolverTypeWrapper<Page_Aggregated_Count>;
    page_aggregated_fields: ResolverTypeWrapper<Page_Aggregated_Fields>;
    page_filter: Page_Filter;
    page_mutated: ResolverTypeWrapper<Page_Mutated>;
    product: ResolverTypeWrapper<Product>;
    product_aggregated: ResolverTypeWrapper<Product_Aggregated>;
    product_aggregated_count: ResolverTypeWrapper<Product_Aggregated_Count>;
    product_aggregated_fields: ResolverTypeWrapper<Product_Aggregated_Fields>;
    product_filter: Product_Filter;
    product_mutated: ResolverTypeWrapper<Product_Mutated>;
    related_model: ResolverTypeWrapper<Related_Model>;
    related_model_aggregated: ResolverTypeWrapper<Related_Model_Aggregated>;
    related_model_aggregated_count: ResolverTypeWrapper<Related_Model_Aggregated_Count>;
    related_model_aggregated_fields: ResolverTypeWrapper<Related_Model_Aggregated_Fields>;
    related_model_filter: Related_Model_Filter;
    related_model_mutated: ResolverTypeWrapper<Related_Model_Mutated>;
    release: ResolverTypeWrapper<Release>;
    release_aggregated: ResolverTypeWrapper<Release_Aggregated>;
    release_aggregated_count: ResolverTypeWrapper<Release_Aggregated_Count>;
    release_filter: Release_Filter;
    release_mutated: ResolverTypeWrapper<Release_Mutated>;
    reset_build_process: ResolverTypeWrapper<Reset_Build_Process>;
    reset_build_process_aggregated: ResolverTypeWrapper<Reset_Build_Process_Aggregated>;
    reset_build_process_aggregated_count: ResolverTypeWrapper<Reset_Build_Process_Aggregated_Count>;
    reset_build_process_aggregated_fields: ResolverTypeWrapper<Reset_Build_Process_Aggregated_Fields>;
    reset_build_process_filter: Reset_Build_Process_Filter;
    reset_build_process_mutated: ResolverTypeWrapper<Reset_Build_Process_Mutated>;
    resources: ResolverTypeWrapper<Resources>;
    resources_aggregated: ResolverTypeWrapper<Resources_Aggregated>;
    resources_aggregated_count: ResolverTypeWrapper<Resources_Aggregated_Count>;
    resources_aggregated_fields: ResolverTypeWrapper<Resources_Aggregated_Fields>;
    resources_filter: Resources_Filter;
    resources_mutated: ResolverTypeWrapper<Resources_Mutated>;
    sponsors: ResolverTypeWrapper<Sponsors>;
    sponsors_aggregated: ResolverTypeWrapper<Sponsors_Aggregated>;
    sponsors_aggregated_count: ResolverTypeWrapper<Sponsors_Aggregated_Count>;
    sponsors_aggregated_fields: ResolverTypeWrapper<Sponsors_Aggregated_Fields>;
    sponsors_filter: Sponsors_Filter;
    sponsors_mutated: ResolverTypeWrapper<Sponsors_Mutated>;
    string_filter_operators: String_Filter_Operators;
    team: ResolverTypeWrapper<Team>;
    team_aggregated: ResolverTypeWrapper<Team_Aggregated>;
    team_aggregated_count: ResolverTypeWrapper<Team_Aggregated_Count>;
    team_aggregated_fields: ResolverTypeWrapper<Team_Aggregated_Fields>;
    team_filter: Team_Filter;
    team_mutated: ResolverTypeWrapper<Team_Mutated>;
    update_blog_input: Update_Blog_Input;
    update_blog_like_input: Update_Blog_Like_Input;
    update_brand_input: Update_Brand_Input;
    update_build_log_input: Update_Build_Log_Input;
    update_contact_form_input: Update_Contact_Form_Input;
    update_directus_files_input: Update_Directus_Files_Input;
    update_directus_folders_input: Update_Directus_Folders_Input;
    update_directus_roles_input: Update_Directus_Roles_Input;
    update_directus_users_input: Update_Directus_Users_Input;
    update_donor_input: Update_Donor_Input;
    update_educational_docs_input: Update_Educational_Docs_Input;
    update_form_factor_input: Update_Form_Factor_Input;
    update_git_pull_input: Update_Git_Pull_Input;
    update_homepage_slides_input: Update_Homepage_Slides_Input;
    update_import_raw_input: Update_Import_Raw_Input;
    update_import_update_input: Update_Import_Update_Input;
    update_list_input: Update_List_Input;
    update_model_directus_files_input: Update_Model_Directus_Files_Input;
    update_model_files_input: Update_Model_Files_Input;
    update_model_input: Update_Model_Input;
    update_model_like_input: Update_Model_Like_Input;
    update_model_list_input: Update_Model_List_Input;
    update_model_tag_input: Update_Model_Tag_Input;
    update_most_wanted_input: Update_Most_Wanted_Input;
    update_page_input: Update_Page_Input;
    update_product_input: Update_Product_Input;
    update_related_model_input: Update_Related_Model_Input;
    update_release_input: Update_Release_Input;
    update_reset_build_process_input: Update_Reset_Build_Process_Input;
    update_resources_input: Update_Resources_Input;
    update_sponsors_input: Update_Sponsors_Input;
    update_team_input: Update_Team_Input;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Date: Scalars['Date']['output'];
    GraphQLBigInt: Scalars['GraphQLBigInt']['output'];
    GraphQLStringOrFloat: Scalars['GraphQLStringOrFloat']['output'];
    Hash: Scalars['Hash']['output'];
    JSON: Scalars['JSON']['output'];
    Mutation: Record<PropertyKey, never>;
    Int: Scalars['Int']['output'];
    String: Scalars['String']['output'];
    ID: Scalars['ID']['output'];
    Query: Record<PropertyKey, never>;
    Subscription: Record<PropertyKey, never>;
    blog: Blog;
    Boolean: Scalars['Boolean']['output'];
    blog_aggregated: Blog_Aggregated;
    blog_aggregated_count: Blog_Aggregated_Count;
    blog_aggregated_fields: Blog_Aggregated_Fields;
    Float: Scalars['Float']['output'];
    blog_filter: Blog_Filter;
    blog_like: Blog_Like;
    blog_like_aggregated: Blog_Like_Aggregated;
    blog_like_aggregated_count: Blog_Like_Aggregated_Count;
    blog_like_aggregated_fields: Blog_Like_Aggregated_Fields;
    blog_like_filter: Blog_Like_Filter;
    blog_like_mutated: Blog_Like_Mutated;
    blog_mutated: Blog_Mutated;
    boolean_filter_operators: Boolean_Filter_Operators;
    brand: Brand;
    brand_aggregated: Brand_Aggregated;
    brand_aggregated_count: Brand_Aggregated_Count;
    brand_aggregated_fields: Brand_Aggregated_Fields;
    brand_filter: Brand_Filter;
    brand_mutated: Brand_Mutated;
    build_log: Build_Log;
    build_log_aggregated: Build_Log_Aggregated;
    build_log_aggregated_count: Build_Log_Aggregated_Count;
    build_log_filter: Build_Log_Filter;
    build_log_mutated: Build_Log_Mutated;
    contact_form: Contact_Form;
    contact_form_aggregated: Contact_Form_Aggregated;
    contact_form_aggregated_count: Contact_Form_Aggregated_Count;
    contact_form_aggregated_fields: Contact_Form_Aggregated_Fields;
    contact_form_filter: Contact_Form_Filter;
    contact_form_mutated: Contact_Form_Mutated;
    count_function_filter_operators: Count_Function_Filter_Operators;
    count_functions: Count_Functions;
    create_blog_input: Create_Blog_Input;
    create_blog_like_input: Create_Blog_Like_Input;
    create_brand_input: Create_Brand_Input;
    create_build_log_input: Create_Build_Log_Input;
    create_contact_form_input: Create_Contact_Form_Input;
    create_directus_files_input: Create_Directus_Files_Input;
    create_directus_folders_input: Create_Directus_Folders_Input;
    create_directus_roles_input: Create_Directus_Roles_Input;
    create_directus_users_input: Create_Directus_Users_Input;
    create_donor_input: Create_Donor_Input;
    create_educational_docs_input: Create_Educational_Docs_Input;
    create_form_factor_input: Create_Form_Factor_Input;
    create_git_pull_input: Create_Git_Pull_Input;
    create_homepage_slides_input: Create_Homepage_Slides_Input;
    create_import_raw_input: Create_Import_Raw_Input;
    create_import_update_input: Create_Import_Update_Input;
    create_list_input: Create_List_Input;
    create_model_directus_files_input: Create_Model_Directus_Files_Input;
    create_model_files_input: Create_Model_Files_Input;
    create_model_input: Create_Model_Input;
    create_model_like_input: Create_Model_Like_Input;
    create_model_list_input: Create_Model_List_Input;
    create_model_tag_input: Create_Model_Tag_Input;
    create_most_wanted_input: Create_Most_Wanted_Input;
    create_page_input: Create_Page_Input;
    create_product_input: Create_Product_Input;
    create_related_model_input: Create_Related_Model_Input;
    create_release_input: Create_Release_Input;
    create_reset_build_process_input: Create_Reset_Build_Process_Input;
    create_resources_input: Create_Resources_Input;
    create_sponsors_input: Create_Sponsors_Input;
    create_team_input: Create_Team_Input;
    date_filter_operators: Date_Filter_Operators;
    date_function_filter_operators: Date_Function_Filter_Operators;
    date_functions: Date_Functions;
    datetime_function_filter_operators: Datetime_Function_Filter_Operators;
    datetime_functions: Datetime_Functions;
    delete_many: Delete_Many;
    delete_one: Delete_One;
    directus_activity: Directus_Activity;
    directus_activity_filter: Directus_Activity_Filter;
    directus_activity_mutated: Directus_Activity_Mutated;
    directus_dashboards: Directus_Dashboards;
    directus_dashboards_filter: Directus_Dashboards_Filter;
    directus_dashboards_mutated: Directus_Dashboards_Mutated;
    directus_files: Directus_Files;
    directus_files_filter: Directus_Files_Filter;
    directus_files_mutated: Directus_Files_Mutated;
    directus_flows: Directus_Flows;
    directus_flows_filter: Directus_Flows_Filter;
    directus_flows_mutated: Directus_Flows_Mutated;
    directus_folders: Directus_Folders;
    directus_folders_filter: Directus_Folders_Filter;
    directus_folders_mutated: Directus_Folders_Mutated;
    directus_notifications: Directus_Notifications;
    directus_notifications_mutated: Directus_Notifications_Mutated;
    directus_operations: Directus_Operations;
    directus_operations_filter: Directus_Operations_Filter;
    directus_operations_mutated: Directus_Operations_Mutated;
    directus_panels: Directus_Panels;
    directus_panels_filter: Directus_Panels_Filter;
    directus_panels_mutated: Directus_Panels_Mutated;
    directus_permissions: Directus_Permissions;
    directus_permissions_mutated: Directus_Permissions_Mutated;
    directus_presets: Directus_Presets;
    directus_presets_mutated: Directus_Presets_Mutated;
    directus_revisions: Directus_Revisions;
    directus_revisions_filter: Directus_Revisions_Filter;
    directus_revisions_mutated: Directus_Revisions_Mutated;
    directus_roles: Directus_Roles;
    directus_roles_filter: Directus_Roles_Filter;
    directus_roles_mutated: Directus_Roles_Mutated;
    directus_settings: Directus_Settings;
    directus_settings_mutated: Directus_Settings_Mutated;
    directus_shares: Directus_Shares;
    directus_shares_mutated: Directus_Shares_Mutated;
    directus_translations: Directus_Translations;
    directus_translations_mutated: Directus_Translations_Mutated;
    directus_users: Directus_Users;
    directus_users_filter: Directus_Users_Filter;
    directus_users_mutated: Directus_Users_Mutated;
    directus_versions: Directus_Versions;
    directus_versions_filter: Directus_Versions_Filter;
    directus_versions_mutated: Directus_Versions_Mutated;
    directus_webhooks: Directus_Webhooks;
    directus_webhooks_mutated: Directus_Webhooks_Mutated;
    donor: Donor;
    donor_aggregated: Donor_Aggregated;
    donor_aggregated_count: Donor_Aggregated_Count;
    donor_aggregated_fields: Donor_Aggregated_Fields;
    donor_filter: Donor_Filter;
    donor_mutated: Donor_Mutated;
    educational_docs: Educational_Docs;
    educational_docs_aggregated: Educational_Docs_Aggregated;
    educational_docs_aggregated_count: Educational_Docs_Aggregated_Count;
    educational_docs_aggregated_fields: Educational_Docs_Aggregated_Fields;
    educational_docs_filter: Educational_Docs_Filter;
    educational_docs_mutated: Educational_Docs_Mutated;
    form_factor: Form_Factor;
    form_factor_aggregated: Form_Factor_Aggregated;
    form_factor_aggregated_count: Form_Factor_Aggregated_Count;
    form_factor_aggregated_fields: Form_Factor_Aggregated_Fields;
    form_factor_filter: Form_Factor_Filter;
    form_factor_mutated: Form_Factor_Mutated;
    git_pull: Git_Pull;
    git_pull_aggregated: Git_Pull_Aggregated;
    git_pull_aggregated_count: Git_Pull_Aggregated_Count;
    git_pull_aggregated_fields: Git_Pull_Aggregated_Fields;
    git_pull_filter: Git_Pull_Filter;
    git_pull_mutated: Git_Pull_Mutated;
    hash_filter_operators: Hash_Filter_Operators;
    homepage_slides: Homepage_Slides;
    homepage_slides_aggregated: Homepage_Slides_Aggregated;
    homepage_slides_aggregated_count: Homepage_Slides_Aggregated_Count;
    homepage_slides_aggregated_fields: Homepage_Slides_Aggregated_Fields;
    homepage_slides_filter: Homepage_Slides_Filter;
    homepage_slides_mutated: Homepage_Slides_Mutated;
    import_raw: Import_Raw;
    import_raw_aggregated: Import_Raw_Aggregated;
    import_raw_aggregated_count: Import_Raw_Aggregated_Count;
    import_raw_aggregated_fields: Import_Raw_Aggregated_Fields;
    import_raw_filter: Import_Raw_Filter;
    import_raw_mutated: Import_Raw_Mutated;
    import_update: Import_Update;
    import_update_aggregated: Import_Update_Aggregated;
    import_update_aggregated_count: Import_Update_Aggregated_Count;
    import_update_aggregated_fields: Import_Update_Aggregated_Fields;
    import_update_filter: Import_Update_Filter;
    import_update_mutated: Import_Update_Mutated;
    list: List;
    list_aggregated: List_Aggregated;
    list_aggregated_count: List_Aggregated_Count;
    list_aggregated_fields: List_Aggregated_Fields;
    list_filter: List_Filter;
    list_mutated: List_Mutated;
    model: Model;
    model_aggregated: Model_Aggregated;
    model_aggregated_count: Model_Aggregated_Count;
    model_aggregated_fields: Model_Aggregated_Fields;
    model_directus_files: Model_Directus_Files;
    model_directus_files_aggregated: Model_Directus_Files_Aggregated;
    model_directus_files_aggregated_count: Model_Directus_Files_Aggregated_Count;
    model_directus_files_aggregated_fields: Model_Directus_Files_Aggregated_Fields;
    model_directus_files_filter: Model_Directus_Files_Filter;
    model_directus_files_mutated: Model_Directus_Files_Mutated;
    model_files: Model_Files;
    model_files_aggregated: Model_Files_Aggregated;
    model_files_aggregated_count: Model_Files_Aggregated_Count;
    model_files_aggregated_fields: Model_Files_Aggregated_Fields;
    model_files_filter: Model_Files_Filter;
    model_files_mutated: Model_Files_Mutated;
    model_filter: Model_Filter;
    model_like: Model_Like;
    model_like_aggregated: Model_Like_Aggregated;
    model_like_aggregated_count: Model_Like_Aggregated_Count;
    model_like_aggregated_fields: Model_Like_Aggregated_Fields;
    model_like_filter: Model_Like_Filter;
    model_like_mutated: Model_Like_Mutated;
    model_list: Model_List;
    model_list_aggregated: Model_List_Aggregated;
    model_list_aggregated_count: Model_List_Aggregated_Count;
    model_list_aggregated_fields: Model_List_Aggregated_Fields;
    model_list_filter: Model_List_Filter;
    model_list_mutated: Model_List_Mutated;
    model_mutated: Model_Mutated;
    model_tag: Model_Tag;
    model_tag_aggregated: Model_Tag_Aggregated;
    model_tag_aggregated_count: Model_Tag_Aggregated_Count;
    model_tag_aggregated_fields: Model_Tag_Aggregated_Fields;
    model_tag_filter: Model_Tag_Filter;
    model_tag_mutated: Model_Tag_Mutated;
    most_wanted: Most_Wanted;
    most_wanted_aggregated: Most_Wanted_Aggregated;
    most_wanted_aggregated_count: Most_Wanted_Aggregated_Count;
    most_wanted_aggregated_fields: Most_Wanted_Aggregated_Fields;
    most_wanted_filter: Most_Wanted_Filter;
    most_wanted_mutated: Most_Wanted_Mutated;
    number_filter_operators: Number_Filter_Operators;
    page: Page;
    page_aggregated: Page_Aggregated;
    page_aggregated_count: Page_Aggregated_Count;
    page_aggregated_fields: Page_Aggregated_Fields;
    page_filter: Page_Filter;
    page_mutated: Page_Mutated;
    product: Product;
    product_aggregated: Product_Aggregated;
    product_aggregated_count: Product_Aggregated_Count;
    product_aggregated_fields: Product_Aggregated_Fields;
    product_filter: Product_Filter;
    product_mutated: Product_Mutated;
    related_model: Related_Model;
    related_model_aggregated: Related_Model_Aggregated;
    related_model_aggregated_count: Related_Model_Aggregated_Count;
    related_model_aggregated_fields: Related_Model_Aggregated_Fields;
    related_model_filter: Related_Model_Filter;
    related_model_mutated: Related_Model_Mutated;
    release: Release;
    release_aggregated: Release_Aggregated;
    release_aggregated_count: Release_Aggregated_Count;
    release_filter: Release_Filter;
    release_mutated: Release_Mutated;
    reset_build_process: Reset_Build_Process;
    reset_build_process_aggregated: Reset_Build_Process_Aggregated;
    reset_build_process_aggregated_count: Reset_Build_Process_Aggregated_Count;
    reset_build_process_aggregated_fields: Reset_Build_Process_Aggregated_Fields;
    reset_build_process_filter: Reset_Build_Process_Filter;
    reset_build_process_mutated: Reset_Build_Process_Mutated;
    resources: Resources;
    resources_aggregated: Resources_Aggregated;
    resources_aggregated_count: Resources_Aggregated_Count;
    resources_aggregated_fields: Resources_Aggregated_Fields;
    resources_filter: Resources_Filter;
    resources_mutated: Resources_Mutated;
    sponsors: Sponsors;
    sponsors_aggregated: Sponsors_Aggregated;
    sponsors_aggregated_count: Sponsors_Aggregated_Count;
    sponsors_aggregated_fields: Sponsors_Aggregated_Fields;
    sponsors_filter: Sponsors_Filter;
    sponsors_mutated: Sponsors_Mutated;
    string_filter_operators: String_Filter_Operators;
    team: Team;
    team_aggregated: Team_Aggregated;
    team_aggregated_count: Team_Aggregated_Count;
    team_aggregated_fields: Team_Aggregated_Fields;
    team_filter: Team_Filter;
    team_mutated: Team_Mutated;
    update_blog_input: Update_Blog_Input;
    update_blog_like_input: Update_Blog_Like_Input;
    update_brand_input: Update_Brand_Input;
    update_build_log_input: Update_Build_Log_Input;
    update_contact_form_input: Update_Contact_Form_Input;
    update_directus_files_input: Update_Directus_Files_Input;
    update_directus_folders_input: Update_Directus_Folders_Input;
    update_directus_roles_input: Update_Directus_Roles_Input;
    update_directus_users_input: Update_Directus_Users_Input;
    update_donor_input: Update_Donor_Input;
    update_educational_docs_input: Update_Educational_Docs_Input;
    update_form_factor_input: Update_Form_Factor_Input;
    update_git_pull_input: Update_Git_Pull_Input;
    update_homepage_slides_input: Update_Homepage_Slides_Input;
    update_import_raw_input: Update_Import_Raw_Input;
    update_import_update_input: Update_Import_Update_Input;
    update_list_input: Update_List_Input;
    update_model_directus_files_input: Update_Model_Directus_Files_Input;
    update_model_files_input: Update_Model_Files_Input;
    update_model_input: Update_Model_Input;
    update_model_like_input: Update_Model_Like_Input;
    update_model_list_input: Update_Model_List_Input;
    update_model_tag_input: Update_Model_Tag_Input;
    update_most_wanted_input: Update_Most_Wanted_Input;
    update_page_input: Update_Page_Input;
    update_product_input: Update_Product_Input;
    update_related_model_input: Update_Related_Model_Input;
    update_release_input: Update_Release_Input;
    update_reset_build_process_input: Update_Reset_Build_Process_Input;
    update_resources_input: Update_Resources_Input;
    update_sponsors_input: Update_Sponsors_Input;
    update_team_input: Update_Team_Input;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
    name: 'Date';
}

export interface GraphQlBigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GraphQLBigInt'], any> {
    name: 'GraphQLBigInt';
}

export interface GraphQlStringOrFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GraphQLStringOrFloat'], any> {
    name: 'GraphQLStringOrFloat';
}

export interface HashScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hash'], any> {
    name: 'Hash';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    create_blog_item?: Resolver<Maybe<ResolversTypes['blog']>, ParentType, ContextType, RequireFields<MutationCreate_Blog_ItemArgs, 'data'>>;
    create_blog_items?: Resolver<Array<ResolversTypes['blog']>, ParentType, ContextType, Partial<MutationCreate_Blog_ItemsArgs>>;
    create_blog_like_item?: Resolver<Maybe<ResolversTypes['blog_like']>, ParentType, ContextType, RequireFields<MutationCreate_Blog_Like_ItemArgs, 'data'>>;
    create_blog_like_items?: Resolver<Array<ResolversTypes['blog_like']>, ParentType, ContextType, Partial<MutationCreate_Blog_Like_ItemsArgs>>;
    create_brand_item?: Resolver<Maybe<ResolversTypes['brand']>, ParentType, ContextType, RequireFields<MutationCreate_Brand_ItemArgs, 'data'>>;
    create_brand_items?: Resolver<Array<ResolversTypes['brand']>, ParentType, ContextType, Partial<MutationCreate_Brand_ItemsArgs>>;
    create_build_log_item?: Resolver<Maybe<ResolversTypes['build_log']>, ParentType, ContextType, RequireFields<MutationCreate_Build_Log_ItemArgs, 'data'>>;
    create_build_log_items?: Resolver<Array<ResolversTypes['build_log']>, ParentType, ContextType, Partial<MutationCreate_Build_Log_ItemsArgs>>;
    create_contact_form_item?: Resolver<Maybe<ResolversTypes['contact_form']>, ParentType, ContextType, RequireFields<MutationCreate_Contact_Form_ItemArgs, 'data'>>;
    create_contact_form_items?: Resolver<Array<ResolversTypes['contact_form']>, ParentType, ContextType, Partial<MutationCreate_Contact_Form_ItemsArgs>>;
    create_donor_item?: Resolver<Maybe<ResolversTypes['donor']>, ParentType, ContextType, RequireFields<MutationCreate_Donor_ItemArgs, 'data'>>;
    create_donor_items?: Resolver<Array<ResolversTypes['donor']>, ParentType, ContextType, Partial<MutationCreate_Donor_ItemsArgs>>;
    create_educational_docs_item?: Resolver<Maybe<ResolversTypes['educational_docs']>, ParentType, ContextType, RequireFields<MutationCreate_Educational_Docs_ItemArgs, 'data'>>;
    create_educational_docs_items?: Resolver<Array<ResolversTypes['educational_docs']>, ParentType, ContextType, Partial<MutationCreate_Educational_Docs_ItemsArgs>>;
    create_form_factor_item?: Resolver<Maybe<ResolversTypes['form_factor']>, ParentType, ContextType, RequireFields<MutationCreate_Form_Factor_ItemArgs, 'data'>>;
    create_form_factor_items?: Resolver<Array<ResolversTypes['form_factor']>, ParentType, ContextType, Partial<MutationCreate_Form_Factor_ItemsArgs>>;
    create_git_pull_item?: Resolver<Maybe<ResolversTypes['git_pull']>, ParentType, ContextType, RequireFields<MutationCreate_Git_Pull_ItemArgs, 'data'>>;
    create_git_pull_items?: Resolver<Array<ResolversTypes['git_pull']>, ParentType, ContextType, Partial<MutationCreate_Git_Pull_ItemsArgs>>;
    create_homepage_slides_item?: Resolver<Maybe<ResolversTypes['homepage_slides']>, ParentType, ContextType, RequireFields<MutationCreate_Homepage_Slides_ItemArgs, 'data'>>;
    create_homepage_slides_items?: Resolver<Array<ResolversTypes['homepage_slides']>, ParentType, ContextType, Partial<MutationCreate_Homepage_Slides_ItemsArgs>>;
    create_import_raw_item?: Resolver<Maybe<ResolversTypes['import_raw']>, ParentType, ContextType, RequireFields<MutationCreate_Import_Raw_ItemArgs, 'data'>>;
    create_import_raw_items?: Resolver<Array<ResolversTypes['import_raw']>, ParentType, ContextType, Partial<MutationCreate_Import_Raw_ItemsArgs>>;
    create_import_update_item?: Resolver<Maybe<ResolversTypes['import_update']>, ParentType, ContextType, RequireFields<MutationCreate_Import_Update_ItemArgs, 'data'>>;
    create_import_update_items?: Resolver<Array<ResolversTypes['import_update']>, ParentType, ContextType, Partial<MutationCreate_Import_Update_ItemsArgs>>;
    create_list_item?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, RequireFields<MutationCreate_List_ItemArgs, 'data'>>;
    create_list_items?: Resolver<Array<ResolversTypes['list']>, ParentType, ContextType, Partial<MutationCreate_List_ItemsArgs>>;
    create_model_directus_files_item?: Resolver<Maybe<ResolversTypes['model_directus_files']>, ParentType, ContextType, RequireFields<MutationCreate_Model_Directus_Files_ItemArgs, 'data'>>;
    create_model_directus_files_items?: Resolver<Array<ResolversTypes['model_directus_files']>, ParentType, ContextType, Partial<MutationCreate_Model_Directus_Files_ItemsArgs>>;
    create_model_files_item?: Resolver<Maybe<ResolversTypes['model_files']>, ParentType, ContextType, RequireFields<MutationCreate_Model_Files_ItemArgs, 'data'>>;
    create_model_files_items?: Resolver<Array<ResolversTypes['model_files']>, ParentType, ContextType, Partial<MutationCreate_Model_Files_ItemsArgs>>;
    create_model_item?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, RequireFields<MutationCreate_Model_ItemArgs, 'data'>>;
    create_model_items?: Resolver<Array<ResolversTypes['model']>, ParentType, ContextType, Partial<MutationCreate_Model_ItemsArgs>>;
    create_model_like_item?: Resolver<Maybe<ResolversTypes['model_like']>, ParentType, ContextType, RequireFields<MutationCreate_Model_Like_ItemArgs, 'data'>>;
    create_model_like_items?: Resolver<Array<ResolversTypes['model_like']>, ParentType, ContextType, Partial<MutationCreate_Model_Like_ItemsArgs>>;
    create_model_list_item?: Resolver<Maybe<ResolversTypes['model_list']>, ParentType, ContextType, RequireFields<MutationCreate_Model_List_ItemArgs, 'data'>>;
    create_model_list_items?: Resolver<Array<ResolversTypes['model_list']>, ParentType, ContextType, Partial<MutationCreate_Model_List_ItemsArgs>>;
    create_model_tag_item?: Resolver<Maybe<ResolversTypes['model_tag']>, ParentType, ContextType, RequireFields<MutationCreate_Model_Tag_ItemArgs, 'data'>>;
    create_model_tag_items?: Resolver<Array<ResolversTypes['model_tag']>, ParentType, ContextType, Partial<MutationCreate_Model_Tag_ItemsArgs>>;
    create_most_wanted_item?: Resolver<Maybe<ResolversTypes['most_wanted']>, ParentType, ContextType, RequireFields<MutationCreate_Most_Wanted_ItemArgs, 'data'>>;
    create_most_wanted_items?: Resolver<Array<ResolversTypes['most_wanted']>, ParentType, ContextType, Partial<MutationCreate_Most_Wanted_ItemsArgs>>;
    create_page_item?: Resolver<Maybe<ResolversTypes['page']>, ParentType, ContextType, RequireFields<MutationCreate_Page_ItemArgs, 'data'>>;
    create_page_items?: Resolver<Array<ResolversTypes['page']>, ParentType, ContextType, Partial<MutationCreate_Page_ItemsArgs>>;
    create_product_item?: Resolver<Maybe<ResolversTypes['product']>, ParentType, ContextType, RequireFields<MutationCreate_Product_ItemArgs, 'data'>>;
    create_product_items?: Resolver<Array<ResolversTypes['product']>, ParentType, ContextType, Partial<MutationCreate_Product_ItemsArgs>>;
    create_related_model_item?: Resolver<Maybe<ResolversTypes['related_model']>, ParentType, ContextType, RequireFields<MutationCreate_Related_Model_ItemArgs, 'data'>>;
    create_related_model_items?: Resolver<Array<ResolversTypes['related_model']>, ParentType, ContextType, Partial<MutationCreate_Related_Model_ItemsArgs>>;
    create_release_item?: Resolver<Maybe<ResolversTypes['release']>, ParentType, ContextType, RequireFields<MutationCreate_Release_ItemArgs, 'data'>>;
    create_release_items?: Resolver<Array<ResolversTypes['release']>, ParentType, ContextType, Partial<MutationCreate_Release_ItemsArgs>>;
    create_reset_build_process_item?: Resolver<Maybe<ResolversTypes['reset_build_process']>, ParentType, ContextType, RequireFields<MutationCreate_Reset_Build_Process_ItemArgs, 'data'>>;
    create_reset_build_process_items?: Resolver<Array<ResolversTypes['reset_build_process']>, ParentType, ContextType, Partial<MutationCreate_Reset_Build_Process_ItemsArgs>>;
    create_resources_item?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<MutationCreate_Resources_ItemArgs, 'data'>>;
    create_resources_items?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType, Partial<MutationCreate_Resources_ItemsArgs>>;
    create_sponsors_item?: Resolver<Maybe<ResolversTypes['sponsors']>, ParentType, ContextType, RequireFields<MutationCreate_Sponsors_ItemArgs, 'data'>>;
    create_sponsors_items?: Resolver<Array<ResolversTypes['sponsors']>, ParentType, ContextType, Partial<MutationCreate_Sponsors_ItemsArgs>>;
    create_team_item?: Resolver<Maybe<ResolversTypes['team']>, ParentType, ContextType, RequireFields<MutationCreate_Team_ItemArgs, 'data'>>;
    create_team_items?: Resolver<Array<ResolversTypes['team']>, ParentType, ContextType, Partial<MutationCreate_Team_ItemsArgs>>;
    delete_blog_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Blog_ItemArgs, 'id'>>;
    delete_blog_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Blog_ItemsArgs, 'ids'>>;
    delete_blog_like_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Blog_Like_ItemArgs, 'id'>>;
    delete_blog_like_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Blog_Like_ItemsArgs, 'ids'>>;
    delete_brand_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Brand_ItemArgs, 'id'>>;
    delete_brand_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Brand_ItemsArgs, 'ids'>>;
    delete_build_log_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Build_Log_ItemArgs, 'id'>>;
    delete_build_log_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Build_Log_ItemsArgs, 'ids'>>;
    delete_contact_form_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Contact_Form_ItemArgs, 'id'>>;
    delete_contact_form_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Contact_Form_ItemsArgs, 'ids'>>;
    delete_donor_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Donor_ItemArgs, 'id'>>;
    delete_donor_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Donor_ItemsArgs, 'ids'>>;
    delete_educational_docs_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Educational_Docs_ItemArgs, 'id'>>;
    delete_educational_docs_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Educational_Docs_ItemsArgs, 'ids'>>;
    delete_form_factor_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Form_Factor_ItemArgs, 'id'>>;
    delete_form_factor_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Form_Factor_ItemsArgs, 'ids'>>;
    delete_git_pull_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Git_Pull_ItemArgs, 'id'>>;
    delete_git_pull_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Git_Pull_ItemsArgs, 'ids'>>;
    delete_homepage_slides_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Homepage_Slides_ItemArgs, 'id'>>;
    delete_homepage_slides_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Homepage_Slides_ItemsArgs, 'ids'>>;
    delete_import_raw_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Import_Raw_ItemArgs, 'id'>>;
    delete_import_raw_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Import_Raw_ItemsArgs, 'ids'>>;
    delete_import_update_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Import_Update_ItemArgs, 'id'>>;
    delete_import_update_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Import_Update_ItemsArgs, 'ids'>>;
    delete_list_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_List_ItemArgs, 'id'>>;
    delete_list_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_List_ItemsArgs, 'ids'>>;
    delete_model_directus_files_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Directus_Files_ItemArgs, 'id'>>;
    delete_model_directus_files_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Directus_Files_ItemsArgs, 'ids'>>;
    delete_model_files_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Files_ItemArgs, 'id'>>;
    delete_model_files_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Files_ItemsArgs, 'ids'>>;
    delete_model_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_ItemArgs, 'id'>>;
    delete_model_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_ItemsArgs, 'ids'>>;
    delete_model_like_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Like_ItemArgs, 'id'>>;
    delete_model_like_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Like_ItemsArgs, 'ids'>>;
    delete_model_list_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_List_ItemArgs, 'id'>>;
    delete_model_list_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_List_ItemsArgs, 'ids'>>;
    delete_model_tag_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Tag_ItemArgs, 'id'>>;
    delete_model_tag_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Model_Tag_ItemsArgs, 'ids'>>;
    delete_most_wanted_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Most_Wanted_ItemArgs, 'id'>>;
    delete_most_wanted_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Most_Wanted_ItemsArgs, 'ids'>>;
    delete_page_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Page_ItemArgs, 'id'>>;
    delete_page_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Page_ItemsArgs, 'ids'>>;
    delete_product_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Product_ItemArgs, 'id'>>;
    delete_product_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Product_ItemsArgs, 'ids'>>;
    delete_related_model_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Related_Model_ItemArgs, 'id'>>;
    delete_related_model_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Related_Model_ItemsArgs, 'ids'>>;
    delete_release_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Release_ItemArgs, 'id'>>;
    delete_release_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Release_ItemsArgs, 'ids'>>;
    delete_reset_build_process_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Reset_Build_Process_ItemArgs, 'id'>>;
    delete_reset_build_process_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Reset_Build_Process_ItemsArgs, 'ids'>>;
    delete_resources_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Resources_ItemArgs, 'id'>>;
    delete_resources_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Resources_ItemsArgs, 'ids'>>;
    delete_sponsors_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Sponsors_ItemArgs, 'id'>>;
    delete_sponsors_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Sponsors_ItemsArgs, 'ids'>>;
    delete_team_item?: Resolver<Maybe<ResolversTypes['delete_one']>, ParentType, ContextType, RequireFields<MutationDelete_Team_ItemArgs, 'id'>>;
    delete_team_items?: Resolver<Maybe<ResolversTypes['delete_many']>, ParentType, ContextType, RequireFields<MutationDelete_Team_ItemsArgs, 'ids'>>;
    update_blog_batch?: Resolver<Array<ResolversTypes['blog']>, ParentType, ContextType, Partial<MutationUpdate_Blog_BatchArgs>>;
    update_blog_item?: Resolver<Maybe<ResolversTypes['blog']>, ParentType, ContextType, RequireFields<MutationUpdate_Blog_ItemArgs, 'data' | 'id'>>;
    update_blog_items?: Resolver<Array<ResolversTypes['blog']>, ParentType, ContextType, RequireFields<MutationUpdate_Blog_ItemsArgs, 'data' | 'ids'>>;
    update_blog_like_batch?: Resolver<Array<ResolversTypes['blog_like']>, ParentType, ContextType, Partial<MutationUpdate_Blog_Like_BatchArgs>>;
    update_blog_like_item?: Resolver<Maybe<ResolversTypes['blog_like']>, ParentType, ContextType, RequireFields<MutationUpdate_Blog_Like_ItemArgs, 'data' | 'id'>>;
    update_blog_like_items?: Resolver<Array<ResolversTypes['blog_like']>, ParentType, ContextType, RequireFields<MutationUpdate_Blog_Like_ItemsArgs, 'data' | 'ids'>>;
    update_brand_batch?: Resolver<Array<ResolversTypes['brand']>, ParentType, ContextType, Partial<MutationUpdate_Brand_BatchArgs>>;
    update_brand_item?: Resolver<Maybe<ResolversTypes['brand']>, ParentType, ContextType, RequireFields<MutationUpdate_Brand_ItemArgs, 'data' | 'id'>>;
    update_brand_items?: Resolver<Array<ResolversTypes['brand']>, ParentType, ContextType, RequireFields<MutationUpdate_Brand_ItemsArgs, 'data' | 'ids'>>;
    update_build_log_batch?: Resolver<Array<ResolversTypes['build_log']>, ParentType, ContextType, Partial<MutationUpdate_Build_Log_BatchArgs>>;
    update_build_log_item?: Resolver<Maybe<ResolversTypes['build_log']>, ParentType, ContextType, RequireFields<MutationUpdate_Build_Log_ItemArgs, 'data' | 'id'>>;
    update_build_log_items?: Resolver<Array<ResolversTypes['build_log']>, ParentType, ContextType, RequireFields<MutationUpdate_Build_Log_ItemsArgs, 'data' | 'ids'>>;
    update_contact_form_batch?: Resolver<Array<ResolversTypes['contact_form']>, ParentType, ContextType, Partial<MutationUpdate_Contact_Form_BatchArgs>>;
    update_contact_form_item?: Resolver<Maybe<ResolversTypes['contact_form']>, ParentType, ContextType, RequireFields<MutationUpdate_Contact_Form_ItemArgs, 'data' | 'id'>>;
    update_contact_form_items?: Resolver<Array<ResolversTypes['contact_form']>, ParentType, ContextType, RequireFields<MutationUpdate_Contact_Form_ItemsArgs, 'data' | 'ids'>>;
    update_donor_batch?: Resolver<Array<ResolversTypes['donor']>, ParentType, ContextType, Partial<MutationUpdate_Donor_BatchArgs>>;
    update_donor_item?: Resolver<Maybe<ResolversTypes['donor']>, ParentType, ContextType, RequireFields<MutationUpdate_Donor_ItemArgs, 'data' | 'id'>>;
    update_donor_items?: Resolver<Array<ResolversTypes['donor']>, ParentType, ContextType, RequireFields<MutationUpdate_Donor_ItemsArgs, 'data' | 'ids'>>;
    update_educational_docs_batch?: Resolver<Array<ResolversTypes['educational_docs']>, ParentType, ContextType, Partial<MutationUpdate_Educational_Docs_BatchArgs>>;
    update_educational_docs_item?: Resolver<Maybe<ResolversTypes['educational_docs']>, ParentType, ContextType, RequireFields<MutationUpdate_Educational_Docs_ItemArgs, 'data' | 'id'>>;
    update_educational_docs_items?: Resolver<Array<ResolversTypes['educational_docs']>, ParentType, ContextType, RequireFields<MutationUpdate_Educational_Docs_ItemsArgs, 'data' | 'ids'>>;
    update_form_factor_batch?: Resolver<Array<ResolversTypes['form_factor']>, ParentType, ContextType, Partial<MutationUpdate_Form_Factor_BatchArgs>>;
    update_form_factor_item?: Resolver<Maybe<ResolversTypes['form_factor']>, ParentType, ContextType, RequireFields<MutationUpdate_Form_Factor_ItemArgs, 'data' | 'id'>>;
    update_form_factor_items?: Resolver<Array<ResolversTypes['form_factor']>, ParentType, ContextType, RequireFields<MutationUpdate_Form_Factor_ItemsArgs, 'data' | 'ids'>>;
    update_git_pull_batch?: Resolver<Array<ResolversTypes['git_pull']>, ParentType, ContextType, Partial<MutationUpdate_Git_Pull_BatchArgs>>;
    update_git_pull_item?: Resolver<Maybe<ResolversTypes['git_pull']>, ParentType, ContextType, RequireFields<MutationUpdate_Git_Pull_ItemArgs, 'data' | 'id'>>;
    update_git_pull_items?: Resolver<Array<ResolversTypes['git_pull']>, ParentType, ContextType, RequireFields<MutationUpdate_Git_Pull_ItemsArgs, 'data' | 'ids'>>;
    update_homepage_slides_batch?: Resolver<Array<ResolversTypes['homepage_slides']>, ParentType, ContextType, Partial<MutationUpdate_Homepage_Slides_BatchArgs>>;
    update_homepage_slides_item?: Resolver<Maybe<ResolversTypes['homepage_slides']>, ParentType, ContextType, RequireFields<MutationUpdate_Homepage_Slides_ItemArgs, 'data' | 'id'>>;
    update_homepage_slides_items?: Resolver<Array<ResolversTypes['homepage_slides']>, ParentType, ContextType, RequireFields<MutationUpdate_Homepage_Slides_ItemsArgs, 'data' | 'ids'>>;
    update_import_raw_batch?: Resolver<Array<ResolversTypes['import_raw']>, ParentType, ContextType, Partial<MutationUpdate_Import_Raw_BatchArgs>>;
    update_import_raw_item?: Resolver<Maybe<ResolversTypes['import_raw']>, ParentType, ContextType, RequireFields<MutationUpdate_Import_Raw_ItemArgs, 'data' | 'id'>>;
    update_import_raw_items?: Resolver<Array<ResolversTypes['import_raw']>, ParentType, ContextType, RequireFields<MutationUpdate_Import_Raw_ItemsArgs, 'data' | 'ids'>>;
    update_import_update_batch?: Resolver<Array<ResolversTypes['import_update']>, ParentType, ContextType, Partial<MutationUpdate_Import_Update_BatchArgs>>;
    update_import_update_item?: Resolver<Maybe<ResolversTypes['import_update']>, ParentType, ContextType, RequireFields<MutationUpdate_Import_Update_ItemArgs, 'data' | 'id'>>;
    update_import_update_items?: Resolver<Array<ResolversTypes['import_update']>, ParentType, ContextType, RequireFields<MutationUpdate_Import_Update_ItemsArgs, 'data' | 'ids'>>;
    update_list_batch?: Resolver<Array<ResolversTypes['list']>, ParentType, ContextType, Partial<MutationUpdate_List_BatchArgs>>;
    update_list_item?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, RequireFields<MutationUpdate_List_ItemArgs, 'data' | 'id'>>;
    update_list_items?: Resolver<Array<ResolversTypes['list']>, ParentType, ContextType, RequireFields<MutationUpdate_List_ItemsArgs, 'data' | 'ids'>>;
    update_model_batch?: Resolver<Array<ResolversTypes['model']>, ParentType, ContextType, Partial<MutationUpdate_Model_BatchArgs>>;
    update_model_directus_files_batch?: Resolver<Array<ResolversTypes['model_directus_files']>, ParentType, ContextType, Partial<MutationUpdate_Model_Directus_Files_BatchArgs>>;
    update_model_directus_files_item?: Resolver<Maybe<ResolversTypes['model_directus_files']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Directus_Files_ItemArgs, 'data' | 'id'>>;
    update_model_directus_files_items?: Resolver<Array<ResolversTypes['model_directus_files']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Directus_Files_ItemsArgs, 'data' | 'ids'>>;
    update_model_files_batch?: Resolver<Array<ResolversTypes['model_files']>, ParentType, ContextType, Partial<MutationUpdate_Model_Files_BatchArgs>>;
    update_model_files_item?: Resolver<Maybe<ResolversTypes['model_files']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Files_ItemArgs, 'data' | 'id'>>;
    update_model_files_items?: Resolver<Array<ResolversTypes['model_files']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Files_ItemsArgs, 'data' | 'ids'>>;
    update_model_item?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_ItemArgs, 'data' | 'id'>>;
    update_model_items?: Resolver<Array<ResolversTypes['model']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_ItemsArgs, 'data' | 'ids'>>;
    update_model_like_batch?: Resolver<Array<ResolversTypes['model_like']>, ParentType, ContextType, Partial<MutationUpdate_Model_Like_BatchArgs>>;
    update_model_like_item?: Resolver<Maybe<ResolversTypes['model_like']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Like_ItemArgs, 'data' | 'id'>>;
    update_model_like_items?: Resolver<Array<ResolversTypes['model_like']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Like_ItemsArgs, 'data' | 'ids'>>;
    update_model_list_batch?: Resolver<Array<ResolversTypes['model_list']>, ParentType, ContextType, Partial<MutationUpdate_Model_List_BatchArgs>>;
    update_model_list_item?: Resolver<Maybe<ResolversTypes['model_list']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_List_ItemArgs, 'data' | 'id'>>;
    update_model_list_items?: Resolver<Array<ResolversTypes['model_list']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_List_ItemsArgs, 'data' | 'ids'>>;
    update_model_tag_batch?: Resolver<Array<ResolversTypes['model_tag']>, ParentType, ContextType, Partial<MutationUpdate_Model_Tag_BatchArgs>>;
    update_model_tag_item?: Resolver<Maybe<ResolversTypes['model_tag']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Tag_ItemArgs, 'data' | 'id'>>;
    update_model_tag_items?: Resolver<Array<ResolversTypes['model_tag']>, ParentType, ContextType, RequireFields<MutationUpdate_Model_Tag_ItemsArgs, 'data' | 'ids'>>;
    update_most_wanted_batch?: Resolver<Array<ResolversTypes['most_wanted']>, ParentType, ContextType, Partial<MutationUpdate_Most_Wanted_BatchArgs>>;
    update_most_wanted_item?: Resolver<Maybe<ResolversTypes['most_wanted']>, ParentType, ContextType, RequireFields<MutationUpdate_Most_Wanted_ItemArgs, 'data' | 'id'>>;
    update_most_wanted_items?: Resolver<Array<ResolversTypes['most_wanted']>, ParentType, ContextType, RequireFields<MutationUpdate_Most_Wanted_ItemsArgs, 'data' | 'ids'>>;
    update_page_batch?: Resolver<Array<ResolversTypes['page']>, ParentType, ContextType, Partial<MutationUpdate_Page_BatchArgs>>;
    update_page_item?: Resolver<Maybe<ResolversTypes['page']>, ParentType, ContextType, RequireFields<MutationUpdate_Page_ItemArgs, 'data' | 'id'>>;
    update_page_items?: Resolver<Array<ResolversTypes['page']>, ParentType, ContextType, RequireFields<MutationUpdate_Page_ItemsArgs, 'data' | 'ids'>>;
    update_product_batch?: Resolver<Array<ResolversTypes['product']>, ParentType, ContextType, Partial<MutationUpdate_Product_BatchArgs>>;
    update_product_item?: Resolver<Maybe<ResolversTypes['product']>, ParentType, ContextType, RequireFields<MutationUpdate_Product_ItemArgs, 'data' | 'id'>>;
    update_product_items?: Resolver<Array<ResolversTypes['product']>, ParentType, ContextType, RequireFields<MutationUpdate_Product_ItemsArgs, 'data' | 'ids'>>;
    update_related_model_batch?: Resolver<Array<ResolversTypes['related_model']>, ParentType, ContextType, Partial<MutationUpdate_Related_Model_BatchArgs>>;
    update_related_model_item?: Resolver<Maybe<ResolversTypes['related_model']>, ParentType, ContextType, RequireFields<MutationUpdate_Related_Model_ItemArgs, 'data' | 'id'>>;
    update_related_model_items?: Resolver<Array<ResolversTypes['related_model']>, ParentType, ContextType, RequireFields<MutationUpdate_Related_Model_ItemsArgs, 'data' | 'ids'>>;
    update_release_batch?: Resolver<Array<ResolversTypes['release']>, ParentType, ContextType, Partial<MutationUpdate_Release_BatchArgs>>;
    update_release_item?: Resolver<Maybe<ResolversTypes['release']>, ParentType, ContextType, RequireFields<MutationUpdate_Release_ItemArgs, 'data' | 'id'>>;
    update_release_items?: Resolver<Array<ResolversTypes['release']>, ParentType, ContextType, RequireFields<MutationUpdate_Release_ItemsArgs, 'data' | 'ids'>>;
    update_reset_build_process_batch?: Resolver<Array<ResolversTypes['reset_build_process']>, ParentType, ContextType, Partial<MutationUpdate_Reset_Build_Process_BatchArgs>>;
    update_reset_build_process_item?: Resolver<Maybe<ResolversTypes['reset_build_process']>, ParentType, ContextType, RequireFields<MutationUpdate_Reset_Build_Process_ItemArgs, 'data' | 'id'>>;
    update_reset_build_process_items?: Resolver<Array<ResolversTypes['reset_build_process']>, ParentType, ContextType, RequireFields<MutationUpdate_Reset_Build_Process_ItemsArgs, 'data' | 'ids'>>;
    update_resources_batch?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType, Partial<MutationUpdate_Resources_BatchArgs>>;
    update_resources_item?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<MutationUpdate_Resources_ItemArgs, 'data' | 'id'>>;
    update_resources_items?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<MutationUpdate_Resources_ItemsArgs, 'data' | 'ids'>>;
    update_sponsors_batch?: Resolver<Array<ResolversTypes['sponsors']>, ParentType, ContextType, Partial<MutationUpdate_Sponsors_BatchArgs>>;
    update_sponsors_item?: Resolver<Maybe<ResolversTypes['sponsors']>, ParentType, ContextType, RequireFields<MutationUpdate_Sponsors_ItemArgs, 'data' | 'id'>>;
    update_sponsors_items?: Resolver<Array<ResolversTypes['sponsors']>, ParentType, ContextType, RequireFields<MutationUpdate_Sponsors_ItemsArgs, 'data' | 'ids'>>;
    update_team_batch?: Resolver<Array<ResolversTypes['team']>, ParentType, ContextType, Partial<MutationUpdate_Team_BatchArgs>>;
    update_team_item?: Resolver<Maybe<ResolversTypes['team']>, ParentType, ContextType, RequireFields<MutationUpdate_Team_ItemArgs, 'data' | 'id'>>;
    update_team_items?: Resolver<Array<ResolversTypes['team']>, ParentType, ContextType, RequireFields<MutationUpdate_Team_ItemsArgs, 'data' | 'ids'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    blog?: Resolver<Array<ResolversTypes['blog']>, ParentType, ContextType, Partial<QueryBlogArgs>>;
    blog_aggregated?: Resolver<Array<ResolversTypes['blog_aggregated']>, ParentType, ContextType, Partial<QueryBlog_AggregatedArgs>>;
    blog_by_id?: Resolver<Maybe<ResolversTypes['blog']>, ParentType, ContextType, RequireFields<QueryBlog_By_IdArgs, 'id'>>;
    blog_like?: Resolver<Array<ResolversTypes['blog_like']>, ParentType, ContextType, Partial<QueryBlog_LikeArgs>>;
    blog_like_aggregated?: Resolver<Array<ResolversTypes['blog_like_aggregated']>, ParentType, ContextType, Partial<QueryBlog_Like_AggregatedArgs>>;
    blog_like_by_id?: Resolver<Maybe<ResolversTypes['blog_like']>, ParentType, ContextType, RequireFields<QueryBlog_Like_By_IdArgs, 'id'>>;
    brand?: Resolver<Array<ResolversTypes['brand']>, ParentType, ContextType, Partial<QueryBrandArgs>>;
    brand_aggregated?: Resolver<Array<ResolversTypes['brand_aggregated']>, ParentType, ContextType, Partial<QueryBrand_AggregatedArgs>>;
    brand_by_id?: Resolver<Maybe<ResolversTypes['brand']>, ParentType, ContextType, RequireFields<QueryBrand_By_IdArgs, 'id'>>;
    build_log?: Resolver<Array<ResolversTypes['build_log']>, ParentType, ContextType, Partial<QueryBuild_LogArgs>>;
    build_log_aggregated?: Resolver<Array<ResolversTypes['build_log_aggregated']>, ParentType, ContextType, Partial<QueryBuild_Log_AggregatedArgs>>;
    build_log_by_id?: Resolver<Maybe<ResolversTypes['build_log']>, ParentType, ContextType, RequireFields<QueryBuild_Log_By_IdArgs, 'id'>>;
    contact_form?: Resolver<Array<ResolversTypes['contact_form']>, ParentType, ContextType, Partial<QueryContact_FormArgs>>;
    contact_form_aggregated?: Resolver<Array<ResolversTypes['contact_form_aggregated']>, ParentType, ContextType, Partial<QueryContact_Form_AggregatedArgs>>;
    contact_form_by_id?: Resolver<Maybe<ResolversTypes['contact_form']>, ParentType, ContextType, RequireFields<QueryContact_Form_By_IdArgs, 'id'>>;
    donor?: Resolver<Array<ResolversTypes['donor']>, ParentType, ContextType, Partial<QueryDonorArgs>>;
    donor_aggregated?: Resolver<Array<ResolversTypes['donor_aggregated']>, ParentType, ContextType, Partial<QueryDonor_AggregatedArgs>>;
    donor_by_id?: Resolver<Maybe<ResolversTypes['donor']>, ParentType, ContextType, RequireFields<QueryDonor_By_IdArgs, 'id'>>;
    educational_docs?: Resolver<Array<ResolversTypes['educational_docs']>, ParentType, ContextType, Partial<QueryEducational_DocsArgs>>;
    educational_docs_aggregated?: Resolver<Array<ResolversTypes['educational_docs_aggregated']>, ParentType, ContextType, Partial<QueryEducational_Docs_AggregatedArgs>>;
    educational_docs_by_id?: Resolver<Maybe<ResolversTypes['educational_docs']>, ParentType, ContextType, RequireFields<QueryEducational_Docs_By_IdArgs, 'id'>>;
    form_factor?: Resolver<Array<ResolversTypes['form_factor']>, ParentType, ContextType, Partial<QueryForm_FactorArgs>>;
    form_factor_aggregated?: Resolver<Array<ResolversTypes['form_factor_aggregated']>, ParentType, ContextType, Partial<QueryForm_Factor_AggregatedArgs>>;
    form_factor_by_id?: Resolver<Maybe<ResolversTypes['form_factor']>, ParentType, ContextType, RequireFields<QueryForm_Factor_By_IdArgs, 'id'>>;
    git_pull?: Resolver<Array<ResolversTypes['git_pull']>, ParentType, ContextType, Partial<QueryGit_PullArgs>>;
    git_pull_aggregated?: Resolver<Array<ResolversTypes['git_pull_aggregated']>, ParentType, ContextType, Partial<QueryGit_Pull_AggregatedArgs>>;
    git_pull_by_id?: Resolver<Maybe<ResolversTypes['git_pull']>, ParentType, ContextType, RequireFields<QueryGit_Pull_By_IdArgs, 'id'>>;
    homepage_slides?: Resolver<Array<ResolversTypes['homepage_slides']>, ParentType, ContextType, Partial<QueryHomepage_SlidesArgs>>;
    homepage_slides_aggregated?: Resolver<Array<ResolversTypes['homepage_slides_aggregated']>, ParentType, ContextType, Partial<QueryHomepage_Slides_AggregatedArgs>>;
    homepage_slides_by_id?: Resolver<Maybe<ResolversTypes['homepage_slides']>, ParentType, ContextType, RequireFields<QueryHomepage_Slides_By_IdArgs, 'id'>>;
    import_raw?: Resolver<Array<ResolversTypes['import_raw']>, ParentType, ContextType, Partial<QueryImport_RawArgs>>;
    import_raw_aggregated?: Resolver<Array<ResolversTypes['import_raw_aggregated']>, ParentType, ContextType, Partial<QueryImport_Raw_AggregatedArgs>>;
    import_raw_by_id?: Resolver<Maybe<ResolversTypes['import_raw']>, ParentType, ContextType, RequireFields<QueryImport_Raw_By_IdArgs, 'id'>>;
    import_update?: Resolver<Array<ResolversTypes['import_update']>, ParentType, ContextType, Partial<QueryImport_UpdateArgs>>;
    import_update_aggregated?: Resolver<Array<ResolversTypes['import_update_aggregated']>, ParentType, ContextType, Partial<QueryImport_Update_AggregatedArgs>>;
    import_update_by_id?: Resolver<Maybe<ResolversTypes['import_update']>, ParentType, ContextType, RequireFields<QueryImport_Update_By_IdArgs, 'id'>>;
    list?: Resolver<Array<ResolversTypes['list']>, ParentType, ContextType, Partial<QueryListArgs>>;
    list_aggregated?: Resolver<Array<ResolversTypes['list_aggregated']>, ParentType, ContextType, Partial<QueryList_AggregatedArgs>>;
    list_by_id?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, RequireFields<QueryList_By_IdArgs, 'id'>>;
    model?: Resolver<Array<ResolversTypes['model']>, ParentType, ContextType, Partial<QueryModelArgs>>;
    model_aggregated?: Resolver<Array<ResolversTypes['model_aggregated']>, ParentType, ContextType, Partial<QueryModel_AggregatedArgs>>;
    model_by_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, RequireFields<QueryModel_By_IdArgs, 'id'>>;
    model_directus_files?: Resolver<Array<ResolversTypes['model_directus_files']>, ParentType, ContextType, Partial<QueryModel_Directus_FilesArgs>>;
    model_directus_files_aggregated?: Resolver<Array<ResolversTypes['model_directus_files_aggregated']>, ParentType, ContextType, Partial<QueryModel_Directus_Files_AggregatedArgs>>;
    model_directus_files_by_id?: Resolver<Maybe<ResolversTypes['model_directus_files']>, ParentType, ContextType, RequireFields<QueryModel_Directus_Files_By_IdArgs, 'id'>>;
    model_files?: Resolver<Array<ResolversTypes['model_files']>, ParentType, ContextType, Partial<QueryModel_FilesArgs>>;
    model_files_aggregated?: Resolver<Array<ResolversTypes['model_files_aggregated']>, ParentType, ContextType, Partial<QueryModel_Files_AggregatedArgs>>;
    model_files_by_id?: Resolver<Maybe<ResolversTypes['model_files']>, ParentType, ContextType, RequireFields<QueryModel_Files_By_IdArgs, 'id'>>;
    model_like?: Resolver<Array<ResolversTypes['model_like']>, ParentType, ContextType, Partial<QueryModel_LikeArgs>>;
    model_like_aggregated?: Resolver<Array<ResolversTypes['model_like_aggregated']>, ParentType, ContextType, Partial<QueryModel_Like_AggregatedArgs>>;
    model_like_by_id?: Resolver<Maybe<ResolversTypes['model_like']>, ParentType, ContextType, RequireFields<QueryModel_Like_By_IdArgs, 'id'>>;
    model_list?: Resolver<Array<ResolversTypes['model_list']>, ParentType, ContextType, Partial<QueryModel_ListArgs>>;
    model_list_aggregated?: Resolver<Array<ResolversTypes['model_list_aggregated']>, ParentType, ContextType, Partial<QueryModel_List_AggregatedArgs>>;
    model_list_by_id?: Resolver<Maybe<ResolversTypes['model_list']>, ParentType, ContextType, RequireFields<QueryModel_List_By_IdArgs, 'id'>>;
    model_tag?: Resolver<Array<ResolversTypes['model_tag']>, ParentType, ContextType, Partial<QueryModel_TagArgs>>;
    model_tag_aggregated?: Resolver<Array<ResolversTypes['model_tag_aggregated']>, ParentType, ContextType, Partial<QueryModel_Tag_AggregatedArgs>>;
    model_tag_by_id?: Resolver<Maybe<ResolversTypes['model_tag']>, ParentType, ContextType, RequireFields<QueryModel_Tag_By_IdArgs, 'id'>>;
    most_wanted?: Resolver<Array<ResolversTypes['most_wanted']>, ParentType, ContextType, Partial<QueryMost_WantedArgs>>;
    most_wanted_aggregated?: Resolver<Array<ResolversTypes['most_wanted_aggregated']>, ParentType, ContextType, Partial<QueryMost_Wanted_AggregatedArgs>>;
    most_wanted_by_id?: Resolver<Maybe<ResolversTypes['most_wanted']>, ParentType, ContextType, RequireFields<QueryMost_Wanted_By_IdArgs, 'id'>>;
    page?: Resolver<Array<ResolversTypes['page']>, ParentType, ContextType, Partial<QueryPageArgs>>;
    page_aggregated?: Resolver<Array<ResolversTypes['page_aggregated']>, ParentType, ContextType, Partial<QueryPage_AggregatedArgs>>;
    page_by_id?: Resolver<Maybe<ResolversTypes['page']>, ParentType, ContextType, RequireFields<QueryPage_By_IdArgs, 'id'>>;
    product?: Resolver<Array<ResolversTypes['product']>, ParentType, ContextType, Partial<QueryProductArgs>>;
    product_aggregated?: Resolver<Array<ResolversTypes['product_aggregated']>, ParentType, ContextType, Partial<QueryProduct_AggregatedArgs>>;
    product_by_id?: Resolver<Maybe<ResolversTypes['product']>, ParentType, ContextType, RequireFields<QueryProduct_By_IdArgs, 'id'>>;
    related_model?: Resolver<Array<ResolversTypes['related_model']>, ParentType, ContextType, Partial<QueryRelated_ModelArgs>>;
    related_model_aggregated?: Resolver<Array<ResolversTypes['related_model_aggregated']>, ParentType, ContextType, Partial<QueryRelated_Model_AggregatedArgs>>;
    related_model_by_id?: Resolver<Maybe<ResolversTypes['related_model']>, ParentType, ContextType, RequireFields<QueryRelated_Model_By_IdArgs, 'id'>>;
    release?: Resolver<Array<ResolversTypes['release']>, ParentType, ContextType, Partial<QueryReleaseArgs>>;
    release_aggregated?: Resolver<Array<ResolversTypes['release_aggregated']>, ParentType, ContextType, Partial<QueryRelease_AggregatedArgs>>;
    release_by_id?: Resolver<Maybe<ResolversTypes['release']>, ParentType, ContextType, RequireFields<QueryRelease_By_IdArgs, 'id'>>;
    reset_build_process?: Resolver<Array<ResolversTypes['reset_build_process']>, ParentType, ContextType, Partial<QueryReset_Build_ProcessArgs>>;
    reset_build_process_aggregated?: Resolver<Array<ResolversTypes['reset_build_process_aggregated']>, ParentType, ContextType, Partial<QueryReset_Build_Process_AggregatedArgs>>;
    reset_build_process_by_id?: Resolver<Maybe<ResolversTypes['reset_build_process']>, ParentType, ContextType, RequireFields<QueryReset_Build_Process_By_IdArgs, 'id'>>;
    resources?: Resolver<Array<ResolversTypes['resources']>, ParentType, ContextType, Partial<QueryResourcesArgs>>;
    resources_aggregated?: Resolver<Array<ResolversTypes['resources_aggregated']>, ParentType, ContextType, Partial<QueryResources_AggregatedArgs>>;
    resources_by_id?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType, RequireFields<QueryResources_By_IdArgs, 'id'>>;
    sponsors?: Resolver<Array<ResolversTypes['sponsors']>, ParentType, ContextType, Partial<QuerySponsorsArgs>>;
    sponsors_aggregated?: Resolver<Array<ResolversTypes['sponsors_aggregated']>, ParentType, ContextType, Partial<QuerySponsors_AggregatedArgs>>;
    sponsors_by_id?: Resolver<Maybe<ResolversTypes['sponsors']>, ParentType, ContextType, RequireFields<QuerySponsors_By_IdArgs, 'id'>>;
    team?: Resolver<Array<ResolversTypes['team']>, ParentType, ContextType, Partial<QueryTeamArgs>>;
    team_aggregated?: Resolver<Array<ResolversTypes['team_aggregated']>, ParentType, ContextType, Partial<QueryTeam_AggregatedArgs>>;
    team_by_id?: Resolver<Maybe<ResolversTypes['team']>, ParentType, ContextType, RequireFields<QueryTeam_By_IdArgs, 'id'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
    blog_like_mutated?: SubscriptionResolver<Maybe<ResolversTypes['blog_like_mutated']>, "blog_like_mutated", ParentType, ContextType, Partial<SubscriptionBlog_Like_MutatedArgs>>;
    blog_mutated?: SubscriptionResolver<Maybe<ResolversTypes['blog_mutated']>, "blog_mutated", ParentType, ContextType, Partial<SubscriptionBlog_MutatedArgs>>;
    brand_mutated?: SubscriptionResolver<Maybe<ResolversTypes['brand_mutated']>, "brand_mutated", ParentType, ContextType, Partial<SubscriptionBrand_MutatedArgs>>;
    build_log_mutated?: SubscriptionResolver<Maybe<ResolversTypes['build_log_mutated']>, "build_log_mutated", ParentType, ContextType, Partial<SubscriptionBuild_Log_MutatedArgs>>;
    contact_form_mutated?: SubscriptionResolver<Maybe<ResolversTypes['contact_form_mutated']>, "contact_form_mutated", ParentType, ContextType, Partial<SubscriptionContact_Form_MutatedArgs>>;
    directus_activity_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_activity_mutated']>, "directus_activity_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Activity_MutatedArgs>>;
    directus_dashboards_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_dashboards_mutated']>, "directus_dashboards_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Dashboards_MutatedArgs>>;
    directus_files_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_files_mutated']>, "directus_files_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Files_MutatedArgs>>;
    directus_flows_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_flows_mutated']>, "directus_flows_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Flows_MutatedArgs>>;
    directus_folders_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_folders_mutated']>, "directus_folders_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Folders_MutatedArgs>>;
    directus_notifications_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_notifications_mutated']>, "directus_notifications_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Notifications_MutatedArgs>>;
    directus_operations_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_operations_mutated']>, "directus_operations_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Operations_MutatedArgs>>;
    directus_panels_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_panels_mutated']>, "directus_panels_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Panels_MutatedArgs>>;
    directus_permissions_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_permissions_mutated']>, "directus_permissions_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Permissions_MutatedArgs>>;
    directus_presets_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_presets_mutated']>, "directus_presets_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Presets_MutatedArgs>>;
    directus_revisions_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_revisions_mutated']>, "directus_revisions_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Revisions_MutatedArgs>>;
    directus_roles_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_roles_mutated']>, "directus_roles_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Roles_MutatedArgs>>;
    directus_settings_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_settings_mutated']>, "directus_settings_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Settings_MutatedArgs>>;
    directus_shares_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_shares_mutated']>, "directus_shares_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Shares_MutatedArgs>>;
    directus_translations_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_translations_mutated']>, "directus_translations_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Translations_MutatedArgs>>;
    directus_users_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_users_mutated']>, "directus_users_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Users_MutatedArgs>>;
    directus_versions_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_versions_mutated']>, "directus_versions_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Versions_MutatedArgs>>;
    directus_webhooks_mutated?: SubscriptionResolver<Maybe<ResolversTypes['directus_webhooks_mutated']>, "directus_webhooks_mutated", ParentType, ContextType, Partial<SubscriptionDirectus_Webhooks_MutatedArgs>>;
    donor_mutated?: SubscriptionResolver<Maybe<ResolversTypes['donor_mutated']>, "donor_mutated", ParentType, ContextType, Partial<SubscriptionDonor_MutatedArgs>>;
    educational_docs_mutated?: SubscriptionResolver<Maybe<ResolversTypes['educational_docs_mutated']>, "educational_docs_mutated", ParentType, ContextType, Partial<SubscriptionEducational_Docs_MutatedArgs>>;
    form_factor_mutated?: SubscriptionResolver<Maybe<ResolversTypes['form_factor_mutated']>, "form_factor_mutated", ParentType, ContextType, Partial<SubscriptionForm_Factor_MutatedArgs>>;
    git_pull_mutated?: SubscriptionResolver<Maybe<ResolversTypes['git_pull_mutated']>, "git_pull_mutated", ParentType, ContextType, Partial<SubscriptionGit_Pull_MutatedArgs>>;
    homepage_slides_mutated?: SubscriptionResolver<Maybe<ResolversTypes['homepage_slides_mutated']>, "homepage_slides_mutated", ParentType, ContextType, Partial<SubscriptionHomepage_Slides_MutatedArgs>>;
    import_raw_mutated?: SubscriptionResolver<Maybe<ResolversTypes['import_raw_mutated']>, "import_raw_mutated", ParentType, ContextType, Partial<SubscriptionImport_Raw_MutatedArgs>>;
    import_update_mutated?: SubscriptionResolver<Maybe<ResolversTypes['import_update_mutated']>, "import_update_mutated", ParentType, ContextType, Partial<SubscriptionImport_Update_MutatedArgs>>;
    list_mutated?: SubscriptionResolver<Maybe<ResolversTypes['list_mutated']>, "list_mutated", ParentType, ContextType, Partial<SubscriptionList_MutatedArgs>>;
    model_directus_files_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_directus_files_mutated']>, "model_directus_files_mutated", ParentType, ContextType, Partial<SubscriptionModel_Directus_Files_MutatedArgs>>;
    model_files_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_files_mutated']>, "model_files_mutated", ParentType, ContextType, Partial<SubscriptionModel_Files_MutatedArgs>>;
    model_like_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_like_mutated']>, "model_like_mutated", ParentType, ContextType, Partial<SubscriptionModel_Like_MutatedArgs>>;
    model_list_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_list_mutated']>, "model_list_mutated", ParentType, ContextType, Partial<SubscriptionModel_List_MutatedArgs>>;
    model_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_mutated']>, "model_mutated", ParentType, ContextType, Partial<SubscriptionModel_MutatedArgs>>;
    model_tag_mutated?: SubscriptionResolver<Maybe<ResolversTypes['model_tag_mutated']>, "model_tag_mutated", ParentType, ContextType, Partial<SubscriptionModel_Tag_MutatedArgs>>;
    most_wanted_mutated?: SubscriptionResolver<Maybe<ResolversTypes['most_wanted_mutated']>, "most_wanted_mutated", ParentType, ContextType, Partial<SubscriptionMost_Wanted_MutatedArgs>>;
    page_mutated?: SubscriptionResolver<Maybe<ResolversTypes['page_mutated']>, "page_mutated", ParentType, ContextType, Partial<SubscriptionPage_MutatedArgs>>;
    product_mutated?: SubscriptionResolver<Maybe<ResolversTypes['product_mutated']>, "product_mutated", ParentType, ContextType, Partial<SubscriptionProduct_MutatedArgs>>;
    related_model_mutated?: SubscriptionResolver<Maybe<ResolversTypes['related_model_mutated']>, "related_model_mutated", ParentType, ContextType, Partial<SubscriptionRelated_Model_MutatedArgs>>;
    release_mutated?: SubscriptionResolver<Maybe<ResolversTypes['release_mutated']>, "release_mutated", ParentType, ContextType, Partial<SubscriptionRelease_MutatedArgs>>;
    reset_build_process_mutated?: SubscriptionResolver<Maybe<ResolversTypes['reset_build_process_mutated']>, "reset_build_process_mutated", ParentType, ContextType, Partial<SubscriptionReset_Build_Process_MutatedArgs>>;
    resources_mutated?: SubscriptionResolver<Maybe<ResolversTypes['resources_mutated']>, "resources_mutated", ParentType, ContextType, Partial<SubscriptionResources_MutatedArgs>>;
    sponsors_mutated?: SubscriptionResolver<Maybe<ResolversTypes['sponsors_mutated']>, "sponsors_mutated", ParentType, ContextType, Partial<SubscriptionSponsors_MutatedArgs>>;
    team_mutated?: SubscriptionResolver<Maybe<ResolversTypes['team_mutated']>, "team_mutated", ParentType, ContextType, Partial<SubscriptionTeam_MutatedArgs>>;
};

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog'] = ResolversParentTypes['blog']> = {
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    created_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<BlogCreated_ByArgs>>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_func?: Resolver<Maybe<ResolversTypes['date_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<BlogImageArgs>>;
    modified_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<BlogModified_ByArgs>>;
    modified_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    modified_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<BlogOwnerArgs>>;
    show_featured_image_in_blog_post_body?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Blog_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_aggregated'] = ResolversParentTypes['blog_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['blog_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['blog_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['blog_aggregated_fields']>, ParentType, ContextType>;
};

export type Blog_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_aggregated_count'] = ResolversParentTypes['blog_aggregated_count']> = {
    content?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modified_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modified_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    show_featured_image_in_blog_post_body?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Blog_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_aggregated_fields'] = ResolversParentTypes['blog_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Blog_LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_like'] = ResolversParentTypes['blog_like']> = {
    blog_id?: Resolver<Maybe<ResolversTypes['blog']>, ParentType, ContextType, Partial<Blog_LikeBlog_IdArgs>>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Blog_Like_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_like_aggregated'] = ResolversParentTypes['blog_like_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['blog_like_aggregated_fields']>, ParentType, ContextType>;
};

export type Blog_Like_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_like_aggregated_count'] = ResolversParentTypes['blog_like_aggregated_count']> = {
    blog_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Blog_Like_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_like_aggregated_fields'] = ResolversParentTypes['blog_like_aggregated_fields']> = {
    blog_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Blog_Like_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_like_mutated'] = ResolversParentTypes['blog_like_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['blog_like']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Blog_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['blog_mutated'] = ResolversParentTypes['blog_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['blog']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type BrandResolvers<ContextType = any, ParentType extends ResolversParentTypes['brand'] = ResolversParentTypes['brand']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Brand_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['brand_aggregated'] = ResolversParentTypes['brand_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['brand_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['brand_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['brand_aggregated_fields']>, ParentType, ContextType>;
};

export type Brand_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['brand_aggregated_count'] = ResolversParentTypes['brand_aggregated_count']> = {
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Brand_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['brand_aggregated_fields'] = ResolversParentTypes['brand_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Brand_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['brand_mutated'] = ResolversParentTypes['brand_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['brand']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Build_LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['build_log'] = ResolversParentTypes['build_log']> = {
    date_canceled?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_canceled_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_finished?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_finished_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_running?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_running_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_started?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_started_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    release_id?: Resolver<Maybe<ResolversTypes['release']>, ParentType, ContextType, Partial<Build_LogRelease_IdArgs>>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Build_Log_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['build_log_aggregated'] = ResolversParentTypes['build_log_aggregated']> = {
    count?: Resolver<Maybe<ResolversTypes['build_log_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['build_log_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type Build_Log_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['build_log_aggregated_count'] = ResolversParentTypes['build_log_aggregated_count']> = {
    date_canceled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    date_finished?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    date_running?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    date_started?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    release_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Build_Log_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['build_log_mutated'] = ResolversParentTypes['build_log_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['build_log']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Contact_FormResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_form'] = ResolversParentTypes['contact_form']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Contact_Form_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_form_aggregated'] = ResolversParentTypes['contact_form_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['contact_form_aggregated_fields']>, ParentType, ContextType>;
};

export type Contact_Form_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_form_aggregated_count'] = ResolversParentTypes['contact_form_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    subject?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Contact_Form_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_form_aggregated_fields'] = ResolversParentTypes['contact_form_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Contact_Form_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['contact_form_mutated'] = ResolversParentTypes['contact_form_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['contact_form']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Count_FunctionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['count_functions'] = ResolversParentTypes['count_functions']> = {
    count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Date_FunctionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['date_functions'] = ResolversParentTypes['date_functions']> = {
    day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    weekday?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Datetime_FunctionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['datetime_functions'] = ResolversParentTypes['datetime_functions']> = {
    day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    weekday?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Delete_ManyResolvers<ContextType = any, ParentType extends ResolversParentTypes['delete_many'] = ResolversParentTypes['delete_many']> = {
    ids?: Resolver<Array<Maybe<ResolversTypes['ID']>>, ParentType, ContextType>;
};

export type Delete_OneResolvers<ContextType = any, ParentType extends ResolversParentTypes['delete_one'] = ResolversParentTypes['delete_one']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_activity'] = ResolversParentTypes['directus_activity']> = {
    action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    ip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    item?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    revisions?: Resolver<Maybe<Array<Maybe<ResolversTypes['directus_revisions']>>>, ParentType, ContextType, Partial<Directus_ActivityRevisionsArgs>>;
    revisions_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    timestamp_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_ActivityUserArgs>>;
    user_agent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Directus_Activity_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_activity_mutated'] = ResolversParentTypes['directus_activity_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_activity']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_DashboardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_dashboards'] = ResolversParentTypes['directus_dashboards']> = {
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    panels?: Resolver<Maybe<Array<Maybe<ResolversTypes['directus_panels']>>>, ParentType, ContextType, Partial<Directus_DashboardsPanelsArgs>>;
    panels_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_DashboardsUser_CreatedArgs>>;
};

export type Directus_Dashboards_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_dashboards_mutated'] = ResolversParentTypes['directus_dashboards_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_dashboards']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_FilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_files'] = ResolversParentTypes['directus_files']> = {
    charset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    embed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    filename_disk?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    filename_download?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    filesize?: Resolver<Maybe<ResolversTypes['GraphQLBigInt']>, ParentType, ContextType>;
    folder?: Resolver<Maybe<ResolversTypes['directus_folders']>, ParentType, ContextType, Partial<Directus_FilesFolderArgs>>;
    height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    metadata_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    model?: Resolver<Maybe<Array<Maybe<ResolversTypes['model_directus_files']>>>, ParentType, ContextType, Partial<Directus_FilesModelArgs>>;
    modified_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_FilesModified_ByArgs>>;
    modified_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    modified_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    storage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    tags_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    uploaded_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_FilesUploaded_ByArgs>>;
    uploaded_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    uploaded_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Directus_Files_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_files_mutated'] = ResolversParentTypes['directus_files_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_FlowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_flows'] = ResolversParentTypes['directus_flows']> = {
    accountability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    operation?: Resolver<Maybe<ResolversTypes['directus_operations']>, ParentType, ContextType, Partial<Directus_FlowsOperationArgs>>;
    operations?: Resolver<Maybe<Array<Maybe<ResolversTypes['directus_operations']>>>, ParentType, ContextType, Partial<Directus_FlowsOperationsArgs>>;
    operations_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    options_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    trigger?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_FlowsUser_CreatedArgs>>;
};

export type Directus_Flows_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_flows_mutated'] = ResolversParentTypes['directus_flows_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_flows']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_FoldersResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_folders'] = ResolversParentTypes['directus_folders']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    parent?: Resolver<Maybe<ResolversTypes['directus_folders']>, ParentType, ContextType, Partial<Directus_FoldersParentArgs>>;
};

export type Directus_Folders_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_folders_mutated'] = ResolversParentTypes['directus_folders_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_folders']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_NotificationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_notifications'] = ResolversParentTypes['directus_notifications']> = {
    collection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    item?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    recipient?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_NotificationsRecipientArgs>>;
    sender?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_NotificationsSenderArgs>>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    timestamp_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
};

export type Directus_Notifications_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_notifications_mutated'] = ResolversParentTypes['directus_notifications_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_notifications']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_OperationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_operations'] = ResolversParentTypes['directus_operations']> = {
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    flow?: Resolver<Maybe<ResolversTypes['directus_flows']>, ParentType, ContextType, Partial<Directus_OperationsFlowArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    options_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    position_x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    position_y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    reject?: Resolver<Maybe<ResolversTypes['directus_operations']>, ParentType, ContextType, Partial<Directus_OperationsRejectArgs>>;
    resolve?: Resolver<Maybe<ResolversTypes['directus_operations']>, ParentType, ContextType, Partial<Directus_OperationsResolveArgs>>;
    type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_OperationsUser_CreatedArgs>>;
};

export type Directus_Operations_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_operations_mutated'] = ResolversParentTypes['directus_operations_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_operations']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_PanelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_panels'] = ResolversParentTypes['directus_panels']> = {
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    dashboard?: Resolver<Maybe<ResolversTypes['directus_dashboards']>, ParentType, ContextType, Partial<Directus_PanelsDashboardArgs>>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    options_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    position_x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    position_y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    show_header?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_PanelsUser_CreatedArgs>>;
    width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Directus_Panels_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_panels_mutated'] = ResolversParentTypes['directus_panels_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_panels']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_PermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_permissions'] = ResolversParentTypes['directus_permissions']> = {
    action?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    permissions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    permissions_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    presets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    presets_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['directus_roles']>, ParentType, ContextType, Partial<Directus_PermissionsRoleArgs>>;
    validation?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    validation_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
};

export type Directus_Permissions_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_permissions_mutated'] = ResolversParentTypes['directus_permissions_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_permissions']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_PresetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_presets'] = ResolversParentTypes['directus_presets']> = {
    bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    collection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    filter?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    filter_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    layout_options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    layout_options_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    layout_query?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    layout_query_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    refresh_interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['directus_roles']>, ParentType, ContextType, Partial<Directus_PresetsRoleArgs>>;
    search?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    user?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_PresetsUserArgs>>;
};

export type Directus_Presets_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_presets_mutated'] = ResolversParentTypes['directus_presets_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_presets']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_RevisionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_revisions'] = ResolversParentTypes['directus_revisions']> = {
    activity?: Resolver<Maybe<ResolversTypes['directus_activity']>, ParentType, ContextType, Partial<Directus_RevisionsActivityArgs>>;
    collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    data_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    delta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    delta_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    item?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    parent?: Resolver<Maybe<ResolversTypes['directus_revisions']>, ParentType, ContextType, Partial<Directus_RevisionsParentArgs>>;
    version?: Resolver<Maybe<ResolversTypes['directus_versions']>, ParentType, ContextType, Partial<Directus_RevisionsVersionArgs>>;
};

export type Directus_Revisions_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_revisions_mutated'] = ResolversParentTypes['directus_revisions_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_revisions']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_roles'] = ResolversParentTypes['directus_roles']> = {
    admin_access?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    app_access?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    enforce_tfa?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    ip_access?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    users?: Resolver<Maybe<Array<Maybe<ResolversTypes['directus_users']>>>, ParentType, ContextType, Partial<Directus_RolesUsersArgs>>;
    users_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
};

export type Directus_Roles_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_roles_mutated'] = ResolversParentTypes['directus_roles_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_roles']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_SettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_settings'] = ResolversParentTypes['directus_settings']> = {
    auth_login_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    auth_password_policy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    basemaps?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    basemaps_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    custom_aspect_ratios?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    custom_aspect_ratios_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    custom_css?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    default_appearance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    default_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    default_theme_dark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    default_theme_light?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    mapbox_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    module_bar?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    module_bar_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    project_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    project_descriptor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    project_logo?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Directus_SettingsProject_LogoArgs>>;
    project_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    project_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    public_background?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Directus_SettingsPublic_BackgroundArgs>>;
    public_favicon?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Directus_SettingsPublic_FaviconArgs>>;
    public_foreground?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Directus_SettingsPublic_ForegroundArgs>>;
    public_note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    storage_asset_presets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    storage_asset_presets_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    storage_asset_transform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    storage_default_folder?: Resolver<Maybe<ResolversTypes['directus_folders']>, ParentType, ContextType, Partial<Directus_SettingsStorage_Default_FolderArgs>>;
    theme_dark_overrides?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    theme_dark_overrides_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    theme_light_overrides?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    theme_light_overrides_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
};

export type Directus_Settings_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_settings_mutated'] = ResolversParentTypes['directus_settings_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_settings']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_SharesResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_shares'] = ResolversParentTypes['directus_shares']> = {
    collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_end_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_start_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    item?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    max_uses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    password?: Resolver<Maybe<ResolversTypes['Hash']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['directus_roles']>, ParentType, ContextType, Partial<Directus_SharesRoleArgs>>;
    times_used?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_SharesUser_CreatedArgs>>;
};

export type Directus_Shares_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_shares_mutated'] = ResolversParentTypes['directus_shares_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_shares']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_TranslationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_translations'] = ResolversParentTypes['directus_translations']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Directus_Translations_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_translations_mutated'] = ResolversParentTypes['directus_translations_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_translations']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_users'] = ResolversParentTypes['directus_users']> = {
    appearance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    auth_data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    auth_data_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    avatar?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Directus_UsersAvatarArgs>>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    email_notifications?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    external_identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    last_access?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    last_access_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    last_page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    password?: Resolver<Maybe<ResolversTypes['Hash']>, ParentType, ContextType>;
    provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    role?: Resolver<Maybe<ResolversTypes['directus_roles']>, ParentType, ContextType, Partial<Directus_UsersRoleArgs>>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    tags_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    tfa_secret?: Resolver<Maybe<ResolversTypes['Hash']>, ParentType, ContextType>;
    theme_dark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    theme_dark_overrides?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    theme_dark_overrides_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    theme_light?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    theme_light_overrides?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    theme_light_overrides_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    token?: Resolver<Maybe<ResolversTypes['Hash']>, ParentType, ContextType>;
};

export type Directus_Users_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_users_mutated'] = ResolversParentTypes['directus_users_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_VersionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_versions'] = ResolversParentTypes['directus_versions']> = {
    collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    date_updated?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_updated_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    item?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_VersionsUser_CreatedArgs>>;
    user_updated?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Directus_VersionsUser_UpdatedArgs>>;
};

export type Directus_Versions_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_versions_mutated'] = ResolversParentTypes['directus_versions_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_versions']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Directus_WebhooksResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_webhooks'] = ResolversParentTypes['directus_webhooks']> = {
    actions?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
    collections?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
    data?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    headers?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    headers_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Directus_Webhooks_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['directus_webhooks_mutated'] = ResolversParentTypes['directus_webhooks_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['directus_webhooks']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type DonorResolvers<ContextType = any, ParentType extends ResolversParentTypes['donor'] = ResolversParentTypes['donor']> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    linkedin_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Donor_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['donor_aggregated'] = ResolversParentTypes['donor_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['donor_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['donor_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['donor_aggregated_fields']>, ParentType, ContextType>;
};

export type Donor_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['donor_aggregated_count'] = ResolversParentTypes['donor_aggregated_count']> = {
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    linkedin_url?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Donor_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['donor_aggregated_fields'] = ResolversParentTypes['donor_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Donor_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['donor_mutated'] = ResolversParentTypes['donor_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['donor']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Educational_DocsResolvers<ContextType = any, ParentType extends ResolversParentTypes['educational_docs'] = ResolversParentTypes['educational_docs']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    file?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Educational_DocsFileArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Educational_DocsOwnerArgs>>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Educational_Docs_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['educational_docs_aggregated'] = ResolversParentTypes['educational_docs_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['educational_docs_aggregated_fields']>, ParentType, ContextType>;
};

export type Educational_Docs_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['educational_docs_aggregated_count'] = ResolversParentTypes['educational_docs_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    file?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Educational_Docs_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['educational_docs_aggregated_fields'] = ResolversParentTypes['educational_docs_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Educational_Docs_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['educational_docs_mutated'] = ResolversParentTypes['educational_docs_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['educational_docs']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Form_FactorResolvers<ContextType = any, ParentType extends ResolversParentTypes['form_factor'] = ResolversParentTypes['form_factor']> = {
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Form_Factor_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['form_factor_aggregated'] = ResolversParentTypes['form_factor_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['form_factor_aggregated_fields']>, ParentType, ContextType>;
};

export type Form_Factor_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['form_factor_aggregated_count'] = ResolversParentTypes['form_factor_aggregated_count']> = {
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Form_Factor_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['form_factor_aggregated_fields'] = ResolversParentTypes['form_factor_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Form_Factor_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['form_factor_mutated'] = ResolversParentTypes['form_factor_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['form_factor']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Git_PullResolvers<ContextType = any, ParentType extends ResolversParentTypes['git_pull'] = ResolversParentTypes['git_pull']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Git_PullOwnerArgs>>;
};

export type Git_Pull_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['git_pull_aggregated'] = ResolversParentTypes['git_pull_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['git_pull_aggregated_fields']>, ParentType, ContextType>;
};

export type Git_Pull_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['git_pull_aggregated_count'] = ResolversParentTypes['git_pull_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Git_Pull_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['git_pull_aggregated_fields'] = ResolversParentTypes['git_pull_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Git_Pull_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['git_pull_mutated'] = ResolversParentTypes['git_pull_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['git_pull']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Homepage_SlidesResolvers<ContextType = any, ParentType extends ResolversParentTypes['homepage_slides'] = ResolversParentTypes['homepage_slides']> = {
    background_image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Homepage_SlidesBackground_ImageArgs>>;
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Homepage_SlidesOwnerArgs>>;
    read_more_label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    read_more_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Homepage_Slides_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['homepage_slides_aggregated'] = ResolversParentTypes['homepage_slides_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['homepage_slides_aggregated_fields']>, ParentType, ContextType>;
};

export type Homepage_Slides_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['homepage_slides_aggregated_count'] = ResolversParentTypes['homepage_slides_aggregated_count']> = {
    background_image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    content?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    read_more_label?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    read_more_link?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    style?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Homepage_Slides_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['homepage_slides_aggregated_fields'] = ResolversParentTypes['homepage_slides_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Homepage_Slides_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['homepage_slides_mutated'] = ResolversParentTypes['homepage_slides_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['homepage_slides']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Import_RawResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_raw'] = ResolversParentTypes['import_raw']> = {
    Brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    DonatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    FormFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    IMEI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Publish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    brand_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Import_Raw_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_raw_aggregated'] = ResolversParentTypes['import_raw_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['import_raw_aggregated_fields']>, ParentType, ContextType>;
};

export type Import_Raw_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_raw_aggregated_count'] = ResolversParentTypes['import_raw_aggregated_count']> = {
    Brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Codename?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    DonatedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    FormFactor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    IMEI?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Model?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Notes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Publish?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Video?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    brand_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Import_Raw_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_raw_aggregated_fields'] = ResolversParentTypes['import_raw_aggregated_fields']> = {
    brand_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Import_Raw_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_raw_mutated'] = ResolversParentTypes['import_raw_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['import_raw']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Import_UpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_update'] = ResolversParentTypes['import_update']> = {
    Brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    DonatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    FormFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    ID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    IMEI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Publish?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    Year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    bla?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    brand_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    donor_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Import_Update_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_update_aggregated'] = ResolversParentTypes['import_update_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['import_update_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['import_update_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['import_update_aggregated_fields']>, ParentType, ContextType>;
};

export type Import_Update_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_update_aggregated_count'] = ResolversParentTypes['import_update_aggregated_count']> = {
    Brand?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Codename?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    DonatedBy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    FormFactor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    ID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    IMEI?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Model?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Notes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Publish?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Video?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    Year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    bla?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    brand_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Import_Update_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_update_aggregated_fields'] = ResolversParentTypes['import_update_aggregated_fields']> = {
    ID?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    brand_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Import_Update_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['import_update_mutated'] = ResolversParentTypes['import_update_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['import_update']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['list'] = ResolversParentTypes['list']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ListImageArgs>>;
    model?: Resolver<Maybe<Array<Maybe<ResolversTypes['model_list']>>>, ParentType, ContextType, Partial<ListModelArgs>>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type List_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['list_aggregated'] = ResolversParentTypes['list_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['list_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['list_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['list_aggregated_fields']>, ParentType, ContextType>;
};

export type List_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['list_aggregated_count'] = ResolversParentTypes['list_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type List_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['list_aggregated_fields'] = ResolversParentTypes['list_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type List_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['list_mutated'] = ResolversParentTypes['list_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['model'] = ResolversParentTypes['model']> = {
    brand_id?: Resolver<Maybe<ResolversTypes['brand']>, ParentType, ContextType, Partial<ModelBrand_IdArgs>>;
    codename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    collection?: Resolver<Maybe<Array<Maybe<ResolversTypes['model_list']>>>, ParentType, ContextType, Partial<ModelCollectionArgs>>;
    collection_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    docs?: Resolver<Maybe<Array<Maybe<ResolversTypes['model_directus_files']>>>, ParentType, ContextType, Partial<ModelDocsArgs>>;
    docs_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    form_factor_id?: Resolver<Maybe<ResolversTypes['form_factor']>, ParentType, ContextType, Partial<ModelForm_Factor_IdArgs>>;
    hideonhp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ModelImageArgs>>;
    model?: Resolver<Maybe<Array<Maybe<ResolversTypes['related_model']>>>, ParentType, ContextType, Partial<ModelModelArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    related_phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['related_model']>>>, ParentType, ContextType, Partial<ModelRelated_PhonesArgs>>;
    related_phones_func?: Resolver<Maybe<ResolversTypes['count_functions']>, ParentType, ContextType>;
    release_day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    release_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    video?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    video2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    video3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_aggregated'] = ResolversParentTypes['model_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_aggregated_count'] = ResolversParentTypes['model_aggregated_count']> = {
    brand_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    codename?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    collection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    display_name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    docs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    form_factor_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    hideonhp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    related_phones?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    release_day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    release_month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    release_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    video?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    video2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    video3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_aggregated_fields'] = ResolversParentTypes['model_aggregated_fields']> = {
    brand_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    form_factor_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_Directus_FilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_directus_files'] = ResolversParentTypes['model_directus_files']> = {
    directus_files_id?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Model_Directus_FilesDirectus_Files_IdArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Model_Directus_FilesModel_IdArgs>>;
};

export type Model_Directus_Files_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_directus_files_aggregated'] = ResolversParentTypes['model_directus_files_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_directus_files_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_Directus_Files_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_directus_files_aggregated_count'] = ResolversParentTypes['model_directus_files_aggregated_count']> = {
    directus_files_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_Directus_Files_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_directus_files_aggregated_fields'] = ResolversParentTypes['model_directus_files_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_Directus_Files_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_directus_files_mutated'] = ResolversParentTypes['model_directus_files_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model_directus_files']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Model_FilesResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_files'] = ResolversParentTypes['model_files']> = {
    directus_files_id?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Model_FilesDirectus_Files_IdArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Model_FilesModel_IdArgs>>;
};

export type Model_Files_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_files_aggregated'] = ResolversParentTypes['model_files_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_files_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_files_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_files_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_Files_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_files_aggregated_count'] = ResolversParentTypes['model_files_aggregated_count']> = {
    directus_files_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_Files_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_files_aggregated_fields'] = ResolversParentTypes['model_files_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_Files_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_files_mutated'] = ResolversParentTypes['model_files_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model_files']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Model_LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_like'] = ResolversParentTypes['model_like']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Model_LikeModel_IdArgs>>;
};

export type Model_Like_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_like_aggregated'] = ResolversParentTypes['model_like_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_like_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_like_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_like_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_Like_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_like_aggregated_count'] = ResolversParentTypes['model_like_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_Like_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_like_aggregated_fields'] = ResolversParentTypes['model_like_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_Like_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_like_mutated'] = ResolversParentTypes['model_like_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model_like']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Model_ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_list'] = ResolversParentTypes['model_list']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    list_id?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, Partial<Model_ListList_IdArgs>>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Model_ListModel_IdArgs>>;
};

export type Model_List_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_list_aggregated'] = ResolversParentTypes['model_list_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_list_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_list_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_list_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_List_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_list_aggregated_count'] = ResolversParentTypes['model_list_aggregated_count']> = {
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    list_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_List_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_list_aggregated_fields'] = ResolversParentTypes['model_list_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    list_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_List_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_list_mutated'] = ResolversParentTypes['model_list_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model_list']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Model_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_mutated'] = ResolversParentTypes['model_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Model_TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_tag'] = ResolversParentTypes['model_tag']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    tag_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Model_Tag_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_tag_aggregated'] = ResolversParentTypes['model_tag_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['model_tag_aggregated_fields']>, ParentType, ContextType>;
};

export type Model_Tag_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_tag_aggregated_count'] = ResolversParentTypes['model_tag_aggregated_count']> = {
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    tag_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Model_Tag_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_tag_aggregated_fields'] = ResolversParentTypes['model_tag_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    tag_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Model_Tag_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['model_tag_mutated'] = ResolversParentTypes['model_tag_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['model_tag']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Most_WantedResolvers<ContextType = any, ParentType extends ResolversParentTypes['most_wanted'] = ResolversParentTypes['most_wanted']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<Most_WantedImageArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Most_WantedOwnerArgs>>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Most_Wanted_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['most_wanted_aggregated'] = ResolversParentTypes['most_wanted_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['most_wanted_aggregated_fields']>, ParentType, ContextType>;
};

export type Most_Wanted_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['most_wanted_aggregated_count'] = ResolversParentTypes['most_wanted_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Most_Wanted_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['most_wanted_aggregated_fields'] = ResolversParentTypes['most_wanted_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Most_Wanted_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['most_wanted_mutated'] = ResolversParentTypes['most_wanted_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['most_wanted']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['page'] = ResolversParentTypes['page']> = {
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<PageImageArgs>>;
    modified_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<PageModified_ByArgs>>;
    modified_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    modified_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<PageOwnerArgs>>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Page_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['page_aggregated'] = ResolversParentTypes['page_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['page_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['page_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['page_aggregated_fields']>, ParentType, ContextType>;
};

export type Page_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['page_aggregated_count'] = ResolversParentTypes['page_aggregated_count']> = {
    content?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modified_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    modified_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Page_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['page_aggregated_fields'] = ResolversParentTypes['page_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Page_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['page_mutated'] = ResolversParentTypes['page_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['page']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['product'] = ResolversParentTypes['product']> = {
    created_by?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<ProductCreated_ByArgs>>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['donor']>, ParentType, ContextType, Partial<ProductDonor_IdArgs>>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image_back?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_BackArgs>>;
    image_camera?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_CameraArgs>>;
    image_detail?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_DetailArgs>>;
    image_detail_2?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_Detail_2Args>>;
    image_front?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_FrontArgs>>;
    image_open?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_OpenArgs>>;
    image_reference?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_ReferenceArgs>>;
    image_side?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ProductImage_SideArgs>>;
    imei?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<ProductModel_IdArgs>>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Product_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['product_aggregated'] = ResolversParentTypes['product_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['product_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['product_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['product_aggregated_fields']>, ParentType, ContextType>;
};

export type Product_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['product_aggregated_count'] = ResolversParentTypes['product_aggregated_count']> = {
    created_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    donor_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_back?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_camera?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_detail?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_detail_2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_front?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_open?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_reference?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image_side?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    imei?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Product_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['product_aggregated_fields'] = ResolversParentTypes['product_aggregated_fields']> = {
    donor_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Product_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['product_mutated'] = ResolversParentTypes['product_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['product']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Related_ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['related_model'] = ResolversParentTypes['related_model']> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Related_ModelModel_IdArgs>>;
    related_id?: Resolver<Maybe<ResolversTypes['model']>, ParentType, ContextType, Partial<Related_ModelRelated_IdArgs>>;
};

export type Related_Model_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['related_model_aggregated'] = ResolversParentTypes['related_model_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['related_model_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['related_model_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['related_model_aggregated_fields']>, ParentType, ContextType>;
};

export type Related_Model_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['related_model_aggregated_count'] = ResolversParentTypes['related_model_aggregated_count']> = {
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    related_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Related_Model_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['related_model_aggregated_fields'] = ResolversParentTypes['related_model_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    model_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    related_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Related_Model_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['related_model_mutated'] = ResolversParentTypes['related_model_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['related_model']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ReleaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['release'] = ResolversParentTypes['release']> = {
    date_created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    date_created_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<ReleaseUser_CreatedArgs>>;
};

export type Release_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['release_aggregated'] = ResolversParentTypes['release_aggregated']> = {
    count?: Resolver<Maybe<ResolversTypes['release_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['release_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type Release_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['release_aggregated_count'] = ResolversParentTypes['release_aggregated_count']> = {
    date_created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    user_created?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Release_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['release_mutated'] = ResolversParentTypes['release_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['release']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Reset_Build_ProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['reset_build_process'] = ResolversParentTypes['reset_build_process']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<Reset_Build_ProcessOwnerArgs>>;
};

export type Reset_Build_Process_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['reset_build_process_aggregated'] = ResolversParentTypes['reset_build_process_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['reset_build_process_aggregated_fields']>, ParentType, ContextType>;
};

export type Reset_Build_Process_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['reset_build_process_aggregated_count'] = ResolversParentTypes['reset_build_process_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Reset_Build_Process_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['reset_build_process_aggregated_fields'] = ResolversParentTypes['reset_build_process_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Reset_Build_Process_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['reset_build_process_mutated'] = ResolversParentTypes['reset_build_process_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['reset_build_process']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources'] = ResolversParentTypes['resources']> = {
    content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<ResourcesImageArgs>>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<ResourcesOwnerArgs>>;
    slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resources_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_aggregated'] = ResolversParentTypes['resources_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['resources_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['resources_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['resources_aggregated_fields']>, ParentType, ContextType>;
};

export type Resources_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_aggregated_count'] = ResolversParentTypes['resources_aggregated_count']> = {
    content?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    slug?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Resources_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_aggregated_fields'] = ResolversParentTypes['resources_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Resources_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['resources_mutated'] = ResolversParentTypes['resources_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['resources']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type SponsorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sponsors'] = ResolversParentTypes['sponsors']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<SponsorsImageArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<SponsorsOwnerArgs>>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    supersponsor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
};

export type Sponsors_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['sponsors_aggregated'] = ResolversParentTypes['sponsors_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['sponsors_aggregated_fields']>, ParentType, ContextType>;
};

export type Sponsors_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['sponsors_aggregated_count'] = ResolversParentTypes['sponsors_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    supersponsor?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Sponsors_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['sponsors_aggregated_fields'] = ResolversParentTypes['sponsors_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Sponsors_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['sponsors_mutated'] = ResolversParentTypes['sponsors_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['sponsors']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['team'] = ResolversParentTypes['team']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
    created_on_func?: Resolver<Maybe<ResolversTypes['datetime_functions']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['directus_files']>, ParentType, ContextType, Partial<TeamImageArgs>>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['directus_users']>, ParentType, ContextType, Partial<TeamOwnerArgs>>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Team_AggregatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['team_aggregated'] = ResolversParentTypes['team_aggregated']> = {
    avg?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
    avgDistinct?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
    count?: Resolver<Maybe<ResolversTypes['team_aggregated_count']>, ParentType, ContextType>;
    countAll?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    countDistinct?: Resolver<Maybe<ResolversTypes['team_aggregated_count']>, ParentType, ContextType>;
    group?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    max?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
    min?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
    sum?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
    sumDistinct?: Resolver<Maybe<ResolversTypes['team_aggregated_fields']>, ParentType, ContextType>;
};

export type Team_Aggregated_CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['team_aggregated_count'] = ResolversParentTypes['team_aggregated_count']> = {
    created_on?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    owner?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type Team_Aggregated_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['team_aggregated_fields'] = ResolversParentTypes['team_aggregated_fields']> = {
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    sort?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type Team_MutatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['team_mutated'] = ResolversParentTypes['team_mutated']> = {
    data?: Resolver<Maybe<ResolversTypes['team']>, ParentType, ContextType>;
    event?: Resolver<Maybe<ResolversTypes['EventEnum']>, ParentType, ContextType>;
    key?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    Date?: GraphQLScalarType;
    GraphQLBigInt?: GraphQLScalarType;
    GraphQLStringOrFloat?: GraphQLScalarType;
    Hash?: GraphQLScalarType;
    JSON?: GraphQLScalarType;
    Mutation?: MutationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    blog?: BlogResolvers<ContextType>;
    blog_aggregated?: Blog_AggregatedResolvers<ContextType>;
    blog_aggregated_count?: Blog_Aggregated_CountResolvers<ContextType>;
    blog_aggregated_fields?: Blog_Aggregated_FieldsResolvers<ContextType>;
    blog_like?: Blog_LikeResolvers<ContextType>;
    blog_like_aggregated?: Blog_Like_AggregatedResolvers<ContextType>;
    blog_like_aggregated_count?: Blog_Like_Aggregated_CountResolvers<ContextType>;
    blog_like_aggregated_fields?: Blog_Like_Aggregated_FieldsResolvers<ContextType>;
    blog_like_mutated?: Blog_Like_MutatedResolvers<ContextType>;
    blog_mutated?: Blog_MutatedResolvers<ContextType>;
    brand?: BrandResolvers<ContextType>;
    brand_aggregated?: Brand_AggregatedResolvers<ContextType>;
    brand_aggregated_count?: Brand_Aggregated_CountResolvers<ContextType>;
    brand_aggregated_fields?: Brand_Aggregated_FieldsResolvers<ContextType>;
    brand_mutated?: Brand_MutatedResolvers<ContextType>;
    build_log?: Build_LogResolvers<ContextType>;
    build_log_aggregated?: Build_Log_AggregatedResolvers<ContextType>;
    build_log_aggregated_count?: Build_Log_Aggregated_CountResolvers<ContextType>;
    build_log_mutated?: Build_Log_MutatedResolvers<ContextType>;
    contact_form?: Contact_FormResolvers<ContextType>;
    contact_form_aggregated?: Contact_Form_AggregatedResolvers<ContextType>;
    contact_form_aggregated_count?: Contact_Form_Aggregated_CountResolvers<ContextType>;
    contact_form_aggregated_fields?: Contact_Form_Aggregated_FieldsResolvers<ContextType>;
    contact_form_mutated?: Contact_Form_MutatedResolvers<ContextType>;
    count_functions?: Count_FunctionsResolvers<ContextType>;
    date_functions?: Date_FunctionsResolvers<ContextType>;
    datetime_functions?: Datetime_FunctionsResolvers<ContextType>;
    delete_many?: Delete_ManyResolvers<ContextType>;
    delete_one?: Delete_OneResolvers<ContextType>;
    directus_activity?: Directus_ActivityResolvers<ContextType>;
    directus_activity_mutated?: Directus_Activity_MutatedResolvers<ContextType>;
    directus_dashboards?: Directus_DashboardsResolvers<ContextType>;
    directus_dashboards_mutated?: Directus_Dashboards_MutatedResolvers<ContextType>;
    directus_files?: Directus_FilesResolvers<ContextType>;
    directus_files_mutated?: Directus_Files_MutatedResolvers<ContextType>;
    directus_flows?: Directus_FlowsResolvers<ContextType>;
    directus_flows_mutated?: Directus_Flows_MutatedResolvers<ContextType>;
    directus_folders?: Directus_FoldersResolvers<ContextType>;
    directus_folders_mutated?: Directus_Folders_MutatedResolvers<ContextType>;
    directus_notifications?: Directus_NotificationsResolvers<ContextType>;
    directus_notifications_mutated?: Directus_Notifications_MutatedResolvers<ContextType>;
    directus_operations?: Directus_OperationsResolvers<ContextType>;
    directus_operations_mutated?: Directus_Operations_MutatedResolvers<ContextType>;
    directus_panels?: Directus_PanelsResolvers<ContextType>;
    directus_panels_mutated?: Directus_Panels_MutatedResolvers<ContextType>;
    directus_permissions?: Directus_PermissionsResolvers<ContextType>;
    directus_permissions_mutated?: Directus_Permissions_MutatedResolvers<ContextType>;
    directus_presets?: Directus_PresetsResolvers<ContextType>;
    directus_presets_mutated?: Directus_Presets_MutatedResolvers<ContextType>;
    directus_revisions?: Directus_RevisionsResolvers<ContextType>;
    directus_revisions_mutated?: Directus_Revisions_MutatedResolvers<ContextType>;
    directus_roles?: Directus_RolesResolvers<ContextType>;
    directus_roles_mutated?: Directus_Roles_MutatedResolvers<ContextType>;
    directus_settings?: Directus_SettingsResolvers<ContextType>;
    directus_settings_mutated?: Directus_Settings_MutatedResolvers<ContextType>;
    directus_shares?: Directus_SharesResolvers<ContextType>;
    directus_shares_mutated?: Directus_Shares_MutatedResolvers<ContextType>;
    directus_translations?: Directus_TranslationsResolvers<ContextType>;
    directus_translations_mutated?: Directus_Translations_MutatedResolvers<ContextType>;
    directus_users?: Directus_UsersResolvers<ContextType>;
    directus_users_mutated?: Directus_Users_MutatedResolvers<ContextType>;
    directus_versions?: Directus_VersionsResolvers<ContextType>;
    directus_versions_mutated?: Directus_Versions_MutatedResolvers<ContextType>;
    directus_webhooks?: Directus_WebhooksResolvers<ContextType>;
    directus_webhooks_mutated?: Directus_Webhooks_MutatedResolvers<ContextType>;
    donor?: DonorResolvers<ContextType>;
    donor_aggregated?: Donor_AggregatedResolvers<ContextType>;
    donor_aggregated_count?: Donor_Aggregated_CountResolvers<ContextType>;
    donor_aggregated_fields?: Donor_Aggregated_FieldsResolvers<ContextType>;
    donor_mutated?: Donor_MutatedResolvers<ContextType>;
    educational_docs?: Educational_DocsResolvers<ContextType>;
    educational_docs_aggregated?: Educational_Docs_AggregatedResolvers<ContextType>;
    educational_docs_aggregated_count?: Educational_Docs_Aggregated_CountResolvers<ContextType>;
    educational_docs_aggregated_fields?: Educational_Docs_Aggregated_FieldsResolvers<ContextType>;
    educational_docs_mutated?: Educational_Docs_MutatedResolvers<ContextType>;
    form_factor?: Form_FactorResolvers<ContextType>;
    form_factor_aggregated?: Form_Factor_AggregatedResolvers<ContextType>;
    form_factor_aggregated_count?: Form_Factor_Aggregated_CountResolvers<ContextType>;
    form_factor_aggregated_fields?: Form_Factor_Aggregated_FieldsResolvers<ContextType>;
    form_factor_mutated?: Form_Factor_MutatedResolvers<ContextType>;
    git_pull?: Git_PullResolvers<ContextType>;
    git_pull_aggregated?: Git_Pull_AggregatedResolvers<ContextType>;
    git_pull_aggregated_count?: Git_Pull_Aggregated_CountResolvers<ContextType>;
    git_pull_aggregated_fields?: Git_Pull_Aggregated_FieldsResolvers<ContextType>;
    git_pull_mutated?: Git_Pull_MutatedResolvers<ContextType>;
    homepage_slides?: Homepage_SlidesResolvers<ContextType>;
    homepage_slides_aggregated?: Homepage_Slides_AggregatedResolvers<ContextType>;
    homepage_slides_aggregated_count?: Homepage_Slides_Aggregated_CountResolvers<ContextType>;
    homepage_slides_aggregated_fields?: Homepage_Slides_Aggregated_FieldsResolvers<ContextType>;
    homepage_slides_mutated?: Homepage_Slides_MutatedResolvers<ContextType>;
    import_raw?: Import_RawResolvers<ContextType>;
    import_raw_aggregated?: Import_Raw_AggregatedResolvers<ContextType>;
    import_raw_aggregated_count?: Import_Raw_Aggregated_CountResolvers<ContextType>;
    import_raw_aggregated_fields?: Import_Raw_Aggregated_FieldsResolvers<ContextType>;
    import_raw_mutated?: Import_Raw_MutatedResolvers<ContextType>;
    import_update?: Import_UpdateResolvers<ContextType>;
    import_update_aggregated?: Import_Update_AggregatedResolvers<ContextType>;
    import_update_aggregated_count?: Import_Update_Aggregated_CountResolvers<ContextType>;
    import_update_aggregated_fields?: Import_Update_Aggregated_FieldsResolvers<ContextType>;
    import_update_mutated?: Import_Update_MutatedResolvers<ContextType>;
    list?: ListResolvers<ContextType>;
    list_aggregated?: List_AggregatedResolvers<ContextType>;
    list_aggregated_count?: List_Aggregated_CountResolvers<ContextType>;
    list_aggregated_fields?: List_Aggregated_FieldsResolvers<ContextType>;
    list_mutated?: List_MutatedResolvers<ContextType>;
    model?: ModelResolvers<ContextType>;
    model_aggregated?: Model_AggregatedResolvers<ContextType>;
    model_aggregated_count?: Model_Aggregated_CountResolvers<ContextType>;
    model_aggregated_fields?: Model_Aggregated_FieldsResolvers<ContextType>;
    model_directus_files?: Model_Directus_FilesResolvers<ContextType>;
    model_directus_files_aggregated?: Model_Directus_Files_AggregatedResolvers<ContextType>;
    model_directus_files_aggregated_count?: Model_Directus_Files_Aggregated_CountResolvers<ContextType>;
    model_directus_files_aggregated_fields?: Model_Directus_Files_Aggregated_FieldsResolvers<ContextType>;
    model_directus_files_mutated?: Model_Directus_Files_MutatedResolvers<ContextType>;
    model_files?: Model_FilesResolvers<ContextType>;
    model_files_aggregated?: Model_Files_AggregatedResolvers<ContextType>;
    model_files_aggregated_count?: Model_Files_Aggregated_CountResolvers<ContextType>;
    model_files_aggregated_fields?: Model_Files_Aggregated_FieldsResolvers<ContextType>;
    model_files_mutated?: Model_Files_MutatedResolvers<ContextType>;
    model_like?: Model_LikeResolvers<ContextType>;
    model_like_aggregated?: Model_Like_AggregatedResolvers<ContextType>;
    model_like_aggregated_count?: Model_Like_Aggregated_CountResolvers<ContextType>;
    model_like_aggregated_fields?: Model_Like_Aggregated_FieldsResolvers<ContextType>;
    model_like_mutated?: Model_Like_MutatedResolvers<ContextType>;
    model_list?: Model_ListResolvers<ContextType>;
    model_list_aggregated?: Model_List_AggregatedResolvers<ContextType>;
    model_list_aggregated_count?: Model_List_Aggregated_CountResolvers<ContextType>;
    model_list_aggregated_fields?: Model_List_Aggregated_FieldsResolvers<ContextType>;
    model_list_mutated?: Model_List_MutatedResolvers<ContextType>;
    model_mutated?: Model_MutatedResolvers<ContextType>;
    model_tag?: Model_TagResolvers<ContextType>;
    model_tag_aggregated?: Model_Tag_AggregatedResolvers<ContextType>;
    model_tag_aggregated_count?: Model_Tag_Aggregated_CountResolvers<ContextType>;
    model_tag_aggregated_fields?: Model_Tag_Aggregated_FieldsResolvers<ContextType>;
    model_tag_mutated?: Model_Tag_MutatedResolvers<ContextType>;
    most_wanted?: Most_WantedResolvers<ContextType>;
    most_wanted_aggregated?: Most_Wanted_AggregatedResolvers<ContextType>;
    most_wanted_aggregated_count?: Most_Wanted_Aggregated_CountResolvers<ContextType>;
    most_wanted_aggregated_fields?: Most_Wanted_Aggregated_FieldsResolvers<ContextType>;
    most_wanted_mutated?: Most_Wanted_MutatedResolvers<ContextType>;
    page?: PageResolvers<ContextType>;
    page_aggregated?: Page_AggregatedResolvers<ContextType>;
    page_aggregated_count?: Page_Aggregated_CountResolvers<ContextType>;
    page_aggregated_fields?: Page_Aggregated_FieldsResolvers<ContextType>;
    page_mutated?: Page_MutatedResolvers<ContextType>;
    product?: ProductResolvers<ContextType>;
    product_aggregated?: Product_AggregatedResolvers<ContextType>;
    product_aggregated_count?: Product_Aggregated_CountResolvers<ContextType>;
    product_aggregated_fields?: Product_Aggregated_FieldsResolvers<ContextType>;
    product_mutated?: Product_MutatedResolvers<ContextType>;
    related_model?: Related_ModelResolvers<ContextType>;
    related_model_aggregated?: Related_Model_AggregatedResolvers<ContextType>;
    related_model_aggregated_count?: Related_Model_Aggregated_CountResolvers<ContextType>;
    related_model_aggregated_fields?: Related_Model_Aggregated_FieldsResolvers<ContextType>;
    related_model_mutated?: Related_Model_MutatedResolvers<ContextType>;
    release?: ReleaseResolvers<ContextType>;
    release_aggregated?: Release_AggregatedResolvers<ContextType>;
    release_aggregated_count?: Release_Aggregated_CountResolvers<ContextType>;
    release_mutated?: Release_MutatedResolvers<ContextType>;
    reset_build_process?: Reset_Build_ProcessResolvers<ContextType>;
    reset_build_process_aggregated?: Reset_Build_Process_AggregatedResolvers<ContextType>;
    reset_build_process_aggregated_count?: Reset_Build_Process_Aggregated_CountResolvers<ContextType>;
    reset_build_process_aggregated_fields?: Reset_Build_Process_Aggregated_FieldsResolvers<ContextType>;
    reset_build_process_mutated?: Reset_Build_Process_MutatedResolvers<ContextType>;
    resources?: ResourcesResolvers<ContextType>;
    resources_aggregated?: Resources_AggregatedResolvers<ContextType>;
    resources_aggregated_count?: Resources_Aggregated_CountResolvers<ContextType>;
    resources_aggregated_fields?: Resources_Aggregated_FieldsResolvers<ContextType>;
    resources_mutated?: Resources_MutatedResolvers<ContextType>;
    sponsors?: SponsorsResolvers<ContextType>;
    sponsors_aggregated?: Sponsors_AggregatedResolvers<ContextType>;
    sponsors_aggregated_count?: Sponsors_Aggregated_CountResolvers<ContextType>;
    sponsors_aggregated_fields?: Sponsors_Aggregated_FieldsResolvers<ContextType>;
    sponsors_mutated?: Sponsors_MutatedResolvers<ContextType>;
    team?: TeamResolvers<ContextType>;
    team_aggregated?: Team_AggregatedResolvers<ContextType>;
    team_aggregated_count?: Team_Aggregated_CountResolvers<ContextType>;
    team_aggregated_fields?: Team_Aggregated_FieldsResolvers<ContextType>;
    team_mutated?: Team_MutatedResolvers<ContextType>;
};

