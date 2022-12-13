import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './tees.css'

const Tees = () => {

    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);



    return (
        <div className='tee-display'>
            {teeList.map((tee) => (
                <div key={tee.id}>
                    <Image src={tee.imageUrl} alt={tee.name} className='tee-img' fluid />
                    <div>{tee.name}</div>
                    <div>{tee.brand}</div>
                    <div>${tee.price}</div>
                </div>
                )
            )}
        </div>
    )
}

export default Tees;
