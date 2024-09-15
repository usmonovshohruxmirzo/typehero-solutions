// solution
type MovieInfoByGenre<T> = {
  [K in keyof T]: {
    name: string;
    year: number;
    director: string;
  };
};

// example
type Genres = {
  action: string;
  comedy: string;
};

type MovieInfo = MovieInfoByGenre<Genres>;

const obj: MovieInfo = {
  action: {
    name: "Die Hard",
    year: 1988,
    director: "John McTiernan",
  },
  comedy: {
    name: "Groundhog Day",
    year: 1993,
    director: "Harold Ramis",
  },
};
