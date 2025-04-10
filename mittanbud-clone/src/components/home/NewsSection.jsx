const NewsSection = () => {
  const newsItems = [
    {
      title: "Skal du grave eller drenere i hagen?",
      description: "Enviro Entreprenør deler sine beste tips.",
      link: "/inspirasjon/drenering-tips-enviro",
      image: "https://cdn.sanity.io/images/llxj4re9/production/7d23f7ceabea0448866bf463b02afa4e8eac4afe-950x635.jpg"
    },
    {
      title: "Vi innfører BankID-verifisering",
      description: "For å bekjempe useriøse aktører.",
      link: "/privatperson/aktuelt/bankid-verifisering",
      image: "https://cdn.sanity.io/images/llxj4re9/production/74f4f0c39252da8a3a9601646aaeba598a373ee7-2119x1414.jpg"
    },
    {
      title: "Håndverksordbok fra A til Å",
      description: "En nyttig ressurs for alle håndverkere.",
      link: "/privatperson/startguide/haandverksordbok",
      image: "https://cdn.sanity.io/images/llxj4re9/production/0fcc60f37c8d7011d4d28aee1ab414277329fd56-800x369.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Inspirasjon, gode råd og nyheter
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href={item.link} className="text-primary hover:underline">Les mer</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
