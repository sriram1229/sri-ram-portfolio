export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-lg border font-semibold shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
