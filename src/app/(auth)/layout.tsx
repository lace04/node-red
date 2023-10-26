const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='
      flex flex-col
      items-center justify-center mx-auto
      min-h-screen
      bg-gray-50
    '
    >
      {children}
    </div>
  );
};

export default AuthLayout;
