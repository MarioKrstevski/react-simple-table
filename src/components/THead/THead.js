import React from 'react'
import HeaderCell from '../HeaderCell/HeaderCell'

const THead = ({
    data,
    sortField,
    sortOrder,
    onFilter,
    filters,
    tabIndex,
    onSort,
    children,

    sortData,
    handleColumnSort,
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
    let content
    let columns = React.Children.toArray(children)
    content = <tr>{createHeaderCells(columns)}</tr>
    return <thead className="dt-thead">{content}</thead>
}

export default THead
