import { useAppDispatch} from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AuthData } from '../../types/user-data';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Validation } from '../../constants/enums';

function LoginForm(): JSX.Element {
  const STEP_BACK = -1;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<AuthData>({
    mode: 'onChange'
  });

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    reset();
  };


  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              type="email"
              id="email"
              {...register('login', {
                required: 'Заполните поле',
                pattern: Validation.Email
              }
              )}
              placeholder="Адрес электронной почты"
            />
            {errors?.login && <p>Введите валидный email</p>}
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Заполните поле',
                minLength:{
                  value: 3,
                  message: 'Минимум 3 символа'},
                pattern: Validation.Password
              }
              )}
              placeholder="Пароль"
            />
            {errors?.password && <p>{errors?.password?.message || 'Пароль должен содержать минимум одну букву и цифру'}</p>}
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" onClick={() => navigate(STEP_BACK)} disabled={!isValid} >Войти</button>
      </div>
    </form>
  );
}

export default LoginForm;
