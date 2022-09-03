import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Character = Node & {
  __typename?: 'Character';
  agility: Scalars['Int'];
  avatarURL: Scalars['String'];
  characterDescription: Scalars['String'];
  charisma: Scalars['Int'];
  connection: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  disposal: Scalars['Int'];
  /** Get the document in other stages */
  documentInStages: Array<Character>;
  force: Scalars['Int'];
  /** List of Character versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  inteligence: Scalars['Int'];
  inventory: Scalars['String'];
  level: Scalars['Int'];
  money: Scalars['String'];
  motivation: Scalars['String'];
  name: Scalars['String'];
  origin: Scalars['String'];
  password: Scalars['String'];
  perception: Scalars['Int'];
  personality: Scalars['String'];
  physical: Scalars['String'];
  player: Scalars['String'];
  points: Scalars['Int'];
  problem: Scalars['String'];
  psychological: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  resistance: Scalars['Int'];
  route: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  skills: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  xp: Scalars['Int'];
};


export type CharacterCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CharacterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CharacterPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CharacterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CharacterUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CharacterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CharacterWhereUniqueInput;
};

/** A connection to a list of items. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CharacterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CharacterCreateInput = {
  agility: Scalars['Int'];
  avatarURL: Scalars['String'];
  characterDescription: Scalars['String'];
  charisma: Scalars['Int'];
  connection: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disposal: Scalars['Int'];
  force: Scalars['Int'];
  inteligence: Scalars['Int'];
  inventory: Scalars['String'];
  level: Scalars['Int'];
  money: Scalars['String'];
  motivation: Scalars['String'];
  name: Scalars['String'];
  origin: Scalars['String'];
  password: Scalars['String'];
  perception: Scalars['Int'];
  personality: Scalars['String'];
  physical: Scalars['String'];
  player: Scalars['String'];
  points: Scalars['Int'];
  problem: Scalars['String'];
  psychological: Scalars['String'];
  resistance: Scalars['Int'];
  route: Scalars['String'];
  skills: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  xp: Scalars['Int'];
};

export type CharacterCreateManyInlineInput = {
  /** Connect multiple existing Character documents */
  connect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Create and connect multiple existing Character documents */
  create?: InputMaybe<Array<CharacterCreateInput>>;
};

export type CharacterCreateOneInlineInput = {
  /** Connect one existing Character document */
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  /** Create and connect one Character document */
  create?: InputMaybe<CharacterCreateInput>;
};

