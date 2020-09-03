import React from 'react';
import './main.scss'

const MainContainer = props => {

    return (
        <div className='mainContainer'>
            { props.children }
        </div>
    )

}

export default MainContainer