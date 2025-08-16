import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import a from '../../assets/carousel/1.png'
import b from '../../assets/carousel/2.png'
import c from '../../assets/carousel/3.png'
import d from '../../assets/carousel/4.png'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'

const carouselData = [
  {
    id: 1,
    heading: `Fashion sale for women's`,
    subHeading: 'Elevate your every day. Style that speaks volumes.',
    src: a,
  },
  {
    id: 2,
    heading: `Fashion sale for men`,
    subHeading: 'Wear the change. Fashion that feels good.',
    src: b,
  },
  {
    id: 3,
    heading: `Fashion sale for children's`,
    subHeading: 'Wear the change. Fashion that feels good.',
    src: c,
  },
  {
    id: 4,
    heading: `Cosmetics sale for Women's`,
    subHeading: 'Wear the change. Fashion that feels good.',
    src: d,
  },
]

export default function CarouselH() {
  return (
    <>
      <Carousel className="w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-1/2 z-50 w-[87%]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {carouselData.map((c, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card
                  className="h-[35rem] bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: `url(${c?.src})` }}
                >
                  <CardContent className="flex flex-col items-start justify-center md:px-20 h-full text-primary-foreground">
                    <h1 className="text-5xl font-gorditas w-md">
                      {c?.heading}
                    </h1>
                    <h3 className="text-lg font-medium mb-5">
                      {c?.subHeading}
                    </h3>
                    <Button
                      onClick={() =>
                        toast.warning('Developer ,', {
                          description:
                            'We are currently working on this website. So, many part will be on Development Mode. Please Wait! we will be back soon.',
                          position: 'top-center',
                          duration: 5000,
                        })
                      }
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      Shop Now
                      <ShoppingBag />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
