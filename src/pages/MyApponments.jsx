import React, { useContext } from 'react'

const MyApponments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
       <p>My appointments</p> 
       <div></div>
    </div>
  )
}

export default MyApponments