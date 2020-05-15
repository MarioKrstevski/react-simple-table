import React from 'react'
import HeaderCell from '../HeaderCell/HeaderCell'
import HeaderCellInput from '../HeaderCellInput/HeaderCellInput'

const THead = ({
    data,
    sortField,
    sortOrder,
    onFilter,
    filters,
    tabIndex,
    onSort,
    children,
    useFilers,
    sortData,
    handleColumnSort,
    handleInputFilterChange,
}) => {
    function createHeaderCells(columns) {
        return React.Children.map(columns, (column, i) => {
            // console.log('cc', column)
            return (
                <HeaderCell
                    key={column.keyField || i}
                    columnProps={column.props}
                    data={data}
                    onSort={onSort}
                    sortField={sortField}
                    sortOrder={sortOrder}
                    onFilter={onFilter}
                    filters={filters}
                    tabIndex={tabIndex}
                    sortData={sortData}
                    handleColumnSort={handleColumnSort}
                />
            )
        })
    }
    function createFilterInputs(columns) {
        return React.Children.map(columns, (column, i) => {
            // console.log('cc', column)
            const columnProps = column.props
            return (
                <HeaderCellInput
                    key={column.keyField || i}
                    columnProps={column.props}
                    data={data}
                    handleInputFilterChange={handleInputFilterChange}
                ></HeaderCellInput>
            )
        })
    }
    let content
    let columns = React.Children.toArray(children)
    content = (
        <tr>
            <th className="dt-th dt-column dt-column-input">No.1</th>{' '}
            {createHeaderCells(columns)}
        </tr>
    )
    const filterInputs = (
        <tr>
            <th></th>
            {createFilterInputs(columns)}
        </tr>
    )
    return (
        <>
            <thead className="dt-thead">{content}</thead>
            {useFilers && (
                <thead className="dt-thead dt-thead-inputs">
                    {filterInputs}
                </thead>
            )}
        </>
    )
}

export default THead
