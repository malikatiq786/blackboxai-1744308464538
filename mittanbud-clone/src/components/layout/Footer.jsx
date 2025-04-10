const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <p className="text-sm">© 2025 Mittanbud. All rights reserved.</p>
          </div>
          <div>
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms-of-service" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
