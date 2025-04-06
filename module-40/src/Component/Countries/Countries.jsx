import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
  const  contries = use(countryPromise)
  console.log(contries)
  return (
    <div >
      <h1>travelling countries:{contries.length}</h1>
      
      <div className='countries'>
      {
        contries.map(country=><Country key={country.cca3}  country={country}></Country>)
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