
import { Suspense } from 'react'
// import { Suspense } from 'react'
import './App.css'
// import Countries from './Component/Countries/Countries'
import Countries from './Component/Countries/Countries'


const countryPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())

// const countriesPromise = fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())


function App() {

  return (
    <>
      {/* <h1>hello</h1> */}

      <Suspense fallback={<h1>nadir loading....</h1>}>
      <Countries countryPromise={countryPromise}></Countries>
      </Suspense>

     {/* <Suspense fallback={<h1>nadir loading.....</h1>}>
     <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense> */}
    </>
  )
}

export default App
