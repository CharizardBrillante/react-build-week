import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='spinners'>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div>
    )
}

export default LoadingSpinner;
