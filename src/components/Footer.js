import React from 'react';
import '../App.css'

function Footer(){
  return (
    <div>
      <div class='team'>
        This App was created by:
        <a href="https://github.com/RyanWolfen7"> Ryan Clark, </a>
        <a href="https://github.com/MugeHasilci"> Muge Hasilci, </a>
        <a href="hhttps://github.com/MHUS25"> Muna Hussein, </a>
        <a href="https://github.com/hnryjmes"> Henry Cooksley, </a>
        <a href="https://github.com/becc-mu"> Rebecca Mulugeta </a>
      </div>

      <div class='resources'>
        API Integration with
        <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">
          Google Maps
        </a>
        <a>,    </a>
        APP created with
        <a href='https://facebook.github.io/create-react-app/'>
          Create-React-App
        </a>
      </div>
    </div>
  )
}

export default Footer;
