import React from 'react'
import { Blurhash } from 'react-blurhash'
import './../App.css'
import { decode } from 'blurhash'

function Restaurant({ restaurant }) {
  return (
    <div className='restaurant'>
      {restaurant &&
        [restaurant].map(
          ({ blurhash, launch_date, location, name, online, popularity }) => (
            <div>
              <div>
                <Blurhash
                  hash={blurhash}
                  width={300}
                  height={300}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
              </div>
              <p>{name}</p>
              <p>{online ? 'open' : 'closed'}</p>
            </div>
          )
        )}
    </div>
  )
}

export default Restaurant
