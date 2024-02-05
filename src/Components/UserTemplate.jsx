import React from 'react'
import '../CssFiles/UserTemplate.css'
import { Link } from 'react-router-dom'

export default function UserTemplate({user}) {
  return (
    <div className='User-Template'>
        
        <Link to='/Catalog'>{user.name}</Link>
    </div>
  )
}
