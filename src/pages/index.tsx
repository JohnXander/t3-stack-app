import { trpc } from '../utils/trpc';

export default function IndexPage() {
  const {data, isLoading} = trpc.hello.useQuery({ text: 'John' });
  
  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data.greeting}</div>

  return (
    <div className='h-screen w-screen flex flex-col justify-content items-center'>
      <div className='text-2xl text-center'>Which pokemon is rounder?</div>
      <div className='p-2'></div>
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'>vs.</div>
        <div className='w-16 h-16 bg-red-200'></div>
      </div>
    </div>
  );
}