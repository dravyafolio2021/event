const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-cover bg-fixed bg-center justify-center items-center min-h-screen">{children}</div>
  );
};

export default Layout;
