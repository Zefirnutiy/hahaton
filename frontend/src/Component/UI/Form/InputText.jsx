import React from 'react';

function InputText({placeholder, funcOnChang, InputName, ClassName, children}) {
    return (
        <label className='label_form'>{children}
            <input placeholder={placeholder} onChange={funcOnChang} name={InputName} type='text' className={'input_text ' + ClassName}/>
        </label>
    );
}

export default InputText;