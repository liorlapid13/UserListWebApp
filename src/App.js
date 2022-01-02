import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsersPage from "./pages/AllUsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBm1xEZt9Mxeb6MvfTIFyQw-Etp77eUeVs",
  authDomain: "moveo-home-assignment-5216c.firebaseapp.com",
  projectId: "moveo-home-assignment-5216c",
  storageBucket: "moveo-home-assignment-5216c.appspot.com",
  messagingSenderId: "232842034159",
  appId: "1:232842034159:web:10f270392bee9f60fa541a",
});

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:username" element={<UserDetailsPage />} />
        <Route path="/" element={<AllUsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
