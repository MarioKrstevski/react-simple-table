import React, { Component, useRef, useState, useEffect } from 'react'
import { useDebounce } from 'use-lodash-debounce'
export default function HeaderCellInput({
    key,
    columnProps,
    data,
    handleInputFilterChange,
}) {
    const headerCellRefInput = useRef()
    const [filterValue, setfilterValue] = useState('')
    const debouncedValue = useDebounce(filterValue, 500)

    useEffect(() => {
        handleInputFilterChange(columnProps.keyField, debouncedValue)
    }, [debouncedValue])
    return (
        <th
            className="dt-th dt-column dt-column-input"
            ref={headerCellRefInput}
            style={columnProps.style}
        >
            <input
                name={columnProps.keyField}
                value={filterValue}
                onChange={e => setfilterValue(e.target.value)}
            />
        </th>
    )
}
