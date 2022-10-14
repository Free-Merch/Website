/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFileEntityResponse>;
  logoBgColor?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  data: Array<BrandEntity>;
  meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  logoBgColor?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  description?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  logoBgColor?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  active: Scalars['Boolean'];
  brand?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  merchandise?: Maybe<UploadFileRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  questions?: Maybe<ComponentQuestionsQuestions>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CampaignMerchandiseArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CampaignEntity = {
  __typename?: 'CampaignEntity';
  attributes?: Maybe<Campaign>;
  id?: Maybe<Scalars['ID']>;
};

export type CampaignEntityResponse = {
  __typename?: 'CampaignEntityResponse';
  data?: Maybe<CampaignEntity>;
};

export type CampaignEntityResponseCollection = {
  __typename?: 'CampaignEntityResponseCollection';
  data: Array<CampaignEntity>;
  meta: ResponseCollectionMeta;
};

export type CampaignFiltersInput = {
  active?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CampaignFiltersInput>>>;
  brand?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  identifier?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CampaignFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CampaignFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  questions?: InputMaybe<ComponentQuestionsQuestionsFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CampaignInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  merchandise?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  questions?: InputMaybe<ComponentQuestionsQuestionsInput>;
};

export type ComponentBrandBrand = {
  __typename?: 'ComponentBrandBrand';
  id: Scalars['ID'];
};

export type ComponentFaqFaq = {
  __typename?: 'ComponentFaqFaq';
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
};

export type ComponentFaqFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFaqFaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFaqFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFaqFaqFiltersInput>>>;
  question?: InputMaybe<StringFilterInput>;
};

export type ComponentFaqFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type ComponentQuestionTypeImage = {
  __typename?: 'ComponentQuestionTypeImage';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  samples?: Maybe<UploadFileRelationResponseCollection>;
  title: Scalars['String'];
  titleLink?: Maybe<Scalars['String']>;
  validation?: Maybe<Scalars['String']>;
};


export type ComponentQuestionTypeImageSamplesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentQuestionTypeImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeImageFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentQuestionTypeImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeImageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  titleLink?: InputMaybe<StringFilterInput>;
  validation?: InputMaybe<StringFilterInput>;
};

export type ComponentQuestionTypeImageInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  samples?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title?: InputMaybe<Scalars['String']>;
  titleLink?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['String']>;
};

export type ComponentQuestionTypeRadio = {
  __typename?: 'ComponentQuestionTypeRadio';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  radioOptions?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
  titleLink?: Maybe<Scalars['String']>;
};

export type ComponentQuestionTypeRadioFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeRadioFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentQuestionTypeRadioFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeRadioFiltersInput>>>;
  radioOptions?: InputMaybe<JsonFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  titleLink?: InputMaybe<StringFilterInput>;
};

export type ComponentQuestionTypeRadioInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  radioOptions?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
  titleLink?: InputMaybe<Scalars['String']>;
};

export type ComponentQuestionTypeText = {
  __typename?: 'ComponentQuestionTypeText';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  index?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleLink?: Maybe<Scalars['String']>;
  validation?: Maybe<Scalars['String']>;
};

export type ComponentQuestionTypeTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeTextFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  index?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentQuestionTypeTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeTextFiltersInput>>>;
  placeholder?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  titleLink?: InputMaybe<StringFilterInput>;
  validation?: InputMaybe<StringFilterInput>;
};

export type ComponentQuestionTypeTextInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  index?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  placeholder?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  titleLink?: InputMaybe<Scalars['String']>;
  validation?: InputMaybe<Scalars['String']>;
};

export type ComponentQuestionsQuestions = {
  __typename?: 'ComponentQuestionsQuestions';
  id: Scalars['ID'];
  image?: Maybe<Array<Maybe<ComponentQuestionTypeImage>>>;
  radio?: Maybe<Array<Maybe<ComponentQuestionTypeRadio>>>;
  text?: Maybe<Array<Maybe<ComponentQuestionTypeText>>>;
};


export type ComponentQuestionsQuestionsImageArgs = {
  filters?: InputMaybe<ComponentQuestionTypeImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentQuestionsQuestionsRadioArgs = {
  filters?: InputMaybe<ComponentQuestionTypeRadioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentQuestionsQuestionsTextArgs = {
  filters?: InputMaybe<ComponentQuestionTypeTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentQuestionsQuestionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentQuestionsQuestionsFiltersInput>>>;
  image?: InputMaybe<ComponentQuestionTypeImageFiltersInput>;
  not?: InputMaybe<ComponentQuestionsQuestionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentQuestionsQuestionsFiltersInput>>>;
  radio?: InputMaybe<ComponentQuestionTypeRadioFiltersInput>;
  text?: InputMaybe<ComponentQuestionTypeTextFiltersInput>;
};

export type ComponentQuestionsQuestionsInput = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeImageInput>>>;
  radio?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeRadioInput>>>;
  text?: InputMaybe<Array<InputMaybe<ComponentQuestionTypeTextInput>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Brand | Campaign | ComponentBrandBrand | ComponentFaqFaq | ComponentQuestionTypeImage | ComponentQuestionTypeRadio | ComponentQuestionTypeText | ComponentQuestionsQuestions | HomePage | I18NLocale | Merch | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  FAQ?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  Gallery: UploadFileRelationResponseCollection;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomePageFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomePageGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  FAQ?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  Gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Merch = {
  __typename?: 'Merch';
  about: Scalars['String'];
  brand: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Scalars['JSON']>;
  logo: UploadFileEntityResponse;
  logoBgColor: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MerchEntity = {
  __typename?: 'MerchEntity';
  attributes?: Maybe<Merch>;
  id?: Maybe<Scalars['ID']>;
};

export type MerchEntityResponse = {
  __typename?: 'MerchEntityResponse';
  data?: Maybe<MerchEntity>;
};

export type MerchEntityResponseCollection = {
  __typename?: 'MerchEntityResponseCollection';
  data: Array<MerchEntity>;
  meta: ResponseCollectionMeta;
};

export type MerchFiltersInput = {
  about?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MerchFiltersInput>>>;
  brand?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<JsonFilterInput>;
  logoBgColor?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MerchFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MerchFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MerchInput = {
  about?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['JSON']>;
  logo?: InputMaybe<Scalars['ID']>;
  logoBgColor?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBrand?: Maybe<BrandEntityResponse>;
  createCampaign?: Maybe<CampaignEntityResponse>;
  createMerch?: Maybe<MerchEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteCampaign?: Maybe<CampaignEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteMerch?: Maybe<MerchEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateCampaign?: Maybe<CampaignEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateMerch?: Maybe<MerchEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
};


export type MutationCreateCampaignArgs = {
  data: CampaignInput;
};


export type MutationCreateMerchArgs = {
  data: MerchInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCampaignArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMerchArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars['ID'];
};


export type MutationUpdateCampaignArgs = {
  data: CampaignInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateMerchArgs = {
  data: MerchInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<BrandEntityResponse>;
  brands?: Maybe<BrandEntityResponseCollection>;
  campaign?: Maybe<CampaignEntityResponse>;
  campaigns?: Maybe<CampaignEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  merch?: Maybe<MerchEntityResponse>;
  merches?: Maybe<MerchEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCampaignArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCampaignsArgs = {
  filters?: InputMaybe<CampaignFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMerchArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMerchesArgs = {
  filters?: InputMaybe<MerchFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
