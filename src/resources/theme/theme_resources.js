// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#06aed5',
    secundary: '#086788',
    resalt: '#f0c808',
    third: '#fff1d0',
    four: '#dd1c1a',
    letOscur: '#2c363f',
    HTML: '#fb5607',
    CSS: '#3a86ff',
    JS: '#ffc300',
    RT: '#a2d6f9',
    RX: '#7209b7',
    ND: '#8ac926',
    PS: '#99c1de',
    GT: '#040f0f',
    YT: '#d90429',
    IN: '#de1b85',
    FB: '#3C5898',
    TW: '#00acee',
    LN:'#0e76a8'
  },
}

export const theme = extendTheme({ colors })