import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Laptop, Users, MessageCircle, CreditCard } from "lucide-react";
import logo from "@/assets/ciaf-logo.png";

type Modality = {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Laptop;
  steps: { title: string; detail: string }[];
};

const modalities: Record<string, Modality> = {
  digital: {
    title: "Experiencia Digital",
    tagline: "100% en línea, rápido y seguro",
    description:
      "Renueva tu matrícula desde donde estés. Todo el proceso ocurre en línea, sin filas y con respuesta inmediata.",
    icon: Laptop,
    steps: [
      { title: "Ingresa al simulador de financiación", detail: "Calcula tu cuota inicial y el número de cuotas que mejor se adapten a ti." },
      { title: "Diligencia la solicitud de crédito", detail: "Completa tus datos personales y financieros desde el portal." },
      { title: "Elige cuota inicial y cuotas", detail: "Define el plan de pagos que se ajuste a tu presupuesto." },
      { title: "Realiza tu pago de cuota inicial", detail: "Paga en línea con tarjeta débito, crédito o PSE." },
      { title: "Envía comprobante a pagos@ciaf.edu.co", detail: "Adjunta el soporte para que validemos tu pago." },
      { title: "Firma tus documentos virtuales", detail: "Recibes los documentos por correo y firmas digitalmente." },
    ],
  },
  presencial: {
    title: "Experiencia Presencial",
    tagline: "Acompañamiento personalizado en sede",
    description:
      "Visita nuestras sedes y recibe asesoría dedicada de nuestro equipo para renovar tu matrícula con tranquilidad.",
    icon: Users,
    steps: [
      { title: "Solicita tu turno", detail: "Reserva tu turno en sede para evitar esperas innecesarias." },
      { title: "Diligencia la solicitud de crédito", detail: "Te entregamos el formato y te acompañamos a completarlo." },
      { title: "Recibe acompañamiento de una asesora", detail: "Una asesora revisa contigo opciones de financiación y resuelve tus dudas." },
      { title: "Realiza tu pago de cuota inicial", detail: "Paga directamente en sede o a través de los canales habilitados." },
      { title: "Firma tus documentos virtuales", detail: "Cerramos el proceso con la firma de tus documentos en línea." },
    ],
  },
};

export const Route = createFileRoute("/pasos/$modalidad")({
  loader: ({ params }) => {
    const data = modalities[params.modalidad];
    if (!data) throw notFound();
    return { data, modalidad: params.modalidad as "digital" | "presencial" };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Pasos · ${loaderData.data.title} · CIAF` },
          { name: "description", content: loaderData.data.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--ciaf-paper)]">
      <div className="text-center">
        <h1 className="text-3xl font-black text-[color:var(--ciaf-navy)]">Modalidad no encontrada</h1>
        <Link to="/" className="mt-4 inline-block text-[color:var(--ciaf-green-deep)] font-bold underline">
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
  component: ModalitySteps,
});

function ModalitySteps() {
  const { data, modalidad } = Route.useLoaderData();
  const Icon = data.icon;
  const other = modalidad === "digital" ? "presencial" : "digital";

  return (
    <main className="min-h-screen bg-[color:var(--ciaf-paper)] font-sans">
      <section className="relative overflow-hidden bg-[color:var(--ciaf-navy)] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,var(--ciaf-green),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-[color:var(--ciaf-green)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a la presentación
            </Link>
            <img src={logo} alt="CIAF" className="h-9 w-auto brightness-0 invert" />
          </div>

          <div className="mt-10 flex items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-[color:var(--ciaf-green)] flex items-center justify-center">
              <Icon className="w-10 h-10 text-[color:var(--ciaf-navy-deep)]" />
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-[color:var(--ciaf-green)]">
                Financiación 2026-2
              </div>
              <h1 className="mt-2 font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
                {data.title}
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/80 font-medium">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <p className="text-lg text-[color:var(--ciaf-ink)]/80 max-w-3xl font-medium">{data.description}</p>

        <ol className="mt-10 relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-[color:var(--ciaf-navy)]/15" />
          {data.steps.map((s, i) => (
            <li key={i} className="relative pl-20 pb-8 last:pb-0">
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[color:var(--ciaf-navy)] text-white flex items-center justify-center font-black text-lg shadow-[var(--shadow-soft)]">
                {i + 1}
              </div>
              <div className="rounded-2xl bg-white border border-[color:var(--ciaf-navy)]/10 p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-black text-xl text-[color:var(--ciaf-navy)] tracking-tight flex items-center gap-2">
                  <Check className="w-5 h-5 text-[color:var(--ciaf-green-deep)]" />
                  {s.title}
                </h3>
                <p className="mt-2 text-[color:var(--ciaf-ink)]/75 font-medium">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <a
            href="https://wa.me/573000000000"
            className="rounded-2xl bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)] p-6 flex items-center gap-4 font-extrabold hover:scale-[1.01] transition-transform shadow-[var(--shadow-soft)]"
          >
            <MessageCircle className="w-6 h-6" />
            Hablar con un asesor por WhatsApp
          </a>
          <a
            href="https://pagos.ciaf.edu.co"
            className="rounded-2xl bg-[color:var(--ciaf-navy)] text-white p-6 flex items-center gap-4 font-extrabold hover:scale-[1.01] transition-transform shadow-[var(--shadow-soft)]"
          >
            <CreditCard className="w-6 h-6" />
            Pagar mi matrícula en línea
          </a>
        </div>

        <Link
          to="/pasos/$modalidad"
          params={{ modalidad: other }}
          className="mt-8 inline-flex items-center gap-2 text-[color:var(--ciaf-navy)] font-bold hover:text-[color:var(--ciaf-green-deep)] transition-colors"
        >
          Prefiero la experiencia {other === "digital" ? "Digital" : "Presencial"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
