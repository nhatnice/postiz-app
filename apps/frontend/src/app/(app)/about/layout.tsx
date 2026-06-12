export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#0E0E0E] text-white">{children}</div>
  );
}
