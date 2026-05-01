
import { Suspense} from 'react'
import './App.css'
import Banner from './components/Navbar/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Package from './components/Package/Package'
import Stats from './components/Stats/Stats'
import Tools from './components/Tools/Tools'
import DigiTools from './components/DigiTools/DigiTools'
import { useState } from 'react'

const toolsPromise=fetch('tools.json')
.then(res=>res.json());
const packagePromise=fetch('pricing.json')
.then(res=>res.json());

function App() {
  const [carts,setCarts]= useState ([]);

  return (
    <>
     <Navbar carts={carts}></Navbar>
     <Banner></Banner>
     <Stats></Stats>
     <DigiTools toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}></DigiTools>
     <Tools></Tools>
     <Suspense>
     <Package packagePromise={packagePromise}></Package>

     </Suspense>
    </>
  )
}

export default App
