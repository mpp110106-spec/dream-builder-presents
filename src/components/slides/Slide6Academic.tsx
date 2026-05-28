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
    title: "Abre el módulo de asignaturas",
    desc: "Ubica en el menú principal la opción «Matrícula de asignaturas».",
  },
  {
    icon: Wallet,
    title: "Completa tu renovación financiera",
    desc: "Una vez validado tu pago o financiación, el sistema habilitará el siguiente paso.",
  },
  {
    icon: ListChecks,
    title: "Selecciona tus asignaturas",
    desc: "Elige las materias de tu semestre, verifica la información y confirma tu selección.",
  },
  {
    icon: CheckCircle2,
    title: "Finaliza el proceso",
    desc: "Confirma para que tu inscripción quede registrada correctamente en CIAF Virtual.",
  },
];

export function Slide6Academic() {
  return (
    <SlideShell variant="light" flexible>
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-[0.85cqw] font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-navy)]/70">
            Inscripción académica
          </span>
          <h2 className="font-extrabold text-[4cqw] leading-[1.05] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            ¿Cómo inscribir tus asignaturas?
          </h2>
          <span className="accent-bar mt-[1.2%]" />
        </div>

        <div className="grid grid-cols-5 gap-[1.2cqw]">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-[1.4cqw] flex flex-col shadow-[var(--shadow-soft)] border border-[color:var(--ciaf-navy)]/10"
            >
              <div className="flex items-center gap-[0.8cqw] mb-[1cqw]">
                <div className="w-[3cqw] h-[3cqw] rounded-xl bg-[color:var(--ciaf-navy)] flex items-center justify-center shrink-0">
                  <s.icon className="text-white" style={{ width: "1.6cqw", height: "1.6cqw" }} />
                </div>
                <div className="text-[0.75cqw] font-bold tracking-[0.18em] uppercase text-[color:var(--ciaf-navy)]/60">
                  Paso {i + 1}
                </div>
              </div>
              <div className="text-[1.25cqw] font-extrabold leading-tight text-[color:var(--ciaf-navy)] mb-2">
                {s.title}
              </div>
              <div className="text-[0.95cqw] leading-snug text-[color:var(--ciaf-ink)]/80">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full bg-[color:var(--ciaf-navy)] text-white px-[1.6cqw] py-[0.8cqw] text-[1cqw] font-semibold">
          🚀 Continúa construyendo tu futuro profesional junto a CIAF
        </div>
      </div>
    </SlideShell>
  );
}
