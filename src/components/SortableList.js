import React, { useState } from 'react'

const SortableList = () => {
    const [sports, setSports] = useState(

        ["Football", "Basketball", "Tennis", 
        "Golf", "Cricket", "Baseball", "Rugby", 
        "Hockey", "Volleyball", "Badminton", 
        "Table Tennis", "Swimming", "Athletics", 
        "Cycling", "Boxing", "Martial Arts", "Skiing", 
        "Snowboarding", "Surfing"])
  return (
    <div>
        <h1>Favorite Sports</h1>
        <div className='list'>
            {
                sports.map((sport, index) => (
                    <li
                      key={index}
                      className='list-item'
                    >
                        <span>{index}</span>
                        <h3>{sport}</h3>

                    </li>
                ))
            }
        </div>
    </div>
  )
}

export default SortableList
