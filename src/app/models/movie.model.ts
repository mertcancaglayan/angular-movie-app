export interface Genre {
  id: number;
  name: string;
}

export type GenreIds = number[];

export interface Movie {
  genre_ids: GenreIds;
  id: number;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  vote_average: number;
}
