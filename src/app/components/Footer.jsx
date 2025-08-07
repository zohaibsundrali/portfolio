'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0D1224] text-white px-4 sm:px-6 py-4">
      <hr className="border-gray-700 mb-8" />
      <div className="text-center md:text-left text-sm md:ml-[200px]">
        &copy; {new Date().getFullYear()} Developer Portfolio by{' '}
        <a
          href="https://www.linkedin.com/in/zohaib-hassan-5ab563277/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Zohaib Hassan
        </a>
      </div>
    </footer>
  );
}
