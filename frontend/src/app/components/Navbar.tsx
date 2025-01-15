'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import logos from "@/app/assets/logos.png";

const NAV_LINKS = [
 { href: "/produk", label: "Produk" },
 { href: "/tujuan", label: "Tujuan" },
 { href: "/harga", label: "Harga" },
 { href: "/resources", label: "Resources" },
 { href: "/student", label: "Student" }
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const pathname = usePathname();

 const handleScroll = useCallback(() => {
   setScrolled(window.scrollY > 20);
 }, []);

 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, [handleScroll]);

 return (
   <motion.nav
     initial={{ y: -100 }}
     animate={{ y: 0 }}
     transition={{ duration: 0.5 }}
     className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg"
   >
     <div className="px-6 mx-auto max-w-7xl lg:px-8">
       <div className="flex items-center justify-between h-20">
         <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
           <Link href="/" className="flex items-center">
             <Image
               src={logos}
               alt="RT ACADEMY Logo"
               priority
               className="w-auto h-12"
             />
           </Link>
         </motion.div>

         <div className="items-center hidden space-x-6 md:flex">
           {NAV_LINKS.map(({ href, label }) => (
             <Link
               key={href}
               href={href}
               className="relative px-4 py-2 text-base font-bold text-gray-400 transition-colors duration-200 hover:text-gray-200"
             >
               {pathname === href && (
                 <motion.div
                   layoutId="navbar-indicator"
                   className="absolute inset-0 bg-gray-800 rounded-lg -z-10"
                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                 />
               )}
               {label}
             </Link>
           ))}
         </div>

         <div className="items-center hidden space-x-6 md:flex">
           <Link
             href="/sekolah"
             className="text-base font-medium text-gray-400 transition-colors duration-200 hover:text-gray-200"
           >
             Sekolah
           </Link>

           <div className="w-px h-5 bg-gray-700" />

           <Link
             href="/login"
             className="text-base font-medium text-gray-400 transition-colors duration-200 hover:text-gray-200"
           >
             Login
           </Link>

           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <Link
               href="/mulai"
               className="px-6 py-2.5 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity duration-200"
             >
               Mulai
             </Link>
           </motion.div>
         </div>

         <motion.button
           whileTap={{ scale: 0.95 }}
           className="p-2 text-gray-400 rounded-lg md:hidden hover:text-gray-200 hover:bg-gray-800"
         >
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
           </svg>
         </motion.button>
       </div>
     </div>

     {scrolled && (
       <motion.div
         initial={{ scaleX: 0 }}
         animate={{ scaleX: 1 }}
         transition={{ duration: 0.3 }}
         className="h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
       />
     )}
   </motion.nav>
 );
}
