import { LoadMoreBtn } from './Button.styled';

const Button = ({ loadMore }) => (
  <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
);

export default Button;
