import Link from 'next/link'
import { gql, useQuery } from '@apollo/client';
import { LinkNext } from './LinkNext'

interface CharacterCardProps {
	id: string,
	name: string,
	avatarURL: string,
}

export function CharacterCard(props: CharacterCardProps) {
	return (
		<LinkNext target={`/character/${props.id}`}>
			<div className="flex pl-2 pr-5 py-2 bg-gray-700 border border-gray-500 items-center cursor-pointer rounded mb-2 mr-2 hover:bg-gray-900 transition group">
				<img src={props.avatarURL} alt={`Foto de avatar do personagem ${props.name}`} className="w-[60px] h-[60px] border border-gray-500 rounded-full" />
				<p className="ml-2">{props.name}</p>
			</div>
		</LinkNext>
		
	)
}