import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client';

interface CharacterCardProps {
	id: string,
	name: string,
	avatarURL: string,
}

export function CharacterCard(props: CharacterCardProps) {
	return (
		<Link to={`/character/${props.id}`} className="flex pl-2 pr-5 py-2 bg-gray-700 border border-gray-500 items-center rounded mb-2 mr-2 hover:bg-gray-900 transition" >
			<img src={props.avatarURL} alt={`Foto de avatar do personagem ${props.name}`} className="w-[60px] h-[60px] border border-gray-500 rounded-full" />
			<p className="ml-2">{props.name}</p>
		</Link>
	)
}