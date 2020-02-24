import React from 'react';

const AddUserForm = () => {
    return (

        <form className="form-group"> 

            <div className="row form-group">
                <div className="col-lg-3">
                    <label htmlFor="name">Name</label>
                </div>
                <div className="col-lg-9">
                    <input type="text" className="form-control" id="name" placeholder="e.g. Lionel Messi"/>
                </div>
            </div>


            <div className="row form-group">
                <div className="col-lg-3">
                    <label htmlFor="age">Age</label>
                </div>
                <div className="col-lg-9">
                    <input type="text" className="form-control" id="age" placeholder="e.g. 26"/>
                </div>
            </div>

            
            <div className="row form-group">
                <div className="col-lg-3">
                    <label htmlFor="skills">Skills</label>
                </div>
                <div className="col-lg-9">
                    <input type="text" className="form-control" id="skills" placeholder="e.g. Java, React"/>
                </div>
            </div>

            <div className="row form-group">
                <div className="col-lg-3">
                    <label htmlFor="department">Department</label>
                </div>
                <div className="col-lg-9">
                    <input type="text" className="form-control" id="department" placeholder="e.g. Microsoft"/>
                </div>
            </div>

        </form>
    )
}

export default AddUserForm;