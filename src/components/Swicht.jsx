import React from 'react';

const Swicht = ({theme, settheme}) => {

    const swichtaction = () => {
        settheme(!theme)
    }

    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-12 d-flex justify-content-end'>
                    <label className="switch">
                        <input type="checkbox" onClick={swichtaction}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Swicht;