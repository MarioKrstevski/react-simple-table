import styled from 'styled-components'

export const Wrapper = styled.div`
    .table-div {
        overflow-x: auto;
    }

    table {
        border: 1px solid #333;
    }
    tr {
        border: none;
    }
    tr:nth-child(odd) {
        background-color: #35393e;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #23272a;
        color: white;
    }
    tr:hover {
        background-color: #2b2f31;
        color: white;
    }
    th {
        background-color: #0082c8;
        padding: 8px 10px;
        color: white;
    }

    tbody {
        display: block;
        height: fit-content;
        max-height: 400px;
        overflow: auto;
        min-width: 400px;
    }
    thead tr,
    tbody tr {
        display: table;
        width: 100%;
        table-layout: auto;
    }

    thead {
        width: calc(
            100% - 1em
        ); /* scrollbar is average 1em/16px width, remove it from thead width */
    }
    .dt-column-input {
        width: 35px !important;
        text-align: center;
        padding-left: 2px;
        padding-right: 2px;
        input {
            width: 98%;
            float: left;
            color: black;
            outline: none;
            padding: 1px;
        }
    }
    .body-cell {
        padding: 4px 6px;
        /* border: 0; */
        cursor: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    table {
        width: 100%;
    }
`
export const GrayOverlayBackground = styled.div`
    width: 80vw;
    min-width: 400px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;
    background-color:rgba(0, 0, 0, 0.1) > div {
        z-index: 110;
    }
`

export const Paginator = styled.div`
    margin-top: auto;
    padding-right: 30px;
    height: 100%;
    background-color: #0082c8;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Table = styled.table`
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    overflow-y: auto;
`
export const CenterContent = styled.div`
    width: 80vw;
    min-width: 400px;
    height: 265px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Body = styled.div`
    height: 100%;
    height: 320px;
    overflow-y: auto;
`

export const Footer = styled.div`
    height: 40px;
`

export const Header = styled.div`
    height: 45px;
`
