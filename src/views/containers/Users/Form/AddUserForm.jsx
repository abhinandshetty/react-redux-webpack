import React from 'react';
import FormRow from '../../../components/Form/FormRow';

const AddUserForm = ({onChangeFields = () => {}}) => {

    const userFormFields = [
        {fieldName: "Name", fieldType:"text", fieldId:"name" , placeholder:"Abhinand Shetty"},
        {fieldName: "Age", fieldType:"text", fieldId:"age" , placeholder:"26"},
        {fieldName: "Skills", fieldType:"text", fieldId:"skills" , placeholder:"React, Node"},
        {fieldName: "Designation", fieldType:"text", fieldId:"designation" , placeholder:"Software Developer"},
        {fieldName: "Company", fieldType:"text", fieldId:"company" , placeholder:"Microsoft"}
    ];

    const renderFormFields = () => userFormFields.map(row => (
        <FormRow 
            fieldName={row.fieldName} 
            fieldType={row.fieldType} 
            fieldId={row.fieldId}  
            placeholder={row.placeholder} 
            onChangeInput={onChangeFields} />
    ));

    return (
        <form className="form-group"> 
            {renderFormFields()}
        </form>
    )
}

export default AddUserForm;