import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListIcon from '@material-ui/icons/List';
import './Header.css'
import '../MediaQuery/HeaderQuery.css'


function Header() {

   
    return (
        <div className='header'>

            <div className='header__left'>
              <img src='https://raw.githubusercontent.com/nihal9956/carosel/master/logo.jpeg' alt='logo'/>
            </div>
           <div className='header__right'>
               <div className="header__navlinks">
                <PhoneIcon/>
               <h2>Contact Us</h2>
               </div>
               <div className="header__navlinks">
               <RoomIcon/>
               <h2>Delivery In</h2>
               <ExpandMoreIcon/>
               </div>
               <div className="header__navlinks">
               <h2>Menu</h2>
               <ListIcon/>
               </div>
              
           </div>

           
            
        </div>
    )
}

export default Header
