import Link from 'next/link'
import { gql, useQuery } from '@apollo/client';

import { LinkNext } from './LinkNext'

interface CharacterCardProps {
	id: string,
	name: string,
	avatarURL: string,
	level: string,
	xp: string,
	xpSpent: string,
	points: string
}

export function CharacterCard(props: CharacterCardProps) {
	return (
		<LinkNext target={`/character/${props.id}`}>
			<div className="flex w-[90vw] pl-2 pr-5 py-2 bg-zinc-900 border border-zinc-800 items-center cursor-pointer rounded mb-2 mr-2 hover:bg-zinc-900 transition group md:w-[500px]">
				<img src={props.avatarURL} alt={`Foto de avatar do personagem ${props.name}`} className="w-[60px] h-[60px] border border-gray-500 rounded-full" />
				<div className="flex-col">
					<p className="ml-2 text-2xl font-bold">{props.name}</p>
					<ul className="flex flex-wrap gap-3 list-none">
						<li className="border-r border-zinc-800 py-2 pl-2 pr-4">Nível: {props.level}</li>
						<li className="border-r border-zinc-800 py-2 pl-2 pr-4">XP: {props.xp}</li>
						<li className="border-r border-zinc-800 py-2 pl-2 pr-4">XP Gasto: {props.xpSpent}</li>
						<li className="py-2 px-3">Pontos: {props.points}</li>
					</ul>	
				</div>
			</div>
		</LinkNext>
		
	)
}