type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
      {children}
    </span>
  );
}
