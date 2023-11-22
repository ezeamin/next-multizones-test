import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <>
      <h1>Home</h1>
      <h2>Port 3000</h2>
      <Link href="/backoffice-psae">To App 3001</Link>
    </>
  );
};

export default Home;
