import React from 'react';

const Header = () => {
    const coin = 0;
    return (
    <div className='flex justify-between gap-80 m-10'>

       <div class="navbar-start">
        <img src="../assets.logo.png" alt="logo" />
        </div>
      
  
      <div class="navbar-end space-x-14 ml-8 ">
      <a href="">Home</a>
      <a href="">Fixture</a>
      <a href="">Teams</a>
      <a href="">Schedules</a>
      <button class="btn">{coin} coins </button>
    
    
       </div>
        </div>
    );
};

export default Header;