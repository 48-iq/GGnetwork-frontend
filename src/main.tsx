import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/register_page/RegisterPage'
import BackgroundLayer from './layers/background_layer/BackgroundLayer'
import LoginPage from './pages/login_page/LoginPage'
import MainLayer from './layers/main_layer/MainLayer'
import ProfilePage from './pages/profile_page/ProfilePage'
import MainPage from './pages/main_page/MainPage'
import MessagesPage from './pages/messages_page/MessagesPage'
import ForumPage from './pages/forum_page/ForumPage'
import FriendsPage from './pages/friends_page/FriendsPage'
import GroupsPage from './pages/groups_page/GroupsPage'
import GamesPage from './pages/games_page/GamesPage'
import TutorialsPage from './pages/tutorials_page/TutorialsPage'
import SettingsPage from './pages/settings_page/SettingsPage'
import LogoutPage from './pages/logout_page/LogoutPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BackgroundLayer/>}>
          <Route index element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='*' element={<LoginPage/>}/>
          <Route path='/' element={<MainLayer/>}>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/messages' element={<MessagesPage/>}/>
            <Route path='/forum' element={<ForumPage/>}/>
            <Route path='/friends' element={<FriendsPage/>}/>
            <Route path='/groups' element={<GroupsPage/>}/>
            <Route path='/games' element={<GamesPage/>}/>
            <Route path='/tutorials' element={<TutorialsPage/>}/>
            <Route path='/settings' element={<SettingsPage/>}/>
            <Route path='/logout' element={<LogoutPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
