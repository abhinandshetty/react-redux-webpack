import React from 'react';

const TableHeader = ({headers}) => {

    const renderHeaders = () => (headers.map((header,index) => (
        <th key={index}>{header.columnHeader}{header.isSortable? <i className="fa fa-sort-up"></i> : null}</th>
    )));

    return (
        <thead>
            <tr>
                {renderHeaders()}
            </tr>
       </thead>
    )
}

export default TableHeader;