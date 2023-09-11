import CardsGrid from '../../components/cards-grid/cards-grid';
import Footer from '../../components/footer/footer';
import FormFilter from '../../components/form-filter/form-filter';
import Header from '../../components/header/header';
import {useAppSelector } from '../../hooks';

import sortCard from '../../utils/utils';


function MainPage(): JSX.Element {
  const quests = useAppSelector((state) => state.quests);
  const currentGenre = useAppSelector((state) => state.genres);
  const currentLevel = useAppSelector((state) => state.difficult);
  const filteredQuests = sortCard(quests, currentGenre, currentLevel);

  return (
    <>
      <Header titlePath='/' />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <FormFilter />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          {currentGenre === 'all-quests' && currentLevel === 'any'
            ? <CardsGrid quests={quests}/>
            :
            <CardsGrid quests={filteredQuests}/>}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
