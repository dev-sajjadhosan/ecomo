import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Brush } from 'lucide-react'

export default function TooltipBtn({
  label = 'Tooltip',
  icon = <Brush size={19} />,
  variant = 'ghost',
  align,
  side,
}: {
  label: string
  icon: React.ReactNode
  variant?: 'default' | 'ghost' | 'secondary' | 'outline' | 'link'
  align?: 'center' | 'end' | 'start'
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <>
      <Tooltip>
        <TooltipTrigger>
          <Button variant={variant} size="icon">
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent align={align} side={side}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}
