import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProfilePage from './pages/EditProfilePage';
import ExplorePage from './pages/ExplorePage';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/accounts/edit" element={<EditProfilePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/" element={<FeedPage />} />
          <Route path="/accounts/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/p/:postId" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/accounts/emailsignup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}