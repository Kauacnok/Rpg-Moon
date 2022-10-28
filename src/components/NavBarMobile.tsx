import { Link } from 'react-router-dom'

export function NavBarMobile() {
	return (
		<>
			<menu className="sticky bg-gray-900 w-full h-16 bottom-0 rounded-t-lg px-5 z-40 md:hidden">
				<ul className="flex flex-row h-full justify-center items-center gap-5">
					<li><Link to="/"><img src="https://i.imgur.com/XrOYZdN.png" className="p-2 hover:border-2 hover:border-gray-300 hover:rounded" alt="Imagem de uma casa representando a pagina inicial"/></Link></li>
					<li><Link to="/history"><img src="https://i.imgur.com/hgEDFIS.png" className="p-2 hover:border-2 hover:border-gray-300 hover:rounded" alt="imagem de um jornal representando a pagina histórias das sessões" /></Link></li>
					<li><Link to="/roll-dice"><img src="https://i.imgur.com/qlGhJYL.png" className="p-2 hover:border-2 hover:border-gray-300 hover:rounded" alt="imagem com simbolo de mais representando a pagina de rolar dados"/></Link></li>
				</ul>
			</menu>
		</>
	)
}