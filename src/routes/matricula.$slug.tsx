import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Sparkles, Calendar, CreditCard, MessageCircle } from "lucide-react";
import logo from "@/assets/ciaf-logo.png";

type Detail = {
  type: string;
  jornada: string;
  date: string;
  short: string;
  highlight?: boolean;
  badge: string;
  headline: string;
  description: string;
  benefits: string[];
};

const details: Record<string, Detail> = {
  "pronto-pago": {
    type: "Pronto pago 10%",
    jornada: "Diurna · Nocturna · Fines de semana",
    date: "Hasta el 30 de junio",
    short: "30 JUN",
    highlight: true,
    badge: "Beneficio exclusivo",
    headline: "Ahorra el 10% por pronto pago",
    description:
      "Renueva tu matrícula 2026-2 antes del 30 de junio y obtén un descuento inmediato sobre el valor total.",
    benefits: [
      "10% de descuento aplicado directamente a tu matrícula",
      "Aplica para Diurna, Nocturna y Fines de semana",
      "Asegura tu cupo sin filas ni demoras",
      "Pago 100% en línea, en menos de 5 minutos",
      "Sin papeleo: si ya eres estudiante, no necesitas trámites",
    ],
  },
  "ordinaria-diurna": {
    type: "Matrícula Ordinaria",
    jornada: "Diurna · Nocturna",
    date: "Hasta el 25 de julio",
    short: "25 JUL",
    badge: "Fecha estándar",
    headline: "Matrícula ordinaria — Diurna y Nocturna",
    description:
      "Renueva sin recargos antes del 25 de julio y comienza el semestre 2026-2 con tu cupo asegurado.",
    benefits: [
      "Sin recargos sobre el valor de matrícula",
      "Disponible para jornadas Diurna y Nocturna",
      "Pago en línea o financiación inmediata",
      "Acompañamiento del área financiera si lo necesitas",
    ],
  },
  "ordinaria-fds": {
    type: "Matrícula Ordinaria",
    jornada: "Fines de semana",
    date: "Hasta el 25 de julio",
    short: "25 JUL",
    badge: "Fecha estándar",
    headline: "Matrícula ordinaria — Fines de semana",
    description:
      "Si estudias los fines de semana, renueva sin recargos antes del 25 de julio.",
    benefits: [
      "Sin recargos en tu matrícula",
      "Pensado para profesionales que estudian fines de semana",
      "Financiación disponible 100% en línea",
      "Reserva tu cupo en pocos minutos",
    ],
  },
  "extraordinaria-fds": {
    type: "Matrícula Extraordinaria",
    jornada: "Fines de semana",
    date: "Hasta el 1 de agosto",
    short: "01 AGO",
    badge: "Última oportunidad",
    headline: "Matrícula extraordinaria — Fines de semana",
    description:
      "Aún estás a tiempo. Renueva tu matrícula de fines de semana hasta el 1 de agosto.",
    benefits: [
      "Última fecha para fines de semana",
      "Pago en línea inmediato",
      "Financiación disponible",
      "Asesoría personalizada para no perder tu cupo",
    ],
  },
  "extraordinaria-diurna": {
    type: "Matrícula Extraordinaria",
    jornada: "Diurna · Nocturna",
    date: "Hasta el 8 de agosto",
    short: "08 AGO",
    badge: "Última oportunidad",
    headline: "Matrícula extraordinaria — Diurna y Nocturna",
    description:
      "Cierre final del proceso. Renueva tu matrícula Diurna o Nocturna hasta el 8 de agosto.",
    benefits: [
      "Última fecha disponible del semestre",
      "Aplica recargo extraordinario",
      "Pago en línea o por consignación",
      "Acompañamiento del área financiera de CIAF",
    ],
  },
};

export const Route = createFileRoute("/matricula/$slug")({
  loader: ({ params }) => {
    const detail = details[params.slug];
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.detail.headline} · CIAF 2026-2` },
          { name: "description", content: loaderData.detail.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--ciaf-paper)]">
      <div className="text-center">
        <h1 className="text-3xl font-black text-[color:var(--ciaf-navy)]">Fecha no encontrada</h1>
        <Link to="/" className="mt-4 inline-block text-white font-bold underline">
          Volver a la presentación
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--ciaf-paper)]">
      <pre className="text-sm text-red-600">{String(error)}</pre>
    </div>
  ),
  component: MilestoneDetail,
});

function MilestoneDetail() {
  const { detail } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-[color:var(--ciaf-paper)] font-sans">
      <section className="relative overflow-hidden bg-[color:var(--ciaf-navy)] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--ciaf-green),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a la presentación
            </Link>
            <img src={logo} alt="CIAF" className="h-9 w-auto brightness-0 invert" />
          </div>

          <div className="mt-10 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.18em] ${
                  detail.highlight
                    ? "bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)]"
                    : "bg-white/10 text-white border border-white/20"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {detail.badge}
              </div>
              <h1 className="mt-5 font-black text-5xl md:text-7xl leading-[0.95] tracking-tight">
                {detail.headline}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-xl font-medium">
                {detail.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/573000000000"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-extrabold shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablar por WhatsApp
                </a>
                <a
                  href="#pagar"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-extrabold hover:bg-white/15 transition-colors"
                >
                  <CreditCard className="w-5 h-5" />
                  Pagar en línea
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8">
              <div className="text-white/60 text-sm uppercase tracking-[0.2em] font-bold">
                {detail.type}
              </div>
              <div className="mt-2 text-white/80 text-base font-semibold">{detail.jornada}</div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-white/60 text-sm font-bold uppercase tracking-[0.15em]">Fecha límite</div>
                <div className="mt-2 flex items-baseline gap-3">
                  <Calendar className="w-7 h-7 text-white" />
                  <div className="font-black text-4xl">{detail.short}</div>
                </div>
                <div className="mt-2 text-white/70 text-sm">{detail.date}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="font-black text-3xl md:text-4xl text-[color:var(--ciaf-navy)] tracking-tight">
          ¿Qué incluye esta opción?
        </h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-4">
          {detail.benefits.map((b: string, i: number) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-[color:var(--ciaf-navy)]/10 shadow-[var(--shadow-soft)]"
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] flex items-center justify-center">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-[color:var(--ciaf-ink)] font-semibold">{b}</span>
            </li>
          ))}
        </ul>

        <div
          id="pagar"
          className="mt-12 rounded-3xl bg-[color:var(--ciaf-navy)] text-white p-10 text-center"
        >
          <h3 className="font-black text-3xl md:text-4xl tracking-tight">
            Tu cupo te está esperando
          </h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto font-medium">
            No pierdas la fecha. Renueva hoy y comienza el semestre 2026-2 sin
            preocupaciones.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://ciaf.edu.co/pago-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] font-extrabold text-lg shadow-lg hover:scale-[1.02] transition-transform"
            >
              <CreditCard className="w-5 h-5" />
              Pagar mi matrícula
            </a>
            <Link
              to="/pasos/$modalidad"
              params={{ modalidad: "digital" }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-lg hover:bg-white/15 transition-colors"
            >
              Ver pasos de financiación
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
