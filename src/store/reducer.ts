import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../constants/enums';
import { BookingPostData, BookingQuest, InfoQuest} from '../types/booking-quest';
import { QuestType } from '../types/quest';
import { UserData } from '../types/user-data';
import { changeCurrentPlace, changeDifficalty, changeGenres, getInfoOfBookingQuest, getInfoOfQuest, getUserInfoOfBooking, loadQuests, postBooking, requireAuthorization, setError, setQuestsDataLoading } from './action';


type InitialState = {
    genres: string;
    difficult: string;
    isDataLoading: boolean;
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
    quests: QuestType[];
    quest: QuestType | null;
    InfoBookingQuest: InfoQuest[];
    SingleInfoBook: InfoQuest | null;
    postBooking: BookingPostData | null;
    userBookInfo: BookingQuest[];
    error: string | null;
}

const initialState: InitialState = {
  genres: 'all-quests',
  difficult: 'any',
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  quests: [],
  quest: null,
  InfoBookingQuest: [],
  SingleInfoBook: null,
  postBooking: null,
  userBookInfo: [],
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuestsDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(changeGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(changeDifficalty, (state, action) => {
      state.difficult = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(getInfoOfQuest, (state, action) => {
      state.quest = action.payload;
    })
    .addCase(changeCurrentPlace, (state, action) => {
      state.SingleInfoBook = action.payload;
    })
    .addCase(getInfoOfBookingQuest, (state, action) => {
      state.InfoBookingQuest = action.payload;
      state.SingleInfoBook = action.payload[0];
    })
    .addCase(postBooking, (state, action) => {
      state.postBooking = action.payload;
    })
    .addCase(getUserInfoOfBooking, (state, action) => {
      state.userBookInfo = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });

});

export default reducer;
