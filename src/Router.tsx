import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { CharacterCardFull } from './pages/CharacterCardFull'
import { CreateCharacter } from './pages/CreateCharacter'
import { UpdateCharacter } from './pages/UpdateCharacter'
import { HistorysCards } from './pages/HistorysCards'

export function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/create" element={<CreateCharacter />} />
				<Route path="/update/:id" element={<UpdateCharacter />} />
				<Route path="/character/:id" element={<CharacterCardFull />} />
				<Route path="/history" element={<HistorysCards />} />
			</Routes>
		</>
	)
}