import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className='flex'>
      <Sidebar />
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}/>
    </div>
  )
}

export default App
