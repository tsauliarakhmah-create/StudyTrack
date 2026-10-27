export default function Card({ children }) {
  return (
    <article className="flex flex-col items-center gap-10 rounded-[56px] bg-white/[0.79] px-5 pt-14 pb-10 text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      {children}
    </article>
  );
}