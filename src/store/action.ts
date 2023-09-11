import {createAction} from '@reduxjs/toolkit';
import { QuestType } from '../types/quest';
import { BookingPostData, BookingQuest, InfoQuest} from '../types/booking-quest';
import { AuthorizationStatus } from '../constants/enums';
import { UserData } from '../types/user-data';

export const changeGenres = createAction<string>('quest/changeGenre');
export const changeDifficalty = createAction<string>('quest/changeDifficalty');
export const changeCurrentPlace = createAction<InfoQuest>('quest/changePlace');

export const requireAuthorization = createAction<AuthorizationStatus>('user/authorizationStatus');


export const loadQuests = createAction<QuestType[]>('data/getQuest');
export const getInfoOfQuest = createAction<QuestType>('data/getInfo');

export const getInfoOfBookingQuest = createAction<InfoQuest[]>('data/getInfoBooking');
export const getSingleBookingQuest = createAction<InfoQuest>('data/getSingleBookingQuest');

export const postBooking = createAction<BookingPostData>('data/postBooking');
export const getUserInfoOfBooking = createAction<BookingQuest[]>('user/getUserBooking');

export const deleteBooking = createAction<string>('user/deleteBooking');

export const redirectToRoute = createAction<string>('data/redirectToRoute');

export const setQuestsDataLoading = createAction<boolean>('data/loadingQuests');

export const setError = createAction<string | null>('data/setError');

export const setUserData = createAction<UserData>('user/setUserData');
