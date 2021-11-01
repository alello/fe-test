import React from 'react';
import { Button, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
        background-color: #5469d4;
    }
`;

const Label = styled.span`
    font-size: 10px;
    padding: 10px;
    margin: 0;
`;

export default function CustomButton() {
    return (
        <StylesProvider injectFirst>
            <Button variant="contained">
                <Label>
                    Button
                </Label>
            </Button>
            <StyledButton variant="contained">
                <Label>
                    StyledButton
                </Label>
            </StyledButton>
        </StylesProvider>
    )
}
