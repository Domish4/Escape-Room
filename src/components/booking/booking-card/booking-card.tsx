import { Link } from 'react-router-dom';
import { AppRoute, Date, DifficultyLevel, DateDictionary, LevelDictionary } from '../../../constants/enums';
import { useAppDispatch } from '../../../hooks';
import { deleteBooking } from '../../../store/api-action';
import { BookingQuest } from '../../../types/booking-quest';


type BookingQuestCardProps = {
  bookingQuest: BookingQuest;
};

function BookingCard({ bookingQuest }: BookingQuestCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteBooking({id: bookingQuest.id}));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={bookingQuest.quest.previewImgWebp} />
          <img src={bookingQuest.quest.previewImg} width="344" height="232" alt={bookingQuest.quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quests}/${bookingQuest.quest.id}`} className="quest-card__link">
            {bookingQuest.quest.title}
          </Link>
          <span className="quest-card__info">{`${DateDictionary[bookingQuest.date as Date]}, ${bookingQuest.time}. ${bookingQuest.location.address}`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{bookingQuest.peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{LevelDictionary[bookingQuest.quest.level as DifficultyLevel]}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={handleClick}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
