import React from 'react';
import styled from 'styled-components';
import DataTable from '../DataTable/DataTable';

const Wrapper = styled.div`
margin: 200px auto 0;

max-width: 860px;
border: 1px solid black;
`
const UserList = () => {

    const header = () => <div>Header</div>
    const footer = () => <div>Footer</div>
    const rowsPerPageOptions = [10, 20, 50, 100, 1000]
    return (
        <Wrapper>
            <DataTable
                header={header}
                footer={footer}
                rowsPerPageOptions={rowsPerPageOptions}
                paginator

            />
        </Wrapper>
    );
}

export default UserList;