import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import {getInfoOfBookingQuest, getInfoOfQuest, getUserInfoOfBooking, loadQuests, postBooking, redirectToRoute, requireAuthorization, setError, setQuestsDataLoading, setUserData } from './action';
import { AppRoute, AuthorizationStatus } from '../constants/enums';
import { AppDispatch, State } from '../types/state';
import {AxiosInstance} from 'axios';
import { QuestType } from '../types/quest';
import { AuthData, UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { BookingData, BookingPostData, BookingQuest, InfoQuest } from '../types/booking-quest';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TIMEOUT_SHOW_ERROR } from '../constants/const';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<UserData>(AppRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setUserData(data));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setQuestsDataLoading(true));
      const {data} = await api.get<QuestType[]>(AppRoute.Quests);
      dispatch(setQuestsDataLoading(false));
      dispatch(loadQuests(data));
    } catch(err) {
      toast.error('Не удалось загрузить квесты. Попробуйте позже');
      throw err;
    }
  }
);

export const fetchQuestsInfoAction = createAsyncThunk<void, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchQuestInfo',
  async ({id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<QuestType>(`${AppRoute.Quests}/${id}`);
      dispatch(getInfoOfQuest(data));
    } catch(err) {
      toast.error('Не удалось получить информацию о квесте. Попробуйте позже');
      throw err;
    }
  }
);

export const fetchInfoQuestBooking = createAsyncThunk<void, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchInfoQuestBooking',
  async ({id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<InfoQuest[]>(`${AppRoute.Quests}/${id}/booking`);
      dispatch(getInfoOfBookingQuest(data));
    } catch(err) {
      toast.error('Произошла ошибка. Попробуйте позже');
    }
  }
);

export const postBookingAction = createAsyncThunk<BookingPostData, BookingData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/postBooking',
    async ({id, postData}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post<BookingPostData>(`${AppRoute.Quests}/${id}/booking`, postData);
        toast.success('Вы забронировали квест');
        dispatch(postBooking(data));
        return data;
      } catch(err) {
        toast.error('Что-то пошло не так. Попробуйте позже');
        throw err;
      }
    },
  );

export const fetchInfoUserOfBooking = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchInfoQuestBooking',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<BookingQuest[]>(AppRoute.Reservation);
      dispatch(getUserInfoOfBooking(data));
    } catch(err) {
      toast.error('Произошла ошибка. Попробуйте позже');
      throw err;
    }
  }
);

export const deleteBooking = createAsyncThunk<void, {id: string}, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchInfoQuestBooking',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.delete<BookingQuest>(`${AppRoute.Reservation}/${id}`);
    try {
      toast.success('Бронирование успешно удалено. Обновите страницу');
      dispatch(deleteBooking(data));
    } catch(err) {
      toast.error('Произошла ошибка. Попробуйте еще раз');
      throw err;

    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post<UserData>(AppRoute.Login, {email, password});
        dispatch(setUserData(data));
        saveToken(data.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(redirectToRoute(AppRoute.Login));
      } catch(err) {
        toast.error('Что-то пошло не так. Обновите страницу и попробуйте позже');
        throw err;
      }
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(AppRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    },
  );
