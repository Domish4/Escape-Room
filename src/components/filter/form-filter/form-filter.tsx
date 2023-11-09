import FilterListDifficulty from '../filter-list-difficulty/filter-list-difficulty';
import FilterListLevel from '../filter-list-level/filter-list-level';

function FormFilter(): JSX.Element {

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <FilterListLevel />
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <FilterListDifficulty />
      </fieldset>
    </form>
  );
}

export default FormFilter;

