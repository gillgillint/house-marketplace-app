import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Explore from './Pages/Explore';
import Offers from './Pages/Offers';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Category from './Pages/Category';
import ForgotPassword from './Pages/ForgotPassword';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';
import CreateListing from './Pages/CreateListing';
import Listing from './Pages/Listing';
import Contact from './Pages/Contact';
import EditListing from './Pages/EditListing';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
        />
        <Route path='/contact/:landlordId' element={<Contact/>}/>
        <Route path='/edit-listing/:listingId' element={<EditListing/>}/>
      </Routes>
      <Navbar />
      <ToastContainer />
    </>
  );
}

export default App;
