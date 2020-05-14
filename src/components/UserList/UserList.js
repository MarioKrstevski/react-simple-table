import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import mockJson from '../../assets/mocks/mockdata.json'
import { useDebounce } from 'use-lodash-debounce'
import List from './List'

const Wrapper = styled.div`
    margin: 200px auto 0;

    max-width: 860px;
    border: 1px solid black;
`

const UserList = () => {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [itemsToShow, setItemsToShow] = useState(10)
    const [globalSearchValue, setGlobalSearchValue] = useState('')
    const debouncedGlobalSearchValue = useDebounce(globalSearchValue, 400)
    const [useFilters, setUseFilters] = useState(false)

    function fakeAsync(delay, value) {
        setIsLoading(true)
        return new Promise(function(resolve) {
            setTimeout(resolve, delay, value)
        })
    }
    useEffect(() => {
        const response = fakeAsync(500, mockJson)
        response
            .then(function(resp) {
                setUsers(
                    itemsToShow === 'all'
                        ? resp
                        : resp.slice(0, parseInt(itemsToShow))
                )
                setIsLoading(false)
            })
            .catch(function(e) {
                setIsLoading(false)
            })
    }, [itemsToShow])

    useEffect(() => {
        // console.log('Users', users)
    }, [users])

    useEffect(() => {
        // console.log('GSV', globalSearchValue)
    }, [globalSearchValue])
    return (
        <Wrapper>
            <div>
                <label style={{ padding: '0 8px' }} htmlFor="globalValue">
                    {' '}
                    Global Search{' '}
                </label>
                <input
                    name="globalValue"
                    value={globalSearchValue}
                    onChange={e => {
                        setGlobalSearchValue(e.target.value)
                        // console.log(e.target.value)
                    }}
                />

                <input
                    style={{ marginLeft: 20 }}
                    type="checkbox"
                    name="useFilters"
                    checked={useFilters}
                    onChange={e => {
                        setUseFilters(e.target.checked)
                        console.dir(e.target.checked)
                    }}
                />
                <label
                    style={{ padding: '0 8px', marginLeft: 4 }}
                    htmlFor="useFilters"
                >
                    Use Seperate Filters
                </label>
            </div>
            <List
                isLoading={isLoading}
                data={users}
                onRowNumberChange={e => setItemsToShow(e)}
                allDataRecordsNumber={mockJson.length}
                useFilters={useFilters}
                globalFilterSearchValue={debouncedGlobalSearchValue}
            />
        </Wrapper>
    )
}

export default UserList
