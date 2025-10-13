import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative h-[30vh] w-full overflow-hidden bg-white">
      {/* Floating blobs */}
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-blue-400 rounded-full blur-2xl opacity-30 animate-blob1"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-20 animate-blob2"></div>

      {/* Breadcrumb content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <nav className="text-base md:text-lg text-gray-800 font-medium backdrop-blur-md bg-white/60 px-6 py-3  border-white/30">
          <ol className="flex flex-wrap items-center justify-center space-x-2">
            <li>
              <Link to="/" className="text-blue-600 hover:underline">
                Trang chủ
              </Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
              const isLast = index === pathnames.length - 1;
              return (
                <li key={name} className="flex items-center space-x-2">
                  <span className="text-gray-400">/</span>
                  {isLast ? (
                    <span className="text-gray-900 font-semibold">
                      {decodeURIComponent(name)}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-blue-600 hover:underline"
                    >
                      {decodeURIComponent(name)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
