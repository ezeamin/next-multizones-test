const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang='es'>
      <body>
          {children}
      </body>
    </html>
  );
};

export default RootLayout;
