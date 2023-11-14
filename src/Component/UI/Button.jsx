import React from 'react';

function Button({btnClass, IsDisabled, children}) {

        return (
            <button className={'btn ' + btnClass}>{children}</button>
        );
    }

export default Button;