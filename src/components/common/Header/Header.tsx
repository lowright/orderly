import { FC } from 'react';

// Import Assets
import LogoImg from 'assets/images/logo-header.png';

// Import Types
import { IHeader } from './types';

// Import Styled Components
import { HeaderWrapper, ComponentWrapper } from './HeaderStyled';

// Import Component
import { Logotype } from '../Logo';
import { ConnectWallet } from '../ConnectWallet';
import { Network } from './Network';

export const Header: FC<IHeader> = () => {
	return (
		<HeaderWrapper>
			<ComponentWrapper>
				<Logotype url={LogoImg} />
			</ComponentWrapper>
			<ComponentWrapper>
				<Network network="BTC" />
				<ConnectWallet
					// connected={false}
					connected
					logo={{
						src: '',
						alt: '',
					}}
					wallet={{
						total_balance: '34 213.14',
						wallet_address: '313adwd3321',
						wallet_name: 'near.name',
						wallet_currency: 'usdt',
					}}
				/>
			</ComponentWrapper>
		</HeaderWrapper>
	);
};
