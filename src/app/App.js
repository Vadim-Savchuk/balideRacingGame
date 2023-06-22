import { useState } from 'react';

import Field   from '../components/field/Field';
import Buttons from '../components/buttons/Buttons';
import Lost    from '../components/lost/Lost';

function App() {
    const [losе, setLosе]           = useState(false);
    const [leftDown, setLeftDown]   = useState(false);
    const [rightDown, setRightDown] = useState(false);

    return (
        <div className="game">
            {losе
                ? (
                    <Lost />
                )
                : (<>
                    <h1 className='title'>Balide Racing</h1>
                    <Field setLeftDown={setLeftDown} setRightDown={setRightDown} setLosе={setLosе} />
                    <Buttons leftDown={leftDown} rightDown={rightDown} />
                </>)
            }

        </div>
    );
}

export default App;
