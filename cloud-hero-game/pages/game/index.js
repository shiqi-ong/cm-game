import dynamic from 'next/dynamic';
const CloudHeroGame = dynamic(() => import('@/components/CloudHeroGame'), { ssr: false });

export default function GamePage() {
  return <CloudHeroGame />;
}
