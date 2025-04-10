import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import PopularProjects from '../components/home/PopularProjects';
import RecentReviews from '../components/home/RecentReviews';
import Features from '../components/home/Features';
import XLPromotion from '../components/home/XLPromotion';
import BusinessSearch from '../components/home/BusinessSearch';
import NewsSection from '../components/home/NewsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PopularProjects />
      <RecentReviews />
      <Features />
      <XLPromotion />
      <BusinessSearch />
      <NewsSection />
    </>
  );
};

export default HomePage;
