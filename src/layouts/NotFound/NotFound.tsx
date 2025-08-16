import { Button } from '@/components/ui/button'
import { Unplug } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col font-gorditas items-center justify-center h-screen">
        <Unplug size={75} fontWeight={'100'} />
        <h1 className="text-5xl mt-1">4.0.4 Page</h1>
        <h3>Look like user has came to a not reachable Page.</h3>
        <h3>
          Please go back to the
          <Button variant="default" className="mx-2" size="sm">
            home
          </Button>
          page.
        </h3>
      </div>
    </>
  )
}