/** An edge in a connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Character;
};

/** Identifies documents */
export type CharacterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  agility?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  agility_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  agility_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  agility_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  agility_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  agility_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  agility_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  agility_not_in?: InputMaybe<Array<Scalars['Int']>>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  characterDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  characterDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  characterDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  characterDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  characterDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  characterDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  characterDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  characterDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  characterDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  characterDescription_starts_with?: InputMaybe<Scalars['String']>;
  charisma?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  charisma_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  charisma_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  charisma_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  charisma_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  charisma_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  charisma_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  charisma_not_in?: InputMaybe<Array<Scalars['Int']>>;
  connection?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  connection_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  connection_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  connection_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  connection_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  connection_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  connection_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  connection_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  connection_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  connection_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  disposal?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  disposal_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  disposal_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  disposal_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  disposal_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  disposal_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  disposal_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  disposal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  force?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  force_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  force_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  force_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  force_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  force_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  force_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  force_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  inteligence?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  inteligence_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  inteligence_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  inteligence_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  inteligence_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  inteligence_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  inteligence_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  inteligence_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inventory?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  inventory_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  inventory_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  inventory_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  inventory_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  inventory_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  inventory_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  inventory_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  inventory_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  inventory_starts_with?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  level_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  level_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  level_not_in?: InputMaybe<Array<Scalars['Int']>>;
  money?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  money_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  money_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  money_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  money_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  money_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  money_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  money_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  money_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  money_starts_with?: InputMaybe<Scalars['String']>;
  motivation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  motivation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  motivation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motivation_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  motivation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  motivation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  motivation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motivation_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motivation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  motivation_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  perception?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  perception_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  perception_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  perception_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  perception_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  perception_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  perception_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  perception_not_in?: InputMaybe<Array<Scalars['Int']>>;
  personality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  personality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  personality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  personality_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  personality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  personality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  personality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  personality_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  personality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  personality_starts_with?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  physical_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  physical_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  physical_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  physical_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  physical_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  physical_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  physical_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  physical_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  physical_starts_with?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  player_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  player_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  player_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  player_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  player_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  player_starts_with?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  points_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  points_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  points_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  points_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  points_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  points_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  points_not_in?: InputMaybe<Array<Scalars['Int']>>;
  problem?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  problem_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  problem_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  problem_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  problem_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  problem_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  problem_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  problem_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  problem_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  problem_starts_with?: InputMaybe<Scalars['String']>;
  psychological?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  psychological_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  psychological_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  psychological_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  psychological_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  psychological_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  psychological_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  psychological_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  psychological_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  psychological_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resistance?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  resistance_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  resistance_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  resistance_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  resistance_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  resistance_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  resistance_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  resistance_not_in?: InputMaybe<Array<Scalars['Int']>>;
  route?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  route_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  route_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  route_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  route_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  route_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  route_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  route_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  route_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  route_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  skills?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  skills_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  skills_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  skills_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  skills_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  skills_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  skills_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  skills_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  skills_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  skills_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  xp?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  xp_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  xp_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  xp_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  xp_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  xp_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  xp_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  xp_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum CharacterOrderByInput {
  AgilityAsc = 'agility_ASC',
  AgilityDesc = 'agility_DESC',
  AvatarUrlAsc = 'avatarURL_ASC',
  AvatarUrlDesc = 'avatarURL_DESC',
  CharacterDescriptionAsc = 'characterDescription_ASC',
  CharacterDescriptionDesc = 'characterDescription_DESC',
  CharismaAsc = 'charisma_ASC',
  CharismaDesc = 'charisma_DESC',
  ConnectionAsc = 'connection_ASC',
  ConnectionDesc = 'connection_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DisposalAsc = 'disposal_ASC',
  DisposalDesc = 'disposal_DESC',
  ForceAsc = 'force_ASC',
  ForceDesc = 'force_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InteligenceAsc = 'inteligence_ASC',
  InteligenceDesc = 'inteligence_DESC',
  InventoryAsc = 'inventory_ASC',
  InventoryDesc = 'inventory_DESC',
  LevelAsc = 'level_ASC',
  LevelDesc = 'level_DESC',
  MoneyAsc = 'money_ASC',
  MoneyDesc = 'money_DESC',
  MotivationAsc = 'motivation_ASC',
  MotivationDesc = 'motivation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  PerceptionAsc = 'perception_ASC',
  PerceptionDesc = 'perception_DESC',
  PersonalityAsc = 'personality_ASC',
  PersonalityDesc = 'personality_DESC',
  PhysicalAsc = 'physical_ASC',
  PhysicalDesc = 'physical_DESC',
  PlayerAsc = 'player_ASC',
  PlayerDesc = 'player_DESC',
  PointsAsc = 'points_ASC',
  PointsDesc = 'points_DESC',
  ProblemAsc = 'problem_ASC',
  ProblemDesc = 'problem_DESC',
  PsychologicalAsc = 'psychological_ASC',
  PsychologicalDesc = 'psychological_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ResistanceAsc = 'resistance_ASC',
  ResistanceDesc = 'resistance_DESC',
  RouteAsc = 'route_ASC',
  RouteDesc = 'route_DESC',
  SkillsAsc = 'skills_ASC',
  SkillsDesc = 'skills_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  XpAsc = 'xp_ASC',
  XpDesc = 'xp_DESC'
}

export type CharacterUpdateInput = {
  agility?: InputMaybe<Scalars['Int']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  characterDescription?: InputMaybe<Scalars['String']>;
  charisma?: InputMaybe<Scalars['Int']>;
  connection?: InputMaybe<Scalars['String']>;
  disposal?: InputMaybe<Scalars['Int']>;
  force?: InputMaybe<Scalars['Int']>;
  inteligence?: InputMaybe<Scalars['Int']>;
  inventory?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['String']>;
  motivation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  perception?: InputMaybe<Scalars['Int']>;
  personality?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  problem?: InputMaybe<Scalars['String']>;
  psychological?: InputMaybe<Scalars['String']>;
  resistance?: InputMaybe<Scalars['Int']>;
  route?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  xp?: InputMaybe<Scalars['Int']>;
};

