import { Link } from 'react-router-dom';
import { QuestType } from '../../types/quest';
import { AppRoute } from '../../const';

type QuestCardProps = {
    quest: QuestType;
}
function QuestCard({quest}: QuestCardProps): JSX.Element {
  const {previewImgWebp, previewImg, coverImg, id, title, level, peopleMinMax} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} srcSet={coverImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={`${AppRoute.Quests}/${id}/`} className="quest-card__link">{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {`${peopleMinMax[0]}-${peopleMinMax[1]}`}
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
