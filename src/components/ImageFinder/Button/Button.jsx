import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => (
  <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
