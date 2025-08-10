import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Shortcut from './components/Shortcut'
import Key from './components/Key'
import Notification from './components/Notification'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col w-83 md:w-full md:max-w-full">
        <Header />
        <div className='flex flex-1 flex-col md:flex-row md:w-full'>
          <div className='md:w-150 flex flex-col flex-1 md:p-5'>
            <Shortcut />
            <Notification />
          </div>
          <div className='flex flex-col flex-1 md:pl-5'>
            <Key />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
