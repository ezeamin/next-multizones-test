import Link from "next/link";

const Home = (): JSX.Element => {
  return (
    <>
      <h1>Modulo Home</h1>
      <h2>Puerto 3000</h2>
      <Link href="/backoffice-psae">A PSAE</Link>
    </>
  );
};

export default Home;
