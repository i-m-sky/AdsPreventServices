
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';
import { useSelector} from 'react-redux';
import Modal from 'react-modal';
Modal.setAppElement('#root');

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
