import { ReactNode } from "react";
import logoFull from "@/assets/ciaf-logo-full.png";
import logo from "@/assets/ciaf-logo.png";

export function SlideShell({
  children,
  variant = "light",
  bg,
}: {
  children: ReactNode;
  variant?: "light" | "dark" | "image";
  bg?: string;
}) {
  const base =
    variant === "dark"
      ? "text-white"
      : variant === "image"
      ? "text-white"
      : "text-[color:var(--ciaf-ink)]";

  return (
    <div
      className={`slide-stage slide-fade ${base}`}
      style={
        variant === "dark"
          ? { background: "var(--gradient-navy)" }
          : variant === "image" && bg
          ? {
              backgroundImage: `var(--gradient-overlay), url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { background: "var(--ciaf-paper)" }
      }
    >
      <BrandHeader variant={variant} />
      <div className="absolute inset-0 px-[5%] pt-[9%] pb-[6%]">{children}</div>
    </div>
  );
}

function BrandHeader({ variant }: { variant: "light" | "dark" | "image" }) {
  const onDark = variant !== "light";
  return (
    <div className="absolute top-0 inset-x-0 px-[4%] py-[2.2%] flex items-center justify-between z-10">
      <div className="flex items-center gap-3">
        <img
          src={onDark ? logo : logoFull}
          alt="CIAF"
          className={onDark ? "h-[2.6vw] w-auto brightness-0 invert" : "h-[2.8vw] w-auto"}
        />
        <div
          className={`h-6 w-px ${
            onDark ? "bg-white/40" : "bg-[color:var(--ciaf-navy)]/30"
          }`}
        />
        <div
          className={`text-[0.85vw] font-bold uppercase tracking-[0.18em] ${
            onDark ? "text-white/90" : "text-[color:var(--ciaf-navy)]/80"
          }`}
        >
          Universitarios <span className="text-[color:var(--ciaf-green-deep)]">Sin Límites</span>
        </div>
      </div>
      <div
        className={`text-[0.75vw] font-semibold tracking-[0.2em] uppercase ${
          onDark ? "text-white/70" : "text-[color:var(--ciaf-navy)]/60"
        }`}
      >
        Matrícula 2026-2
      </div>
    </div>
  );
}
