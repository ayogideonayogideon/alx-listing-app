export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">🏠 ALX Listing</div>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}