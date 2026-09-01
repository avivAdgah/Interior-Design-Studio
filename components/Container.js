export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-8xl px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
