import { Moon } from 'phosphor-react'

export function Header() {
	return (
		<header className="flex h-[90px] justify-center items-center bg-gray-700 border-b border-gray-500">
			<div className="ml-5 flex items-center">
				<h1 className="mr-2 text-lg">Rpg Moon</h1>	
				<Moon size={40} color="gray" />
			</div>
		</header>
	)
}