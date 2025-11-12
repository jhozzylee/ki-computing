import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTAButton = ({
  text,
  fullWidth = false,
  link,
  onClick,
  variant = "primary", // default
}) => {
  const baseClasses = `
    text-btn font-sans border border-transparent
    py-2 rounded-[40px]
    transition-all duration-200 ease-in-out
    inline-flex items-center gap-2 cursor-pointer no-underline
    ${fullWidth ? "w-full rounded-none px-11" : ""}
  `;

  const variants = {
    primary: `
      bg-primary text-background px-[40px] 
      hover:bg-primary/10 hover:text-primary hover:border hover:border-primary hover:scale-105
    `,
    link: `
      bg-transparent text-primary px-6
      hover:bg-primary/10 hover:text-pimary hover:border hover:border-primary 
    `,
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const Content = (
    <>
      {text}
      {variant === "link" && (
        <ArrowRight
          size={18}
          className="transform transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (link) {
    return (
      <Link to={link} className={`group ${classes}`} aria-label={text}>
        {Content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${classes}`}
      onClick={onClick}
      aria-label={text}
    >
      {Content}
    </button>
  );
};

export default CTAButton;
