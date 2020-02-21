import React from 'react';

const TableHeader = ({headers, isActionRequired}) => {

    const renderHeaders = () => (headers.map((header,index) => (
        <th>
            {header.columnHeader}
            {header.isSortable? <i className="fa fa-sort-up"></i> : null}
        </th>
    )));

    return (
        <thead>
            <tr>
                { renderHeaders() }
                { isActionRequired ? <th></th> : null}
            </tr>
       </thead>
    )
}

export default TableHeader;