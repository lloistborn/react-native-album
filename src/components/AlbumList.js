import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album';

class AlbumList extends Component {
	state = { albums: [] };

	async componentWillMount() {
		try {
			const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
			this.setState({ albums: response.data });
		} catch (err) {
			throw (err);
		}
	}

	renderAlbums() {
		return this.state.albums.map((album) => 
			<Album album={album} />
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
