import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from 'components/ImageFinder/ImageGallery';
import axios from 'axios';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

class ImageFinder extends Component {
  state = {
    query: '',
    page: 1,
    loading: false,
    data: [],
    modalIsOpen: false,
    madalImage: '',
  };

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  fetchImages = async (page = this.state.page) => {
    const BASE_URL = 'https://pixabay.com/api';
    const searchParams = new URLSearchParams({
      key: '32917365-5bd31ba6b729a0861d5d37e11',
      q: this.state.query,
      page: page,
      per_page: 12,
    });

    try {
      this.setState({ loading: true });
      const {
        data: { hits },
      } = await axios.get(`${BASE_URL}?${searchParams}`);
      return hits;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onSearch = async e => {
    e.preventDefault();

    this.setState({
      page: 1,
      data: await this.fetchImages(1),
    });
    window.scrollTo(0, 0);
  };

  loadMore = async () => {
    const { page } = this.state;
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

  openModal = image => {
    this.setState({ modalIsOpen: true, modalImage: image });
    document.addEventListener('keydown', this.onEscPress);
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, modalImage: '' });
    document.removeEventListener('keydown', this.onEscPress);
  };

  onEscPress = e => {
    if (e.key !== 'Escape') return;
    this.closeModal();
  };

  render() {
    const { data, modalIsOpen, modalImage, loading } = this.state;
    return (
      <>
        <Searchbar onSearch={this.onSearch} handleInput={this.handleInput} />
        <ImageGallery data={data} openModal={this.openModal} />
        {data.length > 0 && <Button loadMore={this.loadMore} />}
        {modalIsOpen && (
          <Modal closeModal={this.closeModal} image={modalImage} />
        )}
        {<Loader />}
      </>
    );
  }
}

export default ImageFinder;
