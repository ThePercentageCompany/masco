import React from "react";
import { ArrowRight } from "lucide-react";

export interface InteractiveHoverButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLAnchorElement,
  InteractiveHoverButtonProps
>(({ text, children, className = "", href = "#contact", onClick, ...props }, ref) => {
  const label = children || text || "Get Started";

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={`interactive-hover-btn ${className}`}
      {...props}
    >
      <div className="btn-content-wrap">
        <div className="btn-dot" />
        <span className="btn-text-init">{label}</span>
      </div>
      <div className="btn-content-hover">
        <span>{label}</span>
        <ArrowRight className="btn-arrow-icon" size={16} />
      </div>
    </a>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
