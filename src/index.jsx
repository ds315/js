
import {createRoot} from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';

import { Global, darkTheme, lightTheme } from './components/styled';
import NavBar from './components/navBar';

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import AsuPage from './pages/asu';
import MesPage from './pages/mes';

function App()
{
	const [dark, setDark] = useState(false);

	return <HashRouter>
		<ThemeProvider theme={dark ? darkTheme : lightTheme}>
			<Global dark={dark}/>
			<NavBar setDark={bool => setDark(bool)} />
			<Routes>
				<Route path='*' element={<AsuPage/>} />
				<Route path='/mes' element={<MesPage/>} />
			</Routes>
		</ThemeProvider>
	</HashRouter>
}

createRoot(document.getElementById('root')).render(<App/>);
