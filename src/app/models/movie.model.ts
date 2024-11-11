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

export interface Review {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  expanded: boolean;
}

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
