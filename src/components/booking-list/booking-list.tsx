import { useAppSelector } from '../../hooks';
import BookingCard from '../booking-card/booking-card';


function BookingList(): JSX.Element {
  const bookingQuests = useAppSelector((state) => state.userBookInfo);

  if (!bookingQuests.length) {
    return <h2> Нет забронированных квестов </h2>;
  }

  return (
    <div className="cards-grid">
      {bookingQuests.map((bookingQuest) => (
        <BookingCard
          key={bookingQuest.id}
          bookingQuest={bookingQuest}
        />
      ))}
    </div>
  );
}

export default BookingList;
