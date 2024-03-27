import React from 'react';
import styled from 'styled-components';
import {Button} from '../../../component/Button';

export const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>© 2024 All Rights Reserved.</Copyright>
            <Button>^стрелка вверх</Button>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`
const Copyright = styled.small`

`
