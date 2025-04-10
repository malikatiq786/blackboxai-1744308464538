import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Mittanbud
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/legg-ut/haandverk" className="text-gray-600 hover:text-gray-900">
            Håndverk
          </Link>
          <Link to="/legg-ut/haandverk?wid=153" className="text-gray-600 hover:text-gray-900">
            Pusse opp bad
          </Link>
          <Link to="/legg-ut/verksted" className="text-gray-600 hover:text-gray-900">
            Bilverksted
          </Link>
          <Link to="/xl/legg-ut" className="text-gray-600 hover:text-gray-900">
            Store prosjekter
          </Link>
          <Link to="/legg-ut/rengjoring" className="text-gray-600 hover:text-gray-900">
            Rengjøring
          </Link>
          <Link to="/borettslag-og-sameier/legg-ut" className="text-gray-600 hover:text-gray-900">
            Borettslag
          </Link>
          <Link to="/legg-ut/transport" className="text-gray-600 hover:text-gray-900">
            Transport
          </Link>
          <Link to="/alle-kategorier" className="text-gray-600 hover:text-gray-900">
            Alle kategorier
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
