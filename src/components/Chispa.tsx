import type { ReactNode } from "react";

/** Palabra con el subrayado a mano en lima: la firma visual de Niido. */
export default function Chispa({
  children,
  delay = "900ms",
}: {
  children: ReactNode;
  delay?: string;
}) {
  return (
    <span className="chispa" style={{ "--d": delay } as React.CSSProperties}>
      {children}
      <svg viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength="1" d="M2 9 C 20 3, 42 10, 60 6 S 90 4, 98 7" />
      </svg>
    </span>
  );
}
