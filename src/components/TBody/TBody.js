import React from 'react'
import BodyRow from '../BodyRow/BodyRow'
import { FixedSizeList as List } from 'react-window'

const TBody = ({ data, children, emptyMessage, loading, loadingSpinner }) => {
    if (loading) {
        return loadingSpinner
    }
    if (!loading && (!data || !data.length)) {
        return emptyMessage
    }

    // const rows = data.map((element, i) => {
    //     return (
    //         <BodyRow key={i} rowData={element} rowIndex={i}>
    //             {children}
    //         </BodyRow>
    //     )
    // })

    return (
        <tbody className="p-datatable-tbody">
            <List
                height={1500}
                itemCount={data.length}
                itemData={{ data, children }}
                itemSize={35}
                width={'100%'}
            >
                {Row}
            </List>
        </tbody>
    )
}
function Row({ index, style, data }) {
    console.log('DATA', data[index])
    return (
        <BodyRow rowData={data.data[index]} rowIndex={index}>
            {data.children}
        </BodyRow>
    )
}
export default TBody
