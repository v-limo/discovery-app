import React, { useState, useEffect } from 'react'
import './App.css'

import Geocode from 'react-geocode'
import axios from 'axios'

import { Discovery } from './components/Discovery'
import Address from './components/Address'

import logo from './img/logo.jpeg'

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
    //safe? absolutely NO!
    Geocode.setApiKey('AIzaSyDAcZPtFk1kaiV3Cy2HOltxOQiANNHXZP4')
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        let location = `lat=${lat}&lon=${lng}`
        setQuery(location)
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
        .then((resource) => setData(resource.data))
        .catch((error) => console.error(error))
    }
    fechData()
  }, [query])

  return (
    <div className='app'>
      <header>
        <img src={logo} alt='logo' />
        <h1> Wolt Summer 2021 Internship </h1>
        <div>
          <nav>
            <ul role='tree'>
              <li role='treeitem'>
                <a href='/'>Home</a>
              </li>
              <li role='treeitem'>
                <a href='/'>BlogList</a>
              </li>
              <li role='treeitem'>
                <a href='/'>Nowhere</a>
              </li>
              <li role='treeitem'>
                <a href='/'>Nowhere</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Address {...{ handlesubmit, address, handlechange }} />
      <Discovery {...{ data, address }} />{' '}
    </div>
  )
}

export default App
