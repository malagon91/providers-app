export default async function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="max-w-7xl flex flex-row gap-12 items-center justify-center min-h-[50vh]">
        {children}
      </div>
    );
  }
  