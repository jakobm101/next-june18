type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button({ children, onClick}: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className=" transition-all cursor-pointer active:bg-blue-50 bg-blue-800 w-10 h-10 rounded-2xl font-black hover:bg-blue-500 "
      >
        {children}
      </button>
    </>
  );
}
