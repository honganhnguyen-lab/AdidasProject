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
 

  return (
    
    <Box sx={{display:'flex',justifyContent:'flex-start', ...sx }}>
        <img height={80} width={110} src={adidas} alt="adidas"/>
     
    </Box>
  );
}
