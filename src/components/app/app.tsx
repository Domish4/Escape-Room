import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import QuestPage from '../../pages/quest-page/quest-page';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/booking' element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <BookingPage />
          </PrivateRoute>
        }
        />
        <Route path='myQuests' element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyQuestsPage />
          </PrivateRoute>
        }
        />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/quest/:id' element={<QuestPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

