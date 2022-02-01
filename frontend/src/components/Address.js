import React from 'react'

function Address({ handlesubmit, address, handlechange }) {
  return (
    <form onSubmit={(e) => handlesubmit(e)}>
      <input
        type='text'
        placeholder='Your address; Asema-aukio 1, 00100 Helsinki OR Asema-aukio 1 OR 60.170975, 24.939585'
        value={address}
        onChange={(e) => handlechange(e)}
      />
      <button></button>
    </form>
  )
}

export default Address
