import { Overlay, Img } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, image }) => (
  <Overlay
    onClick={e => {
      e.target === e.currentTarget && closeModal(e);
    }}
  >
    <div>
      <Img src={image} alt="" />
    </div>
  </Overlay>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
