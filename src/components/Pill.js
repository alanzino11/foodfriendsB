import React from 'react';
import styled from 'styled-components';

const PillComp = styled.div`
    border-radius: 15px;
    background-color: #95c595;
    height: 30px;
    width: 120px;
    text-align: center;
    align-items: center;
`;

const Pill = (props) => {
    return (
        <PillComp>
            <div style={{ color: 'white', paddingTop: '5px', fontWeight: 'bold' }}>{props.data}</div>
        </PillComp>
    )
}

export default Pill;