import Image from 'next/image';
import chord from '../assets/chord.png';
import earthcube from '../assets/earthcube.png';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-rose-500 w-screen flex items-center justify-evenly">
      <div className="flex flex-col items-center ml-6 mr-auto">
        <div>
          <Image src={chord} alt="Chord" width="auto" height={40} />
        </div>
        <Image src={earthcube} alt="Earthcube" width="auto" height={50} />
      </div>
      <div className="text-center ml-auto mr-auto">
        <h1 className="text-gray-100 text-5xl">3D PAWS</h1>
      </div>
      <div className="ml-auto mr-2 mb-2 mt-2">
        <Image src={logo} alt="Logo" width={120} height={40} />
      </div>
    </header>
  );
}
