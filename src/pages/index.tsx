import { useState } from 'react';
import { getOptionsForVote } from '../utils/getRandomPokemon';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const [ids, updateIds] = useState(getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.getPokemon.useQuery({ id: first });
  const secondPokemon = trpc.getPokemon.useQuery({ id: second });

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;


  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <div className='text-2xl text-center'>Which pokemon is rounder?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-800'>
          <img src={firstPokemon.data?.sprites?.front_default} alt="" />
        </div>
        <div className='p-8'>vs.</div>
        <div className='w-16 h-16 bg-red-800'>
        <img src={secondPokemon.data?.sprites?.front_default} alt="" />
        </div>
      </div>
    </div>
  );
}

// Restart