import { useEffect, useState } from "react";

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect( () => {
        fetch('players.json')
        .then(res=> res.json())
        .then(data => setPlayers(data))
    }, [] )
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            {
                players.map(player=>(
                          <div key={players.playerId} className='m-10'>

        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={player.image}
      alt="players Image"
      className="rounded-xl" />
  </figure>
  <div>
    <h2 className="card-title p-5"><i class="fa-solid fa-user"></i>{player.name} </h2>
    <div className='flex justify-between px-5'>
        <p><i className="fa-solid fa-flag p-1"></i>{player.country} </p>
        <button className='btn'>All Rounder</button>


    </div>
    <div className="divider"></div>
    <div className='p-5'>
    <p className='font-bold'>Rating</p>
    <div className='flex justify-between pt-5'>
       <p>{player.battingType} </p>
       <p>{player.bowlingType} </p>
    </div>
   
    <div className="flex justify-between pt-5">
        <p>Price:{player.biddingPrice} </p>
      <button className="btn">Choose Players</button>
    </div>
    </div>
  </div>
</div>
            </div>

        </div>


                )

                )
            }
        </div>
    );
};

export default Players;