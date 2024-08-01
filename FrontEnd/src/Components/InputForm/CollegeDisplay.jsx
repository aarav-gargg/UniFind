// import React from 'react'
import './collegeDisplay.css'
function CollegeDisplay({college}) {
  return (
    <div>
      
        

        <div className="gradient-cards">
            <div className="card69">
            <div className="container-card bg-green-box">
                <p className="card-title">{college.Institute}</p>
                <p>{college.Program}</p>
            </div>
            </div>

            
        
        </div>
    </div>
  )
}

export default CollegeDisplay
// name officialsite cutoff-range location  govt