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
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <span className="text-[0.7rem] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[color:var(--ciaf-navy)]/70">
            Inscripción académica
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-[color:var(--ciaf-navy)] mt-2">
            ¿Cómo inscribir tus asignaturas?
          </h2>
          <span className="accent-bar mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 md:p-5 flex flex-col shadow-[var(--shadow-soft)] border border-[color:var(--ciaf-navy)]/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[color:var(--ciaf-navy)] flex items-center justify-center shrink-0">
                  <s.icon className="text-white w-5 h-5 md:w-5.5 md:h-5.5" />
                </div>
                <div className="text-[0.65rem] sm:text-xs font-bold tracking-[0.18em] uppercase text-[color:var(--ciaf-navy)]/60">
                  Paso {i + 1}
                </div>
              </div>
              <div className="text-base md:text-lg font-extrabold leading-tight text-[color:var(--ciaf-navy)] mb-2">
                {s.title}
              </div>
              <div className="text-sm leading-snug text-[color:var(--ciaf-ink)]/80">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full bg-[color:var(--ciaf-navy)] text-white px-5 py-2.5 text-sm md:text-base font-semibold">
          🚀 Continúa construyendo tu futuro profesional junto a CIAF
        </div>
      </div>
    </SlideShell>
  );
}
