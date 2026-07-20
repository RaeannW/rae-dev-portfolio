import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "outlined";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "dark",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
  <button
    className={`${styles.button} ${styles[variant]} ${className ?? ""}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
  )
}
