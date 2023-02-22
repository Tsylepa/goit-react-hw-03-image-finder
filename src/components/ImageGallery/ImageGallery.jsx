import { Gallery, Item } from './ImageGallery.styled';

const ImageGallery = ({ data }) => {
  return buildGallery(data);
};

function buildGallery(data) {
  return (
    <Gallery>
      {data.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <Item key={id}>
            <a href={largeImageURL}>
              <img src={webformatURL} />
            </a>
          </Item>
        );
      })}
    </Gallery>
  );
}

export default ImageGallery;
