<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';


=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersAction } from "./redux/actions";
import Profile from "./components/Profile";
>>>>>>> 07b243eef56f41b11ae76d44ec09287257131c49

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(getUsersAction(res['0']));
      })
      .catch((err) => console.error(err));
  };

  return (
    <BrowserRouter>
    <div className="App">
<<<<<<< HEAD
      <MyNavbar/>
=======
      <BrowserRouter>
        <Routes>
          <Route path="/user/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 07b243eef56f41b11ae76d44ec09287257131c49
    </div>
    </BrowserRouter>
  );
}

export default App;
