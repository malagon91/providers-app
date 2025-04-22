
'use client';


import { signInAction } from '@/app/actions';
import { FormMessage, Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import  NavItem  from '@/components/NavItem';
import {menuItems} from '@/components/data';

function SideBar(){

    const [isOpen, setIsOpen] =useState(false)

    return(
        <>
        <motion.div initial={{width:60}} animate={{width: isOpen ? 240 : 60}} 
        transition={{duration:0.4}}
        className='bg-gray-900 h-screen text-white p-4'>
        <button  className='text-xl mb-9' onClick={()=> setIsOpen((prev) => !prev)}>
            <FaBars></FaBars>
        </button>
        <nav className='flex flex-col gap-11'>
            {menuItems.map((item, index)=>(
                <NavItem key={index} icon={item.icon} text={item.text} isOpen={isOpen} setIsOpen={setIsOpen} href={item.href}
                ></NavItem>
            ))}
        </nav>
        </motion.div>
        </>
    )
}

export default SideBar