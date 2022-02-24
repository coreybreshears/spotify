import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getNewReleases } from '../../../helpers/getNewReleases';
import { getFeaturedPlaylist } from '../../../helpers/getFeaturedPlaylist';
import { getBrowseGenres } from '../../../helpers/getBrowseGenres';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentWillMount() {
    getNewReleases()
      .then((releases) => {
        this.setState({
          newReleases: releases
        })
      });

    getFeaturedPlaylist()
      .then((playlist) => {
        this.setState({
          playlists: playlist
        })
      })

    getBrowseGenres()
      .then((genres) => {
        this.setState({
          categories: genres
        })
      })
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
