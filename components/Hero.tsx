export default function Hero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="bg-black bg-opacity-40 p-8 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-lg mb-6">Browse affordable listings across Nigeria.</p>
        <a href="#listings" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
          Browse Listings
        </a>
      </div>
    </section>
  );
}