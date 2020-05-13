import React, { Component, useRef, useState } from 'react'
import { TH } from './HeaderCell.styled'

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
}) {
    const headerCellRef = useRef()
    return (
        <TH ref={headerCellRef} style={columnProps.style}>
            <span>{columnProps.label}</span>
        </TH>
    )
}
