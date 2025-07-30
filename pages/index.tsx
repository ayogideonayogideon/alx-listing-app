import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import PropertyCard from "../components/PropertyCard";
import Pill from "../components/Pill"; // 

export default function HomePage() {
  // For now, show all properties; you can later add filtering logic here
  const filteredProperties = PROPERTYLISTINGSAMPLE;

  return (
    <Layout>
      <Hero />
      {/* More sections like filters or property cards will follow */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </Layout>
  );
}