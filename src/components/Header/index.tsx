import { Link } from 'react-router-dom';
import '../../styles/header.scss';

export const Header = () => {
    return (
        <div className='section header'>
            <div className='container'>
                <Link to='/'>
                    <img
                        alt='logo'
                        src='/images/svg/logo.svg'
                        className='image'
                    />
                </Link>
            </div>
        </div>
    );
};
