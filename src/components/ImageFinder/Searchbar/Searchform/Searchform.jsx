import { Form, Button, Label, Input } from './Searchform.styled';
import { BsSearch } from 'react-icons/bs';
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

export default Searchform;
