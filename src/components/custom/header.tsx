import TooltipBtn from '@/components/customUi/TooltipBtn'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { AlignLeft, Heart, ShoppingCart, UserRoundPlus } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const headerMenu = [
  {
    path: '/',
    label: 'Home',
    icon: '',
  },
  {
    path: '/all-products',
    label: 'All Products',
    icon: '',
  },
  {
    path: '/about',
    label: 'About',
    icon: '',
  },
  {
    path: '/contact',
    label: 'Contact ',
    icon: '',
  },
  {
    path: '/offers',
    label: 'Offers',
    icon: '',
  },
]

function SMHeader() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <TooltipBtn label="Menu" icon={<AlignLeft />} variant="default" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="m-3 w-44 p-3">
          {headerMenu.map((l, i) => (
            <Link to={l.path} key={i}>
              <DropdownMenuItem>{l.label}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default function Header() {
  const IsPath = (path: string) => useLocation().pathname === path
  return (
    <>
      <header className="bg-primary text-primary-foreground px-5 py-2.5 flex items-center justify-between md:w-4xl mx-auto rounded-lg">
        <div className="flex items-center gap-1">
          <div className="inline md:hidden">
            <SMHeader />
          </div>
          <h1 className="font-gorditas text-lg">Ecomo</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            {headerMenu.map((l, i) => (
              <Link key={i} to={l.path}>
                <li
                  className={`text-sm px-3 py-0.5 rounded-xs ${
                    IsPath(l.path)
                      ? 'bg-zinc-600 font-normal'
                      : 'hover:bg-zinc-600 font-semibold'
                  }`}
                >
                  {l.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1.5">
          <TooltipBtn label="Cart" icon={<ShoppingCart size={19} />} />
          <TooltipBtn label="Wishlist" icon={<Heart size={19} />} />
          <TooltipBtn
            variant="secondary"
            label="Sign in"
            icon={<UserRoundPlus size={21} />}
          />
        </div>
      </header>
    </>
  )
}
