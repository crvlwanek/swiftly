export type ButtonProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="text-lg px-4 py-2 bg-stone-500 rounded-lg">
      {children}
    </button>
  );
}
