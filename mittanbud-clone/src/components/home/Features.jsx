const Features = () => {
  const features = [
    {
      title: "Finn dyktige håndverkere",
      description: "Mittanbud er en enkel måte å finne håndverkere, uansett om det er en stor eller liten jobb.",
      icon: "fas fa-user-check"
    },
    {
      title: "Trygge og pålitelige bedrifter",
      description: "Mittanbud er en trygg måte å finne en god og kvalifisert bedrift til jobben.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Evalueringer du kan stole på",
      description: "Evalueringer kan kun gis for jobber som legges ut på Mittanbud.",
      icon: "fas fa-star"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Slik fungerer Mittanbud
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <i className={`${feature.icon} text-4xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
