import { SlideShell } from "./SlideShell";
import bg from "@/assets/hero-continua.jpg";
import { Phone, Mail, CreditCard, Percent, Wallet, Zap } from "lucide-react";

export function Slide6CTA() {
  return (
    <SlideShell variant="image" bg={'https://res.cloudinary.com/dt3w3anjm/image/upload/v1779745371/ma1p9e5a7nvkfnn9v8fk.png'}>
      <div className="h-full flex flex-col justify-center max-w-[78%]">
        <div className="text-[0.9vw] font-semibold tracking-[0.25em] uppercase text-white mb-[1.5%]">
          Cierre
        </div>
        <h1 className="font-extrabold leading-[0.95] tracking-tight text-[6vw] mb-[2%]">
          Tu historia
          <br />
          <span className="text-white">continúa.</span>
        </h1>
        <p className="text-[1.4vw] font-light leading-snug text-white/85 max-w-[75%] mb-[3%]">
          No pauses el sueño por el que tanto has trabajado. En CIAF seguimos
          acompañándote en cada paso.
        </p>

        <div className="flex items-center gap-[1.2vw] mb-[3%]">
          <Pill icon={Percent} label="Descuentos" />
          <Pill icon={Wallet} label="Financiación" />
          <Pill icon={Zap} label="Sin filas" />
        </div>

        <div className="grid grid-cols-3 gap-[1vw]">
          <Contact icon={Phone} label="WhatsApp" value="312 681 4341" />
          <Contact icon={Mail} label="Correo" value="pagos@ciaf.edu.co" />
          <Contact icon={CreditCard} label="Pago online" value="ciaf.edu.co/pago-online" cta />
        </div>
      </div>
    </SlideShell>
  );
}

function Pill({ icon: Icon, label }: { icon: typeof Phone; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-[1.1vw] py-[0.55vw] rounded-full text-white text-[0.9vw] font-medium">
      <Icon style={{ width: "1vw", height: "1vw" }} className="text-white" />
      {label}
    </div>
  );
}

function Contact({
  icon: Icon,
  label,
  value,
  cta,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  cta?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-[1vw] flex items-center gap-[0.8vw] ${
        cta
          ? "bg-[color:var(--ciaf-green)] text-[color:var(--ciaf-navy-deep)]"
          : "bg-white/10 backdrop-blur-sm border border-white/15 text-white"
      }`}
    >
      <div
        className={`w-[2.4vw] h-[2.4vw] rounded-lg flex items-center justify-center shrink-0 ${
          cta ? "bg-[color:var(--ciaf-navy-deep)] text-white" : "bg-white/15"
        }`}
      >
        <Icon style={{ width: "1.2vw", height: "1.2vw" }} />
      </div>
      <div className="min-w-0">
        <div className="text-[0.7vw] uppercase tracking-[0.2em] opacity-80">{label}</div>
        <div className="text-[1vw] font-bold truncate">{value}</div>
      </div>
    </div>
  );
}
