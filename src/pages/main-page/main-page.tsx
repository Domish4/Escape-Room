import CardsGrid from '../../components/cards-grid/cards-grid';
import Footer from '../../components/footer/footer';
import FormFilter from '../../components/form-filter/form-filter';
import Header from '../../components/header/header';

function MainPage(): JSX.Element {

  return (
    <>
      <Header />
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
          <CardsGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
