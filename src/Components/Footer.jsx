import React from 'react';

const Footer = () => {
    return (
        <div>
         <footer class="footer bg-black text-white p-10">
            
        
  <nav>
    <h6 class="footer-title">About us</h6>
    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
  </nav>
  <nav>
    <h6 class="footer-title">Quick Links</h6>
    <a class="link link-hover">Home</a>
    <a class="link link-hover">Services</a>
    <a class="link link-hover">About</a>
    <a class="link link-hover">Contact</a>
  </nav>
  <form>
    <h6 class="footer-title">Subscribe</h6>
    <fieldset class="form-control w-80">
      <label class="label">
        <span class="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div class="join">
        <input
          type="text"
          placeholder="Enter Your Email"
          class="input input-bordered join-item" />
        <button class="btn bg-lime-300 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>

</footer>
<footer class="footer footer-center border-base-300 border-t bg-black text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;