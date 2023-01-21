import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';
import './tees.css'

const Tees = () => {

    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);



    return (
        <div className='tee-display'>
            {teeList.map((tee) => (
                <div key={tee.id} className='tee-card'>
                    <Image src={tee.imageUrl} alt={tee.name} className='tee-img' fluid />
                    <div><a href={tee.url} target='_blank' className='tee-link'>{tee.name}</a></div>
                    <div className='tee-brand'>{tee.brand}</div>
                    <div>${tee.price}</div>
                </div>
                )
            )}
        </div>
    )
}

export default Tees;
