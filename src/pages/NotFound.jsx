import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
            <h1 className="text-8xl font-extrabold text-green-600 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Oops! Page not found
            </h2>
            <p className="text-gray-500 mb-6 text-center max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link to={'/'}><button className="btn btn-dash text-green-600 font-bold btn-success">Go Home</button></Link>
        </div>
    );
};

export default NotFound;
