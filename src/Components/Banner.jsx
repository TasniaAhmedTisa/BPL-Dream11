import React from 'react';

const Banner = ({ addCoins }) => {
    const handleClaimCredit = () => {
        addCoins(1000000); // Example: Adds 100 coins when the button is clicked
    };
    return (
        <div className='w-11/12 h-full p-20 m-10 bg-gradient-to-r from-blue-100 to-orange-100 bg-black items-center text-center '>
            <div className='flex justify-center'>
            <img className="max-w-full max-h-full" src="images/banner-main.png" alt="Banner Image" />
            </div>
            <h1 className='text-black font-bold text-4xl pt-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-black text-2xl pt-4 pb-6'>Beyond Boundaries Beyond Limits</p>
            <div className='m-1 border-black'>
            <button 
                    className='btn border-double font-bold border-green-500 bg-lime-300 px-6'
                    onClick={handleClaimCredit} // Call the function on button click
                >
                    Claim Free Credit
                </button>
            </div>

        </div>
    );
};

export default Banner;