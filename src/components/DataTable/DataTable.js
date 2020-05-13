import React, { useRef, useState, useEffect } from 'react'
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
    children,
    loading = false,
}) => {
    const dataTableWrapperRef = useRef()
    const [rowNumberSelection, setRowNumberSelection] = useState(
        rowsPerPageOptions[0].toString()
    )

    useEffect(() => {
        onRowNumberChange(rowNumberSelection)
    }, [onRowNumberChange, rowNumberSelection])

    const spinner = () => (
        <GrayOverlayBackground>
            <Loader type="Oval" color="#000" height={40} width={40} />
        </GrayOverlayBackground>
    )

    const renderPaginator = () => (
        <Paginator>
            {data && (
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
    const renderableData = data ? data : []
    const renderBody = () => (
        <Table>
            {renderableData.map((row, idx) => {
                return (
                    <tr>
                        {' '}
                        {row.id} {idx}
                    </tr>
                )
            })}
        </Table>
    )
    const renderNoData = () => <CenterContent>No data found</CenterContent>
    console.log('call', children)
    return (
        <Wrapper
            id={id}
            className={className}
            style={style}
            ref={dataTableWrapperRef}
        >
            <THead data={data}>{children}</THead>
            <TBody
                data={data}
                emptyMessage={renderNoData()}
                loadingSpinner={spinner()}
                loading={loading}
            >
                {children}
            </TBody>
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
