
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';
import { useSelector} from 'react-redux';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router-dom';
Modal.setAppElement('#root');
toast.configure()
const App = () => {
 
const { user,loading} = useSelector((state) => state.authReducer);

  return (
    <>
     <Header/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App;
