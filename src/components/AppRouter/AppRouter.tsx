import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from '../../pages/About';
import { Chats } from '../../pages/Chats';
import { Home } from '../../pages/Home';
import { ChatList } from '../Chatlist/Chatlist';
import { Header } from '../Header/Header';
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
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>

          <Route path="about" element={<AboutWithConnect />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
