
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Navbar/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Package from './components/Package/Package'
import Stats from './components/Stats/Stats'
import Tools from './components/Tools/Tools'


const packagePromise=fetch('pricing.json')
.then(res=>res.json());

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Stats></Stats>
     <Tools></Tools>
     <Suspense>
     <Package packagePromise={packagePromise}></Package>

     </Suspense>
    </>
  )
}

export default App
