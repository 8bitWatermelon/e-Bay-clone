import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='space-y-4'>
        <h1 className='font-bold text-4xl'>Welcome to e-Bay.</h1>
        <div className='mt-4'>
          <Button
            variant={'outline'}
            size={'sm'}
          >
            <Mail className='w-4 h-4 mr-2 hover:text-accent-foreground' />
            Send magic link
          </Button>
        </div>
      </div>
    </main>
  );
}
