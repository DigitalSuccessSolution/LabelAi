import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add({
      // Desktop
      isDesktop: "(min-width: 768px)",
      // Mobile
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          width: isDesktop ? "60vw" : "85vw",
          height: isDesktop ? "40vh" : "30vh",
          borderRadius: isDesktop ? "40px" : "24px",
          y: isDesktop ? 100 : 50,
          opacity: 0.5,
        },
        {
          width: isDesktop ? "1280px" : "95vw",
          maxWidth: "100%",
          height: isDesktop ? "75vh" : "50vh",
          borderRadius: isDesktop ? "40px" : "24px",
          y: 0,
          opacity: 1,
          ease: "power2.out",
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[120vh] md:h-[150vh] bg-white flex flex-col items-center"
    >
      {/* Spacer to give room for the scroll effect to breathe */}
      <div className="h-[30vh] w-full flex flex-col items-center justify-center pt-20">
        <h2 className="text-4xl md:text-7xl font-semibold text-slate-900 text-center px-4 leading-[1.1] tracking-tight">
          Witness Data  
          <span className="inline-block ml-4 text-brand-600">
            Evolution.
          </span>
        </h2>
      </div>

      {/* Sticky container to hold the expanding video */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={videoWrapperRef}
          className="relative overflow-hidden bg-black"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/video_poster.png"
            className="w-full h-full object-cover"
          >
            <source
              src="/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Subtle overlay for text contrast if needed later */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Another spacer at bottom to allow the full-screen video to be admired before moving on */}
      {/* <div className="h-[20vh] w-full" /> */}
    </div>
  );
};

export default VideoSection;
