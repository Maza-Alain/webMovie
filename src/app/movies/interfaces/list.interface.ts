export interface List {
    created_by:     string;
    description:    string;
    favorite_count: number;
    id:             string;
    items:          Movie[];
    item_count:     number;
    iso_639_1:      ISO639_1;
    name:           string;
    poster_path:    string;
}

export enum ISO639_1 {
    En = "en",
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    media_type:        MediaType;
    original_language: ISO639_1;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum MediaType {
    Movie = "movie",
}
