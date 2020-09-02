import React from 'react';
import ParentLayout from '@parent-theme/layouts/Layout.js'
import './theme.css';

export default function Layout(props) {
  return <React.Fragment>
    <ParentLayout {...props} id={'nice'}/>
  </React.Fragment>;
}