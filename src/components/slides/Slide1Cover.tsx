import { SlideShell } from "./SlideShell";
import bg from "@/assets/slide1.png";

export function Slide1Cover() {
  return (
    <SlideShell variant="image" bg={bg}>
      {/* Badge superior derecha */}
      <div className="absolute top-[2.2%] right-[4%] z-10 text-right">
        <div className="text-[0.85cqw] font-bold uppercase tracking-[0.18em] text-white/90">
          Renovación
        </div>
        <div className="text-[1.2cqw] font-extrabold uppercase tracking-[0.12em] text-white">
          2026-2
        </div>
      </div>

      <div className="h-full flex flex-col justify-end max-w-[80%]">
        <h1 className="font-extrabold leading-[1] tracking-tight text-[4.6cqw] mb-[2.5%] text-white">
          Los límites no están en el camino, están para superarse.
        </h1>
        <p className="text-[1.1cqw] text-white/90 leading-relaxed tracking-wide mb-[2.5%] max-w-[90%]">
          El próximo paso hacia tus metas comienza con la decisión de seguir creciendo. Renueva tu matrícula y continúa construyendo el futuro que imaginas.
        </p>
        <span className="accent-bar mb-[2.5%]" />
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-3 bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-bold tracking-wide uppercase text-[0.95cqw] px-[1.6cqw] py-[0.9cqw] rounded-full shadow-lg">
            Transforma tu futuro →
          </div>
          <div className="text-[0.8cqw] text-white/70 uppercase tracking-[0.25em]">
            Vigilada Mineducación
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
