import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'

interface HistoryCardProps {
	id: string,
	title: string,
	author: string,
	updatedAt: string
}

export function HistoryCard({ id, title, author, updatedAt }: HistoryCardProps) {

	const updatedAtDate = parseISO(updatedAt)

	const formattedDate = format(updatedAtDate, "'dia' dd 'de' MMMM', às ' HH:mm", {
		locale: ptBR
	})

	return (
		<Link to={`/history/session/${id}`} className="pl-2 pr-5 py-2 bg-gray-700 border border-gray-500 items-center rounded mb-2 mr-2 hover:bg-gray-900 transition">
			<h1 className="mb-2">{title}</h1>
			<p className="mb-2">Autor do texto: {author}</p>
			<p>Atualizado no {formattedDate}</p>
		</Link>
	)
}