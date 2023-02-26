import { Gallery, Item } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ data, openModal }) => (
  <Gallery>
    {data.map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <Item key={id}>
          <img
            src={webformatURL}
            onClick={() => openModal(largeImageURL)}
            alt={tags}
          />
        </Item>
      );
    })}
  </Gallery>
);

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
