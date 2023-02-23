import { gql } from "@apollo/client"
import { client } from "../../lib/apollo"
import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Header } from '../../components/Header'
import { getHistorySession } from '../../graphql/queries/get-history-session-by-id'
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'
import { NavBarMobile } from '../../components/NavBarMobile'
import { LinkNext } from '../../components/LinkNext'

export interface historyProps extends HistoryId {
	data: {
	    __typename?: "Query" | undefined;

	    historySession: {
	        __typename?: "HistorySession" | undefined;
	        title: string;
	        textHistory: string;
	        author: string;
	        updatedAt: any;
	    }
	}
}

interface HistoryId {
	id: string
}

interface contextProps {
    params: { historyId: string }
}

export default function HistoryCardFull({ data, id }: historyProps) {

	const updatedAtDate = parseISO(data.historySession.updatedAt)

	const formattedDate = format(updatedAtDate, "'dia' dd 'de' MMMM', às ' HH:mm", {
		locale: ptBR
	})

	return (
		<>
			<Header />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<div className="rounded-full px-5 py-2 cursor-pointer hover:bg-gray-500 transition"><LinkNext target="/history"><ArrowLeft size={40} /></LinkNext></div>
				<div className="rounded px-5 py-2 bg-green-500 cursor-pointer hover:bg-green-700 transition"><Link href={`/history/update/${id}`}>Editar</Link></div>
			</nav>
			<main className="pl-2 py-5 bg-gray-700 border-b border-gray-500" >	
				<h1 className="text-center mb-4">{data.historySession.title}</h1>
				<textarea readOnly value={data.historySession.textHistory} className="bg-gray-700 w-[90%] h-[400px] focus:outline-none"></textarea>
				<p className="my-4">Autor do texto: {data.historySession.author}</p>
				<p className="my-4">Atualizado no {formattedDate}</p>
			</main>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={2} />
			</footer>
		</>
	)
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query GetHistorySessionsList {
				historySessions(where: {}) {
					id
				}
			}
		`
	})

	const paths = data.historySessions.map((history: HistoryId) => {
		const historyId = history.id

		return {
            params: { historyId: historyId.toString() },
        }
	})

	return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: contextProps) {
	const id = context.params.historyId

	const { data } = await client.query({
		query: getHistorySession,
		variables: {
			id
		}
	})

	return {
		props: { data: data, id},
		revalidate: 60
	}
}