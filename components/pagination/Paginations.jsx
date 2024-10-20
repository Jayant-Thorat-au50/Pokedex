import React from 'react'
import './pagination.css'

function Paginations({navtype,disabled,onclick}) {
    return (
        <button
        className="btn  fw-bold border pagination border-2 mx-2 border-dark px-3"
       disabled={disabled}
       onClick={onclick}
     
      >
    
    
    {navtype}


      </button>
    )
}

export default Paginations