export type CharacterUpdateManyInlineInput = {
  /** Connect multiple existing Character documents */
  connect?: InputMaybe<Array<CharacterConnectInput>>;
  /** Create and connect multiple Character documents */
  create?: InputMaybe<Array<CharacterCreateInput>>;
  /** Delete multiple Character documents */
  delete?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Disconnect multiple Character documents */
  disconnect?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Character documents */
  set?: InputMaybe<Array<CharacterWhereUniqueInput>>;
  /** Update multiple Character documents */
  update?: InputMaybe<Array<CharacterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Character documents */
  upsert?: InputMaybe<Array<CharacterUpsertWithNestedWhereUniqueInput>>;
};

export type CharacterUpdateManyInput = {
  agility?: InputMaybe<Scalars['Int']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  characterDescription?: InputMaybe<Scalars['String']>;
  charisma?: InputMaybe<Scalars['Int']>;
  connection?: InputMaybe<Scalars['String']>;
  disposal?: InputMaybe<Scalars['Int']>;
  force?: InputMaybe<Scalars['Int']>;
  inteligence?: InputMaybe<Scalars['Int']>;
  inventory?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['String']>;
  motivation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  perception?: InputMaybe<Scalars['Int']>;
  personality?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  problem?: InputMaybe<Scalars['String']>;
  psychological?: InputMaybe<Scalars['String']>;
  resistance?: InputMaybe<Scalars['Int']>;
  route?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  xp?: InputMaybe<Scalars['Int']>;
};

export type CharacterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CharacterUpdateManyInput;
  /** Document search */
  where: CharacterWhereInput;
};

export type CharacterUpdateOneInlineInput = {
  /** Connect existing Character document */
  connect?: InputMaybe<CharacterWhereUniqueInput>;
  /** Create and connect one Character document */
  create?: InputMaybe<CharacterCreateInput>;
  /** Delete currently connected Character document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Character document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Character document */
  update?: InputMaybe<CharacterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Character document */
  upsert?: InputMaybe<CharacterUpsertWithNestedWhereUniqueInput>;
};

export type CharacterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CharacterUpdateInput;
  /** Unique document search */
  where: CharacterWhereUniqueInput;
};

export type CharacterUpsertInput = {
  /** Create document if it didn't exist */
  create: CharacterCreateInput;
  /** Update document if it exists */
  update: CharacterUpdateInput;
};

export type CharacterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CharacterUpsertInput;
  /** Unique document search */
  where: CharacterWhereUniqueInput;
};

