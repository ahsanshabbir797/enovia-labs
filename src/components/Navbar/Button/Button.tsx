import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "filled" | "outline";
  className?: string; // Add a className prop for external styling
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "filled", className = "" }) => { //className prop added
  const baseStyles = "px-6 py-3 rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = variant === "filled"
    ? "bg-teal-500 hover:bg-teal-600 text-white focus:ring-teal-300"
    : "border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white focus:ring-teal-300";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}> {/* Corrected: className prop added here */}
      {children}
    </button>
  );
};

export default Button;