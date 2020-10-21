import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryColor: '#efede1',
    primaryColorLight: '#ffffff',
    primaryColorDark: '#bdbbaf',
    secondaryColor: '#ffc107',
    secondaryColorLight: '#ffc107',
    secondaryColorDark: '#c79100',
    textTitle: '#000000',
    textBody: '#000000',
    lightGrey: '#d9d9d9',
    mediumGrey: '#797979',
    darkGrey: '#303030',
    confirm: '#5eae85',
    danger: '#ba274a',
    warning: '#ffbb33',
    background: 'red',
    white: '#ffffff',
  },
  fonts: {
    header: 'Roboto',
    body: 'sans-serif',
  },
  fontSize: {
    small: '0.9rem',
    medium: '1.2rem',
    large: '2rem',
    extraLarge: '3rem',
  },
  fontWeight: {
    extraLight: 200,
    light: 300,
    regular: 400,
    bold: 500,
    title: 600,
  },
  backgroundColor: 'ligthgrey',
  boxShadow: {
    light: '0 0 5px lightgray',
    medium: '0 0 8px lightgray',
    strong: '0 0 12px darkgray',
    button: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

// font-family: ${(props) => `${props.theme.fonts.header}`};
// font-size: ${(props) => `${props.theme.fontSize.large}`};
//   font-weight: ${(props) => `${props.theme.fontWeight.title}`};
//   box-shadow: ${(props) => `${props.theme.boxShadow.light}`};
//   color: ${(props) => `${props.theme.colors.primaryColor}`};
