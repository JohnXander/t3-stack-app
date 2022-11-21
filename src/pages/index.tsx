import { useState } from 'react';
import { getOptionsForVote } from '../utils/getRandomPokemon';
import { trpc } from '../utils/trpc';

const btn = "text-center text-white border rounded p-2.5 hover:bg-white hover:text-gray-800"

export default function IndexPage() {
  const [ids, updateIds] = useState(getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.getPokemon.useQuery({ id: first });
  const secondPokemon = trpc.getPokemon.useQuery({ id: second });

  if (firstPokemon.isLoading || secondPokemon.isLoading) return (
    <div className='text-2xl h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      Loading...
    </div>
  )

  const firstPokeImg: string = String(firstPokemon.data?.sprites.front_default);
  const secondPokeImg: string = String(secondPokemon.data?.sprites.front_default);

  const voteForRoundest = (selected: number) => {
    updateIds(getOptionsForVote())
  }

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <div className='text-2xl text-center'>Which pokemon is rounder?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl pb-20'>
        <div className='w-64 h-64 flex flex-col'>
          <picture>
            <img src={firstPokeImg} alt="" className='w-full' />
          </picture>
          <div className='text-xl text-center capitalize mt-[-2rem]'>
            {firstPokemon.data?.name}
          </div>
        <div className='p-2'></div>
          <button className={btn} onClick={() => voteForRoundest(first)}>Rounder</button>
        </div>
        <div className='p-8'>vs.</div>
        <div className='w-64 h-64 flex flex-col'>
          <picture>
            <img src={secondPokeImg} alt="" className='w-full' />
          </picture>
          <div className='text-xl text-center capitalize mt-[-2rem]'>
            {secondPokemon.data?.name}
          </div>
        <div className='p-2'></div>
          <button className={btn} onClick={() => voteForRoundest(first)}>Rounder</button>
        </div>
        <div className='p-2'></div>
      </div>
    </div>
  );
}