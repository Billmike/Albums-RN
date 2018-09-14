import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {
  state = { albums: [] }
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({ albums: response.data })
      })
  }
  render() {
    return (
      <ScrollView>
          <AlbumDetails albums={this.state.albums} />
      </ScrollView>
    )
  }
}

export default AlbumList;
