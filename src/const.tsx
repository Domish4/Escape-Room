export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const TIMEOUT_SHOW_ERROR = 8000;

export enum AppRoute {
  Quests = '/quest',
  Booking = '/booking',
  Reservation = '/reservation',
  Login = '/login',
  Logout = '/logout',
}

export enum DifficultyLevel {
  any = 'Любой ',
  easy = 'Простой',
  medium = 'Средний',
  hard = 'Сложный'
}


export enum Genres {
  'all-quests' = 'Все квесты',
  adventure = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  'sci-fi' = 'Sci-fi'
}
