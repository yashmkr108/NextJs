export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="p-2 border-b border-black text-3xl text-blue-500 text-center bg-slate-900">These are sample todos in Layout wrapper</div>
        {children}
    </>
  );
}