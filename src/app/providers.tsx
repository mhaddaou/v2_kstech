import { Toaster} from 'sonner'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster position="top-right" richColors/>
      {children}
    </NextUIProvider>
  )
}