/** Identifies documents */
export type CharacterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  agility?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  agility_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  agility_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  agility_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  agility_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  agility_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  agility_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  agility_not_in?: InputMaybe<Array<Scalars['Int']>>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  characterDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  characterDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  characterDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  characterDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  characterDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  characterDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  characterDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  characterDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  characterDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  characterDescription_starts_with?: InputMaybe<Scalars['String']>;
  charisma?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  charisma_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  charisma_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  charisma_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  charisma_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  charisma_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  charisma_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  charisma_not_in?: InputMaybe<Array<Scalars['Int']>>;
  connection?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  connection_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  connection_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  connection_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  connection_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  connection_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  connection_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  connection_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  connection_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  connection_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  disposal?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  disposal_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  disposal_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  disposal_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  disposal_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  disposal_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  disposal_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  disposal_not_in?: InputMaybe<Array<Scalars['Int']>>;
  force?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  force_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  force_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  force_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  force_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  force_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  force_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  force_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  inteligence?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  inteligence_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  inteligence_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  inteligence_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  inteligence_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  inteligence_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  inteligence_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  inteligence_not_in?: InputMaybe<Array<Scalars['Int']>>;
  inventory?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  inventory_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  inventory_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  inventory_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  inventory_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  inventory_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  inventory_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  inventory_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  inventory_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  inventory_starts_with?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  level_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  level_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  level_not_in?: InputMaybe<Array<Scalars['Int']>>;
  money?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  money_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  money_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  money_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  money_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  money_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  money_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  money_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  money_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  money_starts_with?: InputMaybe<Scalars['String']>;
  motivation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  motivation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  motivation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  motivation_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  motivation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  motivation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  motivation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  motivation_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  motivation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  motivation_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  origin_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  origin_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  origin_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  origin_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  origin_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  origin_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  origin_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  origin_starts_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  perception?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  perception_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  perception_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  perception_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  perception_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  perception_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  perception_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  perception_not_in?: InputMaybe<Array<Scalars['Int']>>;
  personality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  personality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  personality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  personality_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  personality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  personality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  personality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  personality_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  personality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  personality_starts_with?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  physical_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  physical_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  physical_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  physical_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  physical_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  physical_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  physical_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  physical_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  physical_starts_with?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  player_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  player_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  player_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  player_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  player_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  player_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  player_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  player_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  player_starts_with?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  points_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  points_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  points_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  points_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  points_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  points_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  points_not_in?: InputMaybe<Array<Scalars['Int']>>;
  problem?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  problem_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  problem_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  problem_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  problem_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  problem_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  problem_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  problem_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  problem_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  problem_starts_with?: InputMaybe<Scalars['String']>;
  psychological?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  psychological_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  psychological_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  psychological_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  psychological_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  psychological_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  psychological_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  psychological_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  psychological_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  psychological_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  resistance?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  resistance_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  resistance_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  resistance_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  resistance_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  resistance_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  resistance_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  resistance_not_in?: InputMaybe<Array<Scalars['Int']>>;
  route?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  route_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  route_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  route_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  route_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  route_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  route_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  route_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  route_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  route_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  skills?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  skills_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  skills_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  skills_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  skills_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  skills_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  skills_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  skills_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  skills_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  skills_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  xp?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  xp_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  xp_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  xp_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  xp_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  xp_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  xp_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  xp_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References Character record uniquely */
