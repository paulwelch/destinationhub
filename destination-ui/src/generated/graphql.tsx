import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  zip?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export type AccountCreateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  zip?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type AccountOrderByInput = {
  id?: Maybe<OrderDirection>;
  firstName?: Maybe<OrderDirection>;
  lastName?: Maybe<OrderDirection>;
  phone?: Maybe<OrderDirection>;
  address1?: Maybe<OrderDirection>;
  address2?: Maybe<OrderDirection>;
  city?: Maybe<OrderDirection>;
  zip?: Maybe<OrderDirection>;
};

export type AccountRelateToOneInput = {
  create?: Maybe<AccountCreateInput>;
  connect?: Maybe<AccountWhereUniqueInput>;
  disconnect?: Maybe<AccountWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type AccountUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  zip?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneInput>;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  firstName_i?: Maybe<Scalars['String']>;
  firstName_not_i?: Maybe<Scalars['String']>;
  firstName_contains_i?: Maybe<Scalars['String']>;
  firstName_not_contains_i?: Maybe<Scalars['String']>;
  firstName_starts_with_i?: Maybe<Scalars['String']>;
  firstName_not_starts_with_i?: Maybe<Scalars['String']>;
  firstName_ends_with_i?: Maybe<Scalars['String']>;
  firstName_not_ends_with_i?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  lastName_i?: Maybe<Scalars['String']>;
  lastName_not_i?: Maybe<Scalars['String']>;
  lastName_contains_i?: Maybe<Scalars['String']>;
  lastName_not_contains_i?: Maybe<Scalars['String']>;
  lastName_starts_with_i?: Maybe<Scalars['String']>;
  lastName_not_starts_with_i?: Maybe<Scalars['String']>;
  lastName_ends_with_i?: Maybe<Scalars['String']>;
  lastName_not_ends_with_i?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  phone_starts_with?: Maybe<Scalars['String']>;
  phone_not_starts_with?: Maybe<Scalars['String']>;
  phone_ends_with?: Maybe<Scalars['String']>;
  phone_not_ends_with?: Maybe<Scalars['String']>;
  phone_i?: Maybe<Scalars['String']>;
  phone_not_i?: Maybe<Scalars['String']>;
  phone_contains_i?: Maybe<Scalars['String']>;
  phone_not_contains_i?: Maybe<Scalars['String']>;
  phone_starts_with_i?: Maybe<Scalars['String']>;
  phone_not_starts_with_i?: Maybe<Scalars['String']>;
  phone_ends_with_i?: Maybe<Scalars['String']>;
  phone_not_ends_with_i?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address1?: Maybe<Scalars['String']>;
  address1_not?: Maybe<Scalars['String']>;
  address1_contains?: Maybe<Scalars['String']>;
  address1_not_contains?: Maybe<Scalars['String']>;
  address1_starts_with?: Maybe<Scalars['String']>;
  address1_not_starts_with?: Maybe<Scalars['String']>;
  address1_ends_with?: Maybe<Scalars['String']>;
  address1_not_ends_with?: Maybe<Scalars['String']>;
  address1_i?: Maybe<Scalars['String']>;
  address1_not_i?: Maybe<Scalars['String']>;
  address1_contains_i?: Maybe<Scalars['String']>;
  address1_not_contains_i?: Maybe<Scalars['String']>;
  address1_starts_with_i?: Maybe<Scalars['String']>;
  address1_not_starts_with_i?: Maybe<Scalars['String']>;
  address1_ends_with_i?: Maybe<Scalars['String']>;
  address1_not_ends_with_i?: Maybe<Scalars['String']>;
  address1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address2?: Maybe<Scalars['String']>;
  address2_not?: Maybe<Scalars['String']>;
  address2_contains?: Maybe<Scalars['String']>;
  address2_not_contains?: Maybe<Scalars['String']>;
  address2_starts_with?: Maybe<Scalars['String']>;
  address2_not_starts_with?: Maybe<Scalars['String']>;
  address2_ends_with?: Maybe<Scalars['String']>;
  address2_not_ends_with?: Maybe<Scalars['String']>;
  address2_i?: Maybe<Scalars['String']>;
  address2_not_i?: Maybe<Scalars['String']>;
  address2_contains_i?: Maybe<Scalars['String']>;
  address2_not_contains_i?: Maybe<Scalars['String']>;
  address2_starts_with_i?: Maybe<Scalars['String']>;
  address2_not_starts_with_i?: Maybe<Scalars['String']>;
  address2_ends_with_i?: Maybe<Scalars['String']>;
  address2_not_ends_with_i?: Maybe<Scalars['String']>;
  address2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  city_starts_with?: Maybe<Scalars['String']>;
  city_not_starts_with?: Maybe<Scalars['String']>;
  city_ends_with?: Maybe<Scalars['String']>;
  city_not_ends_with?: Maybe<Scalars['String']>;
  city_i?: Maybe<Scalars['String']>;
  city_not_i?: Maybe<Scalars['String']>;
  city_contains_i?: Maybe<Scalars['String']>;
  city_not_contains_i?: Maybe<Scalars['String']>;
  city_starts_with_i?: Maybe<Scalars['String']>;
  city_not_starts_with_i?: Maybe<Scalars['String']>;
  city_ends_with_i?: Maybe<Scalars['String']>;
  city_not_ends_with_i?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<StateWhereInput>;
  state_is_null?: Maybe<Scalars['Boolean']>;
  zip?: Maybe<Scalars['Int']>;
  zip_not?: Maybe<Scalars['Int']>;
  zip_lt?: Maybe<Scalars['Int']>;
  zip_lte?: Maybe<Scalars['Int']>;
  zip_gt?: Maybe<Scalars['Int']>;
  zip_gte?: Maybe<Scalars['Int']>;
  zip_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  zip_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  phone?: Maybe<Scalars['String']>;
};

export type AccountsCreateInput = {
  data?: Maybe<AccountCreateInput>;
};

export type AccountsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<AccountUpdateInput>;
};

export type AuthenticatedItem = User;

export type CitiesCreateInput = {
  data?: Maybe<CityCreateInput>;
};

export type CitiesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CityUpdateInput>;
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  fipsCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cbsa?: Maybe<Scalars['String']>;
  necta?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  locations?: Maybe<Array<Location>>;
  /** @deprecated This query will be removed in a future version. Please use locationsCount instead. */
  _locationsMeta?: Maybe<_QueryMeta>;
  locationsCount?: Maybe<Scalars['Int']>;
};


export type CityLocationsArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type City_LocationsMetaArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type CityLocationsCountArgs = {
  where?: LocationWhereInput;
};

