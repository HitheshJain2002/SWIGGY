export const Shimmer = () => {
    return (
      <div className="p-6 space-y-8">
        {/* Shimmer for search and top-rated buttons */}
        <div className="flex justify-between items-center space-x-4">
          <div className="bg-gray-300 h-12 w-48 rounded-lg animate-pulse"></div>
          <div className="bg-gray-300 h-12 w-36 rounded-lg animate-pulse"></div>
        </div>
  
        {/* Shimmer for cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-48 w-64 rounded-lg p-6 shadow-lg animate-pulse"
            >
           
            </div>
          ))}
        </div>
      </div>
    );
  };
  