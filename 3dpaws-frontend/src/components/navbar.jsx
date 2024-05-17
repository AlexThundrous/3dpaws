export default function Navbar () {
    return (
      <header className="bg-gray-100 w-screen">
        <div className="flex items-start justify-between">
          <nav>
            <ul className="flex items-center mb-4 mt-4">
              <li className="mr-6 ml-12">
                <a href="#" className="text-gray-400 hover:text-gray-700">About </a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Help</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Dashboard</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Sites</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Instruments</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Map</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-gray-400 hover:text-gray-700">Visualization</a>
              </li>  
            </ul>
          </nav>
          <nav>
          <ul className="flex items-center mt-4 mb-4">
            <li className="ml-auto mr-6">
              <a href="#" className="text-gray-400 hover:text-gray-700">Sign-in</a>
            </li>
          </ul>
        </nav>
      </div>
      </header>
    );
  };
  
  