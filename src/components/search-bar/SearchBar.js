import { Formik } from 'formik';
import { Form, Input } from './style.js';

export default function SearchBar(props) {
  return (
    <Formik>
      {({ handleSubmit, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Dis-nous ce que tu cherches !"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form>
      )}
    </Formik>
  );
}
