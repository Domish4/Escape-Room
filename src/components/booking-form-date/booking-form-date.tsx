import { useAppSelector } from '../../hooks';
import ErrorPage from '../../pages/error-page/error-page';
import {Date, DateDictionary } from '../../constants/enums';

type BookingProps = {
  onDateChange: (date: Date, time: string) => void;
}

function BookingFormDate({onDateChange}: BookingProps): JSX.Element {
  const singleInfoBook = useAppSelector((state) => state.SingleInfoBook);

  if (!singleInfoBook) {
    return <ErrorPage />;
  }
  const {slots} = singleInfoBook;
  return (
    <>
      {
        Object.entries(slots).map(([date, infoTime]) => (
          <fieldset className="booking-form__date-section" key={date}>
            <legend className="booking-form__date-title">{DateDictionary[date as Date]}</legend>
            <div className="booking-form__date-inner-wrapper">
              {infoTime.map((info) =>
                (
                  <label className="custom-radio booking-form__date" key={info.time}>
                    <input
                      type="radio"
                      id={info.time}
                      name="date"
                      value={info.time}
                      disabled={!info.isAvailable}
                      onChange={() => onDateChange(date as Date, info.time)}
                    />
                    <span className="custom-radio__label">{info.time}</span>
                  </label>)
              )}
            </div>
          </fieldset>
        ))
      }
    </>
  );
}

export default BookingFormDate;
