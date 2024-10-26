

// eslint-disable-next-line react/prop-types
const Header = ({ coins }) => {
    
    return (
    <div className='flex justify-between gap-1 lg:gap-80 m-10'>

       <div className="navbar-start">
        <img src="images/logo.png" alt="logo" />
        </div>
      
  
      <div className="navbar-end space-x-10 ml-8 ">
      <a href="">Home</a>
      <a href="">Fixture</a>
      <a href="">Teams</a>
      <a href="">Schedules</a>
      <button className="btn">{coins} coins <i className="fa-brands fa-bitcoin"></i> </button>
    
    
       </div>
        </div>
    );
};

export default Header;