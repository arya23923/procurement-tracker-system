import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import { useState } from 'react';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Header />
    </div>
  )
}

export default App
