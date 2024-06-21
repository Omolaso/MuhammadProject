import {React} from 'react';
import Header from './Vendorcomponent/Header';
import Footer from './Vendorcomponent/Footer';
import AdminHome from '../AdminDashboard/AdminHome';


const  Vendor = () => {
    return(
        <>
        <Header/>
        <AdminHome className='container mx-auto'/>   
        <Footer/>
        </>
    );
}

export default Vendor;