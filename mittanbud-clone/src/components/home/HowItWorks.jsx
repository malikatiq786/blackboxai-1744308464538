const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Beskriv prosjektet",
      description: "Fortell oss hva du trenger hjelp til, og vi sender ut prosjektet til relevante bedrifter",
      icon: "fas fa-pencil-alt"
    },
    {
      number: 2,
      title: "Motta tilbud",
      description: "Etter kort tid vil du få uforpliktende tilbud fra bedrifter og fagfolk som er interessert i å hjelpe deg.",
      icon: "fas fa-envelope-open-text"
    },
    {
      number: 3,
      title: "Sett i gang!",
      description: "Sjekk tilbudene du har fått, og velg riktig bedrift for jobben. Når jobben er gjort, kan du legge inn en evaluering.",
      icon: "fas fa-check-circle"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Slik fungerer Mittanbud
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                  <i className={`${step.icon} text-2xl text-white`}></i>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-white text-primary text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/legg-ut" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Legg ut jobb</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
