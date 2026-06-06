import { useEffect, useState } from 'react'
import axios from './api/AxiosConfig';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Mainroutes from './routes/Mainroutes';
import Nav from './components/Nav';
import { asynclaodproduct } from './store/product/ProductAction';
import { store } from './store/Store';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(asynclaodproduct());
  },[]);
  
  return (
    <div className='w-full min-h-screen flex flex-col bg-slate-50 text-slate-900 relative selection:bg-indigo-100 selection:text-indigo-900 z-0'>
      <Nav />
      <div className="flex-1 w-full mx-auto relative z-10">
        <Mainroutes />
      </div>
    </div>
  )
}

export default App;
