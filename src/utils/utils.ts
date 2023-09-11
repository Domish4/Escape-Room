import { DifficultyLevel} from '../constants/enums';
import { QuestType } from '../types/quest';

export default function sortCard(quests: QuestType[], type: string, level: string): QuestType[] {
  let filteredQuests: QuestType[] = quests;

  if (type === 'all-quests') {
    filteredQuests = quests.filter((quest) =>
      quest.level === level);
  } else if (level === 'any') {
    filteredQuests = quests.filter((quest) =>
      quest.type === type);
  } else {
    filteredQuests = quests.filter((quest) =>
      quest.level === level && quest.type as keyof typeof DifficultyLevel === type);
  }

  return filteredQuests;
}

export const ucFirst = (str: string): string => str[0].toUpperCase() + str.slice(1);


