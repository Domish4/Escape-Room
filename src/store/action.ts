import {createAction} from '@reduxjs/toolkit';
import { QuestType } from '../types/quest';
import { BookingQuest, InfoQuest } from '../types/booking-quest';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeGenres = createAction<string>('quest/changeGenre');
export const changeDifficalty = createAction<string>('quest/changeDifficalty');

export const requireAuthorization = createAction<AuthorizationStatus>('user/authorizationStatus');


export const loadQuests = createAction<QuestType[]>('data/getQuest');
export const getInfoOfQuest = createAction<QuestType>('data/getInfo');

export const getInfoOfBookingQuest = createAction<InfoQuest>('data/getInfoBooking');
export const postBooking = createAction<BookingQuest>('data/postBooking');
export const getUserInfoOfBooking = createAction<BookingQuest[]>('user/userBooking');

export const deleteBooking = createAction<string>('user/deleteBooking');

export const redirectToRoute = createAction<string>('data/redirectToRoute');

export const setQuestsDataLoading = createAction<boolean>('data/loading');

export const setError = createAction<string | null>('data/setError');

export const setUserData = createAction<UserData>('user/userData');
