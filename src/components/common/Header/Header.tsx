import { FC } from 'react';

// Import Assets
import LogoImg from 'assets/images/logo-header.png';

// Import Types
import { IHeader } from './types';

// Import Styled Components
import { HeaderWrapper } from './HeaderStyled';

// Import Component
import { Logotype } from '../Logo';
import { ConnectWallet } from '../ConnectWallet';

export const Header: FC<IHeader> = () => {
	return (
		<HeaderWrapper>
			<Logotype url={LogoImg} />
			<ConnectWallet
				connected
				logo={{
					src: '',
					alt: '',
				}}
				wallet={{
					wallet_id: '313adwd3321',
					wallet_name: 'near.name',
					total_balance: '34 415.34',
					wallet_currency: 'usdt',
				}}
			/>
		</HeaderWrapper>
	);
};
