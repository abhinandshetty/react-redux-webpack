import React from 'react';

const TableHeader = ({headers, isSortable}) => {

    const renderHeaders = () => (headers.map((header,index) => (
        <th key={index}>{header.columnHeader}</th>
    )));

    return (
        <thead className="thead-light">
            <tr>
                {renderHeaders()}
            </tr>
       </thead>
    )
}

export default TableHeader;