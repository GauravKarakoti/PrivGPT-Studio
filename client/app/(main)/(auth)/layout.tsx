import { Suspense } from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div className="h-10" />}>
        <main className="flex items-center justify-center w-full py-2">
          {children}
        </main>
      </Suspense>
    </>
  );
}
