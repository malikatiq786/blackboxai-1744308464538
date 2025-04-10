const BusinessSearch = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Søk etter en bedrift
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Ønsker du raskt å finne noen relevante bedrifter nær deg, kan du søke direkte her.
        </p>
        <input 
          type="text" 
          placeholder="Søk etter bedrift..." 
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-md mx-auto mb-4"
        />
        <button className="btn-primary">
          Søk
        </button>
      </div>
    </section>
  );
};

export default BusinessSearch;
