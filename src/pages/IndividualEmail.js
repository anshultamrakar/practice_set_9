import React from 'react'
import { useParams} from "react-router-dom"
 
const IndividualEmail = () => {
    let {id } = useParams()
    console.log(id)
  return (
    <div>
        <h3>Individual Email</h3>
    </div>
  )
}

export default IndividualEmail