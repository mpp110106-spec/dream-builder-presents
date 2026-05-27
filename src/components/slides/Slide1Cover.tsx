import { SlideShell } from "./SlideShell";
import bg from "@/assets/slide1.png";

export function Slide1Cover() {
  return (
    <SlideShell variant="image" bg={bg}>
      <div className="h-full flex flex-col justify-end max-w-[80%]">
        <h1 className="font-extrabold leading-[1] tracking-tight text-[4.6vw] mb-[2.5%] text-white">
          Continúa construyendo el futuro que imaginas para ti y tu familia.
        </h1>
        <span className="accent-bar mb-[2.5%]" />
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
