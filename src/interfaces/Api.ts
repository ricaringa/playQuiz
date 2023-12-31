export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  fifa?:        string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  GBP?: TartuGecko;
  USD?: TartuGecko;
  WST?: TartuGecko;
  JOD?: TartuGecko;
  ERN?: TartuGecko;
  NPR?: TartuGecko;
  TOP?: TartuGecko;
  XOF?: TartuGecko;
  EUR?: TartuGecko;
  EGP?: TartuGecko;
  ILS?: TartuGecko;
  IMP?: TartuGecko;
  MRU?: TartuGecko;
  DZD?: TartuGecko;
  MAD?: TartuGecko;
  KZT?: TartuGecko;
  AWG?: TartuGecko;
  NGN?: TartuGecko;
  KMF?: TartuGecko;
  PHP?: TartuGecko;
  SHP?: TartuGecko;
  XPF?: TartuGecko;
  CHF?: TartuGecko;
  VES?: TartuGecko;
  DKK?: TartuGecko;
  GGP?: TartuGecko;
  BZD?: TartuGecko;
  AUD?: TartuGecko;
  GHS?: TartuGecko;
  BMD?: TartuGecko;
  SGD?: TartuGecko;
  AMD?: TartuGecko;
  MDL?: TartuGecko;
  VND?: TartuGecko;
  MGA?: TartuGecko;
  GIP?: TartuGecko;
  TVD?: TartuGecko;
  UAH?: TartuGecko;
  BIF?: TartuGecko;
  XCD?: TartuGecko;
  TJS?: TartuGecko;
  KID?: TartuGecko;
  XAF?: TartuGecko;
  MUR?: TartuGecko;
  RWF?: TartuGecko;
  SDG?: BAM;
  CNY?: TartuGecko;
  FOK?: TartuGecko;
  KRW?: TartuGecko;
  SRD?: TartuGecko;
  OMR?: TartuGecko;
  UGX?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  MVR?: TartuGecko;
  CRC?: TartuGecko;
  MNT?: TartuGecko;
  SOS?: TartuGecko;
  ETB?: TartuGecko;
  YER?: TartuGecko;
  CLP?: TartuGecko;
  MOP?: TartuGecko;
  AZN?: TartuGecko;
  BBD?: TartuGecko;
  JEP?: TartuGecko;
  LKR?: TartuGecko;
  JMD?: TartuGecko;
  ZMW?: TartuGecko;
  CDF?: TartuGecko;
  MYR?: TartuGecko;
  BTN?: TartuGecko;
  INR?: TartuGecko;
  PYG?: TartuGecko;
  AED?: TartuGecko;
  RON?: TartuGecko;
  GYD?: TartuGecko;
  BWP?: TartuGecko;
  JPY?: TartuGecko;
  ISK?: TartuGecko;
  UYU?: TartuGecko;
  KGS?: TartuGecko;
  TWD?: TartuGecko;
  KYD?: TartuGecko;
  FKP?: TartuGecko;
  MMK?: TartuGecko;
  TZS?: TartuGecko;
  CAD?: TartuGecko;
  TRY?: TartuGecko;
  ARS?: TartuGecko;
  AFN?: TartuGecko;
  IRR?: TartuGecko;
  BGN?: TartuGecko;
  CVE?: TartuGecko;
  BAM?: BAM;
  IQD?: TartuGecko;
  DOP?: TartuGecko;
  MXN?: TartuGecko;
  STN?: TartuGecko;
  COP?: TartuGecko;
  AOA?: TartuGecko;
  PAB?: TartuGecko;
  NIO?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  DJF?: TartuGecko;
  SYP?: TartuGecko;
  KWD?: TartuGecko;
  LYD?: TartuGecko;
  BRL?: TartuGecko;
  PKR?: TartuGecko;
  SLL?: TartuGecko;
  KES?: TartuGecko;
  THB?: TartuGecko;
  LRD?: TartuGecko;
  KHR?: TartuGecko;
  LBP?: TartuGecko;
  PLN?: TartuGecko;
  MWK?: TartuGecko;
  SAR?: TartuGecko;
  GNF?: TartuGecko;
  NOK?: TartuGecko;
  SSP?: TartuGecko;
  BSD?: TartuGecko;
  SCR?: TartuGecko;
  CZK?: TartuGecko;
  BHD?: TartuGecko;
  BOB?: TartuGecko;
  GMD?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  NAD?: TartuGecko;
  GEL?: TartuGecko;
  RSD?: TartuGecko;
  GTQ?: TartuGecko;
  TMT?: TartuGecko;
  SEK?: TartuGecko;
  VUV?: TartuGecko;
  PGK?: TartuGecko;
  MKD?: TartuGecko;
  ZWL?: TartuGecko;
  HNL?: TartuGecko;
  HKD?: TartuGecko;
  TTD?: TartuGecko;
  ANG?: TartuGecko;
  LAK?: TartuGecko;
  MZN?: TartuGecko;
  UZS?: TartuGecko;
  HTG?: TartuGecko;
  SZL?: TartuGecko;
  ALL?: TartuGecko;
  IDR?: TartuGecko;
  BDT?: TartuGecko;
  RUB?: TartuGecko;
  TND?: TartuGecko;
  BYN?: TartuGecko;
  KPW?: TartuGecko;
  HUF?: TartuGecko;
  FJD?: TartuGecko;
  QAR?: TartuGecko;
  SBD?: TartuGecko;
  PEN?: TartuGecko;
  BND?: TartuGecko;
}

export interface TartuGecko {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}