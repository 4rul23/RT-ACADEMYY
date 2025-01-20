'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image'; 
import TELU from '@/app/assets/Carousel/TELU.png';
import STEI from '@/app/assets/Carousel/STEI.png';
import ITS from '@/app/assets/Carousel/ITSG.png';
import SMKT from '@/app/assets/Carousel/SMKT.png';
import BINUS from '@/app/assets/Carousel/BINUS.png';
import ugm from '@/app/assets/Carousel/ugm.png';

interface Logo {
  src: StaticImageData;
  alt: string;
}

const logos: Logo[] = [
  { src: TELU, alt: 'Telkom University' },
  { src: STEI, alt: 'ITB' },
  { src: ITS, alt: 'ITS' },
  { src: SMKT, alt: 'SMK TMKS' },
  { src: BINUS, alt: 'BINUS' },
  { src: ugm, alt: 'UGM' },
];

export default function LogoCarousel() {
  const animationSettings = {
    animate: {
      x: [0, -100 * logos.length + '%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 120,
          ease: "linear",
        }
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1525] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1525] to-transparent z-10" />

      <div className="flex">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            {...animationSettings}
            className="flex gap-12 shrink-0"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={`${i}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="relative w-44 h-20 group"
              >
                <div className="absolute inset-0 rounded-xl transition-all duration-300 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10" />
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain transition-opacity duration-300 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                  sizes="176px"
                  priority={index < 3}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
