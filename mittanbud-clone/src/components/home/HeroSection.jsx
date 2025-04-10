import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Få jobben gjort!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Beskriv jobben og <strong>motta tilbud fra dyktige fagfolk.</strong> Gratis og uforpliktende.
            </p>
            <div className="space-y-4">
              <Link 
                to="/legg-ut/haandverk"
                className="btn-primary w-full md:w-auto inline-block text-center"
              >
                Legg ut jobb
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://cdn.sanity.io/images/llxj4re9/production/742eb8c9ea61aebd134af4377b665d63110d6993-771x688.png?w=1200&q=75&auto=format"
              alt="Post It note with an image of a newly remodeled bathroom"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Category Quick Links */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              to="/legg-ut/haandverk"
              className="card hover:shadow-lg transition-shadow text-center p-4"
            >
              <i className="fas fa-tools text-2xl text-primary mb-2"></i>
              <p className="font-medium">Håndverk</p>
            </Link>
            <Link 
              to="/legg-ut/haandverk?wid=153"
              className="card hover:shadow-lg transition-shadow text-center p-4"
            >
              <i className="fas fa-bath text-2xl text-primary mb-2"></i>
              <p className="font-medium">Pusse opp bad</p>
            </Link>
            <Link 
              to="/legg-ut/verksted"
              className="card hover:shadow-lg transition-shadow text-center p-4"
            >
              <i className="fas fa-car text-2xl text-primary mb-2"></i>
              <p className="font-medium">Bilverksted</p>
            </Link>
            <Link 
              to="/xl/legg-ut"
              className="card hover:shadow-lg transition-shadow text-center p-4"
            >
              <i className="fas fa-building text-2xl text-primary mb-2"></i>
              <p className="font-medium">Store prosjekter</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
