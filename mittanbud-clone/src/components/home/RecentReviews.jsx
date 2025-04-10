import { Link } from 'react-router-dom';

const RecentReviews = () => {
  const reviews = [
    {
      companyId: "430195",
      companyName: "SNEKKER OG MALERSERVICE AS",
      companyLogo: "https://res.cloudinary.com/schibsted-norge-smb/image/authenticated/s--Y4VUPg5x--/t_default_small/f_auto/gbjbub7xrmxlzazxcwwq?_a=AAClqEz",
      projectTitle: "Friskluftsventil",
      reviewText: "Veldig fornøyd med 3x friskluftsventiler installert i kjelle",
      reviewer: {
        name: "Mikaela",
        location: "Trondheim",
        date: "10.04.2025",
        verified: true
      }
    },
    {
      companyId: "282199",
      companyName: "VITO TEKNISK ENTREPRENØR AS",
      companyLogo: "https://res.cloudinary.com/schibsted-norge-smb/image/authenticated/s--AIe8tpwh--/t_default_small/f_auto/fcbkhxphskulmogf4c5a?_a=BAAARODQ",
      projectTitle: "Rørlegger",
      reviewText: "Anbefaler disse gutta",
      reviewer: {
        name: "Svein A.",
        location: "Oslo",
        date: "10.04.2025",
        verified: true
      }
    },
    {
      companyId: "597024",
      companyName: "KVIKK PARKETTSLIPERI",
      projectTitle: "Sliping av gulv og lakkering",
      reviewText: "Kjempefornøyd med Gulvsliping og lakkering av parkett. God kvalitet",
      reviewer: {
        name: "Danielle",
        location: "Oslo",
        date: "10.04.2025",
        verified: true
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Siste evalueringer
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Siste evalueringer av utførte jobber på Mittanbud
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Link 
              key={review.companyId} 
              to={`/bedrift/${review.companyId}`}
              className="block"
            >
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {review.companyLogo ? (
                    <img 
                      src={review.companyLogo} 
                      alt={`${review.companyName} logo`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      {review.companyName.substring(0, 2)}
                    </div>
                  )}
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{review.companyName}</h3>
                    <p className="text-sm text-gray-600">{review.projectTitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {review.reviewText}
                  <span className="text-primary hover:underline ml-1">Les mer</span>
                </p>

                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium mr-2">{review.reviewer.name}</span>
                  {review.reviewer.verified && (
                    <span className="text-green-600 mr-2">
                      <i className="fas fa-check-circle"></i> BankID-verifisert bruker
                    </span>
                  )}
                  <span>{review.reviewer.location}, {review.reviewer.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReviews;
