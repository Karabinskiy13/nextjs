/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Contact } from '../../types';

type ContactsProps = {
  contacts: Contact[];
};

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <h1>Contact list:</h1>
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { contacts: data }
  };
};

export default Contacts;
