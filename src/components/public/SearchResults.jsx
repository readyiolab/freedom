import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Sparkles, Star, Zap } from "lucide-react";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("s") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(query);
  const navigate = useNavigate();

  // Mock search function
  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          title: "About Freedom M&A",
          description:
            "Learn about our company and mission in mergers and acquisitions.",
          url: "/about",
        },
        {
          id: 2,
          title: "Our Services",
          description: "Comprehensive M&A services and business consulting.",
          url: "/services",
        },
        {
          id: 3,
          title: "Dave Marshall",
          description: "Meet our founder and lead consultant Dave Marshall.",
          url: "/dave",
        },
        {
          id: 4,
          title: "Contact Us",
          description: "Get in touch with our team for consultation.",
          url: "/contact",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 800);
  };

  // Handle search input submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ s: searchInput });
    handleSearch(searchInput);
  };

  useEffect(() => {
    setSearchInput(query);
    handleSearch(query);
  }, [query]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#d3d6db] via-[#3a4750] to-[#303841] py-10 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
              Search Results for:{" "}
              <span className="text-[#be3144]">{query || "Your Query"}</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#d3d6db] max-w-3xl mx-auto">
              Explore our solutions, insights, and services tailored to your
              needs.
            </p>
          </div>

          {/* Search Input */}
          <div className="mb-6 sm:mb-8 max-w-3xl mx-auto">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
  type="text"
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
  placeholder="Search for services, team, or insights..."
  className="w-full px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-black 
             bg-white rounded-lg border  
             focus:outline-none focus:ring-2 focus:ring-[#be3144] 
             placeholder-black"
/>

                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
              </div>
              <Button
                type="submit"
                className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium 
                 rounded-lg bg-[#be3144] hover:bg-[#a1283a] text-white transition-colors
                 h-full"
              >
                Search
              </Button>
            </form>
          </div>

          {/* Search Results */}
          <div className="bg-white backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 shadow-xl">
            {isLoading && (
              <div className="text-center py-8 sm:py-12">
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-4 border-[#be3144] mx-auto"></div>
                <p className="mt-4 text-base sm:text-lg text-black">
                  Searching...
                </p>
              </div>
            )}

            {!isLoading && searchResults.length > 0 && (
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    className="group relative bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-[#d3d6db]/20 hover:bg-white/10 cursor-pointer transition-all duration-300 hover:scale-102 sm:hover:scale-105 shadow-md hover:shadow-[#be3144]/25"
                    onClick={() => navigate(result.url)}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#be3144] transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-[#d3d6db] text-xs sm:text-sm mb-3 sm:mb-4">
                      {result.description}
                    </p>
                    <span className="text-xs text-[#be3144] font-medium">
                      {result.url}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#be3144] to-[#3a4750] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                  </div>
                ))}
              </div>
            )}

            {!isLoading && query && searchResults.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-black mx-auto mb-4 opacity-60" />
                <p className="text-base sm:text-lg text-black mb-2">
                  No results found for "{query}"
                </p>
                <p className="text-xs sm:text-sm text-black">
                  Try different keywords or browse our main sections.
                </p>
              </div>
            )}

            {!query && !isLoading && (
              <div className="text-center py-8 sm:py-12">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#d3d6db] mx-auto mb-4 opacity-60" />
                <p className="text-base sm:text-lg text-[#d3d6db]">
                  Please enter a search term to see results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .group:hover {
            transform: scale(1.02);
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .group:hover {
            transform: scale(1.04);
          }
        }
      `}</style>
    </section>
  );
};

export default SearchResults;
