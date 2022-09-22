import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "./redux/actions";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.loggedUser.token);
  useEffect(() => {
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUsers = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjMTZiOTM0ZDQ0ODAwMTVmZDY5MTIiLCJpYXQiOjE2NjM4MzUyNjUsImV4cCI6MTY2NTA0NDg2NX0.UUF4IRbf2rKB0s63nN5cBEcxOLwxARxCI5d96qs8Iss`      
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('users: ',res);
        dispatch(getUsersAction(res));
      })
      .catch((err) => console.error(err));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/user/:id" element={<Profile />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
