import React from 'react';

const AvailablePlayers = () => {
    return (
      <div className='m-10'>
            <div className="navbar bg-base-100 ">
             <div className="flex-1">
                 <a className="text-2xl font-bold">Available Players
                 </a>
             </div>
             <div className="flex-none join">
             <button className="btn bg-inherit join-item font-bold">
               Available
             </button>
             <button className='btn bg-lime-300 join-item font-bold'>Selected (0)</button>
             </div>
            </div>
            </div>
    )
};

export default AvailablePlayers;