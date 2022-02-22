import { FC } from 'react';

// Import Types
import { ILogo } from './types';

// Import Styled Components
import { Logo } from './LogoStyled';

export const Logotype: FC<ILogo> = ({ url, alt }) => {
	return <Logo src={url} alt={alt} />;
};
