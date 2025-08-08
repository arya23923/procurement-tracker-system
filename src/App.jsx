import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Shortcut from './components/Shortcut'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Header />
        <Shortcut />
      </div>
    </div>
  )
}

export default App
