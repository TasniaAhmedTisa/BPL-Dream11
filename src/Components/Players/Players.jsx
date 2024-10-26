import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";




const Players = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);

    const COIN_REQUIREMENT = 5;

    useEffect(() => {
        fetch('/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.error("Error fetching players:", err));
    }, []);

    const toggleView = (view) => {
        setShowAvailable(view === 'available');
    };

    const selectPlayer = (player) => {
        if (selectedPlayers.some(selected => selected.playerId === player.playerId)) {
            toast.error("Player is already selected.");
            return;
        }

        if (coins < COIN_REQUIREMENT) {
            toast.error("Not enough coins to select this player.");
            return;
        }

        setSelectedPlayers([...selectedPlayers, player]);
        setCoins(coins - COIN_REQUIREMENT); 
        toast.success(`${player.name} has been added to your team!`);
    };
    const removePlayer = (playerId) => {
        setSelectedPlayers(selectedPlayers.filter(player => player.playerId !== playerId));
       
    };

    return (
        <div className='m-10'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">
                        {showAvailable ? "Available Players" : "Selected Players"}
                    </h2>
                </div>
                <div className="flex-none join">
                    <button className="btn join-item" onClick={() => toggleView('available')}>
                        Available
                    </button>
                    <button className="btn join-item" onClick={() => toggleView('selected')}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {showAvailable ? (
                    players.map(player => (
                        <div key={player.playerId} className='m-10'>
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={player.image} alt="Player" className="rounded-xl" />
                                </figure>
                                <div>
                                    <h2 className="card-title p-5">
                                    <FaUserAlt />
                                    {player.name}
                                    </h2>
                                    <div className='flex justify-between px-5'>
                                        <p><i className="fa-solid fa-flag p-1"></i> {player.country}</p>
                                        <button className="btn">{player.role || "All Rounder"}</button>
                                    </div>
                                    <div className="divider"></div>
                                    <div className='p-5'>
                                        <p className='font-bold'>Rating</p>
                                        <div className='flex justify-between pt-5'>
                                            <p>{player.battingType}</p>
                                            <p>{player.bowlingType}</p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <p>Price: {player.biddingPrice}</p>
                                            <button className='btn' onClick={() => selectPlayer(player)}>Choose Player</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="grid grid-cols-1 gap-4 w-full p-5">
                    {selectedPlayers.map(player => (
                        
                        <div key={player.playerId} className='flex justify-between p-5 border rounded-xl border-gray-300 gap-5'>
                            <div className='w-40'>
                                <img className='rounded-xl' src={player.image} alt="" />
                            
                            </div>
                            <div >
                            <h2 className="text-xl font-bold">{player.name}</h2>
                            <p> {player.role || "All Rounder"}</p>
                            </div>
                            <div>
                            <button className='btn' onClick={() => removePlayer(player.playerId)}><MdDelete />
                            </button>

                            </div>
                            
                        </div>
                    ))}
                    <div className='border border-black m-2 w-40 rounded-xl p-2'>
                    <button className='btn border-green-600 bg-lime-300 w-full rounded-xl'>Add More</button>

                    </div>
                                           

                </div>
                )}
            </div>
        </div>
    );
};

export default Players;
