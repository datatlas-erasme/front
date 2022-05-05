import { Form, Input } from './style';

export default function SearchBar() {
  return (
    <form>
      {() => (
        <Form>
          <Input placeholder="Dis-nous ce que tu cherches !" />
        </Form>
      )}
    </form>
  );
}
