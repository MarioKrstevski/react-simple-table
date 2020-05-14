import React, { Component, useRef, useState } from 'react'
import { TH } from './HeaderCell.styled'
import { FaSortAlphaDown } from 'react-icons/fa'
import { FaSortAlphaDownAlt } from 'react-icons/fa'
export default function HeaderCell({
    key,
    columnProps,
    column,
    label,
    data,
    onSort,
    sortField,
    sortOrder,
    onFitler,
    filters,
    tabIndex,
    sortData,
    handleColumnSort,
}) {
    const headerCellRef = useRef()
    return (
        <th
            className="dt-th dt-column"
            ref={headerCellRef}
            style={columnProps.style}
        >
            <span
                className="dt-column-title"
                onClick={() => {
                    handleColumnSort(columnProps.keyField)
                }}
            >
                {columnProps.label}
            </span>
            <span className="dt-column-sort-icon">
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
