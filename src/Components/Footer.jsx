import React from 'react';

const Footer = () => {
    return (
     
        <div className=' bg-black text-white p-10 pt-20'>
          <div className='flex justify-center py-8'>
          <img src="images/logo-footer.png" alt="" />
        </div>
         <footer className=" footer pb-4">
        
         
  <nav>
    <h6 className="footer-title text-xl">About us</h6>
    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title text-xl">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <form>
    <h6 className="footer-title text-xl">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="input input-bordered join-item" />
        <button className="btn bg-gradient-to-l from-pink-300 to-orange-300  join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>

</footer>
<footer className="footer footer-center border-base-300 border-t bg-black text-white">
  <aside>
    <p className='pt-4'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
      
        
    );
};

export default Footer;