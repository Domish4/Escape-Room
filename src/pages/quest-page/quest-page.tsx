import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchQuestsInfoAction } from '../../store/api-action';
import {useEffect} from 'react';
import ErrorPage from '../error-page/error-page';
import { DifficultyLevel } from '../../const';

function QuestPage(): JSX.Element {
  const quest = useAppSelector((state) => state.quest);
  const params = useParams();


  useEffect(() => {

    if (params.id) {
      store.dispatch(fetchQuestsInfoAction({id: params.id}));

    }
  }, [params.id]);


  if (!quest || !params.id) {
    return <ErrorPage />;
  }

  const {coverImg, coverImgWebp, title, type, level, description, peopleMinMax} = quest;

  return (
    <>
      <Header />
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
              {type}
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
                </svg>{level === DifficultyLevel ? level : ''}
              </li>
            </ul>
            <p className="quest-page__description">{description}</p>
            <a className="btn btn--accent btn--cta quest-page__btn" href="booking.html">Забронировать</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default QuestPage;
