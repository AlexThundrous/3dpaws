// pages/instruments/[Index].js
import { useRouter } from 'next/router';

console.log('Rendering Instrument page');
export default function Instrument() {
  const router = useRouter();
  const { Index } = router.query;

  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Instrument-specific content here */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl">Instrument Details for {Index}</h1>
        {/* More content goes here */}
      </div>
    </main>
  );
}
