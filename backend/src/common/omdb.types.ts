export type OmdbSearchItem = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
};

export type OmdbSearchResponse = {
  Search?: OmdbSearchItem[];
  totalResults?: string;
  Response: 'True' | 'False';
  Error?: string;
};
