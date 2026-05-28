import { SlideShell } from "./SlideShell";
import { Lightbulb, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Milestone = {
  slug: string;
  type: string;
  jornada: string;
  date: string;
  short: string;
  highlight?: boolean;
};

export const milestones: Milestone[] = [
  {
    slug: "pronto-pago",
    type: "Pronto pago 10%",
    jornada: "Diurna · Nocturna · Fines de semana",
    date: "Hasta el 30 de junio",
    short: "30 JUN",
    highlight: true,
  },
  { slug: "ordinaria-diurna", type: "Ordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 25 de julio", short: "25 JUL" },
  { slug: "ordinaria-fds", type: "Ordinaria", jornada: "Fines de semana", date: "Hasta el 25 de julio", short: "25 JUL" },
  { slug: "extraordinaria-fds", type: "Extraordinaria", jornada: "Fines de semana", date: "Hasta el 1 de agosto", short: "01 AGO" },
  { slug: "extraordinaria-diurna", type: "Extraordinaria", jornada: "Diurna · Nocturna", date: "Hasta el 8 de agosto", short: "08 AGO" },
];

export function Slide3Calendar() {
  return (
    <SlideShell variant="light">
      <div className="h-full flex flex-col">
        <div className="flex items-end justify-between mb-[1.6%]">
          <div>
            <span className="text-[0.85cqw] font-bold tracking-[0.25em] uppercase text-white">
              Fechas clave
            </span>
            <h2 className="font-black text-[3.6cqw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
              Sigue avanzando sin límites
            </h2>
            <span className="accent-bar mt-[1.2%]" />
          </div>
          <div className="text-right text-[color:var(--ciaf-navy)]/70 text-[0.9cqw]">
            Semestre <span className="font-extrabold text-[color:var(--ciaf-navy)]">2026-2</span>
          </div>
        </div>

        <div className="relative flex-1 flex items-center px-[1cqw]">
          <div className="absolute left-[3%] right-[3%] top-1/2 h-[3px] bg-[color:var(--ciaf-navy)]/10 rounded-full" />
          <div
            className="absolute left-[3%] top-1/2 h-[3px] rounded-full bg-gradient-to-r from-[color:var(--ciaf-green)] to-[color:var(--ciaf-navy)] animate-[grow_1.2s_ease-out_forwards]"
            style={{ width: "94%", transformOrigin: "left center" }}
          />

          <ol className="relative z-10 grid grid-cols-5 gap-[1cqw] w-full">
            {milestones.map((m, i) => {
              const above = i % 2 === 0;
              const Card = (
                <div
                  className={`group rounded-2xl bg-white border shadow-[var(--shadow-soft)] px-[1cqw] py-[0.9cqw] transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                    m.highlight
                      ? "border-[color:var(--ciaf-green)] ring-2 ring-[color:var(--ciaf-green)]/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]"
                      : "border-[color:var(--ciaf-navy)]/10 hover:border-[color:var(--ciaf-green)] hover:shadow-[0_15px_30px_-12px_rgba(0,0,0,0.2)]"
                  }`}
                >
                  {m.highlight && (
                    <div className="flex items-center gap-1 text-[0.7cqw] font-extrabold uppercase tracking-[0.18em] text-white mb-1">
                      <Sparkles style={{ width: "0.9cqw", height: "0.9cqw" }} />
                      Mejor opción
                    </div>
                  )}
                  <div className="font-black text-[color:var(--ciaf-navy)] text-[1.1cqw] leading-tight">
                    {m.type}
                  </div>
                  <div className="text-[color:var(--ciaf-ink)]/70 text-[0.8cqw] mt-1 font-semibold">
                    {m.jornada}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[0.78cqw] font-bold text-[color:var(--ciaf-navy)] group-hover:text-white transition-colors">
                    Ver detalle
                    <ArrowRight style={{ width: "0.9cqw", height: "0.9cqw" }} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );

              return (
                <li key={i} className="relative flex flex-col items-center">
                  <div className={`w-full ${above ? "mb-[1cqw]" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
                    {above && <Link to="/matricula/$slug" params={{ slug: m.slug }}>{Card}</Link>}
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className="w-px h-[1.4cqw] bg-[color:var(--ciaf-navy)]/20" />
                    <div
                      className={`relative rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                        m.highlight
                          ? "bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] shadow-[0_0_0_6px_rgba(141,198,65,0.25)]"
                          : "bg-[color:var(--ciaf-navy)] text-white"
                      }`}
                      style={{ width: "2.2cqw", height: "2.2cqw" }}
                    >
                      <Calendar style={{ width: "1cqw", height: "1cqw" }} />
                      {m.highlight && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--ciaf-green)] opacity-50 animate-ping" />
                      )}
                    </div>
                    <div className="mt-2 text-[0.85cqw] font-extrabold tracking-[0.18em] text-[color:var(--ciaf-navy)]">
                      {m.short}
                    </div>
                  </div>

                  <div className={`w-full ${!above ? "mt-[1cqw]" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
                    {!above && <Link to="/matricula/$slug" params={{ slug: m.slug }}>{Card}</Link>}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-[1.4%] flex items-center gap-3 rounded-xl bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] px-[1.4cqw] py-[1cqw] font-bold text-[1cqw] shadow-[var(--shadow-soft)]">
          <Lightbulb style={{ width: "1.4cqw", height: "1.4cqw" }} />
          Haz clic en cualquier fecha para ver los detalles y pagar tu matrícula.
        </div>
      </div>
    </SlideShell>
  );
}
