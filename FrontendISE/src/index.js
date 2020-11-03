import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import './Static/styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanderView from './Components/MainPage/LanderView';
import ActivityMain from './Components/Activity/ActivityMain';
import CourseListView from './Components/Course/CourseListView';

export const BACKEND_HOST = "localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <LanderView></LanderView>
    </Route>
    <Route path="/login">
      <App></App>
    </Route>
    <Route path="/activities">
      <ActivityMain></ActivityMain>
    </Route>
    <Route path="/courses">
      <CourseListView />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
