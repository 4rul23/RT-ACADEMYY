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
  { src: TELU, alt: 'Telkom University', },
  { src: STEI, alt: 'ITB',  },
  { src: ITS, alt: 'ITS',  },
  { src: SMKT, alt: 'SMK TMKS'  },
  { src: BINUS, alt: 'BINUS' },
  { src: ugm, alt: 'UGM' },
];

export default function LogoCarousel() {
  const animationSpeed = 250;
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1525] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1525] to-transparent z-10" />

      <div className="flex gap-8">
        {[0, 1].map((key) => (
          <motion.div
            key={key}
            className="flex gap-8 shrink-0"
            animate={{
              x: [0, -100 * logos.length + '%'],
            }}
            transition={{
              x: {
                duration: animationSpeed,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${key}-${index}`}
                className="relative flex items-center justify-center w-40 h-16 group"
              >
                <div className="absolute inset-0 transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5" />
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    priority={index < 3}
                    className="object-contain transition-all duration-300 opacity-50 filter grayscale group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
