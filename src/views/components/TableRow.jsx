import React from 'react';

const  TableRow = ({rows, isActionRequired=false}) => {

    const renderRows = () => (rows && rows.length ? rows.map(row => (
        <tr>
            {
                Object.keys(row).map((entry, i) => (
                    <td key={i}>
                        { Array.isArray(row[entry]) ?  row[entry].join(", ") : row[entry] }
                    </td>
                    )
                )
            }
            { isActionRequired ? <td></td> : null }
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