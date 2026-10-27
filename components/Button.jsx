const variants = {
  nav: "h-9 rounded-full bg-primary text-white",
  primary: "h-[62px] rounded-[11px] bg-primary/[0.79] text-white",
  light: "h-[62px] rounded-[11px] bg-white/[0.92] text-ink",
};

export default function Button({ children, variant = "primary", href = "#" }) {
  return (
    <a
      href={href}
      className={`inline-flex w-[169px] items-center justify-center text-xl font-semibold ${variants[variant]}`}
    >
      {children}
    </a>
  );
}