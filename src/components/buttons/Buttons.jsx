import './Buttons.css'

function Buttons({ leftDown, rightDown }) {
    return (
        <div className="buttons">
            <div className={leftDown ? 'key active' : 'key'}>&#8656;</div>
            <div className={rightDown ? 'key active' : 'key'}>&#8658;</div>
        </div>
    );
}

export default Buttons;
