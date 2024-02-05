import React from 'react'
import UserTemplate from './UserTemplate'
export default function Landing() {
    const users = 
        [
            {
                name : 'Emran',
                backgroundColor : 'yellow'
            },
            {
                name : 'Mahran',
                backgroundColor : 'green'
            },
            {
                name : 'Ahmad',
                backgroundColor : 'pink'
            },
            {
                name : 'Kareem',
                backgroundColor : 'blue'    
            },

        ]
    
  return (
    <div className='Landing-page'>
        <h1>Whos Watching ? </h1>
        {
            users.map((user,index)=> <UserTemplate user={user} key={index} />)
        }

    </div>
  )
}
