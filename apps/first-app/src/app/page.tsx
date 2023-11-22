import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <>
      <h1>FIRST app</h1>
      <h2>Port 3000</h2>
      <Link href="/second-app">To App 3001</Link>
    </>
  );
};

export default Home;
