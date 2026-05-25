import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Slide1Cover } from "@/components/slides/Slide1Cover";
import { Slide2Why } from "@/components/slides/Slide2Why";
import { Slide3Calendar } from "@/components/slides/Slide3Calendar";
import { Slide4Financing } from "@/components/slides/Slide4Financing";
import { Slide5Steps } from "@/components/slides/Slide5Steps";
import { Slide6CTA } from "@/components/slides/Slide6CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIAF · Renueva tu matrícula 2026-2" },
      {
        name: "description",
        content:
          "Tu sueño no puede detenerse. Renueva tu matrícula 2026-2 en CIAF: descuentos, financiación digital y presencial.",
      },
      { property: "og:title", content: "CIAF · Renueva tu matrícula 2026-2" },
      {
        property: "og:description",
        content:
          "Calendario, descuento del 10% por pronto pago y financiación 2026-2.",
      },
    ],
  }),
  component: Deck,
});

const slides = [
  { key: "cover", label: "Portada", node: <Slide1Cover /> },
  { key: "why", label: "Por qué renovar", node: <Slide2Why /> },
  { key: "calendar", label: "Calendario", node: <Slide3Calendar /> },
  { key: "financing", label: "Financiación", node: <Slide4Financing /> },
  { key: "steps", label: "Paso a paso", node: <Slide5Steps /> },
  { key: "cta", label: "Cierre", node: <Slide6CTA /> },
];

function Deck() {
  const [i, setI] = useState(0);
  const total = slides.length;
  const next = () => setI((p) => Math.min(p + 1, total - 1));
  const prev = () => setI((p) => Math.max(p - 1, 0));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") next();
      else if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      else if (e.key === "f" || e.key === "F") toggleFull();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const toggleFull = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  return (
    <main className="min-h-screen bg-[color:var(--ciaf-paper)] flex flex-col">
      <header className="px-6 md:px-10 py-5 flex items-center justify-between border-b border-[color:var(--ciaf-navy)]/10">
        <div className="flex items-center gap-3">
          <div className="font-extrabold text-[color:var(--ciaf-navy)] text-xl tracking-tight">
            CIAF
          </div>
          <div className="h-5 w-px bg-[color:var(--ciaf-navy)]/30" />
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ciaf-navy)]/70">
            Renovación 2026-2
          </div>
        </div>
        <button
          onClick={toggleFull}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--ciaf-navy)] hover:text-[color:var(--ciaf-green)] transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
          Presentar
        </button>
      </header>

      <section className="flex-1 max-w-[1400px] w-full mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col gap-5">
        <div key={i} className="w-full">
          {slides[i].node}
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={i === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[color:var(--ciaf-navy)]/15 text-[color:var(--ciaf-navy)] font-semibold text-sm shadow-sm hover:border-[color:var(--ciaf-green)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>

          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.key}
                onClick={() => setI(idx)}
                aria-label={s.label}
                className={`h-2 rounded-full transition-all ${
                  idx === i
                    ? "w-10 bg-[color:var(--ciaf-green)]"
                    : "w-2.5 bg-[color:var(--ciaf-navy)]/20 hover:bg-[color:var(--ciaf-navy)]/40"
                }`}
              />
            ))}
            <div className="ml-3 text-xs font-medium text-[color:var(--ciaf-navy)]/60 tabular-nums">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {slides[i].label}
            </div>
          </div>

          <button
            onClick={next}
            disabled={i === total - 1}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[color:var(--ciaf-navy)] text-white font-semibold text-sm shadow-sm hover:bg-[color:var(--ciaf-navy-deep)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-xs text-[color:var(--ciaf-navy)]/50">
          Usa las flechas ← → o la barra espaciadora para navegar · F para pantalla completa
        </p>
      </section>
    </main>
  );
}
