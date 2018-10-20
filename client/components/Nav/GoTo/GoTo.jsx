import React from 'react'
import {Link} from 'react-router-dom'

const GoTo = (props) => {
  return (
    <Link to={`live/${props.route}`}>
      <button className='btn btn-secondary' type='button'
        disabled={props.disable}>
        {props.text}
      </button>
    </Link>
  )
}

export default GoTo
