import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { NavBarMobile } from '../components/NavBarMobile'

export default function pageNotFound() {
	return (
		<div className="px-8">
			<Head>
				<title>Rpg Moon | Página não encontrada (Not found 404)</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Página não encontrada (Not found 404)" />
				<meta name="description" content="Página não encontrada. (Not found 404)" />
				<meta name="keywords" content="Rpg Moon, Página não encontrada, Not found 404, 404" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/vaKcNK2.png" />
			</Head>
			<Header />
			<main className="flex flex-col mt-10 justify-center items-center bg-gray-700 border border-gray-500 rounded" >
				<h1 className="mb-4 text-2xl md:text-4xl">Página não encontrada (404 not found)</h1>
				<div className="mb-4 rounded px-5 py-2 bg-green-500 cursor-pointer hover:bg-green-700 transition"><Link href="/">Voltar para a página inicial</Link></div>
			</main>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={1} />
			</footer>
		</div>
	)
}