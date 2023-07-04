'use client'

import { Form, Button, FormControl, InputGroup } from 'react-bootstrap';

function HomeSearchBar() {
  return (
    <Form className='m-5'>
      <InputGroup className="mb-3">
        <FormControl placeholder="Parça Adı veya Oem No Giriniz" aria-label="Arama yapın" aria-describedby="basic-addon2" />
        <Button variant="outline-primary" id="button-addon2">Ara</Button>
      </InputGroup>
    </Form>
  );
}

export default HomeSearchBar;