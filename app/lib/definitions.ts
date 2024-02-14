export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flag: string;
  cioc: string;
  independent: boolean;
  flags: Flags;
  translations: Translations;
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