export type CityCreateInput = {
  fipsCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cbsa?: Maybe<Scalars['String']>;
  necta?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type CityOrderByInput = {
  id?: Maybe<OrderDirection>;
  fipsCode?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  cbsa?: Maybe<OrderDirection>;
  necta?: Maybe<OrderDirection>;
};

export type CityRelateToManyInput = {
  create?: Maybe<Array<Maybe<CityCreateInput>>>;
  connect?: Maybe<Array<Maybe<CityWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CityWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type CityRelateToOneInput = {
  create?: Maybe<CityCreateInput>;
  connect?: Maybe<CityWhereUniqueInput>;
  disconnect?: Maybe<CityWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type CityUpdateInput = {
  fipsCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cbsa?: Maybe<Scalars['String']>;
  necta?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type CityWhereInput = {
  AND?: Maybe<Array<CityWhereInput>>;
  OR?: Maybe<Array<CityWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fipsCode?: Maybe<Scalars['String']>;
  fipsCode_not?: Maybe<Scalars['String']>;
  fipsCode_contains?: Maybe<Scalars['String']>;
  fipsCode_not_contains?: Maybe<Scalars['String']>;
  fipsCode_starts_with?: Maybe<Scalars['String']>;
  fipsCode_not_starts_with?: Maybe<Scalars['String']>;
  fipsCode_ends_with?: Maybe<Scalars['String']>;
  fipsCode_not_ends_with?: Maybe<Scalars['String']>;
  fipsCode_i?: Maybe<Scalars['String']>;
  fipsCode_not_i?: Maybe<Scalars['String']>;
  fipsCode_contains_i?: Maybe<Scalars['String']>;
  fipsCode_not_contains_i?: Maybe<Scalars['String']>;
  fipsCode_starts_with_i?: Maybe<Scalars['String']>;
  fipsCode_not_starts_with_i?: Maybe<Scalars['String']>;
  fipsCode_ends_with_i?: Maybe<Scalars['String']>;
  fipsCode_not_ends_with_i?: Maybe<Scalars['String']>;
  fipsCode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fipsCode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cbsa?: Maybe<Scalars['String']>;
  cbsa_not?: Maybe<Scalars['String']>;
  cbsa_contains?: Maybe<Scalars['String']>;
  cbsa_not_contains?: Maybe<Scalars['String']>;
  cbsa_starts_with?: Maybe<Scalars['String']>;
  cbsa_not_starts_with?: Maybe<Scalars['String']>;
  cbsa_ends_with?: Maybe<Scalars['String']>;
  cbsa_not_ends_with?: Maybe<Scalars['String']>;
  cbsa_i?: Maybe<Scalars['String']>;
  cbsa_not_i?: Maybe<Scalars['String']>;
  cbsa_contains_i?: Maybe<Scalars['String']>;
  cbsa_not_contains_i?: Maybe<Scalars['String']>;
  cbsa_starts_with_i?: Maybe<Scalars['String']>;
  cbsa_not_starts_with_i?: Maybe<Scalars['String']>;
  cbsa_ends_with_i?: Maybe<Scalars['String']>;
  cbsa_not_ends_with_i?: Maybe<Scalars['String']>;
  cbsa_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cbsa_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  necta?: Maybe<Scalars['String']>;
  necta_not?: Maybe<Scalars['String']>;
  necta_contains?: Maybe<Scalars['String']>;
  necta_not_contains?: Maybe<Scalars['String']>;
  necta_starts_with?: Maybe<Scalars['String']>;
  necta_not_starts_with?: Maybe<Scalars['String']>;
  necta_ends_with?: Maybe<Scalars['String']>;
  necta_not_ends_with?: Maybe<Scalars['String']>;
  necta_i?: Maybe<Scalars['String']>;
  necta_not_i?: Maybe<Scalars['String']>;
  necta_contains_i?: Maybe<Scalars['String']>;
  necta_not_contains_i?: Maybe<Scalars['String']>;
  necta_starts_with_i?: Maybe<Scalars['String']>;
  necta_not_starts_with_i?: Maybe<Scalars['String']>;
  necta_ends_with_i?: Maybe<Scalars['String']>;
  necta_not_ends_with_i?: Maybe<Scalars['String']>;
  necta_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  necta_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<StateWhereInput>;
  state_is_null?: Maybe<Scalars['Boolean']>;
  locations_every?: Maybe<LocationWhereInput>;
  locations_some?: Maybe<LocationWhereInput>;
  locations_none?: Maybe<LocationWhereInput>;
};

export type CityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ContentBlock = {
  __typename?: 'ContentBlock';
  id: Scalars['ID'];
  active?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['Int']>;
  blockOrder?: Maybe<Scalars['Int']>;
  richText?: Maybe<ContentBlock_RichText_DocumentField>;
};

export type ContentBlockCreateInput = {
  active?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['Int']>;
  blockOrder?: Maybe<Scalars['Int']>;
  richText?: Maybe<Scalars['JSON']>;
};

export type ContentBlockOrderByInput = {
  id?: Maybe<OrderDirection>;
  active?: Maybe<OrderDirection>;
  page?: Maybe<OrderDirection>;
  column?: Maybe<OrderDirection>;
  blockOrder?: Maybe<OrderDirection>;
};

export type ContentBlockUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['String']>;
  column?: Maybe<Scalars['Int']>;
  blockOrder?: Maybe<Scalars['Int']>;
  richText?: Maybe<Scalars['JSON']>;
};

export type ContentBlockWhereInput = {
  AND?: Maybe<Array<ContentBlockWhereInput>>;
  OR?: Maybe<Array<ContentBlockWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  active?: Maybe<Scalars['Boolean']>;
  active_not?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['String']>;
  page_not?: Maybe<Scalars['String']>;
  page_contains?: Maybe<Scalars['String']>;
  page_not_contains?: Maybe<Scalars['String']>;
  page_starts_with?: Maybe<Scalars['String']>;
  page_not_starts_with?: Maybe<Scalars['String']>;
  page_ends_with?: Maybe<Scalars['String']>;
  page_not_ends_with?: Maybe<Scalars['String']>;
  page_i?: Maybe<Scalars['String']>;
  page_not_i?: Maybe<Scalars['String']>;
  page_contains_i?: Maybe<Scalars['String']>;
  page_not_contains_i?: Maybe<Scalars['String']>;
  page_starts_with_i?: Maybe<Scalars['String']>;
  page_not_starts_with_i?: Maybe<Scalars['String']>;
  page_ends_with_i?: Maybe<Scalars['String']>;
  page_not_ends_with_i?: Maybe<Scalars['String']>;
  page_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  page_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  column?: Maybe<Scalars['Int']>;
  column_not?: Maybe<Scalars['Int']>;
  column_lt?: Maybe<Scalars['Int']>;
  column_lte?: Maybe<Scalars['Int']>;
  column_gt?: Maybe<Scalars['Int']>;
  column_gte?: Maybe<Scalars['Int']>;
  column_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  column_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  blockOrder?: Maybe<Scalars['Int']>;
  blockOrder_not?: Maybe<Scalars['Int']>;
  blockOrder_lt?: Maybe<Scalars['Int']>;
  blockOrder_lte?: Maybe<Scalars['Int']>;
  blockOrder_gt?: Maybe<Scalars['Int']>;
  blockOrder_gte?: Maybe<Scalars['Int']>;
  blockOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  blockOrder_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ContentBlockWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ContentBlock_RichText_DocumentField = {
  __typename?: 'ContentBlock_richText_DocumentField';
  document: Scalars['JSON'];
};


export type ContentBlock_RichText_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type ContentBlocksCreateInput = {
  data?: Maybe<ContentBlockCreateInput>;
};

export type ContentBlocksUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ContentBlockUpdateInput>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  filename?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Location>>;
  /** @deprecated This query will be removed in a future version. Please use locationsCount instead. */
  _locationsMeta?: Maybe<_QueryMeta>;
  locationsCount?: Maybe<Scalars['Int']>;
};


export type ImageLocationsArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type Image_LocationsMetaArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ImageLocationsCountArgs = {
  where?: LocationWhereInput;
};

export type ImageCreateInput = {
  filename?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type ImageOrderByInput = {
  id?: Maybe<OrderDirection>;
  filename?: Maybe<OrderDirection>;
};

export type ImageRelateToManyInput = {
  create?: Maybe<Array<Maybe<ImageCreateInput>>>;
  connect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ImageWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ImageUpdateInput = {
  filename?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type ImageWhereInput = {
  AND?: Maybe<Array<ImageWhereInput>>;
  OR?: Maybe<Array<ImageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  filename?: Maybe<Scalars['String']>;
  filename_not?: Maybe<Scalars['String']>;
  filename_contains?: Maybe<Scalars['String']>;
  filename_not_contains?: Maybe<Scalars['String']>;
  filename_starts_with?: Maybe<Scalars['String']>;
  filename_not_starts_with?: Maybe<Scalars['String']>;
  filename_ends_with?: Maybe<Scalars['String']>;
  filename_not_ends_with?: Maybe<Scalars['String']>;
  filename_i?: Maybe<Scalars['String']>;
  filename_not_i?: Maybe<Scalars['String']>;
  filename_contains_i?: Maybe<Scalars['String']>;
  filename_not_contains_i?: Maybe<Scalars['String']>;
  filename_starts_with_i?: Maybe<Scalars['String']>;
  filename_not_starts_with_i?: Maybe<Scalars['String']>;
  filename_ends_with_i?: Maybe<Scalars['String']>;
  filename_not_ends_with_i?: Maybe<Scalars['String']>;
  filename_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  locations_every?: Maybe<LocationWhereInput>;
  locations_some?: Maybe<LocationWhereInput>;
  locations_none?: Maybe<LocationWhereInput>;
};

export type ImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ImagesCreateInput = {
  data?: Maybe<ImageCreateInput>;
};

export type ImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ImageUpdateInput>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  search?: Maybe<QueryMode>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  city?: Maybe<City>;
  status?: Maybe<Scalars['String']>;
  description?: Maybe<Location_Description_DocumentField>;
  createdDate?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  /** @deprecated This query will be removed in a future version. Please use tagsCount instead. */
  _tagsMeta?: Maybe<_QueryMeta>;
  tagsCount?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Image>>;
  /** @deprecated This query will be removed in a future version. Please use imagesCount instead. */
  _imagesMeta?: Maybe<_QueryMeta>;
  imagesCount?: Maybe<Scalars['Int']>;
};


export type LocationTagsArgs = {
  where?: TagWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTagsBy>>;
  orderBy?: Array<TagOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type Location_TagsMetaArgs = {
  where?: TagWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTagsBy>>;
  orderBy?: Array<TagOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationTagsCountArgs = {
  where?: TagWhereInput;
};


export type LocationImagesArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type Location_ImagesMetaArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LocationImagesCountArgs = {
  where?: ImageWhereInput;
};

export type LocationCreateInput = {
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  city?: Maybe<CityRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  createdDate?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelateToManyInput>;
  images?: Maybe<ImageRelateToManyInput>;
};

export type LocationOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  shortDescription?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
  createdDate?: Maybe<OrderDirection>;
};

export type LocationRelateToManyInput = {
  create?: Maybe<Array<Maybe<LocationCreateInput>>>;
  connect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type LocationUpdateInput = {
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  state?: Maybe<StateRelateToOneInput>;
  city?: Maybe<CityRelateToOneInput>;
  status?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  createdDate?: Maybe<Scalars['String']>;
  tags?: Maybe<TagRelateToManyInput>;
  images?: Maybe<ImageRelateToManyInput>;
};

export type LocationWhereInput = {
  AND?: Maybe<Array<LocationWhereInput>>;
  OR?: Maybe<Array<LocationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription?: Maybe<Scalars['String']>;
  shortDescription_not?: Maybe<Scalars['String']>;
  shortDescription_contains?: Maybe<Scalars['String']>;
  shortDescription_not_contains?: Maybe<Scalars['String']>;
  shortDescription_starts_with?: Maybe<Scalars['String']>;
  shortDescription_not_starts_with?: Maybe<Scalars['String']>;
  shortDescription_ends_with?: Maybe<Scalars['String']>;
  shortDescription_not_ends_with?: Maybe<Scalars['String']>;
  shortDescription_i?: Maybe<Scalars['String']>;
  shortDescription_not_i?: Maybe<Scalars['String']>;
  shortDescription_contains_i?: Maybe<Scalars['String']>;
  shortDescription_not_contains_i?: Maybe<Scalars['String']>;
  shortDescription_starts_with_i?: Maybe<Scalars['String']>;
  shortDescription_not_starts_with_i?: Maybe<Scalars['String']>;
  shortDescription_ends_with_i?: Maybe<Scalars['String']>;
  shortDescription_not_ends_with_i?: Maybe<Scalars['String']>;
  shortDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<StateWhereInput>;
  state_is_null?: Maybe<Scalars['Boolean']>;
  city?: Maybe<CityWhereInput>;
  city_is_null?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate?: Maybe<Scalars['String']>;
  createdDate_not?: Maybe<Scalars['String']>;
  createdDate_lt?: Maybe<Scalars['String']>;
  createdDate_lte?: Maybe<Scalars['String']>;
  createdDate_gt?: Maybe<Scalars['String']>;
  createdDate_gte?: Maybe<Scalars['String']>;
  createdDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  images_every?: Maybe<ImageWhereInput>;
  images_some?: Maybe<ImageWhereInput>;
  images_none?: Maybe<ImageWhereInput>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Location_Description_DocumentField = {
  __typename?: 'Location_description_DocumentField';
  document: Scalars['JSON'];
};


export type Location_Description_DocumentFieldDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type LocationsCreateInput = {
  data?: Maybe<LocationCreateInput>;
};

export type LocationsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<LocationUpdateInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  createAccount?: Maybe<Account>;
  createAccounts?: Maybe<Array<Maybe<Account>>>;
  updateAccount?: Maybe<Account>;
  updateAccounts?: Maybe<Array<Maybe<Account>>>;
  deleteAccount?: Maybe<Account>;
  deleteAccounts?: Maybe<Array<Maybe<Account>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  createState?: Maybe<State>;
  createStates?: Maybe<Array<Maybe<State>>>;
  updateState?: Maybe<State>;
  updateStates?: Maybe<Array<Maybe<State>>>;
  deleteState?: Maybe<State>;
  deleteStates?: Maybe<Array<Maybe<State>>>;
  createCity?: Maybe<City>;
  createCities?: Maybe<Array<Maybe<City>>>;
  updateCity?: Maybe<City>;
  updateCities?: Maybe<Array<Maybe<City>>>;
  deleteCity?: Maybe<City>;
  deleteCities?: Maybe<Array<Maybe<City>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  createContentBlock?: Maybe<ContentBlock>;
  createContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  updateContentBlock?: Maybe<ContentBlock>;
  updateContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  deleteContentBlock?: Maybe<ContentBlock>;
  deleteContentBlocks?: Maybe<Array<Maybe<ContentBlock>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateAccountArgs = {
  data?: Maybe<AccountCreateInput>;
};


export type MutationCreateAccountsArgs = {
  data?: Maybe<Array<Maybe<AccountsCreateInput>>>;
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  data?: Maybe<AccountUpdateInput>;
};


export type MutationUpdateAccountsArgs = {
  data?: Maybe<Array<Maybe<AccountsUpdateInput>>>;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAccountsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateTagArgs = {
  data?: Maybe<TagCreateInput>;
};


export type MutationCreateTagsArgs = {
  data?: Maybe<Array<Maybe<TagsCreateInput>>>;
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID'];
  data?: Maybe<TagUpdateInput>;
};


export type MutationUpdateTagsArgs = {
  data?: Maybe<Array<Maybe<TagsUpdateInput>>>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateLocationArgs = {
  data?: Maybe<LocationCreateInput>;
};


export type MutationCreateLocationsArgs = {
  data?: Maybe<Array<Maybe<LocationsCreateInput>>>;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['ID'];
  data?: Maybe<LocationUpdateInput>;
};


export type MutationUpdateLocationsArgs = {
  data?: Maybe<Array<Maybe<LocationsUpdateInput>>>;
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLocationsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateStateArgs = {
  data?: Maybe<StateCreateInput>;
};


export type MutationCreateStatesArgs = {
  data?: Maybe<Array<Maybe<StatesCreateInput>>>;
};


export type MutationUpdateStateArgs = {
  id: Scalars['ID'];
  data?: Maybe<StateUpdateInput>;
};


export type MutationUpdateStatesArgs = {
  data?: Maybe<Array<Maybe<StatesUpdateInput>>>;
};


export type MutationDeleteStateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStatesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCityArgs = {
  data?: Maybe<CityCreateInput>;
};


export type MutationCreateCitiesArgs = {
  data?: Maybe<Array<Maybe<CitiesCreateInput>>>;
};


export type MutationUpdateCityArgs = {
  id: Scalars['ID'];
  data?: Maybe<CityUpdateInput>;
};


export type MutationUpdateCitiesArgs = {
  data?: Maybe<Array<Maybe<CitiesUpdateInput>>>;
};


export type MutationDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCitiesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateImageArgs = {
  data?: Maybe<ImageCreateInput>;
};


export type MutationCreateImagesArgs = {
  data?: Maybe<Array<Maybe<ImagesCreateInput>>>;
};


export type MutationUpdateImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ImageUpdateInput>;
};


export type MutationUpdateImagesArgs = {
  data?: Maybe<Array<Maybe<ImagesUpdateInput>>>;
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateContentBlockArgs = {
  data?: Maybe<ContentBlockCreateInput>;
};


export type MutationCreateContentBlocksArgs = {
  data?: Maybe<Array<Maybe<ContentBlocksCreateInput>>>;
};


export type MutationUpdateContentBlockArgs = {
  id: Scalars['ID'];
  data?: Maybe<ContentBlockUpdateInput>;
};


export type MutationUpdateContentBlocksArgs = {
  data?: Maybe<Array<Maybe<ContentBlocksUpdateInput>>>;
};


export type MutationDeleteContentBlockArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContentBlocksArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<User>>;
  User?: Maybe<User>;
  /** @deprecated This query will be removed in a future version. Please use usersCount instead. */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  allAccounts?: Maybe<Array<Account>>;
  Account?: Maybe<Account>;
  /** @deprecated This query will be removed in a future version. Please use accountsCount instead. */
  _allAccountsMeta?: Maybe<_QueryMeta>;
  accountsCount?: Maybe<Scalars['Int']>;
  allTags?: Maybe<Array<Tag>>;
  Tag?: Maybe<Tag>;
  /** @deprecated This query will be removed in a future version. Please use tagsCount instead. */
  _allTagsMeta?: Maybe<_QueryMeta>;
  tagsCount?: Maybe<Scalars['Int']>;
  allLocations?: Maybe<Array<Location>>;
  Location?: Maybe<Location>;
  /** @deprecated This query will be removed in a future version. Please use locationsCount instead. */
  _allLocationsMeta?: Maybe<_QueryMeta>;
  locationsCount?: Maybe<Scalars['Int']>;
  allStates?: Maybe<Array<State>>;
  State?: Maybe<State>;
  /** @deprecated This query will be removed in a future version. Please use statesCount instead. */
  _allStatesMeta?: Maybe<_QueryMeta>;
  statesCount?: Maybe<Scalars['Int']>;
  allCities?: Maybe<Array<City>>;
  City?: Maybe<City>;
  /** @deprecated This query will be removed in a future version. Please use citiesCount instead. */
  _allCitiesMeta?: Maybe<_QueryMeta>;
  citiesCount?: Maybe<Scalars['Int']>;
  allImages?: Maybe<Array<Image>>;
  Image?: Maybe<Image>;
  /** @deprecated This query will be removed in a future version. Please use imagesCount instead. */
  _allImagesMeta?: Maybe<_QueryMeta>;
  imagesCount?: Maybe<Scalars['Int']>;
  allContentBlocks?: Maybe<Array<ContentBlock>>;
  ContentBlock?: Maybe<ContentBlock>;
  /** @deprecated This query will be removed in a future version. Please use contentBlocksCount instead. */
  _allContentBlocksMeta?: Maybe<_QueryMeta>;
  contentBlocksCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryAllAccountsArgs = {
  where?: AccountWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAccountsBy>>;
  orderBy?: Array<AccountOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type Query_AllAccountsMetaArgs = {
  where?: AccountWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortAccountsBy>>;
  orderBy?: Array<AccountOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryAccountsCountArgs = {
  where?: AccountWhereInput;
};


export type QueryAllTagsArgs = {
  where?: TagWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTagsBy>>;
  orderBy?: Array<TagOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type Query_AllTagsMetaArgs = {
  where?: TagWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortTagsBy>>;
  orderBy?: Array<TagOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryAllLocationsArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type Query_AllLocationsMetaArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryAllStatesArgs = {
  where?: StateWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStatesBy>>;
  orderBy?: Array<StateOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryStateArgs = {
  where: StateWhereUniqueInput;
};


export type Query_AllStatesMetaArgs = {
  where?: StateWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStatesBy>>;
  orderBy?: Array<StateOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryStatesCountArgs = {
  where?: StateWhereInput;
};


export type QueryAllCitiesArgs = {
  where?: CityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCitiesBy>>;
  orderBy?: Array<CityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type Query_AllCitiesMetaArgs = {
  where?: CityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCitiesBy>>;
  orderBy?: Array<CityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCitiesCountArgs = {
  where?: CityWhereInput;
};


export type QueryAllImagesArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type Query_AllImagesMetaArgs = {
  where?: ImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortImagesBy>>;
  orderBy?: Array<ImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};


export type QueryAllContentBlocksArgs = {
  where?: ContentBlockWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContentBlocksBy>>;
  orderBy?: Array<ContentBlockOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryContentBlockArgs = {
  where: ContentBlockWhereUniqueInput;
};


export type Query_AllContentBlocksMetaArgs = {
  where?: ContentBlockWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContentBlocksBy>>;
  orderBy?: Array<ContentBlockOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryContentBlocksCountArgs = {
  where?: ContentBlockWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortAccountsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  Address1Asc = 'address1_ASC',
  Address1Desc = 'address1_DESC',
  Address2Asc = 'address2_ASC',
  Address2Desc = 'address2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC'
}

export enum SortCitiesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FipsCodeAsc = 'fipsCode_ASC',
  FipsCodeDesc = 'fipsCode_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CbsaAsc = 'cbsa_ASC',
  CbsaDesc = 'cbsa_DESC',
  NectaAsc = 'necta_ASC',
  NectaDesc = 'necta_DESC'
}

export enum SortContentBlocksBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  PageAsc = 'page_ASC',
  PageDesc = 'page_DESC',
  ColumnAsc = 'column_ASC',
  ColumnDesc = 'column_DESC',
  BlockOrderAsc = 'blockOrder_ASC',
  BlockOrderDesc = 'blockOrder_DESC'
}

export enum SortImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC'
}

export enum SortLocationsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  CreatedDateAsc = 'createdDate_ASC',
  CreatedDateDesc = 'createdDate_DESC'
}

export enum SortStatesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CapitalAsc = 'capital_ASC',
  CapitalDesc = 'capital_DESC',
  LargestCityAsc = 'largestCity_ASC',
  LargestCityDesc = 'largestCity_DESC',
  PopulationAsc = 'population_ASC',
  PopulationDesc = 'population_DESC',
  AreaSqMiAsc = 'areaSqMi_ASC',
  AreaSqMiDesc = 'areaSqMi_DESC',
  LandAreaSqMiAsc = 'landAreaSqMi_ASC',
  LandAreaSqMiDesc = 'landAreaSqMi_DESC',
  WaterAreaSqMiAsc = 'waterAreaSqMi_ASC',
  WaterAreaSqMiDesc = 'waterAreaSqMi_DESC'
}

export enum SortTagsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  capital?: Maybe<Scalars['String']>;
  largestCity?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  areaSqMi?: Maybe<Scalars['Int']>;
  landAreaSqMi?: Maybe<Scalars['Int']>;
  waterAreaSqMi?: Maybe<Scalars['Int']>;
  locations?: Maybe<Array<Location>>;
  /** @deprecated This query will be removed in a future version. Please use locationsCount instead. */
  _locationsMeta?: Maybe<_QueryMeta>;
  locationsCount?: Maybe<Scalars['Int']>;
  city?: Maybe<Array<City>>;
  /** @deprecated This query will be removed in a future version. Please use cityCount instead. */
  _cityMeta?: Maybe<_QueryMeta>;
  cityCount?: Maybe<Scalars['Int']>;
};


export type StateLocationsArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type State_LocationsMetaArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type StateLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type StateCityArgs = {
  where?: CityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCitiesBy>>;
  orderBy?: Array<CityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type State_CityMetaArgs = {
  where?: CityWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCitiesBy>>;
  orderBy?: Array<CityOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type StateCityCountArgs = {
  where?: CityWhereInput;
};

export type StateCreateInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  capital?: Maybe<Scalars['String']>;
  largestCity?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  areaSqMi?: Maybe<Scalars['Int']>;
  landAreaSqMi?: Maybe<Scalars['Int']>;
  waterAreaSqMi?: Maybe<Scalars['Int']>;
  locations?: Maybe<LocationRelateToManyInput>;
  city?: Maybe<CityRelateToManyInput>;
};

export type StateOrderByInput = {
  id?: Maybe<OrderDirection>;
  code?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  capital?: Maybe<OrderDirection>;
  largestCity?: Maybe<OrderDirection>;
  population?: Maybe<OrderDirection>;
  areaSqMi?: Maybe<OrderDirection>;
  landAreaSqMi?: Maybe<OrderDirection>;
  waterAreaSqMi?: Maybe<OrderDirection>;
};

export type StateRelateToOneInput = {
  create?: Maybe<StateCreateInput>;
  connect?: Maybe<StateWhereUniqueInput>;
  disconnect?: Maybe<StateWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type StateUpdateInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  capital?: Maybe<Scalars['String']>;
  largestCity?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Int']>;
  areaSqMi?: Maybe<Scalars['Int']>;
  landAreaSqMi?: Maybe<Scalars['Int']>;
  waterAreaSqMi?: Maybe<Scalars['Int']>;
  locations?: Maybe<LocationRelateToManyInput>;
  city?: Maybe<CityRelateToManyInput>;
};

export type StateWhereInput = {
  AND?: Maybe<Array<StateWhereInput>>;
  OR?: Maybe<Array<StateWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  code?: Maybe<Scalars['String']>;
  code_not?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_i?: Maybe<Scalars['String']>;
  code_not_i?: Maybe<Scalars['String']>;
  code_contains_i?: Maybe<Scalars['String']>;
  code_not_contains_i?: Maybe<Scalars['String']>;
  code_starts_with_i?: Maybe<Scalars['String']>;
  code_not_starts_with_i?: Maybe<Scalars['String']>;
  code_ends_with_i?: Maybe<Scalars['String']>;
  code_not_ends_with_i?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  code_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  capital?: Maybe<Scalars['String']>;
  capital_not?: Maybe<Scalars['String']>;
  capital_contains?: Maybe<Scalars['String']>;
  capital_not_contains?: Maybe<Scalars['String']>;
  capital_starts_with?: Maybe<Scalars['String']>;
  capital_not_starts_with?: Maybe<Scalars['String']>;
  capital_ends_with?: Maybe<Scalars['String']>;
  capital_not_ends_with?: Maybe<Scalars['String']>;
  capital_i?: Maybe<Scalars['String']>;
  capital_not_i?: Maybe<Scalars['String']>;
  capital_contains_i?: Maybe<Scalars['String']>;
  capital_not_contains_i?: Maybe<Scalars['String']>;
  capital_starts_with_i?: Maybe<Scalars['String']>;
  capital_not_starts_with_i?: Maybe<Scalars['String']>;
  capital_ends_with_i?: Maybe<Scalars['String']>;
  capital_not_ends_with_i?: Maybe<Scalars['String']>;
  capital_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  capital_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  largestCity?: Maybe<Scalars['String']>;
  largestCity_not?: Maybe<Scalars['String']>;
  largestCity_contains?: Maybe<Scalars['String']>;
  largestCity_not_contains?: Maybe<Scalars['String']>;
  largestCity_starts_with?: Maybe<Scalars['String']>;
  largestCity_not_starts_with?: Maybe<Scalars['String']>;
  largestCity_ends_with?: Maybe<Scalars['String']>;
  largestCity_not_ends_with?: Maybe<Scalars['String']>;
  largestCity_i?: Maybe<Scalars['String']>;
  largestCity_not_i?: Maybe<Scalars['String']>;
  largestCity_contains_i?: Maybe<Scalars['String']>;
  largestCity_not_contains_i?: Maybe<Scalars['String']>;
  largestCity_starts_with_i?: Maybe<Scalars['String']>;
  largestCity_not_starts_with_i?: Maybe<Scalars['String']>;
  largestCity_ends_with_i?: Maybe<Scalars['String']>;
  largestCity_not_ends_with_i?: Maybe<Scalars['String']>;
  largestCity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  largestCity_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  population?: Maybe<Scalars['Int']>;
  population_not?: Maybe<Scalars['Int']>;
  population_lt?: Maybe<Scalars['Int']>;
  population_lte?: Maybe<Scalars['Int']>;
  population_gt?: Maybe<Scalars['Int']>;
  population_gte?: Maybe<Scalars['Int']>;
  population_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  population_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  areaSqMi?: Maybe<Scalars['Int']>;
  areaSqMi_not?: Maybe<Scalars['Int']>;
  areaSqMi_lt?: Maybe<Scalars['Int']>;
  areaSqMi_lte?: Maybe<Scalars['Int']>;
  areaSqMi_gt?: Maybe<Scalars['Int']>;
  areaSqMi_gte?: Maybe<Scalars['Int']>;
  areaSqMi_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  areaSqMi_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  landAreaSqMi?: Maybe<Scalars['Int']>;
  landAreaSqMi_not?: Maybe<Scalars['Int']>;
  landAreaSqMi_lt?: Maybe<Scalars['Int']>;
  landAreaSqMi_lte?: Maybe<Scalars['Int']>;
  landAreaSqMi_gt?: Maybe<Scalars['Int']>;
  landAreaSqMi_gte?: Maybe<Scalars['Int']>;
  landAreaSqMi_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  landAreaSqMi_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  waterAreaSqMi?: Maybe<Scalars['Int']>;
  waterAreaSqMi_not?: Maybe<Scalars['Int']>;
  waterAreaSqMi_lt?: Maybe<Scalars['Int']>;
  waterAreaSqMi_lte?: Maybe<Scalars['Int']>;
  waterAreaSqMi_gt?: Maybe<Scalars['Int']>;
  waterAreaSqMi_gte?: Maybe<Scalars['Int']>;
  waterAreaSqMi_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  waterAreaSqMi_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  locations_every?: Maybe<LocationWhereInput>;
  locations_some?: Maybe<LocationWhereInput>;
  locations_none?: Maybe<LocationWhereInput>;
  city_every?: Maybe<CityWhereInput>;
  city_some?: Maybe<CityWhereInput>;
  city_none?: Maybe<CityWhereInput>;
};

export type StateWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StatesCreateInput = {
  data?: Maybe<StateCreateInput>;
};

export type StatesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<StateUpdateInput>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Location>>;
  /** @deprecated This query will be removed in a future version. Please use locationsCount instead. */
  _locationsMeta?: Maybe<_QueryMeta>;
  locationsCount?: Maybe<Scalars['Int']>;
};


export type TagLocationsArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type Tag_LocationsMetaArgs = {
  where?: LocationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLocationsBy>>;
  orderBy?: Array<LocationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type TagLocationsCountArgs = {
  where?: LocationWhereInput;
};

export type TagCreateInput = {
  name?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type TagOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
};

export type TagRelateToManyInput = {
  create?: Maybe<Array<Maybe<TagCreateInput>>>;
  connect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<TagWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type TagUpdateInput = {
  name?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationRelateToManyInput>;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  locations_every?: Maybe<LocationWhereInput>;
  locations_some?: Maybe<LocationWhereInput>;
  locations_none?: Maybe<LocationWhereInput>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type TagsCreateInput = {
  data?: Maybe<TagCreateInput>;
};

export type TagsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<TagUpdateInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  account?: Maybe<Account>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  account?: Maybe<AccountRelateToOneInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  account?: Maybe<AccountRelateToOneInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  account?: Maybe<AccountWhereInput>;
  account_is_null?: Maybe<Scalars['Boolean']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  AccountCreateInput: AccountCreateInput;
  AccountOrderByInput: AccountOrderByInput;
  AccountRelateToOneInput: AccountRelateToOneInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  AccountUpdateInput: AccountUpdateInput;
  AccountWhereInput: AccountWhereInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccountsCreateInput: AccountsCreateInput;
  AccountsUpdateInput: AccountsUpdateInput;
  AuthenticatedItem: ResolversTypes['User'];
  CitiesCreateInput: CitiesCreateInput;
  CitiesUpdateInput: CitiesUpdateInput;
  City: ResolverTypeWrapper<City>;
  CityCreateInput: CityCreateInput;
  CityOrderByInput: CityOrderByInput;
  CityRelateToManyInput: CityRelateToManyInput;
  CityRelateToOneInput: CityRelateToOneInput;
  CityUpdateInput: CityUpdateInput;
  CityWhereInput: CityWhereInput;
  CityWhereUniqueInput: CityWhereUniqueInput;
  ContentBlock: ResolverTypeWrapper<ContentBlock>;
  ContentBlockCreateInput: ContentBlockCreateInput;
  ContentBlockOrderByInput: ContentBlockOrderByInput;
  ContentBlockUpdateInput: ContentBlockUpdateInput;
  ContentBlockWhereInput: ContentBlockWhereInput;
  ContentBlockWhereUniqueInput: ContentBlockWhereUniqueInput;
  ContentBlock_richText_DocumentField: ResolverTypeWrapper<ContentBlock_RichText_DocumentField>;
  ContentBlocksCreateInput: ContentBlocksCreateInput;
  ContentBlocksUpdateInput: ContentBlocksUpdateInput;
  CreateInitialUserInput: CreateInitialUserInput;
  Image: ResolverTypeWrapper<Image>;
  ImageCreateInput: ImageCreateInput;
  ImageOrderByInput: ImageOrderByInput;
  ImageRelateToManyInput: ImageRelateToManyInput;
  ImageUpdateInput: ImageUpdateInput;
  ImageWhereInput: ImageWhereInput;
  ImageWhereUniqueInput: ImageWhereUniqueInput;
  ImagesCreateInput: ImagesCreateInput;
  ImagesUpdateInput: ImagesUpdateInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KeystoneAdminMeta: ResolverTypeWrapper<KeystoneAdminMeta>;
  KeystoneAdminUIFieldMeta: ResolverTypeWrapper<KeystoneAdminUiFieldMeta>;
  KeystoneAdminUIFieldMetaCreateView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaCreateView>;
  KeystoneAdminUIFieldMetaCreateViewFieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
  KeystoneAdminUIFieldMetaItemView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaItemView>;
  KeystoneAdminUIFieldMetaItemViewFieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
  KeystoneAdminUIFieldMetaListView: ResolverTypeWrapper<KeystoneAdminUiFieldMetaListView>;
  KeystoneAdminUIFieldMetaListViewFieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
  KeystoneAdminUIListMeta: ResolverTypeWrapper<KeystoneAdminUiListMeta>;
  KeystoneAdminUISort: ResolverTypeWrapper<KeystoneAdminUiSort>;
  KeystoneAdminUISortDirection: KeystoneAdminUiSortDirection;
  KeystoneMeta: ResolverTypeWrapper<KeystoneMeta>;
  Location: ResolverTypeWrapper<Location>;
  LocationCreateInput: LocationCreateInput;
  LocationOrderByInput: LocationOrderByInput;
  LocationRelateToManyInput: LocationRelateToManyInput;
  LocationUpdateInput: LocationUpdateInput;
  LocationWhereInput: LocationWhereInput;
  LocationWhereUniqueInput: LocationWhereUniqueInput;
  Location_description_DocumentField: ResolverTypeWrapper<Location_Description_DocumentField>;
  LocationsCreateInput: LocationsCreateInput;
  LocationsUpdateInput: LocationsUpdateInput;
  Mutation: ResolverTypeWrapper<{}>;
  OrderDirection: OrderDirection;
  PasswordAuthErrorCode: PasswordAuthErrorCode;
  PasswordState: ResolverTypeWrapper<PasswordState>;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortAccountsBy: SortAccountsBy;
  SortCitiesBy: SortCitiesBy;
  SortContentBlocksBy: SortContentBlocksBy;
  SortImagesBy: SortImagesBy;
  SortLocationsBy: SortLocationsBy;
  SortStatesBy: SortStatesBy;
  SortTagsBy: SortTagsBy;
  SortUsersBy: SortUsersBy;
  State: ResolverTypeWrapper<State>;
  StateCreateInput: StateCreateInput;
  StateOrderByInput: StateOrderByInput;
  StateRelateToOneInput: StateRelateToOneInput;
  StateUpdateInput: StateUpdateInput;
  StateWhereInput: StateWhereInput;
  StateWhereUniqueInput: StateWhereUniqueInput;
  StatesCreateInput: StatesCreateInput;
  StatesUpdateInput: StatesUpdateInput;
  Tag: ResolverTypeWrapper<Tag>;
  TagCreateInput: TagCreateInput;
  TagOrderByInput: TagOrderByInput;
  TagRelateToManyInput: TagRelateToManyInput;
  TagUpdateInput: TagUpdateInput;
  TagWhereInput: TagWhereInput;
  TagWhereUniqueInput: TagWhereUniqueInput;
  TagsCreateInput: TagsCreateInput;
  TagsUpdateInput: TagsUpdateInput;
  User: ResolverTypeWrapper<User>;
  UserAuthenticationWithPasswordFailure: ResolverTypeWrapper<UserAuthenticationWithPasswordFailure>;
  UserAuthenticationWithPasswordResult: ResolversTypes['UserAuthenticationWithPasswordSuccess'] | ResolversTypes['UserAuthenticationWithPasswordFailure'];
  UserAuthenticationWithPasswordSuccess: ResolverTypeWrapper<UserAuthenticationWithPasswordSuccess>;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneInput: UserRelateToOneInput;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersCreateInput: UsersCreateInput;
  UsersUpdateInput: UsersUpdateInput;
  _QueryMeta: ResolverTypeWrapper<_QueryMeta>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  AccountCreateInput: AccountCreateInput;
  AccountOrderByInput: AccountOrderByInput;
  AccountRelateToOneInput: AccountRelateToOneInput;
  Boolean: Scalars['Boolean'];
  AccountUpdateInput: AccountUpdateInput;
  AccountWhereInput: AccountWhereInput;
  AccountWhereUniqueInput: AccountWhereUniqueInput;
  AccountsCreateInput: AccountsCreateInput;
  AccountsUpdateInput: AccountsUpdateInput;
  AuthenticatedItem: ResolversParentTypes['User'];
  CitiesCreateInput: CitiesCreateInput;
  CitiesUpdateInput: CitiesUpdateInput;
  City: City;
  CityCreateInput: CityCreateInput;
  CityOrderByInput: CityOrderByInput;
  CityRelateToManyInput: CityRelateToManyInput;
  CityRelateToOneInput: CityRelateToOneInput;
  CityUpdateInput: CityUpdateInput;
  CityWhereInput: CityWhereInput;
  CityWhereUniqueInput: CityWhereUniqueInput;
  ContentBlock: ContentBlock;
  ContentBlockCreateInput: ContentBlockCreateInput;
  ContentBlockOrderByInput: ContentBlockOrderByInput;
  ContentBlockUpdateInput: ContentBlockUpdateInput;
  ContentBlockWhereInput: ContentBlockWhereInput;
  ContentBlockWhereUniqueInput: ContentBlockWhereUniqueInput;
  ContentBlock_richText_DocumentField: ContentBlock_RichText_DocumentField;
  ContentBlocksCreateInput: ContentBlocksCreateInput;
  ContentBlocksUpdateInput: ContentBlocksUpdateInput;
  CreateInitialUserInput: CreateInitialUserInput;
  Image: Image;
  ImageCreateInput: ImageCreateInput;
  ImageOrderByInput: ImageOrderByInput;
  ImageRelateToManyInput: ImageRelateToManyInput;
  ImageUpdateInput: ImageUpdateInput;
  ImageWhereInput: ImageWhereInput;
  ImageWhereUniqueInput: ImageWhereUniqueInput;
  ImagesCreateInput: ImagesCreateInput;
  ImagesUpdateInput: ImagesUpdateInput;
  JSON: Scalars['JSON'];
  KeystoneAdminMeta: KeystoneAdminMeta;
  KeystoneAdminUIFieldMeta: KeystoneAdminUiFieldMeta;
  KeystoneAdminUIFieldMetaCreateView: KeystoneAdminUiFieldMetaCreateView;
  KeystoneAdminUIFieldMetaItemView: KeystoneAdminUiFieldMetaItemView;
  KeystoneAdminUIFieldMetaListView: KeystoneAdminUiFieldMetaListView;
  KeystoneAdminUIListMeta: KeystoneAdminUiListMeta;
  KeystoneAdminUISort: KeystoneAdminUiSort;
  KeystoneMeta: KeystoneMeta;
  Location: Location;
  LocationCreateInput: LocationCreateInput;
  LocationOrderByInput: LocationOrderByInput;
  LocationRelateToManyInput: LocationRelateToManyInput;
  LocationUpdateInput: LocationUpdateInput;
  LocationWhereInput: LocationWhereInput;
  LocationWhereUniqueInput: LocationWhereUniqueInput;
  Location_description_DocumentField: Location_Description_DocumentField;
  LocationsCreateInput: LocationsCreateInput;
  LocationsUpdateInput: LocationsUpdateInput;
  Mutation: {};
  PasswordState: PasswordState;
  Query: {};
  State: State;
  StateCreateInput: StateCreateInput;
  StateOrderByInput: StateOrderByInput;
  StateRelateToOneInput: StateRelateToOneInput;
  StateUpdateInput: StateUpdateInput;
  StateWhereInput: StateWhereInput;
  StateWhereUniqueInput: StateWhereUniqueInput;
  StatesCreateInput: StatesCreateInput;
  StatesUpdateInput: StatesUpdateInput;
  Tag: Tag;
  TagCreateInput: TagCreateInput;
  TagOrderByInput: TagOrderByInput;
  TagRelateToManyInput: TagRelateToManyInput;
  TagUpdateInput: TagUpdateInput;
  TagWhereInput: TagWhereInput;
  TagWhereUniqueInput: TagWhereUniqueInput;
  TagsCreateInput: TagsCreateInput;
  TagsUpdateInput: TagsUpdateInput;
  User: User;
  UserAuthenticationWithPasswordFailure: UserAuthenticationWithPasswordFailure;
  UserAuthenticationWithPasswordResult: ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] | ResolversParentTypes['UserAuthenticationWithPasswordFailure'];
  UserAuthenticationWithPasswordSuccess: UserAuthenticationWithPasswordSuccess;
  UserCreateInput: UserCreateInput;
  UserOrderByInput: UserOrderByInput;
  UserRelateToOneInput: UserRelateToOneInput;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  UsersCreateInput: UsersCreateInput;
  UsersUpdateInput: UsersUpdateInput;
  _QueryMeta: _QueryMeta;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticatedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatedItem'] = ResolversParentTypes['AuthenticatedItem']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cbsa?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  necta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, RequireFields<CityLocationsArgs, 'where' | 'orderBy' | 'skip'>>;
  _locationsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<City_LocationsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  locationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<CityLocationsCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentBlock'] = ResolversParentTypes['ContentBlock']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  column?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blockOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  richText?: Resolver<Maybe<ResolversTypes['ContentBlock_richText_DocumentField']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentBlock_RichText_DocumentFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentBlock_richText_DocumentField'] = ResolversParentTypes['ContentBlock_richText_DocumentField']> = {
  document?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ContentBlock_RichText_DocumentFieldDocumentArgs, 'hydrateRelationships'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, RequireFields<ImageLocationsArgs, 'where' | 'orderBy' | 'skip'>>;
  _locationsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Image_LocationsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  locationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<ImageLocationsCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeystoneAdminMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminMeta'] = ResolversParentTypes['KeystoneAdminMeta']> = {
  enableSignout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  enableSessionItem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lists?: Resolver<Array<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType>;
  list?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIListMeta']>, ParentType, ContextType, RequireFields<KeystoneAdminMetaListArgs, 'key'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMeta'] = ResolversParentTypes['KeystoneAdminUIFieldMeta']> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isOrderable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  fieldMeta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  viewsIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customViewsIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateView'], ParentType, ContextType>;
  listView?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListView'], ParentType, ContextType>;
  itemView?: Resolver<Maybe<ResolversTypes['KeystoneAdminUIFieldMetaItemView']>, ParentType, ContextType, RequireFields<KeystoneAdminUiFieldMetaItemViewArgs, 'id'>>;
  search?: Resolver<Maybe<ResolversTypes['QueryMode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaCreateView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaCreateViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaItemViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaItemView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaItemView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaItemViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiFieldMetaListViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIFieldMetaListView'] = ResolversParentTypes['KeystoneAdminUIFieldMetaListView']> = {
  fieldMode?: Resolver<ResolversTypes['KeystoneAdminUIFieldMetaListViewFieldMode'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiListMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUIListMeta'] = ResolversParentTypes['KeystoneAdminUIListMeta']> = {
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listQueryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hideCreate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hideDelete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  singular?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plural?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initialColumns?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  labelField?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['KeystoneAdminUIFieldMeta']>, ParentType, ContextType>;
  initialSort?: Resolver<Maybe<ResolversTypes['KeystoneAdminUISort']>, ParentType, ContextType>;
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneAdminUiSortResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneAdminUISort'] = ResolversParentTypes['KeystoneAdminUISort']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  direction?: Resolver<ResolversTypes['KeystoneAdminUISortDirection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeystoneMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeystoneMeta'] = ResolversParentTypes['KeystoneMeta']> = {
  adminMeta?: Resolver<ResolversTypes['KeystoneAdminMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['Location_description_DocumentField']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType, RequireFields<LocationTagsArgs, 'where' | 'orderBy' | 'skip'>>;
  _tagsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Location_TagsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  tagsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<LocationTagsCountArgs, 'where'>>;
  images?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType, RequireFields<LocationImagesArgs, 'where' | 'orderBy' | 'skip'>>;
  _imagesMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Location_ImagesMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  imagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<LocationImagesCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Location_Description_DocumentFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location_description_DocumentField'] = ResolversParentTypes['Location_description_DocumentField']> = {
  document?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<Location_Description_DocumentFieldDocumentArgs, 'hydrateRelationships'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, never>>;
  createUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationCreateUsersArgs, never>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>;
  updateUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, never>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, never>>;
  createAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationCreateAccountArgs, never>>;
  createAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType, RequireFields<MutationCreateAccountsArgs, never>>;
  updateAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationUpdateAccountArgs, 'id'>>;
  updateAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType, RequireFields<MutationUpdateAccountsArgs, never>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<MutationDeleteAccountArgs, 'id'>>;
  deleteAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType, RequireFields<MutationDeleteAccountsArgs, never>>;
  createTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationCreateTagArgs, never>>;
  createTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<MutationCreateTagsArgs, never>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id'>>;
  updateTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<MutationUpdateTagsArgs, never>>;
  deleteTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>;
  deleteTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<MutationDeleteTagsArgs, never>>;
  createLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationCreateLocationArgs, never>>;
  createLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, RequireFields<MutationCreateLocationsArgs, never>>;
  updateLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationUpdateLocationArgs, 'id'>>;
  updateLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, RequireFields<MutationUpdateLocationsArgs, never>>;
  deleteLocation?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<MutationDeleteLocationArgs, 'id'>>;
  deleteLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType, RequireFields<MutationDeleteLocationsArgs, never>>;
  createState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<MutationCreateStateArgs, never>>;
  createStates?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType, RequireFields<MutationCreateStatesArgs, never>>;
  updateState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<MutationUpdateStateArgs, 'id'>>;
  updateStates?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType, RequireFields<MutationUpdateStatesArgs, never>>;
  deleteState?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<MutationDeleteStateArgs, 'id'>>;
  deleteStates?: Resolver<Maybe<Array<Maybe<ResolversTypes['State']>>>, ParentType, ContextType, RequireFields<MutationDeleteStatesArgs, never>>;
  createCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationCreateCityArgs, never>>;
  createCities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<MutationCreateCitiesArgs, never>>;
  updateCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationUpdateCityArgs, 'id'>>;
  updateCities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<MutationUpdateCitiesArgs, never>>;
  deleteCity?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<MutationDeleteCityArgs, 'id'>>;
  deleteCities?: Resolver<Maybe<Array<Maybe<ResolversTypes['City']>>>, ParentType, ContextType, RequireFields<MutationDeleteCitiesArgs, never>>;
  createImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationCreateImageArgs, never>>;
  createImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, RequireFields<MutationCreateImagesArgs, never>>;
  updateImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationUpdateImageArgs, 'id'>>;
  updateImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, RequireFields<MutationUpdateImagesArgs, never>>;
  deleteImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<MutationDeleteImageArgs, 'id'>>;
  deleteImages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Image']>>>, ParentType, ContextType, RequireFields<MutationDeleteImagesArgs, never>>;
  createContentBlock?: Resolver<Maybe<ResolversTypes['ContentBlock']>, ParentType, ContextType, RequireFields<MutationCreateContentBlockArgs, never>>;
  createContentBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContentBlock']>>>, ParentType, ContextType, RequireFields<MutationCreateContentBlocksArgs, never>>;
  updateContentBlock?: Resolver<Maybe<ResolversTypes['ContentBlock']>, ParentType, ContextType, RequireFields<MutationUpdateContentBlockArgs, 'id'>>;
  updateContentBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContentBlock']>>>, ParentType, ContextType, RequireFields<MutationUpdateContentBlocksArgs, never>>;
  deleteContentBlock?: Resolver<Maybe<ResolversTypes['ContentBlock']>, ParentType, ContextType, RequireFields<MutationDeleteContentBlockArgs, 'id'>>;
  deleteContentBlocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContentBlock']>>>, ParentType, ContextType, RequireFields<MutationDeleteContentBlocksArgs, never>>;
  authenticateUserWithPassword?: Resolver<ResolversTypes['UserAuthenticationWithPasswordResult'], ParentType, ContextType, RequireFields<MutationAuthenticateUserWithPasswordArgs, 'email' | 'password'>>;
  createInitialUser?: Resolver<ResolversTypes['UserAuthenticationWithPasswordSuccess'], ParentType, ContextType, RequireFields<MutationCreateInitialUserArgs, 'data'>>;
  endSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type PasswordStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordState'] = ResolversParentTypes['PasswordState']> = {
  isSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allUsers?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, 'where' | 'orderBy' | 'skip'>>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  _allUsersMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllUsersMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  usersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryUsersCountArgs, 'where'>>;
  allAccounts?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType, RequireFields<QueryAllAccountsArgs, 'where' | 'orderBy' | 'skip'>>;
  Account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'where'>>;
  _allAccountsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllAccountsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  accountsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryAccountsCountArgs, 'where'>>;
  allTags?: Resolver<Maybe<Array<ResolversTypes['Tag']>>, ParentType, ContextType, RequireFields<QueryAllTagsArgs, 'where' | 'orderBy' | 'skip'>>;
  Tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'where'>>;
  _allTagsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllTagsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  tagsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryTagsCountArgs, 'where'>>;
  allLocations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, RequireFields<QueryAllLocationsArgs, 'where' | 'orderBy' | 'skip'>>;
  Location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, 'where'>>;
  _allLocationsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllLocationsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  locationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryLocationsCountArgs, 'where'>>;
  allStates?: Resolver<Maybe<Array<ResolversTypes['State']>>, ParentType, ContextType, RequireFields<QueryAllStatesArgs, 'where' | 'orderBy' | 'skip'>>;
  State?: Resolver<Maybe<ResolversTypes['State']>, ParentType, ContextType, RequireFields<QueryStateArgs, 'where'>>;
  _allStatesMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllStatesMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  statesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryStatesCountArgs, 'where'>>;
  allCities?: Resolver<Maybe<Array<ResolversTypes['City']>>, ParentType, ContextType, RequireFields<QueryAllCitiesArgs, 'where' | 'orderBy' | 'skip'>>;
  City?: Resolver<Maybe<ResolversTypes['City']>, ParentType, ContextType, RequireFields<QueryCityArgs, 'where'>>;
  _allCitiesMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllCitiesMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  citiesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryCitiesCountArgs, 'where'>>;
  allImages?: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType, RequireFields<QueryAllImagesArgs, 'where' | 'orderBy' | 'skip'>>;
  Image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<QueryImageArgs, 'where'>>;
  _allImagesMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllImagesMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  imagesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryImagesCountArgs, 'where'>>;
  allContentBlocks?: Resolver<Maybe<Array<ResolversTypes['ContentBlock']>>, ParentType, ContextType, RequireFields<QueryAllContentBlocksArgs, 'where' | 'orderBy' | 'skip'>>;
  ContentBlock?: Resolver<Maybe<ResolversTypes['ContentBlock']>, ParentType, ContextType, RequireFields<QueryContentBlockArgs, 'where'>>;
  _allContentBlocksMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Query_AllContentBlocksMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  contentBlocksCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<QueryContentBlocksCountArgs, 'where'>>;
  authenticatedItem?: Resolver<Maybe<ResolversTypes['AuthenticatedItem']>, ParentType, ContextType>;
  keystone?: Resolver<ResolversTypes['KeystoneMeta'], ParentType, ContextType>;
};

export type StateResolvers<ContextType = any, ParentType extends ResolversParentTypes['State'] = ResolversParentTypes['State']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  largestCity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  areaSqMi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  landAreaSqMi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  waterAreaSqMi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, RequireFields<StateLocationsArgs, 'where' | 'orderBy' | 'skip'>>;
  _locationsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<State_LocationsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  locationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<StateLocationsCountArgs, 'where'>>;
  city?: Resolver<Maybe<Array<ResolversTypes['City']>>, ParentType, ContextType, RequireFields<StateCityArgs, 'where' | 'orderBy' | 'skip'>>;
  _cityMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<State_CityMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  cityCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<StateCityCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['Location']>>, ParentType, ContextType, RequireFields<TagLocationsArgs, 'where' | 'orderBy' | 'skip'>>;
  _locationsMeta?: Resolver<Maybe<ResolversTypes['_QueryMeta']>, ParentType, ContextType, RequireFields<Tag_LocationsMetaArgs, 'where' | 'orderBy' | 'skip'>>;
  locationsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<TagLocationsCountArgs, 'where'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['PasswordState']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordFailureResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordFailure'] = ResolversParentTypes['UserAuthenticationWithPasswordFailure']> = {
  code?: Resolver<ResolversTypes['PasswordAuthErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordResult'] = ResolversParentTypes['UserAuthenticationWithPasswordResult']> = {
  __resolveType: TypeResolveFn<'UserAuthenticationWithPasswordSuccess' | 'UserAuthenticationWithPasswordFailure', ParentType, ContextType>;
};

export type UserAuthenticationWithPasswordSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAuthenticationWithPasswordSuccess'] = ResolversParentTypes['UserAuthenticationWithPasswordSuccess']> = {
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _QueryMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['_QueryMeta'] = ResolversParentTypes['_QueryMeta']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AuthenticatedItem?: AuthenticatedItemResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  ContentBlock?: ContentBlockResolvers<ContextType>;
  ContentBlock_richText_DocumentField?: ContentBlock_RichText_DocumentFieldResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KeystoneAdminMeta?: KeystoneAdminMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMeta?: KeystoneAdminUiFieldMetaResolvers<ContextType>;
  KeystoneAdminUIFieldMetaCreateView?: KeystoneAdminUiFieldMetaCreateViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaItemView?: KeystoneAdminUiFieldMetaItemViewResolvers<ContextType>;
  KeystoneAdminUIFieldMetaListView?: KeystoneAdminUiFieldMetaListViewResolvers<ContextType>;
  KeystoneAdminUIListMeta?: KeystoneAdminUiListMetaResolvers<ContextType>;
  KeystoneAdminUISort?: KeystoneAdminUiSortResolvers<ContextType>;
  KeystoneMeta?: KeystoneMetaResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Location_description_DocumentField?: Location_Description_DocumentFieldResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PasswordState?: PasswordStateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  State?: StateResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAuthenticationWithPasswordFailure?: UserAuthenticationWithPasswordFailureResolvers<ContextType>;
  UserAuthenticationWithPasswordResult?: UserAuthenticationWithPasswordResultResolvers<ContextType>;
  UserAuthenticationWithPasswordSuccess?: UserAuthenticationWithPasswordSuccessResolvers<ContextType>;
  _QueryMeta?: _QueryMetaResolvers<ContextType>;
};


export type AccountDetailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type AccountDetailQuery = { __typename?: 'Query', allAccounts?: Maybe<Array<{ __typename?: 'Account', id: string, firstName?: Maybe<string>, lastName?: Maybe<string>, phone?: Maybe<string>, address1?: Maybe<string>, address2?: Maybe<string>, city?: Maybe<string>, zip?: Maybe<number>, user?: Maybe<{ __typename?: 'User', id: string, name?: Maybe<string>, email?: Maybe<string> }>, state?: Maybe<{ __typename?: 'State', id: string, code?: Maybe<string>, name?: Maybe<string>, capital?: Maybe<string> }> }>> };

export type UpdateAccountMutationVariables = Exact<{
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zip: Scalars['Int'];
  stateCode: Scalars['String'];
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount?: Maybe<{ __typename?: 'Account', id: string, firstName?: Maybe<string>, lastName?: Maybe<string>, phone?: Maybe<string>, address1?: Maybe<string>, address2?: Maybe<string>, city?: Maybe<string>, zip?: Maybe<number>, user?: Maybe<{ __typename?: 'User', id: string, name?: Maybe<string>, email?: Maybe<string> }>, state?: Maybe<{ __typename?: 'State', id: string, code?: Maybe<string>, name?: Maybe<string> }> }> };

export type CreateAccountMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zip: Scalars['Int'];
  stateCode: Scalars['String'];
  userName: Scalars['String'];
  userEmail: Scalars['String'];
  userPassword: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: Maybe<{ __typename?: 'Account', id: string, firstName?: Maybe<string>, lastName?: Maybe<string>, phone?: Maybe<string>, address1?: Maybe<string>, address2?: Maybe<string>, city?: Maybe<string>, zip?: Maybe<number>, user?: Maybe<{ __typename?: 'User', id: string, name?: Maybe<string>, email?: Maybe<string> }>, state?: Maybe<{ __typename?: 'State', id: string, code?: Maybe<string>, name?: Maybe<string> }> }> };

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', allLocations?: Maybe<Array<{ __typename?: 'Location', id: string, name?: Maybe<string>, shortDescription?: Maybe<string>, state?: Maybe<{ __typename?: 'State', id: string, code?: Maybe<string>, name?: Maybe<string> }>, city?: Maybe<{ __typename?: 'City', id: string, name?: Maybe<string>, fipsCode?: Maybe<string> }>, images?: Maybe<Array<{ __typename?: 'Image', filename?: Maybe<string> }>> }>> };

export type LocationDetailQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LocationDetailQuery = { __typename?: 'Query', allLocations?: Maybe<Array<{ __typename?: 'Location', id: string, name?: Maybe<string>, shortDescription?: Maybe<string>, state?: Maybe<{ __typename?: 'State', id: string, code?: Maybe<string>, name?: Maybe<string>, capital?: Maybe<string> }>, city?: Maybe<{ __typename?: 'City', id: string, name?: Maybe<string>, fipsCode?: Maybe<string> }>, images?: Maybe<Array<{ __typename?: 'Image', filename?: Maybe<string> }>>, description?: Maybe<{ __typename?: 'Location_description_DocumentField', document: any }> }>> };

export type ContentBlockQueryVariables = Exact<{
  page: Scalars['String'];
}>;


export type ContentBlockQuery = { __typename?: 'Query', allContentBlocks?: Maybe<Array<{ __typename?: 'ContentBlock', id: string, page?: Maybe<string>, column?: Maybe<number>, blockOrder?: Maybe<number>, richText?: Maybe<{ __typename?: 'ContentBlock_richText_DocumentField', document: any }> }>> };


export const AccountDetailDocument = gql`
    query AccountDetail($email: String!) {
  allAccounts(where: {user: {email: $email}}) {
    id
    user {
      id
      name
      email
    }
    firstName
    lastName
    phone
    address1
    address2
    city
    state {
      id
      code
      name
      capital
    }
    zip
  }
}
    `;

/**
 * __useAccountDetailQuery__
 *
 * To run a query within a React component, call `useAccountDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDetailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAccountDetailQuery(baseOptions: Apollo.QueryHookOptions<AccountDetailQuery, AccountDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDetailQuery, AccountDetailQueryVariables>(AccountDetailDocument, options);
      }
export function useAccountDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDetailQuery, AccountDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDetailQuery, AccountDetailQueryVariables>(AccountDetailDocument, options);
        }
export type AccountDetailQueryHookResult = ReturnType<typeof useAccountDetailQuery>;
export type AccountDetailLazyQueryHookResult = ReturnType<typeof useAccountDetailLazyQuery>;
export type AccountDetailQueryResult = Apollo.QueryResult<AccountDetailQuery, AccountDetailQueryVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($id: ID!, $firstName: String!, $lastName: String!, $phone: String!, $address1: String!, $address2: String, $city: String!, $zip: Int!, $stateCode: String!) {
  updateAccount(
    id: $id
    data: {firstName: $firstName, lastName: $lastName, phone: $phone, address1: $address1, address2: $address2, city: $city, zip: $zip, state: {connect: {code: $stateCode}}}
  ) {
    id
    user {
      id
      name
      email
    }
    firstName
    lastName
    phone
    address1
    address2
    city
    state {
      id
      code
      name
    }
    zip
  }
}
    `;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phone: // value for 'phone'
 *      address1: // value for 'address1'
 *      address2: // value for 'address2'
 *      city: // value for 'city'
 *      zip: // value for 'zip'
 *      stateCode: // value for 'stateCode'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, options);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($firstName: String!, $lastName: String!, $phone: String!, $address1: String!, $address2: String, $city: String!, $zip: Int!, $stateCode: String!, $userName: String!, $userEmail: String!, $userPassword: String!) {
  createAccount(
    data: {firstName: $firstName, lastName: $lastName, phone: $phone, address1: $address1, address2: $address2, city: $city, zip: $zip, user: {create: {name: $userName, email: $userEmail, password: $userPassword}}, state: {connect: {code: $stateCode}}}
  ) {
    id
    user {
      id
      name
      email
    }
    firstName
    lastName
    phone
    address1
    address2
    city
    state {
      id
      code
      name
    }
    zip
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phone: // value for 'phone'
 *      address1: // value for 'address1'
 *      address2: // value for 'address2'
 *      city: // value for 'city'
 *      zip: // value for 'zip'
 *      stateCode: // value for 'stateCode'
 *      userName: // value for 'userName'
 *      userEmail: // value for 'userEmail'
 *      userPassword: // value for 'userPassword'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const LocationsDocument = gql`
    query Locations {
  allLocations {
    id
    name
    shortDescription
    state {
      id
      code
      name
    }
    city {
      id
      name
      fipsCode
    }
    images {
      filename
    }
  }
}
    `;

/**
 * __useLocationsQuery__
 *
 * To run a query within a React component, call `useLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocationsQuery(baseOptions?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
      }
export function useLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
        }
export type LocationsQueryHookResult = ReturnType<typeof useLocationsQuery>;
export type LocationsLazyQueryHookResult = ReturnType<typeof useLocationsLazyQuery>;
export type LocationsQueryResult = Apollo.QueryResult<LocationsQuery, LocationsQueryVariables>;
export const LocationDetailDocument = gql`
    query LocationDetail($id: ID!) {
  allLocations(where: {id: $id}) {
    id
    name
    shortDescription
    state {
      id
      code
      name
      capital
    }
    city {
      id
      name
      fipsCode
    }
    images {
      filename
    }
    description {
      document
    }
  }
}
    `;

/**
 * __useLocationDetailQuery__
 *
 * To run a query within a React component, call `useLocationDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLocationDetailQuery(baseOptions: Apollo.QueryHookOptions<LocationDetailQuery, LocationDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationDetailQuery, LocationDetailQueryVariables>(LocationDetailDocument, options);
      }
export function useLocationDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationDetailQuery, LocationDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationDetailQuery, LocationDetailQueryVariables>(LocationDetailDocument, options);
        }
export type LocationDetailQueryHookResult = ReturnType<typeof useLocationDetailQuery>;
export type LocationDetailLazyQueryHookResult = ReturnType<typeof useLocationDetailLazyQuery>;
export type LocationDetailQueryResult = Apollo.QueryResult<LocationDetailQuery, LocationDetailQueryVariables>;
export const ContentBlockDocument = gql`
    query ContentBlock($page: String!) {
  allContentBlocks(
    where: {AND: [{page: $page}, {active: true}]}
    orderBy: {blockOrder: asc}
  ) {
    id
    page
    column
    blockOrder
    richText {
      document
    }
  }
}
    `;

/**
 * __useContentBlockQuery__
 *
 * To run a query within a React component, call `useContentBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentBlockQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useContentBlockQuery(baseOptions: Apollo.QueryHookOptions<ContentBlockQuery, ContentBlockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContentBlockQuery, ContentBlockQueryVariables>(ContentBlockDocument, options);
      }
export function useContentBlockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBlockQuery, ContentBlockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContentBlockQuery, ContentBlockQueryVariables>(ContentBlockDocument, options);
        }
export type ContentBlockQueryHookResult = ReturnType<typeof useContentBlockQuery>;
export type ContentBlockLazyQueryHookResult = ReturnType<typeof useContentBlockLazyQuery>;
export type ContentBlockQueryResult = Apollo.QueryResult<ContentBlockQuery, ContentBlockQueryVariables>;