import {GenresDictionary } from '../../../constants/enums';
import { useAppDispatch} from '../../../hooks';
import {useState} from 'react';
import { changeGenres } from '../../../store/action';
import { ucFirst } from '../../../utils/utils';
function FilterItemLevel(): JSX.Element {
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState('all-quests');


  return (
    <>
      {Object.entries(GenresDictionary).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input
            type="radio"
            name="type"
            id={key}
            value={key}
            onChange={(e) => setSelectedValue(e.target.value)}
            checked={selectedValue === key}
            onClick={() => dispatch(changeGenres(key))}
          />
          <label className="filter__label" htmlFor={key}>
            <svg className="filter__icon" width="30" height="30" aria-hidden="true">
              {/* поставлено такое условие, потому что type приходит с сервера как adventures а иконка отображается без s*/}
              <use xlinkHref={`#icon-${key === 'adventures' ? 'adventure' : key}`}></use>
            </svg><span className="filter__label-text">{ucFirst(value)}</span>
          </label>
        </li>
      ))}
    </>
  );
}

export default FilterItemLevel;
