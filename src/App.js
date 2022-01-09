import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
 const [punkListData, setPunkListData] = useState([])

 useEffect(() => {
   const getMyNfts = async () => {
    const openseaData = await axios.get(
        'https://testnets.opensea.io/assets/0x064f4b352ca6182e26f5feefecb16beb41bdc6b6/0'
    //  'https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20'
    //  'https://testnets-api.opensea.io/assets?assets_contract_address=0x064F4B352Ca6182e26f5FeEfeCB16BeB41BDC6B6&order_direction=asc'
     )
     console.log(openseaData.data.assets)
   }

   return getMyNfts()
 }, [])

 
  return (
    <div className='app'>
      <Header />
      <CollectionCard
       id={0} 
       name= {'Marco Mohawk'} 
       traits={[{ 'value': 8 }]} 
      image= 'https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'  
      />
  </div>
  )
}

export default App;
