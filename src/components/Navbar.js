import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const { classes } = props;
 return (
   <div className={classes.root}>
     <AppBar position="static">
       <Toolbar>
         <Typography className={classes.title} variant="h6" color="inherit" noWrap>
           GIVEit
         </Typography>
         <div className={classes.grow} />
         <div className={classes.search}>
           <div className={classes.searchIcon}>
             <SearchIcon />
           </div>
           <InputBase
             placeholder="Search…"
             classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
             }}
           />
         </div>
         <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
           <MenuIcon />
         </IconButton>
       </Toolbar>
     </AppBar>
   </div>
 );

 SearchAppBar.propTypes = {
 classes: PropTypes.object.isRequired,
};
