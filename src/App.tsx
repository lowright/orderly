import { Normalize } from 'styled-normalize';
import { Header } from './components/common';

// Import Styled Components
import { AppProvider } from './AppStyled';

export const App = () => {
	return (
		<AppProvider>
			<Normalize />
			<Header />
		</AppProvider>
	);
};
