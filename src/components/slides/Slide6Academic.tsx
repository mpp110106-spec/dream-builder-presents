import { SlideShell } from "./SlideShell";
import { LogIn, BookMarked, Wallet, ListChecks, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    title: "Ingresa a CIAF Virtual",
    desc: "Accede con tu usuario y contraseña institucional para iniciar tu renovación académica.",
  },
  {
    icon: BookMarked,
    title: "Módulo «Matrícula de asignaturas»",
    desc: "Ubica en el menú principal la opción «Matrícula de asignaturas».",
  },
  {
    icon: Wallet,
    title: "Completa tu renovación financiera",
    desc: "Una vez validado tu pago o financiación, el sistema habilitará tu matrícula académica.",
  },
  {
    icon: ListChecks,
    title: "Selecciona tus asignaturas",
    desc: "Elige las materias de tu semestre, verifica la información y confirma tu selección.",
  },
  {
    icon: CheckCircle2,
    title: "Finaliza tu matrícula",
    desc: "Confirma el proceso para que tu matrícula quede registrada en CIAF Virtual.",
  },
];

export function Slide6Academic() {
  return (
    <SlideShell variant="light">
      <div className="h-full flex flex-col">
        <div className="mb-[1.5%]">
          <span className="text-[0.85vw] font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-navy)]/70">
            Matrícula académica
          </span>
          <h2 className="font-extrabold text-[3vw] leading-[1] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            ¿Cómo realizar tu matrícula académica?
          </h2>
          <span className="accent-bar mt-[1.2%]" />
        </div>

        <div className="grid grid-cols-5 gap-[1vw] flex-1 mt-[1.2vw]">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-[1.1vw] flex flex-col shadow-[var(--shadow-soft)] border border-[color:var(--ciaf-navy)]/10"
            >
              <div className="flex items-center gap-[0.6vw] mb-[0.8vw]">
                <div className="w-[2.2vw] h-[2.2vw] rounded-xl bg-[color:var(--ciaf-navy)] flex items-center justify-center shrink-0">
                  <s.icon className="text-white" style={{ width: "1.2vw", height: "1.2vw" }} />
                </div>
                <div className="text-[0.8vw] font-bold tracking-[0.18em] uppercase text-[color:var(--ciaf-navy)]/60">
                  Paso {i + 1}
                </div>
              </div>
              <div className="text-[1.05vw] font-extrabold leading-tight text-[color:var(--ciaf-navy)] mb-[0.5vw]">
                {s.title}
              </div>
              <div className="text-[0.85vw] leading-snug text-[color:var(--ciaf-ink)]/80">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[1.2vw] inline-flex items-center gap-[0.6vw] self-start rounded-full bg-[color:var(--ciaf-navy)] text-white px-[1.2vw] py-[0.55vw] text-[0.95vw] font-semibold">
          🚀 Continúa construyendo tu futuro profesional junto a CIAF
        </div>
      </div>
    </SlideShell>
  );
}
