import React from 'react'

export default function TheaterLogo(props) {
  const {theater} = props
  return (
      <img src={theater.logo} />
  )
}
