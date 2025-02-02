import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sertifikasi - RT Academy',
  description: 'Sertifikasi RT-ACADEMY',
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
