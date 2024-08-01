import React from 'react'
import CollegeDisplay from './CollegeDisplay'
import { useLocation } from 'react-router-dom';

const AllotedColleges = () => {
    const location = useLocation();
    const { colleges } = location.state || {};


    return (
        <>
            <h2 className='allotedHeading'>We've crunched the numbers! Based on your rank, these colleges are great options for you to consider.</h2>
            <div className='collegeDisplay'>
                {colleges && colleges.map((college, index) => (
                    <CollegeDisplay key={index} college={college} />
                ))}
            </div>

        </>
    )
}

export default AllotedColleges
