import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Stations from '@/components/stations';
import ScatterPlot from '@/components/graph';

const stationData = [
  {"Name": "WxPi01", "Number": 1, "isGreen": "True"},
  {"Name": "PaulsPi", "Number": 2, "isGreen": "True"},
  {"Name": "NOAA_Testbed", "Number": 4, "isGreen": ""},
  {"Name": "NCAR_Testbed Site 1", "Number": 5, "isGreen": "True"},
  {"Name": "3D-PAWS Demo System", "Number": 6, "isGreen": ""},
  {"Name": "NCAR_Testbed2", "Number": 7, "isGreen": "True"},
  {"Name": "Curacao Met Service", "Number": 8, "isGreen": ""},
  {"Name": "WxPi02", "Number": 9, "isGreen": "True"},
  {"Name": "Barbados_CIMH", "Number": 12, "isGreen": ""},
  {"Name": "Wien University", "Number": 15, "isGreen": "True"},
  {"Name": "Berlin_Testbed", "Number": 16, "isGreen": ""},
  {"Name": "Colorado STEM Academy", "Number": 17, "isGreen": ""},
  {"Name": "3D-PAWS_Afghan", "Number": 36, "isGreen": "True"},
  {"Name": "3D-PAWS_CCCC", "Number": 37, "isGreen": ""},
  {"Name": "3D-PAWS_LORA", "Number": 38, "isGreen": ""},
  {"Name": "Fargo_Jet_Center", "Number": 47, "isGreen": ""},
  {"Name": "Particle Full Station - RJB", "Number": 53, "isGreen": ""},
  {"Name": "3D-PAWS Stream Gauge Testbed Auburn, California", "Number": 57, "isGreen": ""},
  {"Name": "3D-PAWS-DRI Fire Weather Testing", "Number": 60, "isGreen": ""},
  {"Name": "3D-PAWS Stream Gauge Testbed Potecasi Creek", "Number": 61, "isGreen": ""},
  {"Name": "Chincoteague 2", "Number": 62, "isGreen": ""},
  {"Name": "ECC Pump House Storm Surge Test", "Number": 63, "isGreen": ""},
  {"Name": "BriannaPi", "Number": 64, "isGreen": "True"},
  {"Name": "UND_00200", "Number": 65, "isGreen": ""},
  {"Name": "UND_00300", "Number": 66, "isGreen": ""},
  {"Name": "UND_00100", "Number": 67, "isGreen": "True"},
  {"Name": "3D-PAWS_Frederick", "Number": 68, "isGreen": "True"},
  {"Name": "3D-PAWS-Arduino_GSM-PAK", "Number": 69, "isGreen": ""},
  {"Name": "Particle SG SS FN - RJB", "Number": 70, "isGreen": ""},
  {"Name": "NOAA Testbed 2 - Particle Full Station", "Number": 71, "isGreen": "True"},
  {"Name": "Rain & Soil Moisture Sensors - RJB", "Number": 72, "isGreen": ""},
  {"Name": "Curacao Met Service Site2", "Number": 73, "isGreen": "True"},
  {"Name": "CSU Portable Station 1", "Number": 74, "isGreen": ""},
  {"Name": "CSU Portable Station 2", "Number": 75, "isGreen": ""},
  {"Name": "3D-PAWS at Nebian, France", "Number": 76, "isGreen": "True"},
  {"Name": "Storm_Surge_Chincoteague", "Number": 78, "isGreen": ""},
  {"Name": "Dominican Republic Storm Surge Station 01", "Number": 79, "isGreen": ""},
  {"Name": "Dominican Republic Storm Surge Station 02", "Number": 80, "isGreen": ""},
  {"Name": "Kenya_Particle_01", "Number": 81, "isGreen": ""},
  {"Name": "Kenya_Particle_02", "Number": 82, "isGreen": ""},
  {"Name": "CSSL_Snow_Sensor_01", "Number": 83, "isGreen": ""},
  {"Name": "CSSL_Snow_Sensor_02", "Number": 84, "isGreen": ""},
  {"Name": "NWS Testbed - Arduino MKR Full Station", "Number": 86, "isGreen": "True"},
  {"Name": "Falls Church 2G/3G FS", "Number": 87, "isGreen": ""},
  {"Name": "3D-PAWS_MunichND", "Number": 88, "isGreen": ""},
  {"Name": "3D-PAWS_SCAC_01", "Number": 89, "isGreen": ""},
  {"Name": "3D-PAWS_SCAC_02", "Number": 90, "isGreen": ""},
  {"Name": "NDSU_01", "Number": 92, "isGreen": ""},
  {"Name": "NDSU_02", "Number": 93, "isGreen": ""},
  {"Name": "NDSU_03", "Number": 94, "isGreen": ""},
  {"Name": "NDSU_04", "Number": 95, "isGreen": ""},
  {"Name": "NDSU_05", "Number": 96, "isGreen": ""},
  {"Name": "NDSU_06", "Number": 97, "isGreen": ""},
  {"Name": "NDSU_07", "Number": 98, "isGreen": ""},
  {"Name": "Austria_Snow_Sensor_01", "Number": 99, "isGreen": "True"},
  {"Name": "Austria_Snow_Sensor_02", "Number": 100, "isGreen": ""},
  {"Name": "MKRNB1500 #1", "Number": 101, "isGreen": ""},
  {"Name": "MKRNB1500 #2", "Number": 102, "isGreen": ""},
  {"Name": "MKRNB1500 #3", "Number": 103, "isGreen": "True"},
  {"Name": "Particle_FN #1", "Number": 104, "isGreen": ""},
  {"Name": "Zimbabwe MKR Test Unit", "Number": 105, "isGreen": ""},
  {"Name": "Rain & Soil LoRa Remote", "Number": 106, "isGreen": ""},
  {"Name": "Cayman_Islands_SSG01", "Number": 108, "isGreen": "True"},
  {"Name": "Cayman_Islands_SSG02", "Number": 109, "isGreen": "True"},
  {"Name": "3D-PAWS-Snow Depth Station - Lake Tahoe", "Number": 110, "isGreen": "True"},
  {"Name": "3D-PAWS-Snow Depth Station - South Park", "Number": 111, "isGreen": ""},
  {"Name": "Upson II TinyML - Testbed Station", "Number": 112, "isGreen": ""},
  {"Name": "MFS_SenseCAP", "Number": 113, "isGreen": "True"}
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
     <Header />
     <Navbar />
     <div className="flex">
      <div className="flex flex-col items-start p-4 bg-white w-[24%]">
          <h1 className="text-xl m-4 font-ariel font-medium text-gray-400"> STATIONS  </h1>
          {stationData.map((station, index) => (
            <Stations key={index} Name={station.Name} Number={station.Number} isGreen={station.isGreen} />
          ))}
      </div>
        <div className='flex flex-col items-center w-[76%] h-full'>
         <div className="flex justify-center mx-auto overflow-y-hidden mt-8 mb-8">
          <div className="bg-orange-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">Measurements</h1>
            <h2 className="mb-auto mx-auto text-blue-900">772,284,666</h2>
          </div>
          <div className="bg-orange-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">Instruments</h1>
            <h2 className="mb-auto mx-auto text-blue-900">103</h2>
          </div>
          <div className="bg-orange-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">Sites</h1>
            <h2 className="mb-auto mx-auto text-blue-900">78</h2>
          </div>
          <div className="bg-orange-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">Storage</h1>
            <h2 className="mb-auto mx-auto text-blue-900">1281.3 MB</h2>
          </div>
          <div className="bg-orange-400 w-40 h-40 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">DB Expires </h1>
            <h2 className="mb-auto mx-auto text-blue-900"> 2022-05-20 </h2>
          </div>
          <div className="bg-orange-400 w-40 h-35 rounded-lg flex flex-col mr-2" >
            <h1 className="mt-auto mx-auto">Uptime </h1>
            <h2 className="mb-auto mx-auto text-blue-900"> 8 days </h2>
           </div >
         </div>
          <ScatterPlot/>
        </div>
        </div>
    </main>
  );
}
