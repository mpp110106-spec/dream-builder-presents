import { SlideShell } from "./SlideShell";
import { Sparkles, ShieldCheck, Clock4, Zap } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Continuidad",
    body: "En CIAF queremos seguir acompañándote para que tus sueños sigan creciendo semestre tras semestre.",
  },
  {
    icon: ShieldCheck,
    title: "Sin trámites",
    body: "Tu energía debe estar en tus sueños, no en procesos complicados. Hacemos todo más fácil para ti.",
  },
  {
    icon: Clock4,
    title: "Tus horarios",
    body: "Sabemos que equilibras estudio, trabajo y familia. Renovar a tiempo conserva tu jornada ideal.",
  },
  {
    icon: Zap,
    title: "Más rápido",
    body: "Un proceso ágil y organizado para que te enfoques en lo verdaderamente importante: tu futuro.",
  },
];

export function Slide2Why() {
  return (
    <SlideShell variant="light">
      <div className="h-full flex flex-col">
        <div className="mb-[2%]">
          <span className="text-[0.85vw] font-semibold tracking-[0.25em] uppercase text-white">
            Renueva a tiempo
          </span>
          <h2 className="font-extrabold text-[4vw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            ¿Por qué renovar
            <br /> a tiempo?
          </h2>
          <span className="accent-bar mt-[1.4%]" />
        </div>
        <div className="grid grid-cols-4 gap-[1.2vw] mt-auto">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl bg-white border border-[color:var(--ciaf-navy)]/8 p-[1.5vw] shadow-[var(--shadow-soft)] flex flex-col gap-[0.8vw] hover:-translate-y-1 transition-transform"
            >
              <div className="w-[3vw] h-[3vw] rounded-xl bg-[color:var(--ciaf-green)]/15 flex items-center justify-center">
                <Icon className="text-[color:var(--ciaf-navy)]" style={{ width: "1.6vw", height: "1.6vw" }} />
              </div>
              <div className="text-[1.4vw] font-bold text-[color:var(--ciaf-navy)] leading-tight">
                {title}
              </div>
              <p className="text-[0.95vw] leading-relaxed text-[color:var(--ciaf-ink)]/75">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
