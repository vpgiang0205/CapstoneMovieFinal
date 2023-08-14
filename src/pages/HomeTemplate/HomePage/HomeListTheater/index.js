import React from 'react'

export default function HomeListTheater(props) {
  const { theater } = props
  console.log(theater);

  return (
    
    <div className='container'>
      <img src={theater.logo} className='w-50' />
    </div>
  )
}
