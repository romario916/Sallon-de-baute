import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
}

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 hover:-translate-y-0.5 shadow-lg shadow-pink-600/20",
    outline:
      "border border-black bg-white text-black hover:bg-black hover:text-white",
    dark:
      "bg-black text-white hover:bg-neutral-800 hover:-translate-y-0.5",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;