import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
  // console.log(country.population)
  const [visited,setVisited] =useState(false)


  const  handleVisited =()=>{
    // if(visited === true){
    //   setVisited(false)
    // }
    // else{
    //   setVisited(true)
    // }
    setVisited(!visited)
    
  }

  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <h2>Name:{country.name.common}</h2>
     <img src={country.flags.png} alt="" />
     <p>Independence:{country.independent? 'Free':'Not Free'}</p>
     <p>Population:{country.population}</p>
     <button className={visited?'btn-visited':'btn-not-visited'} onClick={handleVisited} >{
      visited ? 'visited' : "not visited"
      }</button>
 
    </div>
  );
};

export default Country;

 
     


     
       



//  practice  


// import React from 'react';

// const Country = ({country}) => {
//   return (
//     <div>
//       <h1>Name:{country.name.common}</h1>
//     </div>
//   );
// };

// export default Country;