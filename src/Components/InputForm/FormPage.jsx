import React from 'react'
import "./FormPage.css"

function FormPage() {
  return (
    <div className='container'>
      <div className="content">
        <h1>
        Get personalized college predictions tailored to you!!!
        </h1>
        <div className="form">
        <select name="country"><option value="usa">United States</option><option value="canada">Canada</option></select>

        </div>

      </div>

    </div>
    
  )
}

export default FormPage
