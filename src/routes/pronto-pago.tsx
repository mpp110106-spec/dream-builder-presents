import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Sparkles, Calendar, CreditCard, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/pronto-pago")({
  head: () => ({
    meta: [
      { title: "Descuento 10% Pronto Pago · CIAF 2026-2" },
      {
        name: "description",
        content:
          "Aprovecha el descuento del 10% por pronto pago en tu matrícula CIAF 2026-2. Vigente hasta el 30 de junio.",
      },
      { property: "og:title", content: "Descuento 10% Pronto Pago · CIAF" },
      {
        property: "og:description",
        content: "Renueva tu matrícula antes del 30 de junio y ahorra el 10%.",
      },
    ],
  }),
  component: ProntoPago,
});

function ProntoPago() {
  const benefits = [
    "10% de descuento aplicado directamente a tu matrícula",
    "Aplica para Diurna, Nocturna y Fines de semana",
    "Asegura tu cupo sin filas ni demoras",
    "Pago 100% en línea, en menos de 5 minutos",
    "Sin papeleo: si ya eres estudiante, no necesitas trámites",
  ];

  return (
    <main className="min-h-screen bg-[color:var(--ciaf-paper)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--ciaf-navy)] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--ciaf-green),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[color:var(--ciaf-green)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a la presentación
          </Link>

          <div className="mt-10 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] text-xs font-bold uppercase tracking-[0.18em]">
                <Sparkles className="w-3.5 h-3.5" />
                Beneficio exclusivo
              </div>
              <h1 className="mt-5 font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Ahorra el <span className="text-[color:var(--ciaf-green)]">10%</span>
                <br />
                por pronto pago
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-xl">
                Renueva tu matrícula 2026-2 antes del{" "}
                <span className="font-bold text-white">30 de junio</span> y obtén un
                descuento inmediato sobre el valor total.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/573000000000"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-bold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar por WhatsApp
                </a>
                <a
                  href="#pagar"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors"
                >
                  <CreditCard className="w-5 h-5" />
                  Pagar en línea
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8">
              <div className="text-white/60 text-sm uppercase tracking-[0.2em] font-semibold">
                Vence en
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <Calendar className="w-8 h-8 text-[color:var(--ciaf-green)]" />
                <div className="font-extrabold text-4xl">30 JUN</div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white/60 text-sm">Descuento</div>
                <div className="font-extrabold text-6xl text-[color:var(--ciaf-green)] leading-none">
                  10%
                </div>
                <div className="mt-2 text-white/70 text-sm">
                  sobre el valor total de la matrícula
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="font-extrabold text-3xl md:text-4xl text-[color:var(--ciaf-navy)] tracking-tight">
          ¿Qué incluye este beneficio?
        </h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-[color:var(--ciaf-navy)]/10 shadow-[var(--shadow-soft)]"
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] flex items-center justify-center">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-[color:var(--ciaf-ink)] font-medium">{b}</span>
            </li>
          ))}
        </ul>

        <div
          id="pagar"
          className="mt-12 rounded-3xl bg-[color:var(--ciaf-navy)] text-white p-10 text-center"
        >
          <h3 className="font-extrabold text-3xl md:text-4xl tracking-tight">
            Tu cupo te está esperando
          </h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            No pierdas el descuento. Renueva hoy y comienza el semestre 2026-2 sin
            preocupaciones.
          </p>
          <a
            href="https://pagos.ciaf.edu.co"
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform"
          >
            <CreditCard className="w-5 h-5" />
            Pagar mi matrícula
          </a>
        </div>
      </section>
    </main>
  );
}
