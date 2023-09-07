import { useAppSelector } from '../../hooks';
import QuestCard from '../quest-card/quest-card';


function CardsGrid(): JSX.Element {
  const quests = useAppSelector((state) => state.quests);

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
