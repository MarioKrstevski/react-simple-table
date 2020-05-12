import styled from 'styled-components';

export const Wrapper = styled.div`
   
    overflow-y:auto;
    display: flex;
    flex-direction: column;
    background-color: pink;
    height:290px;
`
export const GrayOverlayBackground = styled.div`
    width: 100%;
    height: 250px;
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
background-color: #efefef;
display: flex;
align-items: center;
justify-content: flex-end;

`
export const Table = styled.table`
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    overflow-y:auto;
`
export const CenterContent = styled.div`
    
    width: 100%;
    height: 265px;
    display: flex;
align-items: center;
justify-content: center;
`

export const Body = styled.div`
    height:100%;
    height: 320px;
    overflow-y:auto;


`

export const Footer = styled.div`
    height:45px;
`