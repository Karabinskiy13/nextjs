/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Contact } from '../types';

interface Props {
  contact: Contact;
}

const ContactInfo: FC<Props> = ({ contact }) => {
  const { name, email, adress } = contact || {};
  const { street, suite, city, zipcode } = adress || {};

  if (!contact) {
    return <h3>Empty contact...</h3>;
  }

  return (
    <>
      <h3>{name}</h3>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
