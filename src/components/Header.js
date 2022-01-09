import React from 'react'
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'
import seearchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
    <div className='header'>

       <div className='punklogo'>
           <img src={punklogo} className= 'punklogo' alt='' />
       </div>

       <div className='searchBar'>
           <div className='searchContainer'>
               <img src={seearchIcon} className= 'searchIcon' alt='' />
           </div>
           <input
                className= 'searchInput'
                placeholder='Collection, item or user ...'
            />
       </div>
       <div className= 'headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
        </div>

        <div className= 'headerActions'>
            <div className='themeSwitchContainer'>
                <img src= {themeSwitchIcon} />
        </div>
    </div>

    <div className= 'loginButton'>
        Get In
    </div>

    </div>
    )
}

export default Header
