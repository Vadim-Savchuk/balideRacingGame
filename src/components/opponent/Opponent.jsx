import { useEffect } from 'react';

import getRandomInt from '../../functions/random';

import carOpponentImg from '../../img/racing-car.png';

function Opponent({ opponent, setCarOpponent, restartNumber, spead }) {

    useEffect(() => {
        const interval = setInterval(() => {
            setCarOpponent(opponent.position < restartNumber ? opponent.position + 5 : getRandomInt(opponent.wallLeft, opponent.wallRight))
        }, spead)

        return () => clearInterval(interval)

    }, [])

    return <img src={carOpponentImg} alt="Car" />;
}

export default Opponent;
