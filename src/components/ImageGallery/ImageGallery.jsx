import { Gallery, Item } from './ImageGallery.styled';

const ImageGallery = ({ data, openModal }) => (
  <Gallery>
    {data.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <Item key={id}>
          <img src={webformatURL} onClick={() => openModal(largeImageURL)} />
        </Item>
      );
    })}
  </Gallery>
);

export default ImageGallery;
