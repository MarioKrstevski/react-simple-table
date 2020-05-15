import React, { useRef } from 'react'
const BodyCell = ({ rowData, columnProps }) => {
    const bodyCellRef = useRef()
    const propsStyle = columnProps.style ? columnProps.style : {}
    const propsWidth = columnProps.width
        ? {
              width: columnProps.width,
              maxWidth: columnProps.width,
              minWidth: columnProps.width,
          }
        : {}
    const styleToShow = { ...propsStyle, ...propsWidth }
    return (
        <td ref={bodyCellRef} className="body-cell" style={styleToShow}>
            {columnProps.template ? (
                columnProps.template(rowData)
            ) : (
                <span>{rowData[columnProps.keyField]}</span>
            )}
        </td>
    )
}

export default BodyCell
