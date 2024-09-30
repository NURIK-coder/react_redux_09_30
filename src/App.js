import logo from './logo.svg';
import './App.css';
import Items from './components/Items/items_list';
import { useSelector } from 'react-redux';
import {loadItems} from './store/items/itemActions'
import { useEffect } from 'react';
import {store} from './store/store'
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Layout from './components/layout';
import Main from './components/Main';

function App() {
  return (
   <Main/>
  );
}

export default App;
