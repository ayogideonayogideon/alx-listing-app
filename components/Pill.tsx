type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Pill({ label, active = false, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm font-medium mr-2 mb-2 transition ${
        active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600 hover:bg-blue-200"
      }`}
    >
      {label}
    </button>
  );
}