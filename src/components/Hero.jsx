const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

    
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

    
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Experience Canella
        </h1>

        <p className="mt-4 text-lg md:text-2xl">
          Where Every Flavor Tells a Story
        </p>
      </div>

    </section>
  );
};

export default Hero;

