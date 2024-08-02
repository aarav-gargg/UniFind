// import React from 'react'
import './collegeDisplay.css'
function CollegeDisplay({college}) {
  const generateGoogleSearchUrl = (collegeName) => {
    const query = encodeURIComponent(collegeName);
    return `https://www.google.com/search?q=${query}`;
  }; 
  return (
    <div>
        <div className="gradient-cards">
            <div className="card69">
            <div className="container-card bg-green-box">
                <p className="card-title">{college.Institute}</p>
                <p style={{ fontWeight: "bolder" }}>{college.Program}</p>
                <p style={{ fontWeight: "bolder" }}>Closing Rank: {college.closingRank}</p>
                <a href={generateGoogleSearchUrl(college.Institute)} target="_blank" rel="noopener noreferrer" style={{ color: "whitesmoke" }}>
            Visit Official Site
          </a>
            </div>
            </div>

            
        
        </div>
    </div>
  )
}

export default CollegeDisplay
