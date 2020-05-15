import React, { Component, useRef, useState } from 'react'
import { TH } from './HeaderCell.styled'
import { FaSortAlphaDown } from 'react-icons/fa'
import { FaSortAlphaDownAlt } from 'react-icons/fa'
export default function HeaderCell({
    key,
    columnProps,
    sortData,
    handleColumnSort,
}) {
    const headerCellRef = useRef()
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
        <th className="dt-th dt-column" ref={headerCellRef} style={styleToShow}>
            <span
                className="dt-column-title"
                onClick={() => {
                    handleColumnSort(columnProps.keyField)
                }}
            >
                {columnProps.label}
            </span>
            <span className="dt-column-sort-icon" style={{marginLeft:4,marginTop:4}}>
                {sortData.value &&
                    sortData.value === columnProps.keyField &&
                    sortData.sortBy === 'asc' && <FaSortAlphaDown />}

                {sortData.value &&
                    sortData.value === columnProps.keyField &&
                    sortData.sortBy === 'desc' && <FaSortAlphaDownAlt />}
            </span>
        </th>
    )
}
