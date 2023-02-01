import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import './tees.css'

const Tees = () => {

    const tees = useSelector(state => state.tees);
    const teeList = Object.values(tees);



    return (
        <div>
            <SearchBar />
            <div className='tee-display'>
                {teeList.map((tee) => (
                    <div key={tee.id} className='tee-card'>
                        <div className='fave-heart'><i class="fa-regular fa-heart"></i></div>
                        <Image src={tee.imageUrl} alt={tee.name} className='tee-img' fluid />
                        <div>
                            <OverlayTrigger
                                key='top'
                                placement='top'
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        Click to buy from {tee.brand}!
                                    </Tooltip>
                                }>
                                <a href={tee.url} target='_blank' className='tee-link'>{tee.name}</a>
                            </OverlayTrigger>
                        </div>
                        <div className='tee-brand'>
                            <OverlayTrigger
                                key='bottom'
                                placement='bottom'
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        Click to visit {tee.brand}!
                                    </Tooltip>
                                }>
                                <a href={tee.brandUrl}>{tee.brand}</a>
                            </OverlayTrigger>
                        </div>
                        <div>${tee.price}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Tees;
