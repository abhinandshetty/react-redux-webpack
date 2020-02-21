import React from 'react';

const  TableRow = ({rows}) => {

    const renderRows = () => (rows && rows.length ? rows.map((row, index) => (
        <tr key={index}>
            {
                Object.keys(row).map((entry, i) => (
                    <td key={i}>
                        { Array.isArray(row[entry]) ?  row[entry].join(", ") : row[entry] }
                    </td>
                    )
                )
            }
        </tr>
    )): <tr>
            <td>
                <p>No record found</p>
                <button className="btn btn-success">Add user</button>
            </td>
        </tr>);
    
    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

export default TableRow;