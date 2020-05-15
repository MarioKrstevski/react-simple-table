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
        {
            keyField: 'address',
            label: 'Address',
            width: '200px',
        },
        {
            keyField: 'age',
            label: 'Age',
            width: 70,
        },
        {
            keyField: 'city',
            label: 'City',
            width: 115,
        },
        {
            keyField: 'country',
            label: 'Country',
            width: 115,
        },
        {
            keyField: 'email',
            label: 'Email',
            width: 155,
        },
        {
            keyField: 'first_name',
            label: 'Name',
            width: 105,
        },
        {
            keyField: 'last_name',
            label: 'Surname',
            width: 115,
        },
        {
            keyField: 'username',
            label: 'Username',
            width: 115,
        },
        {
            keyField: 'gender',
            label: 'Gender',
            width: 90,
            template: data => (
                <span
                    style={{
                        color:
                            data.gender && data.gender === 'Female'
                                ? 'pink'
                                : 'lightblue',
                    }}
                >
                    {data.gender && data.gender === 'Female' ? 'F' : 'M'}{' '}
                </span>
            ),
        },
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
