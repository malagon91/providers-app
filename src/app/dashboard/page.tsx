import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import SideBar from '@/components/SideBar';


export default function Dashboard() {

  
  
  return (
    <>
   <div className='flex'>
  <SideBar />

  {/* Contenedor principal */}
  <div className='flex-1 min-h-screen bg-blue-200 flex flex-col items-center justify-start px-6 py-8 gap-6'>

    <h1 className='text-3xl font-bold mt-10'>Dashboard</h1>



 
  </div>
</div>

        </>
  
    
  );
}
