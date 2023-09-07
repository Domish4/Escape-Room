import { Genres } from '../../const';
import { useAppDispatch} from '../../hooks';
import {useState} from 'react';
import { changeGenres } from '../../store/action';
function FilterItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState('all-quests');


  return (
    <>
      {Object.entries(Genres).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input
            type="radio"
            name="type"
            id={key}
            value={key}
            onChange={(e) => setSelectedValue(e.target.value)}
            checked={selectedValue === key}
            onClick={() => dispatch(changeGenres(value))}
          />
          <label className="filter__label" htmlFor={key}>
            <svg className="filter__icon" width="30" height="30" aria-hidden="true">
              <use xlinkHref={`#icon-${key}`}></use>
            </svg><span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </>
  );
}

export default FilterItem;
