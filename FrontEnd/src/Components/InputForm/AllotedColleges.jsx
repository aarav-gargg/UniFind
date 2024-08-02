import React from 'react'
import CollegeDisplay from './CollegeDisplay'
import { useLocation , Link} from 'react-router-dom';

const AllotedColleges = () => {
    const location = useLocation();
    const { colleges } = location.state || {};


    return (
        <>
            {colleges.length === 0 &&
            <div>  <div className="allotedCollegesContainer">
            <div className="emptyStateContainer">
            <h1 className="zeroLength">No result for you! But don't let your guard down start hustling again.</h1>
                <h1 className="zeroLength">Better Luck Next Time</h1>
            </div>
            <button className="modifyBtn">
               <Link to="/CollegePredictor"> Modify Form</Link></button></div>
            </div>}
            {colleges.length !== 0 && <div>
                <h2 className='allotedHeading'>We've crunched the numbers! Based on your rank, these colleges are great options for you to consider.</h2>
                <div className='collegeDisplay'>
                    {colleges && colleges.map((college, index) => (
                        <CollegeDisplay key={index} college={college} />
                    ))}
                </div>
            </div>
            }

        </>
    )
}



export default AllotedColleges
