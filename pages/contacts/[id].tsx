/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import ContactInfo from '../../components/ContactInfo';
import { Contact } from '../../types';

export type ContactItemProps = {
  contact: Contact;
};

const Contact: FC<ContactItemProps> = ({ contact }) => (
  <>
    <Head>
      <title>Contact</title>
    </Head>
    <ContactInfo contact={contact} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }: any = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { contact: data }
  };
};

export default Contact;
