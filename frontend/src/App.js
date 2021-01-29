import React, { useState, useEffect } from 'react'
import './App.css'
import { Discovery } from './components/Discovery'
import axios from 'axios'

function App() {
  const [data, setData] = useState()

  const [query, setQuery] = useState('lat=60.1709&lon=24.941')
  const url = `http://localhost:3001/api/discovery?${query}`

  useEffect(() => {
    const fechData = async () => {
      axios
        .get(url)
        // .then((res) => res.json())
        .then((resource) => setData(resource.data))
        .catch((error) => console.error(error))
    }
    fechData()
  }, [url])

  return (
    <div className='app'>
      <h1> Wolt App</h1>
      <Discovery {...{ data }} />
    </div>
  )
}

export default App
