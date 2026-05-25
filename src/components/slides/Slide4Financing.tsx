import { SlideShell } from "./SlideShell";
import { Laptop, Users, Check } from "lucide-react";
import bg from "@/assets/hero-financiacion.jpg";

const digital = ["100% en línea", "Simulador inmediato", "Pago rápido y seguro"];
const presencial = ["Asesor dedicado", "Acompañamiento en sede", "Firma asistida"];

export function Slide4Financing() {
  return (
    <SlideShell variant="light">
      <div className="h-full grid grid-cols-[0.85fr_1.15fr] gap-[2vw]">
        <div
          className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]"
          style={{
            backgroundImage: `var(--gradient-overlay), url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 p-[1.6vw] flex flex-col justify-between text-white">
            <div className="w-[3vw] h-[3vw] rounded-full bg-[color:var(--ciaf-green)] flex items-center justify-center text-[color:var(--ciaf-navy-deep)] font-extrabold text-[1.4vw]">
              !
            </div>
            <div>
              <div className="text-[2.4vw] font-extrabold leading-[1] tracking-tight">
                Tu sueño merece
                <br /> continuidad.
              </div>
              <p className="text-[0.95vw] text-white/85 mt-[1vw] leading-relaxed max-w-[90%]">
                En CIAF queremos acompañarte para que continúes construyendo tu
                futuro profesional. Estar al día con tus obligaciones agiliza tu
                renovación.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[0.85vw] font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-green)]">
            Financiación 2026-2
          </span>
          <h2 className="font-extrabold text-[3.4vw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            Dos formas de
            <br /> financiar tu semestre.
          </h2>
          <span className="accent-bar mt-[1.2%]" />

          <div className="grid gap-[1vw] mt-[2vw]">
            <FinanceCard
              icon={Laptop}
              title="Experiencia Digital"
              desc="Realiza todo tu proceso en línea, rápido y seguro."
              items={digital}
            />
            <FinanceCard
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
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: typeof Laptop;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border-2 border-[color:var(--ciaf-navy)]/12 bg-white p-[1.2vw] flex items-center gap-[1.2vw] shadow-[var(--shadow-soft)]">
      <div className="shrink-0 w-[3.2vw] h-[3.2vw] rounded-xl bg-[color:var(--ciaf-green)] flex items-center justify-center">
        <Icon className="text-[color:var(--ciaf-navy-deep)]" style={{ width: "1.8vw", height: "1.8vw" }} />
      </div>
      <div className="flex-1">
        <div className="text-[1.4vw] font-bold text-[color:var(--ciaf-navy)] leading-tight">
          {title}
        </div>
        <div className="text-[0.95vw] text-[color:var(--ciaf-ink)]/70 mt-1">{desc}</div>
      </div>
      <ul className="flex flex-col gap-1 pl-[1vw] border-l border-[color:var(--ciaf-navy)]/10">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 text-[0.85vw] text-[color:var(--ciaf-navy)] font-medium">
            <Check style={{ width: "0.9vw", height: "0.9vw" }} className="text-[color:var(--ciaf-green)]" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
