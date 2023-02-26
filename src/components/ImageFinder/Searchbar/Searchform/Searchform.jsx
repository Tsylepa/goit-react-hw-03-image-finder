import { Form, Button, Label, Input } from './Searchform.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Searchform = ({ onSearch, handleInput }) => {
  return (
    <Form onSubmit={onSearch}>
      <Button type="submit">
        <Label>
          <BsSearch />
        </Label>
      </Button>

      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={handleInput}
      />
    </Form>
  );
};

Searchform.propTypes = {
  onSearch: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Searchform;
