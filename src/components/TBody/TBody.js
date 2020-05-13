import React from 'react'
import BodyRow from '../BodyRow/BodyRow'

const TBody = ({ data, children, emptyMessage, loading, loadingSpinner }) => {
    if (loading) {
        return loadingSpinner
    }
    if (!loading && (!data || !data.length)) {
        return emptyMessage
    }

    const rows = data.map((element, i) => {
        return (
            <BodyRow key={i} rowData={element} rowIndex={i}>
                {children}
            </BodyRow>
        )
    })

    return <tbody className="p-datatable-tbody">{rows}</tbody>
}

export default TBody
