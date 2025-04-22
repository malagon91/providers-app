export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: '100vw' }}>
      {children}
    </div>
  );
}