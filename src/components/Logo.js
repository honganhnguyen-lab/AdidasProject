import PropTypes from 'prop-types';
import adidas from './adidas.jpeg';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';


// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    
    <Box sx={{display:'flex',justifyContent:'flex-start', ...sx }}>
        <img height={80} width={110} justify="flex-end" src={adidas} alt="adidas"/>
     
    </Box>
  );
}
