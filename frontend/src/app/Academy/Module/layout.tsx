import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Module - RT Academy',
  description: 'Pilihan modul pembelajaran di RT Academy',
}

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
