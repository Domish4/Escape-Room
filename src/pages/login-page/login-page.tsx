import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Navigate, generatePath, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/enums';
import LoginForm from '../../components/login-form/login-form';
import { useAppSelector } from '../../hooks';

function LoginPage(): JSX.Element {
  const location = useLocation();
  const quest = useAppSelector((state) => state.quest);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  const route = quest && location.state ? generatePath(`${AppRoute.Quests}/${quest.id}/booking`) : AppRoute.Main;


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={route} />
    );
  }

  return (
    <>
      <Header titlePath='/login'/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
