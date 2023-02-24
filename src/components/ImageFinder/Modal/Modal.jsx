import { Overlay, Img } from './Modal.styled';

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

export default Modal;
