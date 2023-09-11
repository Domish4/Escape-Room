
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }


export enum AppRoute {
  Quests = '/quest',
  Booking = '/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
  Contacts = '/contacts',
  Main = '/'
}

export enum DifficultyLevel {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const LevelDictionary = {
  [DifficultyLevel.Any]: 'любой',
  [DifficultyLevel.Easy]: 'лёгкий',
  [DifficultyLevel.Medium]: 'средний',
  [DifficultyLevel.Hard]: 'сложный'
};

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow'
}

export enum Genres {
  All = 'all-quests',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const DateDictionary = {
  [Date.Today]: 'сегодня',
  [Date.Tomorrow]: 'завтра'
};

export const GenresDictionary = {
  [Genres.All]: 'все квесты',
  [Genres.Adventures]: 'приключения',
  [Genres.Horror]: 'ужасы',
  [Genres.Mystic]: 'мистика',
  [Genres.Detective]: 'детектив',
  [Genres.SciFi]: 'sci-fi'
};


export enum ContactsLocation {
  Lat = 59.968456,
  Lng = 30.31759,
}

export const Validation = {
  Email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  Password: /([0-9].*[a-zA-Z])|([a-zA-Z].*[0-9])/,
} as const;

