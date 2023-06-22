import { useEffect } from 'react';

import './UserCar.css';

import userCar from '../../img/racing-car2.png'

function UserCar({ setCarPosition, setRightDown, setLeftDown, carPosition }) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setCarPosition((prev) => (prev === 57 ? 57 : prev - 1));
                setRightDown(true);
            } else if (e.key === 'ArrowLeft') {
                setLeftDown(true);
                setCarPosition((prev) => (prev === 59 ? 59 : prev + 1));
            }
        };

        const handleKeyUp = () => {
            setLeftDown(false);
            setRightDown(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [carPosition]);

    return <img src={userCar} alt='User car' />;
}

export default UserCar;
