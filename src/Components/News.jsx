import React from 'react';

const News = () => {
    return (
        <div className='text-center bg-transparent p-10'>
              <h6 class="font-bold text-4xl">Subscribe to our Newsletter</h6>
              <p className='text-xl pt-5'>Get the latest updates and news right in your inbox!</p>
    
         <div class="pt-5">
            <input type="text"
              placeholder="username@site.com"
              class="input input-bordered pl-5 " />
             <button class="btn bg-lime-300 pr-5">Subscribe</button>
         </div>
             
        </div>
    );
};

export default News;