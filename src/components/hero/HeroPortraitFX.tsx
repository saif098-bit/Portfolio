export default function HeroPortraitFX() {
  const particles = Array.from({ length: 8 });

  return (
    <div className="pointer-events-none absolute -inset-6 z-0">
      <div
        className="absolute inset-0 rounded-[2.5rem]"
        style={{
          background: "conic-gradient(from 0deg, transparent, #ff1f4b, transparent 30%)",
          animation: "spin-smooth 6s linear infinite",
          willChange: "transform",
        }}
      />
      <div className="absolute inset-[3px] rounded-[2.4rem] bg-background" />

      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-crimson-400"
          style={{
            left: `${10 + (i * 11) % 90}%`,
            bottom: "5%",
            animation: `float-particle ${4.5 + (i % 3)}s ease-out infinite`,
            animationDelay: `${i * 0.5}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}