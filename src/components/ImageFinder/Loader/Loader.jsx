import { BallTriangle } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

const Loader = () => (
  <Overlay>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="var(--main-color)"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        opacity: 1,
        transform: 'translate(-50%,-50%)',
      }}
    />
  </Overlay>
);

export default Loader;
