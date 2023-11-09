import { AppRoute, Date } from '../../../constants/enums';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { postBookingAction } from '../../../store/api-action';
import { BookingData, BookingFormFields, BookingPostData, } from '../../../types/booking-quest';
import BookingFormDate from '../booking-form-date/booking-form-date';
import { SubmitHandler, useForm } from 'react-hook-form';
import {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/loader';

function BookingForm(): JSX.Element {

  const quest = useAppSelector((state) => state.quest);
  const dispatch = useAppDispatch();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors , isValid
    },
  } = useForm<BookingFormFields>({
    mode: 'onChange'
  });

  const onDateChange = useCallback((date: Date, time: string): void => {
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  const currentPlace = useAppSelector((state) => state.SingleInfoBook);

  if (!quest || !currentPlace) {
    return <Loader />;
  }


  const [minPersonCount, maxPersonCount] = quest.peopleMinMax;


  const onSubmit: SubmitHandler<BookingFormFields> = (data) => {
    const bookingPostData: BookingPostData = {
      date: currentDate as Date,
      time: currentTime,
      contactPerson: data.name,
      phone: data.tel,
      withChildren: data.children,
      peopleCount: Number(data.person),
      placeId: currentPlace.id,
    };
    const bookingData: BookingData = {
      id: quest.id,
      postData: bookingPostData
    };
    dispatch(postBookingAction({...bookingData}));
    navigate(AppRoute.Reservation);
  };

  return (
    <form className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >

      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingFormDate onDateChange={onDateChange} />
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input {...register('name', {
            required: 'Это обязательное поле',
            pattern: {
              value: /^.{1,15}$/,
              message: 'От 1 до 15 символов'
            }
          })}
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          />
          {errors['name'] && <p>{errors['name']?.message}</p>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            {...register('tel', {
              required: 'Это обязательное поле',
              pattern: {
                value: /^(\+[7]|[8])?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,12}\d$/,
                message: 'Пожалуйста, введите корректный номер мобильного телефона'
              }
            })}
            type="tel"
            id="tel"
            name="tel"
            placeholder='+7(123)456-78-90'
          />
          {errors['tel'] && <p>{errors['tel']?.message}</p>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            {...register('person', {
              required: 'Это обязательное поле',
              pattern: {
                value:new RegExp(`^([${minPersonCount}-${maxPersonCount}])$`),
                message: `Количество участников от ${minPersonCount} до ${maxPersonCount}`
              }
            })}
            type="number"
            id="person"
            name="person"
            placeholder='Количество участников'
          />
          {errors['person'] && <p>{errors['person']?.message}</p>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input {...register('children')}
            type="checkbox"
            id="children"
            name="children"
          />
          <span className="custom-checkbox__icon" >
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit" disabled={!isValid}
      >
        Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
