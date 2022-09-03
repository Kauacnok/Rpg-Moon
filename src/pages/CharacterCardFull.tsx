import { Header } from '../components/Header'
import { useGetCharacterInfooQuery } from '../graphql/generated'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'


export function CharacterCardFull() {
	const { id } = useParams<{ id: string }>()

	const { data } = useGetCharacterInfooQuery({
		variables: {
			id
		}
	})

	return (
		<>
			<Header />
			<nav className="flex justify-between items-center bg-gray-700 p-5">
				<Link to="/" className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<Link to={`/update/${id}`} className="rounded px-5 py-2 bg-green-500 hover:bg-green-700 transition">Editar</Link>
			</nav>
			<header className="flex flex-col p-5 bg-gray-700 md:flex-row">
				<div>
					<img src={data!.character!.avatarURL} alt={`Imagem do personagem ${data!.character!.name}`} className="w-[60px] h-[60px] rounded-full md:w-[150px] md:h-[150px]" />
				</div>
				<div>
					<h2 className="text-[30px]">{data!.character!.name}</h2>
					<p className="ml-2">{data!.character!.characterDescription}</p>
					<p className="ml-2 mt-2">Jogador: {data!.character!.player}</p>
				</div>
			</header>
			<aside className="pl-2 bg-gray-700 border-b border-gray-500">
				<div className="flex justify-around">
					<p>Pontos: {data!.character!.points}</p>
					<p>XP: {data!.character!.xp}</p>
					<p>Nível: {data!.character!.level}</p>
				</div>
			</aside>
			<main className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row" >
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Atributos:</li>
					<li>Força: {data!.character!.force}</li>
					<li>Agilidade: {data!.character!.agility}</li>
					<li>Resistência: {data!.character!.resistance}</li>
					<li>Inteligência: {data!.character!.inteligence}</li>
					<li>Percepção: {data!.character!.perception}</li>
					<li>Vontade: {data!.character!.disposal}</li>
					<li>Carisma: {data!.character!.charisma}</li>
				</ul>
				<ul className="p-5 mr-2 border border-gray-500 rounded-md">
					<li className="mb-2">Habilidades:</li>
					<li>{data!.character!.skills}</li>
				</ul>
			</main>
			<div className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li>Caminho: {data!.character!.route}</li>
					<li>Origem: {data!.character!.origin}</li>
					<li>Personalidade: {data!.character!.personality}</li>
					<li>Motivação: {data!.character!.motivation}</li>
					<li>Conexão: {data!.character!.connection}</li>
					<li>Problema: {data!.character!.problem}</li>
				</ul>
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Desgaste:</li>
					<li>Físico: {data!.character!.physical}</li>
					<li>Mental: {data!.character!.psychological}</li>
				</ul>
			</div>
			<div className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Inventário:</li>
					<li>{data!.character!.inventory}</li>
					
				</ul>
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Moedas:</li>
					<li>{data!.character!.money}</li>
				</ul>
			</div>
		</>
	)
}