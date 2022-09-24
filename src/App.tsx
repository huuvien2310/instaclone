import React from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import PostModal from "./components/post/PostModal";
import EditProfilePage from "./pages/EditProfilePage";
import ExplorePage from "./pages/ExplorePage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";

interface CustomizedState {
  modal: boolean;
}

export default function App() {
  const navigationType = useNavigationType();
  const location = useLocation();
  const prevLocation = React.useRef(location);
  const state = location.state as CustomizedState;
  const modal = location.state != null && state.modal;

  React.useEffect(() => {
    if (navigationType !== "POP" && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal, navigationType]);

  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Routes location={isModalOpen ? prevLocation.current : location}>
        <Route path="/accounts/edit" element={<EditProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/accounts/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/p/:postId"
          element={<PostPage />}
        />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/accounts/emailsignup" element={<SignUpPage />} />
      </Routes>
      {isModalOpen && <Routes><Route path="/p/:postId" element={<PostModal />} /></Routes>}
    </>
  );
}
