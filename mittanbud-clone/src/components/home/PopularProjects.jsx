import { Link } from 'react-router-dom';

const PopularProjects = () => {
  const projects = [
    {
      title: "Rørlegger",
      icon: "fas fa-wrench",
      link: "/haandverker/roerlegger"
    },
    {
      title: "Elektriker",
      icon: "fas fa-bolt",
      link: "/haandverker/elektriker"
    },
    {
      title: "Bilverksted",
      icon: "fas fa-car",
      link: "/tjenester/bil-og-bilservice"
    },
    {
      title: "Entreprenører",
      icon: "fas fa-hard-hat",
      link: "/bygge-nytt/entreprenoer"
    },
    {
      title: "Maler",
      icon: "fas fa-paint-roller",
      link: "/haandverker/maler"
    },
    {
      title: "Flyttebyrå",
      icon: "fas fa-truck",
      link: "/tjenester/flyttebyraa"
    },
    {
      title: "Snekker",
      icon: "fas fa-hammer",
      link: "/haandverker/snekker"
    },
    {
      title: "Rengjøring",
      icon: "fas fa-broom",
      link: "/tjenester/rengjoering"
    },
    {
      title: "Pusse opp bad",
      icon: "fas fa-bath",
      link: "/innvendig-oppussing/pusse-opp-bad"
    },
    {
      title: "Borettslag",
      icon: "fas fa-building",
      link: "/borettslag-og-sameier"
    },
    {
      title: "Store prosjekter",
      icon: "fas fa-city",
      link: "/xl"
    },
    {
      title: "Alle kategorier",
      icon: "fas fa-th-list",
      link: "/alle-kategorier"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Populære prosjekter
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className="group"
            >
              <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <i className={`${project.icon} text-2xl text-primary mb-3 group-hover:scale-110 transition-transform`}></i>
                <p className="text-gray-900 font-medium">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProjects;
