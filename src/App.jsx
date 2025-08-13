import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Shortcut from './components/Shortcut'
import Key from './components/Key'
import Notification from './components/Notification'
import Batch from './components/Batch'
import Graph from './components/Graph'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col w-83 md:w-full md:max-w-full md:pl-5">
        <Header />
        <div className='flex flex-1 flex-col md:flex-row md:w-full'>
          <div className='md:w-150 flex flex-col flex-1 md:p-5 md:pr-30'>
            <Shortcut />
            <Notification />
            <Graph />
          </div>
          <div className='flex flex-col flex-1 gap-5 h-full md:pl-20'>
            <Key />
            <Batch />
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
