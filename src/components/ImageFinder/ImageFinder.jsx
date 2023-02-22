import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from 'components/ImageGallery';
import axios from 'axios';
import Button from './Button';

class ImageFinder extends Component {
  state = {
    query: '',
    page: 1,
    loading: false,
    data: [],
  };

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  fetchImages = async () => {
    const { page, query } = this.state;
    const BASE_URL = 'https://pixabay.com/api';
    const searchParams = new URLSearchParams({
      key: '32917365-5bd31ba6b729a0861d5d37e11',
      q: query,
      page: page,
      per_page: 12,
    });

    try {
      const {
        data: { hits },
      } = await axios.get(`${BASE_URL}?${searchParams}`);

      return hits;
    } catch (error) {
      console.log(error);
    }
  };

  onSearch = async e => {
    e.preventDefault();
    this.setState({
      page: 1,
      data: await this.fetchImages(),
    });
    window.scrollTo(0, 0);
  };

  loadMore = async () => {
    const { page, data } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  async componentDidUpdate(_, prevState) {
    const { page, data } = this.state;

    if (page !== 1 && prevState.page !== page) {
      const upcomingData = await this.fetchImages();

      this.setState({
        data: [...data, ...upcomingData],
      });
    }
  }

  render() {
    const { query, page, data } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} handleInput={this.handleInput} />
        <ImageGallery data={data} />
        {data.length > 0 && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImageFinder;