export type CharacterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one character */
  createCharacter?: Maybe<Character>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one character from _all_ existing stages. Returns deleted document. */
  deleteCharacter?: Maybe<Character>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Character documents
   * @deprecated Please use the new paginated many mutation (deleteManyCharactersConnection)
   */
  deleteManyCharacters: BatchPayload;
  /** Delete many Character documents, return deleted documents */
  deleteManyCharactersConnection: CharacterConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one character */
  publishCharacter?: Maybe<Character>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Character documents
   * @deprecated Please use the new paginated many mutation (publishManyCharactersConnection)
   */
  publishManyCharacters: BatchPayload;
  /** Publish many Character documents */
  publishManyCharactersConnection: CharacterConnection;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one character */
  schedulePublishCharacter?: Maybe<Character>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one character from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCharacter?: Maybe<Character>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one character from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCharacter?: Maybe<Character>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Character documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCharactersConnection)
   */
  unpublishManyCharacters: BatchPayload;
  /** Find many Character documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCharactersConnection: CharacterConnection;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one character */
  updateCharacter?: Maybe<Character>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many characters
   * @deprecated Please use the new paginated many mutation (updateManyCharactersConnection)
   */
  updateManyCharacters: BatchPayload;
  /** Update many Character documents */
  updateManyCharactersConnection: CharacterConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one character */
  upsertCharacter?: Maybe<Character>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCharacterArgs = {
  data: CharacterCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCharactersArgs = {
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationDeleteManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCharacterArgs = {
  to?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCharactersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationPublishManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCharacterArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCharacterArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CharacterWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCharacterArgs = {
  from?: Array<Stage>;
  where: CharacterWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCharactersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUnpublishManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCharacterArgs = {
  data: CharacterUpdateInput;
  where: CharacterWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCharactersArgs = {
  data: CharacterUpdateManyInput;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateManyCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CharacterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CharacterManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCharacterArgs = {
  upsert: CharacterUpsertInput;
  where: CharacterWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single character */
  character?: Maybe<Character>;
  /** Retrieve document version */
  characterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple characters */
  characters: Array<Character>;
  /** Retrieve multiple characters using the Relay connection interface */
  charactersConnection: CharacterConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCharacterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CharacterWhereUniqueInput;
};


export type QueryCharacterVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCharactersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CharacterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryCharactersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CharacterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Character;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CreateNewCharacterMutationVariables = Exact<{
  avatarURL: Scalars['String'];
  characterDescription: Scalars['String'];
  agility: Scalars['Int'];
  charisma: Scalars['Int'];
  connection: Scalars['String'];
  disposal: Scalars['Int'];
  force: Scalars['Int'];
  inteligence: Scalars['Int'];
  inventory: Scalars['String'];
  level: Scalars['Int'];
  money: Scalars['String'];
  motivation: Scalars['String'];
  name: Scalars['String'];
  origin: Scalars['String'];
  password: Scalars['String'];
  perception: Scalars['Int'];
  personality: Scalars['String'];
  physical: Scalars['String'];
  player: Scalars['String'];
  points: Scalars['Int'];
  problem: Scalars['String'];
  psychological: Scalars['String'];
  resistance: Scalars['Int'];
  route: Scalars['String'];
  skills: Scalars['String'];
  xp: Scalars['Int'];
}>;


export type CreateNewCharacterMutation = { __typename?: 'Mutation', createCharacter?: { __typename?: 'Character', id: string } | null };

export type PublishCharacterMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PublishCharacterMutation = { __typename?: 'Mutation', publishCharacter?: { __typename?: 'Character', id: string } | null };

export type UpdateCharacterByIdMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  agility?: InputMaybe<Scalars['Int']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  characterDescription?: InputMaybe<Scalars['String']>;
  charisma?: InputMaybe<Scalars['Int']>;
  connection?: InputMaybe<Scalars['String']>;
  disposal?: InputMaybe<Scalars['Int']>;
  force?: InputMaybe<Scalars['Int']>;
  inteligence?: InputMaybe<Scalars['Int']>;
  inventory?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['String']>;
  motivation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  perception?: InputMaybe<Scalars['Int']>;
  personality?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  problem?: InputMaybe<Scalars['String']>;
  psychological?: InputMaybe<Scalars['String']>;
  resistance?: InputMaybe<Scalars['Int']>;
  route?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  xp?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateCharacterByIdMutation = { __typename?: 'Mutation', updateCharacter?: { __typename?: 'Character', id: string } | null };

export type GetCharacterInfooQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetCharacterInfooQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name: string, avatarURL: string, characterDescription: string, player: string, points: number, level: number, xp: number, force: number, agility: number, resistance: number, inteligence: number, perception: number, disposal: number, charisma: number, skills: string, route: string, origin: string, personality: string, motivation: string, connection: string, problem: string, physical: string, psychological: string, inventory: string, money: string, password: string } | null };

export type GetCharactersListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCharactersListQuery = { __typename?: 'Query', characters: Array<{ __typename?: 'Character', id: string, name: string, avatarURL: string }> };


export const CreateNewCharacterDocument = gql`
    mutation CreateNewCharacter($avatarURL: String!, $characterDescription: String!, $agility: Int!, $charisma: Int!, $connection: String!, $disposal: Int!, $force: Int!, $inteligence: Int!, $inventory: String!, $level: Int!, $money: String!, $motivation: String!, $name: String!, $origin: String!, $password: String!, $perception: Int!, $personality: String!, $physical: String!, $player: String!, $points: Int!, $problem: String!, $psychological: String!, $resistance: Int!, $route: String!, $skills: String!, $xp: Int!) {
  createCharacter(
    data: {name: $name, avatarURL: $avatarURL, characterDescription: $characterDescription, player: $player, xp: $xp, points: $points, level: $level, route: $route, origin: $origin, personality: $personality, motivation: $motivation, connection: $connection, problem: $problem, force: $force, agility: $agility, resistance: $resistance, inteligence: $inteligence, perception: $perception, disposal: $disposal, charisma: $charisma, physical: $physical, psychological: $psychological, skills: $skills, inventory: $inventory, money: $money, password: $password}
  ) {
    id
  }
}
    `;
export type CreateNewCharacterMutationFn = Apollo.MutationFunction<CreateNewCharacterMutation, CreateNewCharacterMutationVariables>;

/**
 * __useCreateNewCharacterMutation__
 *
 * To run a mutation, you first call `useCreateNewCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCharacterMutation, { data, loading, error }] = useCreateNewCharacterMutation({
 *   variables: {
 *      avatarURL: // value for 'avatarURL'
 *      characterDescription: // value for 'characterDescription'
 *      agility: // value for 'agility'
 *      charisma: // value for 'charisma'
 *      connection: // value for 'connection'
 *      disposal: // value for 'disposal'
 *      force: // value for 'force'
 *      inteligence: // value for 'inteligence'
 *      inventory: // value for 'inventory'
 *      level: // value for 'level'
 *      money: // value for 'money'
 *      motivation: // value for 'motivation'
 *      name: // value for 'name'
 *      origin: // value for 'origin'
 *      password: // value for 'password'
 *      perception: // value for 'perception'
 *      personality: // value for 'personality'
 *      physical: // value for 'physical'
 *      player: // value for 'player'
 *      points: // value for 'points'
 *      problem: // value for 'problem'
 *      psychological: // value for 'psychological'
 *      resistance: // value for 'resistance'
 *      route: // value for 'route'
 *      skills: // value for 'skills'
 *      xp: // value for 'xp'
 *   },
 * });
 */
export function useCreateNewCharacterMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCharacterMutation, CreateNewCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCharacterMutation, CreateNewCharacterMutationVariables>(CreateNewCharacterDocument, options);
      }
export type CreateNewCharacterMutationHookResult = ReturnType<typeof useCreateNewCharacterMutation>;
export type CreateNewCharacterMutationResult = Apollo.MutationResult<CreateNewCharacterMutation>;
export type CreateNewCharacterMutationOptions = Apollo.BaseMutationOptions<CreateNewCharacterMutation, CreateNewCharacterMutationVariables>;
export const PublishCharacterDocument = gql`
    mutation PublishCharacter($id: ID = "") {
  publishCharacter(where: {id: $id}) {
    id
  }
}
    `;
export type PublishCharacterMutationFn = Apollo.MutationFunction<PublishCharacterMutation, PublishCharacterMutationVariables>;

/**
 * __usePublishCharacterMutation__
 *
 * To run a mutation, you first call `usePublishCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishCharacterMutation, { data, loading, error }] = usePublishCharacterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishCharacterMutation(baseOptions?: Apollo.MutationHookOptions<PublishCharacterMutation, PublishCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishCharacterMutation, PublishCharacterMutationVariables>(PublishCharacterDocument, options);
      }
export type PublishCharacterMutationHookResult = ReturnType<typeof usePublishCharacterMutation>;
export type PublishCharacterMutationResult = Apollo.MutationResult<PublishCharacterMutation>;
export type PublishCharacterMutationOptions = Apollo.BaseMutationOptions<PublishCharacterMutation, PublishCharacterMutationVariables>;
export const UpdateCharacterByIdDocument = gql`
    mutation UpdateCharacterById($id: ID, $agility: Int, $avatarURL: String, $characterDescription: String, $charisma: Int, $connection: String, $disposal: Int, $force: Int, $inteligence: Int, $inventory: String, $level: Int, $money: String, $motivation: String, $name: String, $origin: String, $password: String, $perception: Int, $personality: String, $physical: String, $player: String, $points: Int, $problem: String, $psychological: String, $resistance: Int, $route: String, $skills: String, $xp: Int) {
  updateCharacter(
    data: {agility: $agility, avatarURL: $avatarURL, characterDescription: $characterDescription, charisma: $charisma, connection: $connection, disposal: $disposal, force: $force, inteligence: $inteligence, inventory: $inventory, level: $level, money: $money, motivation: $motivation, name: $name, origin: $origin, password: $password, perception: $perception, personality: $personality, physical: $physical, player: $player, points: $points, problem: $problem, psychological: $psychological, resistance: $resistance, route: $route, skills: $skills, xp: $xp}
    where: {id: $id}
  ) {
    id
  }
}
    `;
export type UpdateCharacterByIdMutationFn = Apollo.MutationFunction<UpdateCharacterByIdMutation, UpdateCharacterByIdMutationVariables>;

/**
 * __useUpdateCharacterByIdMutation__
 *
 * To run a mutation, you first call `useUpdateCharacterByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacterByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacterByIdMutation, { data, loading, error }] = useUpdateCharacterByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      agility: // value for 'agility'
 *      avatarURL: // value for 'avatarURL'
 *      characterDescription: // value for 'characterDescription'
 *      charisma: // value for 'charisma'
 *      connection: // value for 'connection'
 *      disposal: // value for 'disposal'
 *      force: // value for 'force'
 *      inteligence: // value for 'inteligence'
 *      inventory: // value for 'inventory'
 *      level: // value for 'level'
 *      money: // value for 'money'
 *      motivation: // value for 'motivation'
 *      name: // value for 'name'
 *      origin: // value for 'origin'
 *      password: // value for 'password'
 *      perception: // value for 'perception'
 *      personality: // value for 'personality'
 *      physical: // value for 'physical'
 *      player: // value for 'player'
 *      points: // value for 'points'
 *      problem: // value for 'problem'
 *      psychological: // value for 'psychological'
 *      resistance: // value for 'resistance'
 *      route: // value for 'route'
 *      skills: // value for 'skills'
 *      xp: // value for 'xp'
 *   },
 * });
 */
export function useUpdateCharacterByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCharacterByIdMutation, UpdateCharacterByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCharacterByIdMutation, UpdateCharacterByIdMutationVariables>(UpdateCharacterByIdDocument, options);
      }
export type UpdateCharacterByIdMutationHookResult = ReturnType<typeof useUpdateCharacterByIdMutation>;
export type UpdateCharacterByIdMutationResult = Apollo.MutationResult<UpdateCharacterByIdMutation>;
export type UpdateCharacterByIdMutationOptions = Apollo.BaseMutationOptions<UpdateCharacterByIdMutation, UpdateCharacterByIdMutationVariables>;
export const GetCharacterInfooDocument = gql`
    query GetCharacterInfoo($id: ID) {
  character(where: {id: $id}) {
    name
    avatarURL
    characterDescription
    player
    points
    level
    xp
    force
    agility
    resistance
    inteligence
    perception
    disposal
    charisma
    skills
    route
    origin
    personality
    motivation
    connection
    problem
    physical
    psychological
    inventory
    money
    password
  }
}
    `;

/**
 * __useGetCharacterInfooQuery__
 *
 * To run a query within a React component, call `useGetCharacterInfooQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterInfooQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterInfooQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterInfooQuery(baseOptions?: Apollo.QueryHookOptions<GetCharacterInfooQuery, GetCharacterInfooQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterInfooQuery, GetCharacterInfooQueryVariables>(GetCharacterInfooDocument, options);
      }
export function useGetCharacterInfooLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterInfooQuery, GetCharacterInfooQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterInfooQuery, GetCharacterInfooQueryVariables>(GetCharacterInfooDocument, options);
        }
export type GetCharacterInfooQueryHookResult = ReturnType<typeof useGetCharacterInfooQuery>;
export type GetCharacterInfooLazyQueryHookResult = ReturnType<typeof useGetCharacterInfooLazyQuery>;
export type GetCharacterInfooQueryResult = Apollo.QueryResult<GetCharacterInfooQuery, GetCharacterInfooQueryVariables>;
export const GetCharactersListDocument = gql`
    query GetCharactersList {
  characters(where: {}) {
    id
    name
    avatarURL
  }
}
    `;

/**
 * __useGetCharactersListQuery__
 *
 * To run a query within a React component, call `useGetCharactersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersListQuery(baseOptions?: Apollo.QueryHookOptions<GetCharactersListQuery, GetCharactersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersListQuery, GetCharactersListQueryVariables>(GetCharactersListDocument, options);
      }
export function useGetCharactersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersListQuery, GetCharactersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersListQuery, GetCharactersListQueryVariables>(GetCharactersListDocument, options);
        }
export type GetCharactersListQueryHookResult = ReturnType<typeof useGetCharactersListQuery>;
export type GetCharactersListLazyQueryHookResult = ReturnType<typeof useGetCharactersListLazyQuery>;
export type GetCharactersListQueryResult = Apollo.QueryResult<GetCharactersListQuery, GetCharactersListQueryVariables>;