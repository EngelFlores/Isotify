import React, { Component } from 'react';
import AlbumsGrid from '../../components/albumsGrid/albumsGrid';
import HeaderLine from '../../components/headerLine/headerLine';
import SwitchButton from '../../components/buttons/switchButton/switchButton';
import './albums.css';

class Albums extends Component {
  state = {
    isListSelected: false,
    albums: [],
    albumsAmount: '',
    songsAmount: ''
  };

  //  TODO: see componentDidMount
  componentDidMount = () => {
    // SERVICE
    //   .getAlbums()
    //   .then((albums)=>this.setState({albums}))
  };

  handleClick = (isListSelected) => {
    this.setState({ isListSelected });
  };

  render = () => {
    //const { albums, isListSelected, albumsAmount, songsAmount } = this.state;
    const { isListSelected, albumsAmount, songsAmount } = this.state;
    const subtitle = `${3} Albums, ${43} Songs`;
    const albums = [
      {
        imgSrc:
          'data:image/png;base64,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',
        title: 'dasda',
        author: 'a'
      },
      {
        imgSrc:
          'data:image/png;base64,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',
        title: 'dasda',
        author: 'a'
      },
      {
        imgSrc:
          'data:image/png;base64,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',
        title: 'dasda',
        author: 'a'
      }
    ];
    console.log(albums);

    return (
      <div className="albumsView">
        <HeaderLine
          {...{
            title: 'Albums',
            subtitle
          }}
        >
          <SwitchButton
            firstOption="Grid"
            secondOption="List"
            inputFunction={this.handleClick}
          />
        </HeaderLine>
        {!isListSelected ? (
          <AlbumsGrid size="big" albums={albums} />
        ) : (
          <AlbumsGrid size="small" albums={albums} />
        )}
      </div>
    );
  };
}

export default Albums;