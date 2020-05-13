import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DataTable from '../DataTable/DataTable'
import mockJson from '../../assets/mocks/mockdata.json'
import Column from '../Column/Column'
const Wrapper = styled.div`
    margin: 200px auto 0;

    max-width: 860px;
    border: 1px solid black;
`

console.log(mockJson)
console.log(mockJson.length)

const UserList = () => {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [itemsToShow, setItemsToShow] = useState(10)
    function fakeAsync(delay, value) {
        setIsLoading(true)
        return new Promise(function(resolve) {
            setTimeout(resolve, delay, value)
        })
    }
    useEffect(() => {
        const response = fakeAsync(3000, mockJson)
        response
            .then(function(resp) {
                console.log(typeof itemsToShow)
                setUsers(
                    itemsToShow === 'all'
                        ? resp
                        : resp.slice(0, parseInt(itemsToShow))
                )
                setIsLoading(false)
            })
            .catch(function(e) {
                console.log(e)
                setIsLoading(false)
            })
    }, [itemsToShow])

    useEffect(() => {
        console.log('Users', users)
    }, [users])
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
        { keyField: 'email', label: 'Email' },
    ]

    return (
        <Wrapper>
            <DataTable
                header={header}
                footer={footer}
                loading={isLoading}
                allDataRecordsNumber={mockJson.length}
                data={users}
                onRowNumberChange={e => setItemsToShow(e)}
                rowsPerPageOptions={rowsPerPageOptions}
                paginator
            >
                {userColumns.map(columnInfo => {
                    return <Column {...columnInfo} />
                })}
            </DataTable>
        </Wrapper>
    )
}

export default UserList
