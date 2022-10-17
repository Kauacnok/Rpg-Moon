import { Moon } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
	return (
		<header className="flex flex-col h-[120px] justify-center items-center bg-gray-700 border-b border-gray-500">
			<div className="ml-5 flex items-center">
				<h1 className="mr-2 text-lg">Rpg Moon</h1>	
				<Moon size={40} color="gray" />
			</div>
			<nav className="flex flex-col md:flex-row">
				<Link to="/" className="mb-2 hover:text-white hover:underline md:mb-0 md:mr-10">Lista dos personagens</Link>
				<Link to="/history" className=" mb-2 hover:text-white hover:underline md:mb-0 md:mr-10">História das sessões</Link>
				<Link to="/roll-dice" className="hover:text-white hover:underline">Rolar dados</Link>
			</nav>
		</header>
	)
}