//REACT
import {ToastContainer} from 'react-toastify'


//COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

//ROUTES
import { Outlet } from 'react-router-dom'

//CSS
import './App.css'
import 'react-toastify/ReactToastify.css'

function App() {

  return (
    <div className='App'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
