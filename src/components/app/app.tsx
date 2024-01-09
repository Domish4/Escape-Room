import { Routes, Route, useLocation } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import QuestPage from '../../pages/quest-page/quest-page';
import PrivateRoute from '../private-route/private-route';
import ErrorPage from '../../pages/error-page/error-page';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';


function App(): JSX.Element {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/quest/:id/booking' element={
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        }
        />
        <Route path='reservation' element={
          <PrivateRoute>
            <MyQuestsPage />
          </PrivateRoute>
        }
        />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/quest/:id' element={<QuestPage />} />
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </HelmetProvider>
  );
}

export default App;

