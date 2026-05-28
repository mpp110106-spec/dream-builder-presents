import { ReactNode } from "react";
import logoFull from "@/assets/ciaf-logo-full.png";
import logo from "@/assets/ciaf-logo.png";

export function SlideShell({
  children,
  variant = "light",
  bg,
  flexible = false,
}: {
  children: ReactNode;
  variant?: "light" | "dark" | "image";
  bg?: string;
  flexible?: boolean;
}) {
  const base =
    variant === "dark"
      ? "text-white"
      : variant === "image"
      ? "text-white"
      : "text-[color:var(--ciaf-ink)]";

  return (
    <div
      className={`slide-stage slide-fade ${base} ${flexible ? "slide-stage--flex" : ""}`}
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
      {flexible ? (
        <div className="relative px-5 sm:px-8 md:px-[5%] pt-24 sm:pt-28 md:pt-[9%] pb-6 md:pb-[6%]">
          {children}
        </div>
      ) : (
        <div className="absolute inset-0 px-[5%] pt-[9%] pb-[6%]">{children}</div>
      )}
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
          className={onDark ? "h-16 sm:h-20 md:h-[8vw] w-auto brightness-0 invert" : "h-16 sm:h-20 md:h-[9vw] w-auto"}
        />
        <div
          className={`h-6 w-px ${
            onDark ? "bg-white/40" : "bg-[color:var(--ciaf-navy)]/30"
          }`}
        />
        <div
          className={`text-[0.7rem] sm:text-xs md:text-[0.85vw] font-bold uppercase tracking-[0.18em] ${
            onDark ? "text-white/90" : "text-[color:var(--ciaf-navy)]/80"
          }`}
        >
          Universitarios <span className={onDark ? "text-white" : "text-[color:var(--ciaf-navy)]"}>Sin Límites</span>
        </div>
      </div>
      <div />

    </div>
  );
}
