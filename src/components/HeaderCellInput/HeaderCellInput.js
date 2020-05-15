import React, { Component, useRef, useState, useEffect } from 'react'
import { useDebounce } from 'use-lodash-debounce'
export default function HeaderCellInput({
    columnProps,
    handleInputFilterChange,
}) {
    const headerCellRefInput = useRef()
    const [filterValue, setfilterValue] = useState('')
    const debouncedValue = useDebounce(filterValue, 500)

    useEffect(() => {
        handleInputFilterChange(columnProps.keyField, debouncedValue)
    }, [debouncedValue])
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
        <th
            className="dt-th dt-column dt-column-input"
            ref={headerCellRefInput}
            style={styleToShow}
        >
            <input
                name={columnProps.keyField}
                placeholder={'Fitler ' + columnProps.keyField}
                value={filterValue}
                onChange={e => setfilterValue(e.target.value)}
            />
        </th>
    )
}
