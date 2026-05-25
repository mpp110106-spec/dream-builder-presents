import { SlideShell } from "./SlideShell";
import bg from "@/assets/hero-graduation.jpg";

export function Slide1Cover() {
  return (
    <SlideShell variant="image" bg={bg}>
      <div className="h-full flex flex-col justify-end max-w-[78%]">
        <div className="text-[0.9vw] font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-green)] mb-[2%]">
          Renovación de matrícula · Semestre 2026-2
        </div>
        <h1 className="font-extrabold leading-[0.95] tracking-tight text-[6.2vw] mb-[2%]">
          Tu sueño no puede
          <br />
          <span className="text-[color:var(--ciaf-green)]">detenerse.</span>
        </h1>
        <span className="accent-bar mb-[2%]" />
        <p className="text-[1.5vw] font-light leading-snug text-white/85 max-w-[80%] mb-[3%]">
          Renueva tu matrícula 2026-2 y continúa construyendo el futuro que
          imaginaste para ti y tu familia.
        </p>
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-3 bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-bold tracking-wide uppercase text-[0.95vw] px-[1.6vw] py-[0.9vw] rounded-full shadow-lg">
            Transforma tu futuro →
          </div>
          <div className="text-[0.8vw] text-white/70 uppercase tracking-[0.25em]">
            Vigilada Mineducación
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
