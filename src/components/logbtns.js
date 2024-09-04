import React from 'react';
import LogIn from './logtest'
import LogOut from './logout';

function logBtns(){
    return(
        <div className='logbtns'>
            <LogIn/>
            <br/>
            <LogOut/>
        </div>
    )
}

export default logBtns