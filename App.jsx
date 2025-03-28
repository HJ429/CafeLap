import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Cafemain from './Cafemain';
import Nav from './Nav';
import CommunityPage from './CommunityPage';

import Login from './login.jsx';
import Signup from './Signup';

import './Cafemain.css';
import './CommunityPage.css';
import './Nav.css'
import './login.css'


function App(){
  return (
    <Signup/>
  );
};

export default App;
