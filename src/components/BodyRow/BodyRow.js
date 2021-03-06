import React, { useRef } from 'react'
import BodyCell from '../BodyCell/BodyCell'
const BodyRow = ({ key, rowData, rowIndex, children }) => {
    const bodyRowRef = useRef()
    let columns = React.Children.toArray(children)
    const cells = []
    columns.forEach((column, i) => {
        let columnProps = column.props
        let cell = (
            <BodyCell
                key={i}
                template={columns[i].props.template}
                rowData={rowData}
                columnProps={columnProps}
            />
        )
        cells.push(cell)
    })
    // console.log('clmns', columns)
    return (
        <tr key={rowData.id} className="table-row" ref={bodyRowRef}>
            <td className="dt-column-input">{rowData.id}</td>
            {cells}
        </tr>
    )
}

export default BodyRow
