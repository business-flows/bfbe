export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#070F1A' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-text text-xs">
            &copy; {currentYear} Business Flows BV. All rights reserved.
          </p>
          <p className="text-muted-text/60 text-xs">Herent, Belgium</p>
        </div>
      </div>
    </footer>
  );
}
