import { DifficultyLevel } from '../../const';
import { useAppDispatch } from '../../hooks';
import {useState} from 'react';
import { changeDifficalty } from '../../store/action';

function FilterItemDifficulty(): JSX.Element {
  const dispatch = useAppDispatch();
  const [selectedRadioValue, setSelectedRadioValue] = useState('any');


  return (
    <>
      {Object.entries(DifficultyLevel).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input
            type="radio"
            name="level"
            id={key}
            value={key}
            checked={selectedRadioValue === key}
            onChange={(e) => setSelectedRadioValue(e.target.value)}
            onClick={() => dispatch(changeDifficalty(value))}
          />
          <label className="filter__label" htmlFor={key}>
            <span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </>
  );
}

export default FilterItemDifficulty;
