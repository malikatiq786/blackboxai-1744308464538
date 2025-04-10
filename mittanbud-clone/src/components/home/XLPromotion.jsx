const XLPromotion = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Mittanbud XL
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          For større prosjekter! Vi matcher prosjektet ditt med 3 kvalifiserte bedrifter.
        </p>
        <a 
          href="/xl" 
          className="btn-primary inline-flex items-center justify-center"
        >
          Kom i gang
        </a>
      </div>
    </section>
  );
};

export default XLPromotion;
