import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import Loader from 'react-loader-spinner'
import Select from 'antd/es/select'
import 'antd/es/select/style/css'
import {
    Wrapper,
    GrayOverlayBackground,
    Paginator,
    Table,
    CenterContent,
    Body,
    Footer,
} from './DataTable.styled'
import THead from '../THead/THead'
import TBody from '../TBody/TBody'

// we are using timsort because it's faster than the regular sort offered by Arrat.sort()
var Timsort = require('timsort')
const { Option } = Select
const DataTable = ({
    id,
    value,
    data = [],
    columns,
    header,
    footer,
    style,
    className,
    tableStyle,
    tableClassName,
    paginator = true,
    paginatorPosition = 'bottom',
    alwaysShowPaginator,
    paginatorLeft,
    allDataRecordsNumber,
    paginatorRight,
    onRowNumberChange,
    pageLinkSize,
    rowsPerPageOptions = [10, 20, 50, 100, 1000],
    currentPageReportTemplate = '({currentPage} of {totalPages})',
    scrollable,
    scrollHeight,
    globalFilterSearchValue,
    children,
    loading = false,
    useFilers = true,
}) => {
    const dataTableWrapperRef = useRef()
    const [rowNumberSelection, setRowNumberSelection] = useState(
        rowsPerPageOptions[0].toString()
    )
    const [filters, setFilters] = useState({})
    const [sortData, setSortData] = useState({
        value: '',
        sortBy: 'none',
    })

    const sortDataTransitions = {
        asc: 'desc',
        desc: 'none',
        none: 'asc',
    }
    const [dataToShow, setDataToShow] = useState(data)

    const s_handleColumnSort = clickedColumn => {
        setSortData(prevState => {
            if (prevState.value !== clickedColumn) {
                return {
                    value: clickedColumn,
                    sortBy: 'asc',
                }
            }
            return {
                value: clickedColumn,
                sortBy: sortDataTransitions[sortData.sortBy],
            }
        })
    }

    useEffect(() => {
        onRowNumberChange(rowNumberSelection)
    }, [onRowNumberChange, rowNumberSelection])

    function hasAnyMentionOfString(object, string) {
        const searchString = string.toLowerCase()
        return Object.values(object).some(function(value) {
            if (Number.isInteger(value)) {
                return value
                    .toString()
                    .toLowerCase()
                    .includes(searchString)
            }
            return value.toLowerCase().includes(searchString)
        })
    }
    function s_handleInputFilterChange(clickedColumn, inputFilerValue) {
        setFilters(prevState => ({
            ...prevState,
            [clickedColumn]: inputFilerValue.toLowerCase(),
        }))
    }
    useLayoutEffect(() => {
        console.time('test')
        if (useFilers && filters && Object.values(filters).some(Boolean)) {
            const filterOutByColumnsFilters = obj => {
                return Object.keys(filters).every((key, index) => {
                    // console.log(obj, key, obj[key], filters[key])
                    if (filters[key] === '') {
                        return true
                    }
                    return obj[key]
                        .toString()
                        .toLowerCase()
                        .includes(filters[key].toLowerCase())
                })
            }
            if (globalFilterSearchValue) {
                const filterArray = data
                    .filter(obj =>
                        hasAnyMentionOfString(obj, globalFilterSearchValue)
                    )
                    .filter(filterOutByColumnsFilters)
                Timsort.sort(filterArray, sortBySorter)
                setDataToShow(filterArray)
            } else {
                let sortedOriginal
                if (data) {
                    sortedOriginal = [...data.filter(filterOutByColumnsFilters)]
                    Timsort.sort(sortedOriginal, sortBySorter)
                } else {
                    sortedOriginal = data
                }
                setDataToShow(sortedOriginal)
            }
        } else {
            // Sort again like we would if global search is here
            if (globalFilterSearchValue) {
                // console.log('GF', globalFilterSearchValue)
                const filterArray = data.filter(obj =>
                    hasAnyMentionOfString(obj, globalFilterSearchValue)
                )
                Timsort.sort(filterArray, sortBySorter)
                setDataToShow(filterArray)
            } else {
                let sortedOriginal
                if (data) {
                    sortedOriginal = [...data]
                    Timsort.sort(sortedOriginal, sortBySorter)
                } else {
                    sortedOriginal = data
                }
                setDataToShow(sortedOriginal)
            }
        }
        console.timeEnd('test')
    }, [filters, useFilers, globalFilterSearchValue, data])
    function sortBySorter(a, b) {
        // a & b are objects
        if (sortData.sortBy === 'none' || !sortData.value) {
            return a.id < b.id ? -1 : 1
        }
        if (sortData.sortBy === 'asc') {
            return a[sortData.value] < b[sortData.value] ? -1 : 1
        }
        if (sortData.sortBy === 'desc') {
            return a[sortData.value] < b[sortData.value] ? 1 : -1
        }
    }

    useEffect(() => {
        setDataToShow(prevState => {
            if (!prevState) {
                return prevState
            }
            const sortedData = [...prevState]
            Timsort.sort(sortedData, sortBySorter)
            return sortedData
        })
    }, [sortData])

    const spinner = () => (
        <GrayOverlayBackground>
            <Loader type="Oval" color="#000" height={40} width={40} />
        </GrayOverlayBackground>
    )

    const renderPaginator = () => (
        <Paginator>
            {dataToShow && (
                <div style={{ paddingLeft: 20, color: 'black', fontSize: 14 }}>
                    Showing {rowNumberSelection} / {allDataRecordsNumber}{' '}
                    records
                </div>
            )}
            <Dropdown
                dropdownStyle={{ marginLeft: 'auto' }}
                value={rowNumberSelection}
                onChange={e => setRowNumberSelection(e)}
                options={rowsPerPageOptions}
            />
        </Paginator>
    )
    const renderableData = dataToShow ? dataToShow : []
    const renderBody = () => (
        <Table>
            {renderableData.map((row, idx) => {
                return (
                    <tr>
                        {row.id} {idx}
                    </tr>
                )
            })}
        </Table>
    )
    const renderNoData = () => <CenterContent>No data found</CenterContent>
    return (
        <Wrapper
            id={id}
            className={'data-table-wrapper ' + className}
            style={style}
            ref={dataTableWrapperRef}
        >
            <table className="data-table">
                <THead
                    data={dataToShow}
                    sortData={sortData}
                    handleColumnSort={s_handleColumnSort}
                    useFilers={useFilers}
                    handleInputFilterChange={s_handleInputFilterChange}
                >
                    {children}
                </THead>
                <TBody
                    data={dataToShow}
                    emptyMessage={renderNoData()}
                    loadingSpinner={spinner()}
                    loading={loading}
                >
                    {children}
                </TBody>
            </table>
            <Footer>{paginator && renderPaginator()}</Footer>
        </Wrapper>
    )
}
// {loading && spinner()}
// {!loading && !data && renderNoData()}
// {!loading && data && renderBody()}
export default DataTable

function Dropdown({ options, onChange, value, dropdownStyle }) {
    const [selected, setSelected] = useState(value)

    const handleChange = e => {
        setSelected(e)
        onChange(e)
    }
    return (
        <div
            style={{ display: 'flex', alignItems: 'center', ...dropdownStyle }}
        >
            <Select
                defaultValue={selected}
                style={{ width: 120 }}
                onChange={handleChange}
            >
                {options.map(option => (
                    <Option key={option.toString()} value={option.toString()}>
                        {option}
                    </Option>
                ))}
                <Option value="all">Show All</Option>
            </Select>
        </div>
    )
}
