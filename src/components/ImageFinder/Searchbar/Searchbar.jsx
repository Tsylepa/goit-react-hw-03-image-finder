import { Bar } from './Searchbar.styled';
import Searchform from './Searchform';

const Searchbar = props => {
  return (
    <Bar>
      <Searchform {...props} />
    </Bar>
  );
};

export default Searchbar;
