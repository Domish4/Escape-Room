import BookingForm from '../../components/booking-form/booking-form';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MapBooking from '../../components/map/booking-map';
import { useAppSelector } from '../../hooks';
import ErrorPage from '../error-page/error-page';

function BookingPage(): JSX.Element {
  const quest = useAppSelector((state) => state.quest);
  const InfoOfQuestBook = useAppSelector((state) => state.InfoBookingQuest);
  if (!quest || !InfoOfQuestBook) {
    return <ErrorPage />;
  }

  const {coverImg, coverImgWebp, title} = quest;
  return (
    <>
      <Header titlePath='/booking'/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={coverImgWebp} />
            <img src={coverImg} srcSet={coverImg} width="1366" height="1959" alt={title} />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{title}</p>
          </div>
          <div className="page-content__item">
            <MapBooking />
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
