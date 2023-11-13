import React from 'react';

function Button({btnClass, IsDisabled, children}) {
    console.log(IsDisabled)
    if(IsDisabled != undefined) {
        console.log(IsDisabled[0], IsDisabled[1])

        return (
            <button disabled={!IsDisabled[0] && !IsDisabled[1]} type='submit' className={'btn ' + btnClass}>{children}</button>
        );
    }

    else{
        return (
            <button className={'btn ' + btnClass}>{children}</button>
        );
    }
    
}

export default Button;