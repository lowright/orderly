import { FC } from 'react';

// Import Assets
import LogoImg from 'assets/images/logo-header.png';

// Import Types
import { IHeader } from './types';

// Import Styled Components
import { HeaderWrapper } from './HeaderStyled';

// Import Component
import { Logotype } from '../Logo';

export const Header: FC<IHeader> = () => {
	return (
		<HeaderWrapper>
			<Logotype url={LogoImg} />
		</HeaderWrapper>
	);
};
