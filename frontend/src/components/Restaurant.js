import React from 'react'
import { Blurhash } from 'react-blurhash'
import './../App.css'

function Restaurant({ restaurant }) {
  return (
    <div className='restaurant'>
      {restaurant &&
        [restaurant].map(
          ({ blurhash, launch_date, location, name, online, popularity }) => (
            <div key={blurhash}>
              <a href='//#endregion'>
                <div className='restaurant-blurhash'>
                  <Blurhash
                    hash={blurhash}
                    width={300}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                    margin={2}
                  />
                </div>
              </a>

              <div className='restaurant-info'>
                <h3>{name}</h3>
                <h5 style={{ color: online ? 'green' : 'red' }}>
                  {online ? 'Open' : 'Closed'}
                </h5>
              </div>
            </div>
          )
        )}
    </div>
  )
}

export default Restaurant
