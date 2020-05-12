import React, { useRef, useState, useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Select from 'antd/es/select'
import 'antd/es/select/style/css'
import { Wrapper, GrayOverlayBackground, Paginator, Table } from './DataTable.styled';

const { Option } = Select
const DataTable = ({
    id,
    value,
    data = {},
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
    paginatorRight,
    pageLinkSize,
    rowsPerPageOptions = [10, 20, 50, 100, 1000],
    currentPageReportTemplate = '({currentPage} of {totalPages})',
    scrollable,
    scrollHeight,
    loading = false,
}) => {
    const dataTableWrapperRef = useRef()
    const [rowNumberSelection, setRowNumberSelection] = useState(rowsPerPageOptions[0].toString());

    const spinner = () => <GrayOverlayBackground>
        <Loader
            type="Oval"
            color="#000"
            height={40}
            width={40}
        />
    </GrayOverlayBackground>

    const renderPaginator = () => <Paginator>
        <Dropdown
            value={rowNumberSelection}
            onChange={e => setRowNumberSelection(e)}
            options={rowsPerPageOptions}
        />
    </Paginator>

    const renderBody = () => <Table>
        <tr>H</tr>
        <tr>H</tr>
        <tr>H</tr>
        <tr>H</tr>
        <tr>H</tr>
        <tr>H</tr>
    </Table>

    return (
        <Wrapper id={id} className={className} style={style} ref={dataTableWrapperRef}>

            {loading && spinner()}
            {!loading && data && renderBody()}
            {paginator && renderPaginator()}

        </Wrapper>
    );
}


export default DataTable;


function Dropdown({ options, onChange, value }) {

    const [selected, setSelected] = useState(value);

    const handleChange = (e) => {
        setSelected(e)
        onChange(e)
    }
    return <div style={{ display: 'flex', alignItems: 'center' }} >

        <Select defaultValue={selected} style={{ width: 120 }} onChange={handleChange}>
            {options.map(option => <Option value={option.toString()}>{option}</Option>)}
            <Option value="all">Show All</Option>
        </Select>
    </div>
}