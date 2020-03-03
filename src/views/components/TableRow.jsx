import React from 'react';

const TableRow = ({rows, onDelete=()=>{}}) => {

    const renderRows = () => (rows && rows.length ? rows.map(row => (
        <tr key={row.id ? row.id : ''}>
            {
                Object.keys(row).map((entry, i) => (
                    entry !== 'id' && 
                    <td key={i}>
                        { Array.isArray(row[entry]) ? row[entry].join(", ") : row[entry] }
                    </td>
                    )
                )
            }
            <td>
                <i className="fa fa-lg fa-pencil hand-pointer icon" onClick={()=>onDelete(row.id)}></i>
                
                <i className="fa fa-lg fa-trash hand-pointer icon " onClick={()=>onDelete(row.id)}></i>
            </td>
        </tr>
        )): <tr className="m-auto">
            <td>
                <p>No record found</p>
            </td>
        </tr>);
    
    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

export default TableRow;