import React, { useState } from 'react'
import DataTable from '../DataTable/DataTable'
import Column from '../Column/Column'

const List = ({
    isLoading,
    allDataRecordsNumber,
    data,
    onRowNumberChange,
    globalFilterSearchValue,
    useFilters,
}) => {
    const header = () => <div>Header</div>
    const footer = () => <div>Footer</div>
    const rowsPerPageOptions = [10, 20, 50, 100, 1000]
    const userColumns = [
        { keyField: 'address', label: 'Address' },
        { keyField: 'age', label: 'Age' },
        { keyField: 'city', label: 'City' },
        { keyField: 'country', label: 'Country' },
        { keyField: 'email', label: 'Email' },
        { keyField: 'first_name', label: 'Name' },
        { keyField: 'last_name', label: 'Surname' },
        { keyField: 'username', label: 'Username' },
        { keyField: 'gender', label: 'Gender' },
    ]
    return (
        <DataTable
            header={header}
            footer={footer}
            loading={isLoading}
            allDataRecordsNumber={allDataRecordsNumber}
            data={data}
            onRowNumberChange={onRowNumberChange}
            rowsPerPageOptions={rowsPerPageOptions}
            paginator
            globalFilterSearchValue={globalFilterSearchValue}
            useFilers={useFilters}
        >
            {userColumns.map(columnInfo => {
                return <Column {...columnInfo} />
            })}
        </DataTable>
    )
}

export default List
