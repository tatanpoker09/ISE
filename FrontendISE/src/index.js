import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import './Static/styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanderView from './Components/MainPage/LanderView';
import ActivityView from './Components/Activity/ActivityView';
import CourseListView from './Components/Course/CourseListView';
import CourseView from './Components/Course/CourseView';
import ReportView from "./Components/Reports/ReportView";

export const BACKEND_HOST = "localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/"><LanderView /></Route>
    <Route path="/login">
      <App></App>
    </Route>
    <Route path="/courses"><CourseListView /></Route>
    <Route path="/course"> <CourseView /></Route>
    <Route path="/activities"><ActivityView /></Route>
    <Route path="/report"><ReportView /></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
