import FilterListDifficulty from '../filter-list-difficulty/filter-list-difficulty';
import FilterList from '../filter-list/filter-list';

function FormFilter(): JSX.Element {

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <FilterList />
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <FilterListDifficulty />
      </fieldset>
    </form>
  );
}

export default FormFilter;

