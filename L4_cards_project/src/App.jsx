import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Ayush Singh' img='https://imgs.search.brave.com/SpmFu8WOWMN3BQnPOzAkpavAagKczLV1Iwh41H3d0ts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0o3/eDFVUUk2YVpJSUNC/dy1KN0pMNHZ6cncz/ZUdqaFJTS0lmLUth/VEVNZWFMNmYtOF83/d0NsRFhVczR3M0tw/dEdkSWcxU2dCX2lj/MkVoS0d4SDZZeDdX/a2xDdGhnRHhlRDhN/Z3V3UjI4U3ducU1u/YlR6Zzg9dzE0NDAt/aDgxMC1uLW51' />
      <Card user='Aman Kumar' img='https://imgs.search.brave.com/hunp3z89jFPkhrORRI6EWaflB2eVIFCiizujkc7D4Fc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY4LzJi/LzYwLzY4MmI2MDRk/NDY2MTg1ZTFhMjM2/OGFhZGQ4NWMwOWNj/LmpwZw' />
      <Card user='Vijay Sharma' img='https://imgs.search.brave.com/78FEyMTUHd9KdSd8kunQNlHjUToyQSfbEsAkNLaDU5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZWVw/YWkub3JnL3N0YXRp/Yy9pbWFnZXMvZG9s/cGhpbjMuc3Zn' />
    </div>
  )
}

export default App