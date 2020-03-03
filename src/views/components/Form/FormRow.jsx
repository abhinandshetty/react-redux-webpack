import React, { useState } from 'react';

const FormRow = ({ fieldName="", fieldType="text", fieldId="", placeholder="", onChangeInput = () =>{}, isFieldValueValid = () =>{} }) => {

    const [value, setValue] = useState('');

    const onChangeValue = (field, value) => {
        setValue(value);
        isFieldValueValid({[field] : !!value});
        onChangeInput({[field] : value});
    }

    return (
        <div className="row form-group">
                <div className="col-lg-3">
                <label htmlFor={fieldId}>{fieldName}</label>
                </div>
                <div className="col-lg-9">
                    <input 
                        value={value}
                        type={fieldType} 
                        className="form-control" 
                        id={fieldId} 
                        onChange={(e) => onChangeValue(fieldId, e.target.value)}
                        placeholder={`e.g. ${placeholder}`}/>
                </div>
            </div>
    )
}

export default FormRow;