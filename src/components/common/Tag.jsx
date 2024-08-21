export default function Tag({ children }) {
  return (
    <span className="bg-slate-500 text-white py-1 px-3 rounded-full text-sm hover:bg-sky-600 cursor-pointer">
      #{children}
    </span>
  );
}
