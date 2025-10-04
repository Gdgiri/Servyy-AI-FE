import React, { useRef, useEffect, useState } from "react";
import video from "../../assets/Sales-Manager/potential.mp4";

const DealuxoPotential = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);
  const [progress, setProgress] = useState(0);

  const videoDuration = 5; // seconds
  const scrollMultiplier = 1000; // Controls scroll range (px)
  const scrollRange = videoDuration * scrollMultiplier;

  // Handle scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const container = containerRef.current;
    const containerTop = container.offsetTop;

    // How much we've scrolled in the video section
    const scrolledInSection = scrollTop - containerTop;

    // Clamp scroll within valid range
    const clampedScroll = Math.max(0, Math.min(scrollRange, scrolledInSection));

    // Map scroll to video progress (0 - 1)
    const newProgress = clampedScroll / scrollRange;
    setProgress(newProgress);

    // Set video current time
    if (videoRef.current) {
      videoRef.current.currentTime = newProgress * videoDuration;
    }

    // Fix or unfix video section
    if (newProgress >= 1) {
      setIsFixed(false); // Unlock scroll
    } else {
      setIsFixed(true); // Lock scroll
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${scrollRange + window.innerHeight}px` }}
    >
      {/* Fixed video only while locked */}
      <div
        className={`top-0 left-0 w-full ${
          isFixed ? "fixed" : "relative"
        } transition-all duration-300 ease-in-out`}
        style={{
          height: "100vh", // Full height of the viewport
          maxHeight: "100vh", // Prevent the video from getting larger than the viewport
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video}
          muted
          playsInline
          preload="auto"
          style={{
            objectPosition: "center", // Ensures the video stays centered in the viewport
          }}
        />
      </div>
    </div>
  );
};

export default DealuxoPotential;
