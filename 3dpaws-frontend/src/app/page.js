import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Stations from '@/components/stations';
import ScatterPlot from '@/components/graph';
import stationData from '@/assets/stationData.json';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <Navbar />
      <div className="flex">
        <div className="flex flex-col items-start p-4 bg-white w-[24%] h-[110vh] overflow-y-auto">
          <h1 className="text-xl m-4 font-ariel font-medium text-gray-400">STATIONS</h1>
          {stationData.map((station, index) => (
            <Stations key={index} Index= {parseInt(station.Index)} Name={station.Name} Number={station.Number} isGreen={station.isGreen} />
          ))}
        </div>
        <div className='flex flex-col items-center w-[76%] h-full'>
          <div className="flex justify-center mx-auto overflow-y-hidden mt-8 mb-8">
            <div className="bg-red-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
              <h1 className="mt-auto mx-auto">Instruments</h1>
              <h2 className="mb-auto mx-auto text-blue-900">103</h2>
            </div>
            <div className="bg-red-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
              <h1 className="mt-auto mx-auto">Sites</h1>
              <h2 className="mb-auto mx-auto text-blue-900">78</h2>
            </div>
            <div className="bg-red-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
              <h1 className="mt-auto mx-auto">Storage</h1>
              <h2 className="mb-auto mx-auto text-blue-900">1281.3 MB</h2>
            </div>
            <div className="bg-red-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
              <h1 className="mt-auto mx-auto">DB Expires </h1>
              <h2 className="mb-auto mx-auto text-blue-900"> 2022-05-20 </h2>
            </div>
            <div className="bg-red-400 w-40 h-35 rounded-lg flex flex-col mr-2" >
              <h1 className="mt-auto mx-auto">Uptime </h1>
              <h2 className="mb-auto mx-auto text-blue-900"> 8 days </h2>
            </div >
          </div>
          <ScatterPlot />
        </div>
      </div>
    </main>
  );
}
