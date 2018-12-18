import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                GIVEit
                </Typography>
                <TextField
                  style={{ padding: 24 }}
                  className="SearchBar"
                  placeholder="Search"
                  value="tempChangeMeL8tr"
                  // onChange={(e) => this.setState({ searchfor:e.target.value})}
                  />
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
