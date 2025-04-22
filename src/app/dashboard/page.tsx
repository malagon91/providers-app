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
        <SideBar></SideBar>
        <div className='flex-1 min-h-screen bg-blue-200 flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>DashBoard</h1>
        </div>
        </div>
        </>
  
    
  );
}
