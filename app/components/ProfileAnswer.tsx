'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { profileData } from '../data/profile';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Skeleton loader component
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-bubble-bg via-border to-bubble-bg bg-[length:200%_100%] animate-shimmer rounded-2xl" />
  );
}

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

interface ProfileAnswerProps {
  onQuestionClick?: (question: string, id?: string) => void;
}

export default function ProfileAnswer({ onQuestionClick }: ProfileAnswerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Keyboard Navigation for Modal Close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null && e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImageIndex]);

  // Update current slide index when modal opens
  useEffect(() => {
    if (selectedImageIndex !== null) {
      setCurrentSlideIndex(selectedImageIndex);
    }
  }, [selectedImageIndex]);

  return (
    <>
      <motion.div
        className="w-full max-w-2xl mx-auto space-y-8 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Info */}
        <motion.div className="space-y-1" variants={itemVariants}>
          <h1 className="text-3xl font-bold text-foreground">{profileData.name}</h1>
          <p className="text-lg text-foreground-muted">{profileData.title}</p>
        </motion.div>

        {/* Image Gallery - Forced Grid on all sizes */}
        <motion.div className="grid grid-cols-3  gap-2 md:gap-4 h-auto" variants={itemVariants}>
          {/* Main Image */}
          <div 
            className="col-span-2 bg-bubble-bg rounded-xl md:rounded-2xl overflow-hidden relative border border-border cursor-pointer group transition-colors"
            onClick={() => setSelectedImageIndex(0)}
          >
            {!imagesLoaded[0] && <ImageSkeleton />}
            <img 
              src={profileData.gallery[0].url} 
              alt={profileData.gallery[0].label}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imagesLoaded[0] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(0)}
            />
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            {/* Small Image 1 */}
            <div 
              className="h-1/2 bg-bubble-bg rounded-xl md:rounded-2xl overflow-hidden border border-border relative cursor-pointer group transition-colors"
              onClick={() => setSelectedImageIndex(1)}
            >
              {!imagesLoaded[1] && <ImageSkeleton />}
              <img 
                src={profileData.gallery[1].url} 
                alt={profileData.gallery[1].label}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imagesLoaded[1] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(1)}
              />
            </div>
            {/* Small Image 2 with Overlay */}
            <div 
              className="h-1/2 bg-bubble-bg rounded-xl md:rounded-2xl overflow-hidden border border-border relative cursor-pointer group transition-colors"
              onClick={() => setSelectedImageIndex(2)}
            >
              {!imagesLoaded[2] && <ImageSkeleton />}
              <img 
                src={profileData.gallery[2].url} 
                alt={profileData.gallery[2].label}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imagesLoaded[2] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(2)}
              />
              {profileData.gallery.length > 3 && (
                <div className="absolute inset-0 bg-foreground/30 flex items-end justify-end pb-2 pr-2 opacity-100 transition-opacity group-hover:bg-foreground/20">
                    <div className="bg-background/20 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1 md:gap-2 border border-white/30 text-white">
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        <span className="text-xs md:text-sm font-bold">{profileData.gallery.length - 3}</span>
                    </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-foreground leading-relaxed">
            <strong>{profileData.name}</strong> {profileData.bio}
          </p>
        </motion.div>

        {/* Current Roles */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Current Roles</h3>
          <ul className="space-y-4">
            {profileData.roles.map((role, index) => (
                <motion.li key={index} className="flex gap-4" variants={itemVariants}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    <div>
                        <p className="font-semibold text-foreground">{role.company} — {role.title}</p>
                        <p className="text-sm text-foreground-muted">{role.description}</p>
                    </div>
                </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Projects Section - Redesigned Layout */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Featured Projects</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3].map((i, index) => (
              <motion.div
                key={i}
                className={`group p-4 rounded-xl border border-dashed border-border hover:border-accent hover:bg-background-secondary transition-all cursor-pointer ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
                variants={itemVariants}
              >
                <div className={`w-full bg-bubble-bg rounded-lg mb-3 flex items-center justify-center relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
                  <ImageSkeleton />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground-muted opacity-30 group-hover:opacity-100 group-hover:text-accent transition-opacity relative z-10"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
                <h4 className="font-medium text-foreground mb-1 italic opacity-60">
                  {index === 0 ? 'Flagship Project (Coming Soon)' : `Project ${i} (Coming Soon)`}
                </h4>
                <p className="text-sm text-foreground-muted">
                  {index === 0 
                    ? 'A deep dive into my most ambitious work yet, focusing on performance and scale.' 
                    : 'Innovative solution built with modern technologies.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Section */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="text-xl font-semibold text-foreground">Latest Writings</h3>
              <button 
                  className="text-xs font-medium text-accent hover:underline"
                  onClick={() => onQuestionClick?.('writings')}
              >
                  View all
              </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
              <motion.div 
                className="group cursor-pointer p-5 bg-bubble-bg border border-border rounded-xl hover:border-accent/80 hover:shadow-sm transition-all"
                whileHover={{ y: -2 }}
                onClick={() => onQuestionClick?.('The Learning Curve in the Age of AI', 'learning-in-age-of-ai')}
              >
                  <div className="flex gap-3 items-center mb-2 text-xs text-foreground-muted">
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">AI & Tech</span>
                      <span>•</span>
                      <span>Jan 26, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">The Learning Curve in the Age of AI</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                      How artificial intelligence is reshaping not just how we code, but how we learn and grow as developers in the modern tech industry.
                  </p>
              </motion.div>
              
              <motion.div 
                className="group cursor-pointer p-5 bg-bubble-bg border border-border rounded-xl hover:border-accent/80 hover:shadow-sm transition-all"
                whileHover={{ y: -2 }}
                onClick={() => onQuestionClick?.('Building Scalable UI Components', 'scalable-ui-components')}
              >
                   <div className="flex gap-3 items-center mb-2 text-xs text-foreground-muted">
                      <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Design Systems</span>
                      <span>•</span>
                      <span>Jan 15, 2026</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Building Scalable UI Components</h4>
                  <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                      A deep dive into component architecture and how to create flexible, maintainable design systems for large-scale applications.
                  </p>
              </motion.div>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div className="space-y-4 pt-4" variants={itemVariants}>
          <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Connect</h3>
          <div className="flex flex-wrap gap-4">
            {profileData.socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground-muted hover:text-accent font-medium text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {link.platform === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>}
                    {link.platform === 'twitter' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>}
                    {link.platform === 'github' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                    {link.label}
                </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Modal - Polished for Mobile */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-background/80 flex items-center justify-center p-4 backdrop-blur-3xl"
              onClick={closeModal}
            >
              {/* Close Button - Larger tap area */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors z-[110]"
                aria-label="Close gallery"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              {/* Static Navigation Info */}
              <div className="absolute bottom-12 left-0 right-0 z-[120] flex flex-col items-center gap-3 pointer-events-none px-6">
                <p className="text-foreground font-thin text-sm italic drop-shadow-sm text-center">
                  {profileData.gallery[currentSlideIndex].label}
                </p>
                <div className="bg-foreground/10 px-4 py-1.5 rounded-full backdrop-blur-xl border border-border flex items-center justify-center shadow-sm">
                    <span className="text-xs text-foreground uppercase font-bold tracking-widest">
                      {currentSlideIndex + 1} / {profileData.gallery.length}
                    </span>
                </div>
              </div>

              {/* Swiper Carousel */}
              <div 
                className="w-full max-w-5xl h-full flex items-center justify-center pt-10 pb-20"
                onClick={(e) => e.stopPropagation()}
              >
                <Swiper
                  initialSlide={selectedImageIndex}
                  modules={[Navigation, Pagination, Keyboard]}
                  navigation={true}
                  loop={true}
                  keyboard={{ enabled: true }}
                  className="w-full h-full mySwiper"
                  onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
                >
                  {profileData.gallery.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center px-4">
                      <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
                        <img 
                          src={image.url} 
                          alt={image.label}
                          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl transition-transform duration-300"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Global Swiper Overrides */}
              <style jsx global>{`
                .swiper-button-next, .swiper-button-prev {
                  color: var(--foreground) !important;
                  background: var(--bubble-bg);
                  width: 50px !important;
                  height: 50px !important;
                  padding: 10px !important;
                  border-radius: 50%;
                  backdrop-filter: blur(10px);
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  border: 1px solid var(--border);
                  opacity: 0.8;
                }
                @media (max-width: 768px) {
                  .swiper-button-next, .swiper-button-prev {
                    display: none !important; /* Touch handles it better on mobile */
                  }
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                  font-size: 18px !important;
                  font-weight: 800;
                  color: var(--foreground) !important;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover {
                  background: var(--bubble-hover);
                  opacity: 1;
                  transform: scale(1.05);
                }
              `}</style>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}