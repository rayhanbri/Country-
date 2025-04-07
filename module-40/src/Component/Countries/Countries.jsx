import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
   
  const [visitedCountries,setVisitedCountries] = useState([])

  const  contries = use(countryPromise)

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
      <ol>
        {
          visitedCountries.map(country=> <li>{country.name.common}</li>)
        }
      </ol>
      
      <div className='countries'>
      {
        contries.map(country=><Country 
          key={country.cca3} 
          handleVisitedCountries={handleVisitedCountries}
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