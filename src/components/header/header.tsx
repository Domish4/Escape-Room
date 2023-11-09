import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

type HeaderProps = {
  titlePath: string;
}

function Header({titlePath}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link to={AppRoute.Main}>
          <span className="logo header__logo">
            <svg width="134" height="52" aria-hidden="true">
              <use xlinkHref="#logo"></use>
            </svg>
          </span>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link onClick={() => refreshPage()} to={AppRoute.Main}
                className={titlePath === AppRoute.Main ? 'link active' : 'link'}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.Contacts} className={titlePath === AppRoute.Contacts ? 'link active' : 'link'}>Контакты
              </Link>
            </li>
            {authorizationStatus === AuthorizationStatus.Auth ?
              <li className="main-nav__item">
                <Link to={AppRoute.Reservation} className={titlePath === AppRoute.Reservation ? 'link active' : 'link'}>Мои бронирования
                </Link>
              </li> : '' }
          </ul>
        </nav>

        <div className="header__side-nav">
          {authorizationStatus === AuthorizationStatus.Auth ?
            <Link to='/' onClick={(evt) => {
              evt.preventDefault(); dispatch(logoutAction());
            }} className="btn btn--accent header__side-item"
            >Выйти
            </Link>
            :
            <Link to={AppRoute.Login} className="btn header__side-item header__login-btn">Вход</Link>}
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
