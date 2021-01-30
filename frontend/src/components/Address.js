import React from 'react'

function Address({ handlesubmit, address, handlechange }) {
  return (
    <form onSubmit={(e) => handlesubmit(e)}>
      <input
        type='text'
        placeholder='Address : Asema-aukio 1, 00100 Helsinki OR Asema-aukio 1 OR 60.1709, 24.941'
        value={address}
        onChange={(e) => handlechange(e)}
      />
    </form>
  )
}

export default Address
