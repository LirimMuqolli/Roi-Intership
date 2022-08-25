import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


import { BrowserRouter ,Route } from 'react-router-dom';


import Contact from "./components/contact/Contact"
import CourseHome from "./components/allcourses/CourseHome";
import Home from "./components/home/Home"
import Team from "./components/team/Team"
export default function index() {
  return (
 <BrowserRouter>
 <>
  <Route index element={<Home />} />
  
  <Route path="contact" element={<Contact />} />
  <Route path="courses" element={<CourseHome />} />
  <Route path="team" element={<Team />} />
  
 </>
 </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

