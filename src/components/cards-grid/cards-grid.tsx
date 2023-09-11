import { QuestType } from '../../types/quest';
import QuestCard from '../quest-card/quest-card';

type CardsProps = {
  quests: QuestType[];
}

function CardsGrid({quests}: CardsProps): JSX.Element {

  if (!quests.length) {
    return <h2> Нет квестов по выбранным фильтрам </h2>;

  }
  return (
    <div className="cards-grid">
      {quests.map((quest) =>
        (<QuestCard key={quest.id} quest={quest}/>
        )
      ) }
    </div>

  );

}

export default CardsGrid;
