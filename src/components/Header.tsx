import { Moon } from 'phosphor-react'
import Link  from 'next/link'

import { Logo } from '../components/Logo'

export function Header() {
	return (
		<header className="flex justify-between items-center border-b border-zinc-800">
			<div className="ml-5 flex w-[100%] justify-center items-center md:w-auto">
				<Link href="/"><Logo /></Link>
			</div>
			<nav className="hidden md:flex md:flex-row">
				<div className="mb-2 text-gray-100 hover:text-white hover:underline md:mb-0 md:mr-10"><Link href="/">Página Inicial</Link></div>
				<div className=" mb-2 text-gray-100 hover:text-white hover:underline md:mb-0 md:mr-10"><Link href="/history">História das sessões</Link></div>
				<div className=" text-gray-100 hover:text-white hover:underline"><Link href="/roll">Rolar dados</Link></div>
			</nav>
		</header>
	)
}