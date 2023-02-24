import { Gallery, Item } from './ImageGallery.styled';

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

export default ImageGallery;
