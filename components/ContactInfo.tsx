/* eslint-disable react/prop-types */
import { type } from 'os';
import React, { FC } from 'react';
import { Contact } from '../types';

import { ContactItemProps } from '../pages/contacts/[id]';

const ContactInfo: FC<ContactItemProps> = ({ contact }) => {
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
