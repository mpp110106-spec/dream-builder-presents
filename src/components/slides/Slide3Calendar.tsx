import { SlideShell } from "./SlideShell";
import { Lightbulb, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Milestone = {
  type: string;
  jornada: string;
  date: string;
  short: string;
  highlight?: boolean;
  href?: string;
};

const milestones: Milestone[] = [
  {
    type: "Pronto pago 10%",
    jornada: "Diurna · Nocturna · Fines de semana",
    date: "Hasta el 30 de junio",
    short: "30 JUN",
    highlight: true,
    href: "/pronto-pago",
  },
  { type: "Ordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 25 de julio", short: "25 JUL" },
  { type: "Ordinaria", jornada: "Fines de semana", date: "Hasta el 25 de julio", short: "25 JUL" },
  { type: "Extraordinaria", jornada: "Fines de semana", date: "Hasta el 1 de agosto", short: "01 AGO" },
  { type: "Extraordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 8 de agosto", short: "08 AGO" },
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
              Tu ruta de matrícula
            </h2>
            <span className="accent-bar mt-[1.2%]" />
          </div>
          <div className="text-right text-[color:var(--ciaf-navy)]/70 text-[0.9vw]">
            Semestre <span className="font-bold text-[color:var(--ciaf-navy)]">2026-2</span>
          </div>
        </div>

        {/* Horizontal timeline */}
        <div className="relative flex-1 flex items-center px-[1vw]">
          {/* baseline */}
          <div className="absolute left-[3%] right-[3%] top-1/2 h-[3px] bg-[color:var(--ciaf-navy)]/10 rounded-full" />
          <div
            className="absolute left-[3%] top-1/2 h-[3px] rounded-full bg-gradient-to-r from-[color:var(--ciaf-green)] to-[color:var(--ciaf-navy)] animate-[grow_1.2s_ease-out_forwards]"
            style={{ width: "94%", transformOrigin: "left center" }}
          />

          <ol className="relative z-10 grid grid-cols-5 gap-[1vw] w-full">
            {milestones.map((m, i) => {
              const above = i % 2 === 0;
              const Card = (
                <div
                  className={`group rounded-2xl bg-white border shadow-[var(--shadow-soft)] px-[1vw] py-[0.9vw] transition-all duration-300 hover:-translate-y-1 ${
                    m.highlight
                      ? "border-[color:var(--ciaf-green)] ring-2 ring-[color:var(--ciaf-green)]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] cursor-pointer"
                      : "border-[color:var(--ciaf-navy)]/10"
                  }`}
                >
                  {m.highlight && (
                    <div className="flex items-center gap-1 text-[0.7vw] font-bold uppercase tracking-[0.18em] text-[color:var(--ciaf-green)] mb-1">
                      <Sparkles style={{ width: "0.9vw", height: "0.9vw" }} />
                      Mejor opción
                    </div>
                  )}
                  <div className="font-extrabold text-[color:var(--ciaf-navy)] text-[1.1vw] leading-tight">
                    {m.type}
                  </div>
                  <div className="text-[color:var(--ciaf-ink)]/70 text-[0.8vw] mt-1">
                    {m.jornada}
                  </div>
                  {m.highlight && (
                    <div className="mt-2 inline-flex items-center gap-1 text-[0.78vw] font-semibold text-[color:var(--ciaf-navy)] group-hover:text-[color:var(--ciaf-green)] transition-colors">
                      Ver beneficio
                      <ArrowRight style={{ width: "0.9vw", height: "0.9vw" }} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              );

              return (
                <li key={i} className="relative flex flex-col items-center">
                  {/* top card */}
                  <div className={`w-full ${above ? "mb-[1vw]" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
                    {above && (m.href ? <Link to={m.href}>{Card}</Link> : Card)}
                  </div>

                  {/* connector + node */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-px ${above ? "h-[1.4vw]" : "h-[1.4vw]"} bg-[color:var(--ciaf-navy)]/20`} />
                    <div
                      className={`relative rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                        m.highlight
                          ? "bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] shadow-[0_0_0_6px_rgba(190,242,100,0.25)]"
                          : "bg-[color:var(--ciaf-navy)] text-white"
                      }`}
                      style={{ width: "2.2vw", height: "2.2vw" }}
                    >
                      <Calendar style={{ width: "1vw", height: "1vw" }} />
                      {m.highlight && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--ciaf-green)] opacity-50 animate-ping" />
                      )}
                    </div>
                    <div className="mt-2 text-[0.85vw] font-bold tracking-[0.18em] text-[color:var(--ciaf-navy)]">
                      {m.short}
                    </div>
                  </div>

                  {/* bottom card */}
                  <div className={`w-full ${!above ? "mt-[1vw]" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
                    {!above && (m.href ? <Link to={m.href}>{Card}</Link> : Card)}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-[1.4%] flex items-center gap-3 rounded-xl bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] px-[1.4vw] py-[1vw] font-semibold text-[1vw] shadow-[var(--shadow-soft)]">
          <Lightbulb style={{ width: "1.4vw", height: "1.4vw" }} />
          Haz clic en <span className="underline">Pronto pago 10%</span> para ver cómo aprovechar el descuento.
        </div>
      </div>
    </SlideShell>
  );
}
