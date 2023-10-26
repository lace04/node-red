function RoutedProtected() {
  return (
    <div>
      <h1>Dashboard Protected page</h1>
      <iframe
        src={process.env.NODE_RED_DASHBOARD_URL}
        style={{ width: '150%', height: '100vh' }}
      />
    </div>
  );
}

export default RoutedProtected;
