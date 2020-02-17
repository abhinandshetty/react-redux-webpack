import React from 'react';

const  TableRow = ({rows}) => {

    const renderRows = () => (rows.map((row, index) => (
        <tr key={index}>
            {
                Object.keys(row).map((entry, i) => (
                    <td key={i}>
                        { row[entry] }
                    </td>
                    )
                )
            }
        </tr>
    )));
    
    return (
        <tbody>
            {renderRows()}
        </tbody>
    )
}

export default TableRow;