import './Lost.css';

function Lost() {
    const restartGame = () => {
        window.location.reload()
    }

    return (
        <div className='lost'>
            <h2 className='mini-title'>You Lost</h2>
            <button className='button' onClick={restartGame}>Menu</button>
        </div>
    );
}

export default Lost;
