import { PropertyProps } from "../interfaces";

export default function PropertyCard({ property }: { property: PropertyProps }) {
  return (
    <div className="rounded-lg border shadow hover:shadow-lg transition overflow-hidden bg-white">
      <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
      <div className="p-4 space-y-1">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
        <p className="text-yellow-600 text-sm">⭐ {property.rating}</p>
        <div className="flex justify-between text-sm mt-2">
          <span className="font-bold text-green-600">${property.price}</span>
          {property.discount && (
            <span className="text-red-500">-{property.discount}%</span>
          )}
        </div>
      </div>
    </div>
  );
}