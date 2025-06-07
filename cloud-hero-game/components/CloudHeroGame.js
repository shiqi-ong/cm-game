import { useState } from 'react';

export default function CloudHeroGame() {
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-4">Cloud Hero Game</h1>
      <p className="mb-2">Score: {score}</p>
      {/* TODO: Game canvas and logic goes here */}
    </div>
  );
}
