import React from 'react';

const News = () => {
    return (
        <div className='border p-6 rounded-lg ml-40 w-4/5'>
            <div className='text-center bg-gradient-to-r from-blue-100 to-orange-100 rounded-lg  p-10'>
              <h6 className="font-bold text-4xl">Subscribe to our Newsletter</h6>
              <p className='text-xl pt-5'>Get the latest updates and news right in your inbox!</p>
    
         <div className="pt-5">
            <input type="text"
              placeholder="Enter your email"
              className="input input-bordered pl-5 " />
             <button className="btn bg-gradient-to-l from-pink-300 to-orange-300 pr-5">Subscribe</button>
         </div>
             
        </div>
        </div>
    );
};

export default News;