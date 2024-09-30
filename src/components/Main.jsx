import { useSelector } from 'react-redux';
import {loadItems} from '../store/items/itemActions'
import { useEffect } from 'react';
import {store} from '../store/store'
import Header from './header/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Layout from './layout';
import Episodes from '../pages/episodes';
import Character from '../pages/charactes';
import Error from '../pages/errorPage'

function Main(){
const state = useSelector((state)=>state)
  const itemsInfo = state.itemsInfo.items

  useEffect(()=>{
    store.dispatch(loadItems())
  }, [])
  return (
    <>
    <h1>Main</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route
        path='/episodes'
        element={<Episodes/>}
        />
        <Route
        path='/characters'
        element={<Character/>}
        />
        <Route
        path='*'
        element={<Error/>}
        />
      </Route>
  
    </Routes>
    </BrowserRouter>
    
    </>
    
  );
}
export default Main;