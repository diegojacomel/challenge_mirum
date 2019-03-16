import React from 'react';
import { ThemeProvider } from 'styled-components';
import { primaryTheme } from './styles/themes';

export default props => (
    <ThemeProvider theme={primaryTheme}>
        {props.children}
    </ThemeProvider>
);