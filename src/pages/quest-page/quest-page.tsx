import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchInfoQuestBooking, fetchQuestsInfoAction } from '../../store/api-action';
import {useEffect} from 'react';
import { AppRoute, DifficultyLevel, Genres, GenresDictionary, LevelDictionary } from '../../constants/enums';
import Loader from '../../components/loader/loader';

function QuestPage(): JSX.Element {
  const quest = useAppSelector((state) => state.quest);
  const params = useParams();
  const InfoOfQuestBook = useAppSelector((state) => state.InfoBookingQuest);

  useEffect(() => {

    if (params.id) {
      store.dispatch(fetchQuestsInfoAction({id: params.id}));
      store.dispatch(fetchInfoQuestBooking({id: params.id}));
    }
  }, [params.id]);


  if (!quest || !params.id || !InfoOfQuestBook) {
    return <Loader />;
  }


  const {coverImg, coverImgWebp, title, type, level, description, peopleMinMax, id} = quest;


  return (
    <>
      <Header titlePath='/quest'/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={coverImgWebp} />
            <img src={coverImg} srcSet={coverImg} width="1366" height="768" alt={title} />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>
              {GenresDictionary[type as Genres]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{`${peopleMinMax[0]}-${peopleMinMax[1]}`}
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{LevelDictionary[level as DifficultyLevel]}
              </li>
            </ul>
            <p className="quest-page__description">{description}</p>
            <Link to={`${AppRoute.Quests}/${id}/booking`} className="btn btn--accent btn--cta quest-page__btn">Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default QuestPage;
