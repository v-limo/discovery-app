import React, { useState, useEffect } from 'react'
import './App.css'

import Geocode from 'react-geocode'
import axios from 'axios'

import { Discovery } from './components/Discovery'
import Address from './components/Address'

import logo from './img/wolt.jpg'

function App() {
  const [data, setData] = useState()

  const [query, setQuery] = useState('lat=60.1709&lon=24.941')
  const [address, setAddress] = useState('')

  const handlechange = (e) => {
    setAddress(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    Geocode.setLanguage('en')
    Geocode.setRegion('fi')
    Geocode.setApiKey('AIzaSyDAcZPtFk1kaiV3Cy2HOltxOQiANNHXZP4')
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        console.log(query)
        let location = `lat=${lat}&lon=${lng}`
        setQuery(location)
        console.log(lat, lng)
        console.log(query)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  useEffect(() => {
    const fechData = async () => {
      let url = `http://localhost:3001/api/discovery?${query}`
      axios
        .get(url)
        // .then((res) => res.json())
        .then((resource) => setData(resource.data))
        .catch((error) => console.error(error))
    }
    console.log(query)
    fechData()
  }, [query])

  return (
    <div className='app'>
      <h1>
        <img src={logo} alt='logo' /> Wolt Summer 2021 Internship
      </h1>

      <Address {...{ handlesubmit, address, handlechange }} />
      <Discovery {...{ data }} />
    </div>
  )
}

export default App
