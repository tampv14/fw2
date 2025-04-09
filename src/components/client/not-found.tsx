import { Link } from "react-router-dom";

function Not() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-9xl font-extrabold mb-8">404 Not Found</h1>
      <p className="text-lg mb-8">Your visited page not found. You may go home page.</p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default Not;
