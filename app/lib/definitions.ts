export type Region = {
  id: number;
  name: string;
};

export type CountrySummary = {
  id: string;
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
};

export type Country = {
  id: string;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  subregion: string;
  region_id: number;
  population: number;
  demonym: string;
  area: number;
  nativeName: string;
  numericCode: string;
  flag: string;
  cioc: string;
  independent: boolean;
  flags: Flags;
  translations: Translations;
  borders: string[];
  timezones: string[];
  latlng: [number, number];
  altSpellings: string[];
  callingCodes: string[];
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  regionalBlocs: Bloc[];
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Flags = {
  svg: string;
  png: string;
};

type Translations = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};

type Bloc = {
  acronym: string;
  name: string;
};
