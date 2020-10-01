import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'

const Searchbar = () => {
    return (
        <Form inline >
          <FormControl
            type="text"
            className="mr-sm-2"
            placeHolder="Start your search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
    );
};

export default Searchbar;