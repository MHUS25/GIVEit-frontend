import React from 'react';
import '../App.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

function Content(){
  return (
    <div id='content-text'>
    <h2>Join our GIVEit community</h2>
    <p> If you have something you want to give away or want a service, fill in the form and post it on GIVEit. Your post will apear on GIVEit map</p>
    </div>
  )
}

export default Content;
