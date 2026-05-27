import { SlideShell } from "./SlideShell";
import { Laptop, Users } from "lucide-react";
import bg from "@/assets/slide5.png";

const digital = [
  "Ingresa al simulador de financiación",
  "Diligencia la solicitud de crédito",
  "Elige cuota inicial y cuotas",
  "Realiza tu pago de cuota inicial",
  "Envía comprobante a pagos@ciaf.edu.co",
  "Firma tus documentos virtuales",
];

const presencial = [
  "Solicita tu turno",
  "Diligencia la solicitud de crédito",
  "Recibe acompañamiento de una asesora",
  "Realiza tu pago de cuota inicial",
  "Firma tus documentos virtuales",
];

export function Slide5Steps() {
  return (
    <SlideShell variant="image" bg={bg}>
      <div className="h-full flex flex-col">
        <div className="mb-[1.5%]">
          <span className="text-[0.85vw] font-semibold tracking-[0.25em] uppercase text-white">
            Proceso paso a paso
          </span>
          <h2 className="font-extrabold text-[3.2vw] leading-[1] tracking-tight text-white mt-2">
            Financiación: digital o presencial.
          </h2>
          <span className="accent-bar mt-[1.2%]" />
        </div>


        <div className="grid grid-cols-2 gap-[1.6vw] flex-1 mt-[1vw]">
          <Track icon={Laptop} title="Digital" steps={digital} accent />
          <Track icon={Users} title="Presencial" steps={presencial} />
        </div>
      </div>
    </SlideShell>
  );
}

function Track({
  icon: Icon,
  title,
  steps,
  accent,
}: {
  icon: typeof Laptop;
  title: string;
  steps: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-[1.4vw] flex flex-col shadow-[var(--shadow-soft)] ${
        accent
          ? "bg-[color:var(--ciaf-navy)] text-white"
          : "bg-white border border-[color:var(--ciaf-navy)]/10 text-[color:var(--ciaf-navy)]"
      }`}
    >
      <div className="flex items-center gap-3 mb-[1vw]">
        <div
          className={`w-[2.6vw] h-[2.6vw] rounded-xl flex items-center justify-center ${
            accent ? "bg-[color:var(--ciaf-green)]" : "bg-[color:var(--ciaf-navy)]"
          }`}
        >
          <Icon className={accent ? "text-[color:var(--ciaf-navy-deep)]" : "text-white"} style={{ width: "1.4vw", height: "1.4vw" }} />
        </div>
        <div className="text-[1.6vw] font-extrabold tracking-tight">{title}</div>
      </div>

      <ol className="relative flex-1 flex flex-col gap-[0.7vw]">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-[0.9vw]">
            <div
              className={`shrink-0 w-[1.9vw] h-[1.9vw] rounded-full flex items-center justify-center text-[0.85vw] font-bold ${
                accent
                  ? "bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)]"
                  : "bg-[color:var(--ciaf-navy)] text-white"
              }`}
            >
              {i + 1}
            </div>
            <div
              className={`pt-[0.3vw] text-[1vw] leading-snug ${
                accent ? "text-white/90" : "text-[color:var(--ciaf-ink)]/85"
              }`}
            >
              {s}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
