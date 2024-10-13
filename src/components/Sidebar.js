const Sidebar = () => {
    return (
      <aside className="w-1/4 h-full bg-gray-900 text-white p-4">
        <ul>
          <li className="p-2 hover:bg-gray-700"><a href="#">Dashboard</a></li>
          <li className="p-2 hover:bg-gray-700"><a href="#">Profile</a></li>
          <li className="p-2 hover:bg-gray-700"><a href="#">Settings</a></li>
        </ul>
      </aside>
    );
  };
  
export default Sidebar;