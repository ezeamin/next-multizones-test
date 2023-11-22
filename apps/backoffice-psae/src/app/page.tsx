import Link from 'next/link';

const Home = (): JSX.Element => {
  return (
    <>
      <h1>Backoffice</h1>
      <h2>Port 3001</h2>
      <Link href='/'>To App 3000</Link>
    </>
  );
};

export default Home;
