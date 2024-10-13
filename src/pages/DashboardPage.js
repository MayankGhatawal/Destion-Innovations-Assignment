const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="/profile" className="hover:bg-blue-500 p-2 block rounded-md">Profile</a>
            </li>
            <li className="mb-4">
              <a href="/setting" className="hover:bg-blue-500 p-2 block rounded-md">Settings</a>
            </li>
            <li className="mb-4">
              <a href="/analytics" className="hover:bg-blue-500 p-2 block rounded-md">Analytics</a>
            </li>
            <li className="mb-4">
              <a href="/login" className="hover:bg-blue-500 p-2 block rounded-md">Login</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac erat.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac erat.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac erat.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
