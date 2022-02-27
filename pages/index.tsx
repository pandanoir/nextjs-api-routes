import { useEffect, useState } from 'react';
import Head from 'next/head';

const UseHelloAPI = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
      });
  });
  return <div>API message: {message}</div>;
};
const UseEnvAPI = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    try {
      fetch('/api/env')
        .then((res) => res.json())
        .then((res) => {
          setMessage(res.message);
        });
    } catch {}
  });
  return <div>API message: {message}</div>;
};
export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <UseHelloAPI />
      <UseEnvAPI />
    </div>
  );
}
