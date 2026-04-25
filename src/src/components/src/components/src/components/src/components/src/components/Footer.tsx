export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{
        background: '#000810',
        borderColor: 'rgba(255,102,0,0.1)',
      }}
    >
      <p
        className="text-gray-500 text-sm"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        &copy; {new Date().getFullYear()} Markitix. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
