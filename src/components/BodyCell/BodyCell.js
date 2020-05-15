import React, { useRef } from 'react'
import { TD } from './BodyCell.styled'
const BodyCell = ({ template, rowData, keyField, columnProps }) => {
    const bodyCellRef = useRef()
    // console.log('Hello', template, rowData, columnProps)
    return (
        <td ref={bodyCellRef} className="body-cell" style={columnProps.style}>
            {rowData[columnProps.keyField]}
        </td>
    )
}

export default BodyCell
