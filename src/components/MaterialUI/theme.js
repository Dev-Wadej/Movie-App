import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        text: {
            primary: '#fff',
            secondary: '#46505A',
        },
        input: {
            ' &:focus': {
                outline: 0,
            },
        },
    },
});