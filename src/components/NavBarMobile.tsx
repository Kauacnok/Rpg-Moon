import { Link } from 'react-router-dom'
import classNames from 'classnames'

import House from '../assets/house.png'
import News from '../assets/news.png'
import More from '../assets/more.png'

interface NavBarMobileProps {
	typeIntImage: number // 1- Home 2- History sessions 3- Roll dices
}

export function NavBarMobile({ typeIntImage }: NavBarMobileProps) {
	return (
		<>
			<menu className="fixed bg-gray-900 w-full h-16 border-[1px] border-gray-500 bottom-0 rounded-t-lg px-5 z-40 md:hidden">
				<ul className="flex flex-row h-full justify-center items-center gap-5">
					<li>
						<Link to="/">
							<img 
								src={House}
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 1
								})} 
								alt="Imagem de uma casa representando a pagina inicial"
							/>
						</Link>
					</li>
					<li>
						<Link to="/history">
							<img 
								src={News} 
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 2
								})} 
								alt="imagem de um jornal representando a pagina histórias das sessões" 
							/>
						</Link>
					</li>
					<li>
						<Link to="/roll-dice">
							<img src={More} 
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 3
								})} 
								alt="imagem com simbolo de mais representando a pagina de rolar dados"
							/>
						</Link>
					</li>
				</ul>
			</menu>
		</>
	)
}