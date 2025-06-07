import dynamic from 'next/dynamic';

const CloudHeroGame = dynamic(() => import('../components/CloudHeroGame'), { ssr: false });

export default function Home() {
  return <CloudHeroGame />;
}