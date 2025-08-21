import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Dave Marshall", href: "/dave" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?s=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/" onClick={() => handleNavClick("/")}>
                <img
                  src="/lovable-uploads/a788d54f-9dd7-463b-8d6f-3d1ad45a6ade.webp"
                  alt="Freedom M&A"
                  className="h-10 sm:h-12 w-auto"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-primary ${
                      isActive
                        ? "text-[#be3144]"
                        : isScrolled
                        ? "text-foreground"
                        : "text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={openSearch}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-gray-600 hover:text-[#be3144] hover:bg-gray-100"
                    : "text-white hover:text-gray-300 hover:bg-white/10"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Button
                className={`group transition-colors duration-300 ${
                  isScrolled
                    ? "bg-[#be3144] text-white hover:bg-[#a02738]"
                    : "bg-transparent text-white border border-white hover:bg-[#be3144] hover:text-white hover:border-[#be3144]"
                }`}
                onClick={() => handleNavClick("/get-started")}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={openSearch}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-gray-600 hover:text-[#be3144]"
                    : "text-white hover:text-gray-300"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      isScrolled ? "text-foreground" : "text-white"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-6 py-2 font-medium hover:text-[#be3144] transition-colors ${
                        isActive ? "text-[#be3144]" : "text-foreground"
                      }`
                    }
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="px-6 pt-4">
                  <Button
                    className="w-full group bg-[#be3144] text-white hover:bg-[#a02738] transition-colors duration-300"
                    onClick={() => handleNavClick("/get-started")}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="min-h-screen flex items-start justify-center pt-16 sm:pt-24 px-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl">
              {/* Search Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Search Freedom M&A
                  </h2>
                  <button
                    onClick={closeSearch}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Find the solutions, insights, and services you need. Explore M&A expertise,
                  business consulting, and professional guidance.
                </p>

                {/* Search Form */}
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to start searching..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be3144] focus:border-transparent text-base"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;