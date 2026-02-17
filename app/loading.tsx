export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        {/* Shield Logo with pulse animation */}
        <div className="mb-8 animate-pulse">
          <svg
            className="w-24 h-24 mx-auto text-primary-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <path
              d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z"
              fill="url(#shieldGradient)"
            />
            <path
              d="M12 8v4m0 4h.01"
              stroke="#7dd3fc"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Loading text */}
        <div className="text-primary-900 font-semibold text-xl mb-4">
          SAFELY
        </div>

        {/* Spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    </div>
  );
}
