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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@material-ui/core';

import Link from '@mui/material/Link';
import { display, flexbox } from '@mui/system';

const useStyles = makeStyles((theme)=>({
  Toolbar:{
    justifyContent:"space-between",
    
    display:'flex'
  },
 container:{ 
    margin:0,
    padding:0,
 },
 searchBar: {
   height:30,
   marginRight: theme.spacing(2),
 },
 LoginIcon: {
  paddingRight: theme.spacing(2),
 },




}))

function Header(props) {
  const { sections, title } = props;
  const classes = useStyles();

  return (
    <Toolbar>
      
        <Logo />
    
    <Container
    className={classes.container}>
    <Button style={{fontWeight:600}}>MEN</Button>
    <Button style={{fontWeight:600}}>WOMEN</Button>
    <Button style={{fontWeight:600}}>KIDS</Button>
    <Button>SPORTS</Button>
    <Button>BRANDS</Button>
    </Container>
    
    <SearchBar className={classes.searchBar}
    // value={this.state.value}
    // onChange={(newValue) => this.setState({ value: newValue })}
  />
  <LoginIcon className={classes.LoginIcon}/>
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