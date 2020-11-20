import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import './Static/styles/App.scss';
import './Static/styles/Activities.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanderView from './Components/MainPage/LanderView';
import ActivityView from './Components/Activity/ActivityView';
import CourseListView from './Components/Course/CourseListView';
import CourseView from './Components/Course/CourseView';
import CodeView from './Components/Student/CodeView';
import ReportView from "./Components/Reports/ReportView";
import ActivitySelect from "./Components/Activity/ActivitySelect";
import {MoonGameView} from "./Components/Activity/MoonGameView";

export const BACKEND_HOST = "localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/"><LanderView /></Route>
    <Route path="/login"><App></App></Route>
    <Route path="/courses"><CourseListView /></Route>
    <Route path="/course"> <CourseView /></Route>
    <Route path="/activity"><ActivityView /></Route>
    <Route path="/code"><CodeView /></Route>
    <Route path="/select_activity"><ActivitySelect /></Route>
    <Route path="/MoonGame"><MoonGameView /></Route>
    <Route path='/report' component={() => {
      window.location.href = 'http://localhost:3000/pdf-report.pdf';
      return null;
    }}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
