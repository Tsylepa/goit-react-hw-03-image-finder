import { Gallery, Item } from './ImageGallery.styled';

const ImageGallery = ({ data, openModal }) => (
  <Gallery>
    {data.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <Item key={id}>
          <a onClick={() => openModal(largeImageURL)}>
            <img src={webformatURL} />
          </a>
        </Item>
      );
    })}
  </Gallery>
);

export default ImageGallery;
