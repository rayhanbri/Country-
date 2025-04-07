import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
   
  const [visitedCountries,setVisitedCountries] = useState([])
  const [visitedFlags,setVisitedFlags]=useState([]);

  const  contries = use(countryPromise)


  const handleVisitedFlags=(flag)=>{
    // console.log('flag asche',flag)
    const  newVisitedFlags= [...visitedFlags,flag];
    setVisitedFlags(newVisitedFlags)
  }



  const handleVisitedCountries=(country)=>{
    //  console.log('visited country clicked',country.name.common);
    const newVisitedCountries = [...visitedCountries,country];
     setVisitedCountries(newVisitedCountries)
  }


  // console.log(contries)
  return (
    <div >
      <h1>travelling countries:{contries.length}</h1>
      <h3>Traveled so far :{visitedCountries.length}</h3>
      <div className='visited-flags-container'>
        {
          visitedFlags.map((flag,index) => <img  key={index} src={flag}></img>)
        }
      </div>
      <ol>
        {
          visitedCountries.map(country=> <li  key={country.cca3}> {country.name.common}</li>)
        }
      </ol>
      
      <div className='countries'>
      {
        contries.map(country=><Country 
          key={country.cca3} 
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlags={handleVisitedFlags}
           country={country}></Country>)
      }
      </div>
      
    </div>
  );
};

export default Countries;


// practice 


// import React, { use } from 'react';
// import Country from '../Country/Country';

// const Countries = ({countriesPromise}) => {
//   const countrypromise = use(countriesPromise)
  
//   return (
//     <div>
//       <h1>travelling Countries:{countrypromise.length}</h1>
//       {
//         countrypromise.map(country => <Country country={country}></Country>)
//       }
//     </div>
//   );
// };

// export default Countries;