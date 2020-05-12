import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    min-height:300px;
    height:100%;
    background-color: pink;
`
export const GrayOverlayBackground = styled.div`
    width: 100%;
    height: 299px;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index:100;
    background-color:rgba(0,0,0,0.1)

    > div {
        z-index: 110;
    }
`

export const Paginator = styled.div`
margin-top: auto;
height:35px;
background-color: #fefefe;
display: flex;
align-items: center;
justify-content: flex-end;

`
export const Table = styled.table`
    width: 100%;
    height: 300px;
    max-height: calc(300px - 35px - 1px);
    overflow-x:scroll;
`