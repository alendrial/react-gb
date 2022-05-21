import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from '../../pages/About';
import { Articles } from '../../pages/Articles';
import { Chats } from '../../pages/Chats';
import { Home } from '../../pages/Home';
import { SignIn } from '../../pages/SingIn';
import { SignUp } from '../../pages/SingUp';
import { ChatList } from '../Chatlist/Chatlist';
import { Header } from '../Header/Header';
import { PrivateRoute } from '../PrivateRouter/PrivateRouter';
import { PublicRoute } from '../PublicRouter/PublicRouter';
// import { Profile } from '../../pages/Profile';

// const Chats = React.lazy(() =>
//   import('../../pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );

const Profile = React.lazy(() =>
  Promise.all([
    import('../../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="profile"
            element={<PrivateRoute component={<Profile />} />}
          />

          <Route path="chats" element={<PrivateRoute />}>
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>

          <Route path="about" element={<AboutWithConnect />} />
          <Route path="articles" element={<Articles />} />

          <Route path="signup" element={<SignUp />} />
          <Route
            path="signin"
            element={<PublicRoute component={<SignIn />} />}
          />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
