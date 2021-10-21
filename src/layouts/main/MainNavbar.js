import * as React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container,IconButton } from '@material-ui/core';
import {SearchIcon} from '@material-ui/icons/Search'
import PropTypes from 'prop-types';
// components
import Logo from '../../components/Logo';
import SearchBar from 'material-ui-search-bar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Link from '@mui/material/Link';


function Header(props) {
  const { sections, title } = props;

  return (
    <Toolbar>
    <Button>
        <Logo />
    </Button>
    <Button style={{fontWeight:600}}>MEN</Button>
    <Button style={{fontWeight:600}}>WOMEN</Button>
    <Button style={{fontWeight:600}}>KIDS</Button>
    <Button>SPORTS</Button>
    <Button>BRANDS</Button>
    <SearchBar
    // value={this.state.value}
    // onChange={(newValue) => this.setState({ value: newValue })}
  />
  <FavoriteIcon/>
  <AddShoppingCartIcon/>

    </Toolbar>

    
    //   <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      
    //         <Logo />
          
    //     <IconButton>
    //       <SearchIcon />
    //     </IconButton>
    //     <Button variant="outlined" size="small">
    //       Sign up
    //     </Button>
    //   </Toolbar>
    
   
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;