import Link from 'next/link';


type NavItemProps = {
    icon: React.ReactNode;
    text: string;
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    href: string;


        
    
  };


function NavItem({ icon, text, isOpen, setIsOpen, href }: NavItemProps) {
    return (
      
        <Link href={href} className="flex items-center gap-4 cursor-pointer w-full hover:text-blue-400">
            <span className="text-xl">{icon}</span>
            {isOpen && (
                <div>
                    {text}
                </div>
            )}
        </Link>
        
        
        
      
    );
  }

  export default NavItem