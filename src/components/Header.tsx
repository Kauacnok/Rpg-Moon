import { Moon } from 'phosphor-react'
import Link  from 'next/link'

export function Header() {
	return (
		<header className="flex flex-col h-[120px] justify-center items-center bg-gray-700 border-b border-gray-500">
			<div className="ml-5 flex items-center">
				<h1 className="mr-2 text-lg">Rpg Moon</h1>	
				<Moon size={40} color="gray" />
			</div>
			<nav className="hidden md:flex md:flex-row">
				<div className="mb-2 hover:text-white hover:underline md:mb-0 md:mr-10"><Link href="/">Lista dos personagens</Link></div>
				<div className=" mb-2 hover:text-white hover:underline md:mb-0 md:mr-10"><Link href="/history">História das sessões</Link></div>
				<div className="hover:text-white hover:underline"><Link href="/roll">Rolar dados</Link></div>
			</nav>
		</header>
	)
}