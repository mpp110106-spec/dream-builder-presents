import { SlideShell } from "./SlideShell";
import { Laptop, Users, Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import bg from "@/assets/slide4.png";

const digital = ["100% en línea", "Simulador inmediato", "Pago rápido y seguro"];
const presencial = ["Asesor dedicado", "Acompañamiento en sede", "Firma asistida"];

export function Slide4Financing() {
  return (
    <SlideShell variant="light">
      <div className="h-full grid grid-cols-[0.85fr_1.15fr] gap-[2cqw]">
        <div
          className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]"
          style={{
            backgroundImage: `var(--gradient-overlay), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-[1.6cqw] flex flex-col justify-between text-white">
            <div className="w-[3cqw] h-[3cqw] rounded-full bg-[color:var(--ciaf-green)] flex items-center justify-center text-[color:var(--ciaf-navy-deep)] font-black text-[1.4cqw]">
              !
            </div>
            <div>
              <div className="text-[2.4cqw] font-black leading-[1] tracking-tight">
                Tu sueño merece
                <br /> continuidad.
              </div>
              <p className="text-[0.95cqw] text-white/85 mt-[1cqw] leading-relaxed max-w-[90%] font-medium">
                En CIAF queremos acompañarte para que continúes construyendo tu
                futuro profesional. Estar al día con tus obligaciones agiliza tu
                renovación.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[0.85cqw] font-bold tracking-[0.25em] uppercase text-white">
            Financiación 2026-2
          </span>
          <h2 className="font-black text-[3.4cqw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            Dos formas de
            <br /> financiar tu semestre.
          </h2>
          <span className="accent-bar mt-[1.2%]" />
          <p className="text-[0.9cqw] text-[color:var(--ciaf-ink)]/70 mt-[1cqw] font-semibold">
            Elige tu modalidad y te llevamos al paso a paso.
          </p>

          <div className="grid gap-[1cqw] mt-[1.4cqw]">
            <FinanceCard
              to="digital"
              icon={Laptop}
              title="Experiencia Digital"
              desc="Realiza todo tu proceso en línea, rápido y seguro."
              items={digital}
            />
            <FinanceCard
              to="presencial"
              icon={Users}
              title="Experiencia Presencial"
              desc="Recibe acompañamiento personalizado en nuestras sedes."
              items={presencial}
            />
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

function FinanceCard({
  to,
  icon: Icon,
  title,
  desc,
  items,
}: {
  to: "digital" | "presencial";
  icon: typeof Laptop;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <Link
      to="/pasos/$modalidad"
      params={{ modalidad: to }}
      className="group rounded-2xl border-2 border-[color:var(--ciaf-navy)]/12 bg-white p-[1.2cqw] flex items-center gap-[1.2cqw] shadow-[var(--shadow-soft)] transition-all hover:border-[color:var(--ciaf-green)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]"
    >
      <div className="shrink-0 w-[3.2cqw] h-[3.2cqw] rounded-xl bg-[color:var(--ciaf-green)] flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="text-[color:var(--ciaf-navy-deep)]" style={{ width: "1.8cqw", height: "1.8cqw" }} />
      </div>
      <div className="flex-1">
        <div className="text-[1.4cqw] font-black text-[color:var(--ciaf-navy)] leading-tight">
          {title}
        </div>
        <div className="text-[0.95cqw] text-[color:var(--ciaf-ink)]/70 mt-1 font-semibold">{desc}</div>
      </div>
      <ul className="flex flex-col gap-1 pl-[1cqw] border-l border-[color:var(--ciaf-navy)]/10">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-[0.85cqw] text-[color:var(--ciaf-navy)] font-bold">
            <Check style={{ width: "0.9cqw", height: "0.9cqw" }} className="text-white" />
            {i}
          </li>
        ))}
      </ul>
      <ArrowRight className="text-[color:var(--ciaf-navy)] group-hover:translate-x-1 group-hover:text-white transition-all" style={{ width: "1.4cqw", height: "1.4cqw" }} />
    </Link>
  );
}
