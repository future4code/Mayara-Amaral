import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist'
import ListaDePlaylists from './components/ListaDePlaylists'

export class App extends React.Component {
  render() {
    return (
      <div>
        <CriarPlaylist />
        <ListaDePlaylists />
      </div>
    );
  } 
}

export default App;
