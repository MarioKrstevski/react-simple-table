import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import mockJson from '../../assets/mocks/mockdata.json'
import { useDebounce } from 'use-lodash-debounce'
import List from './List'

const Wrapper = styled.div`
    margin: 200px 0;
    margin-left: 70px;

    width: 80vw;
    min-width: 400px;
    border: 1px solid black;
`

const Options = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    color: black;
    font-size: 14px;
`

const UserList = () => {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [itemsToShow, setItemsToShow] = useState(10)
    const [globalSearchValue, setGlobalSearchValue] = useState('')
    const debouncedGlobalSearchValue = useDebounce(globalSearchValue, 400)
    const [useFilters, setUseFilters] = useState(false)
    const [timeTaken, setTimeTaken] = useState(0)

    function fakeAsync(delay, value) {
        setIsLoading(true)
        return new Promise(function(resolve) {
            setTimeout(resolve, delay, value)
        })
    }

    useEffect(() => {
        // Uncomment to use API FROM MOCKAROO

        // const apiAll = 'https://my.api.mockaroo.com/users?key=dc4f4780'
        // const apiLimit =
        //     'https://my.api.mockaroo.com/users/' + itemsToShow + '?key=dc4f4780'

        // setIsLoading(true)
        // const started = new Date().getTime()
        // const respPromise = fetch(itemsToShow === 'all' ? apiAll : apiLimit)
        //     .then(resp => resp.json())
        //     .then(users => {
        //         console.log(users)
        //         setUsers(users)
        //         setIsLoading(false)
        //         setTimeTaken(new Date().getTime() - started)
        //     })

        // Uncomment to use MOCK DATA LOCALLY
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

    return (
        <Wrapper>
            <Options>
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
                        }}
                    />
                </div>
                <div>
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

                {!!users && <b> Showing: {users.length} results</b>}
                {!!timeTaken && (
                    <span> Time spent fetching : {timeTaken} miliseconds</span>
                )}
            </Options>
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
