import { getOptionsForVote } from '../utils/getRandomPokemon';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const [first, second] = getOptionsForVote();

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-white bg-gray-800'>
      <div className='text-2xl text-center'>Which pokemon is rounder?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-800'>{first}</div>
        <div className='p-8'>vs.</div>
        <div className='w-16 h-16 bg-red-800'>{second}</div>
      </div>
    </div>
  );
}

// Restart