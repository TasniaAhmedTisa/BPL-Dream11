import React from 'react';

const AvailablePlayers = () => {
    return (
        <div className='m-10'>
            <div class="navbar bg-base-100 ">
             <div class="flex-1">
                 <a class="text-2xl font-bold">Available Players
                 </a>
             </div>
             <div class="flex-none join">
             <button class="btn bg-inherit join-item font-bold">
               Available
             </button>
             <button className='btn bg-lime-300 join-item font-bold'>Selected (0)</button>
             </div>
            </div>
        <div>
            <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="">
    <h2 class="card-title p-5">name</h2>
    <div className='flex justify-between px-5'>
        <p>country</p>
        <button className='btn'>All Rounder</button>


    </div>
    <div class="divider"></div>
    <div className='p-5'>
    <p className='font-bold'>Rating</p>
    <div className='flex justify-between pt-5'>
       <p>Batting type</p>
       <p>balling Type</p>
    </div>
   
    <div class="flex justify-between pt-5">
        <p>Price</p>
      <button class="btn">Choose Players</button>
    </div>
    </div>
  </div>
</div>
            </div>

        </div>
    );
};

export default AvailablePlayers;