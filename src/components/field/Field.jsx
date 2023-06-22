import { useEffect, useState } from 'react';

import UserCar from '../userCar/UserCar';
import Opponent from '../opponent/Opponent';

import getRandomInt from '../../functions/random';

import borderImg from '../../img/border.png';

import './Field.css';

function Field({ setRightDown, setLeftDown, setLosе }) {
    const [spead, setSpead] = useState(1000)
    const [carPosition, setCarPosition] = useState(58);

    const [opponents, setOpponents] = useState([
        { id: 1, position: getRandomInt(2, 4), wallLeft: 2, wallRight: 4 },
        { id: 2, position: getRandomInt(12, 14), wallLeft: 12, wallRight: 14 },
        { id: 3, position: getRandomInt(22, 24), wallLeft: 22, wallRight: 24 },
        { id: 4, position: getRandomInt(32, 34), wallLeft: 32, wallRight: 34 },
    ]);

    const updateOpponentPosition = (opponentId, newPosition) => {
        setOpponents(prevOpponents =>
            prevOpponents.map(opponent =>
                opponent.id === opponentId ? { ...opponent, position: newPosition } : opponent
            )
        );
    };

    let squares = [];

    for (let i = 60; i >= 1; i--) {
        squares.push(i)
    }

    useEffect(() => {
        const speadInterval = setInterval(() => {
            setSpead(prev => prev <= 200 ? 200 : prev - 10)
        }, 1000);

        return () => clearInterval(speadInterval)
    }, [])

    useEffect(() => {
        for (let position of opponents) {
            if (carPosition === position.position) {
                setLosе(true);
            }
        }
    }, [carPosition, opponents, setLosе]);

    return (
        <div className='field'>
            {squares.map(square => {
                let isLeftBoundary = square % 5 === 1;
                let isRightBoundary = square % 5 === 0;

                return (
                    <div className='square' key={square}>
                        {(isLeftBoundary || isRightBoundary) && (<img className='border-img' src={borderImg} alt="Barrier" />)}


                        {opponents.map(opponent => {
                            return (
                                opponent.position === square && (
                                    <Opponent
                                        spead={spead}
                                        key={opponent.id}
                                        opponent={opponent}
                                        restartNumber={squares.length - 5}
                                        setCarOpponent={newPosition => updateOpponentPosition(opponent.id, newPosition)}
                                    />
                                )
                            );
                        })}

                        {carPosition === square && (
                            <UserCar
                                carPosition={carPosition}
                                setLeftDown={setLeftDown}
                                setRightDown={setRightDown}
                                setCarPosition={setCarPosition}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Field;
