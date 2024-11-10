import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-100 w-screen">
      <div className="flex items-start justify-between">
        <nav>
          <ul className="flex items-center mb-4 mt-4">
            <li className="mr-6 ml-12">
              <Link href="/about">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">About</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/help">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Help</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/dashboard">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Dashboard</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/sites">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Sites</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/instruments">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Instruments</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/map">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Map</div>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/visualization">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Visualization</div>
              </Link>
            </li>  
          </ul>
        </nav>
        <nav>
          <ul className="flex items-center mt-4 mb-4">
            <li className="ml-auto mr-6">
              <Link href="/signin">
                <div className="text-gray-400 hover:text-gray-700 cursor-pointer">Sign-in</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
