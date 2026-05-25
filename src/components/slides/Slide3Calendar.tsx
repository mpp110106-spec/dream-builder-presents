import { SlideShell } from "./SlideShell";
import { Lightbulb } from "lucide-react";

const rows = [
  { type: "Pronto pago 10%", jornada: "Diurna · Nocturna · FDS", date: "Hasta el 30 de junio", highlight: true },
  { type: "Ordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 25 de julio" },
  { type: "Ordinaria", jornada: "Fines de semana", date: "Hasta el 25 de julio" },
  { type: "Extraordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 8 de agosto" },
  { type: "Extraordinaria", jornada: "Fines de semana", date: "Hasta el 1 de agosto" },
];

export function Slide3Calendar() {
  return (
    <SlideShell variant="light">
      <div className="h-full flex flex-col">
        <div className="flex items-end justify-between mb-[1.6%]">
          <div>
            <span className="text-[0.85vw] font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-green)]">
              Fechas clave
            </span>
            <h2 className="font-extrabold text-[3.6vw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
              Calendario de matrículas
            </h2>
            <span className="accent-bar mt-[1.2%]" />
          </div>
          <div className="text-right text-[color:var(--ciaf-navy)]/70 text-[0.9vw]">
            Semestre <span className="font-bold text-[color:var(--ciaf-navy)]">2026-2</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[color:var(--ciaf-navy)]/10 shadow-[var(--shadow-soft)] bg-white">
          <div className="grid grid-cols-[1.2fr_1.4fr_1fr] bg-[color:var(--ciaf-navy)] text-white text-[0.95vw] font-semibold uppercase tracking-[0.18em]">
            <div className="px-[1.4vw] py-[1vw]">Tipo</div>
            <div className="px-[1.4vw] py-[1vw]">Jornada</div>
            <div className="px-[1.4vw] py-[1vw]">Fecha límite</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1.2fr_1.4fr_1fr] items-center text-[1.05vw] ${
                i % 2 ? "bg-[color:var(--ciaf-paper)]" : "bg-white"
              } ${r.highlight ? "ring-2 ring-[color:var(--ciaf-green)] ring-inset" : ""}`}
            >
              <div className="px-[1.4vw] py-[1vw] font-semibold text-[color:var(--ciaf-navy)] flex items-center gap-2">
                {r.type}
                {r.highlight && (
                  <span className="text-[0.7vw] font-bold uppercase tracking-wider bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] px-2 py-0.5 rounded-full">
                    Ahorro
                  </span>
                )}
              </div>
              <div className="px-[1.4vw] py-[1vw] text-[color:var(--ciaf-ink)]/80">
                {r.jornada}
              </div>
              <div
                className={`px-[1.4vw] py-[1vw] font-semibold ${
                  r.highlight
                    ? "text-[color:var(--ciaf-green)]"
                    : "text-[color:var(--ciaf-navy)]"
                }`}
              >
                {r.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 rounded-xl bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] px-[1.4vw] py-[1vw] font-semibold text-[1vw] shadow-[var(--shadow-soft)]">
          <Lightbulb style={{ width: "1.4vw", height: "1.4vw" }} />
          Evita costos adicionales realizando tu pago en fechas ordinarias.
        </div>
      </div>
    </SlideShell>
  );
}
