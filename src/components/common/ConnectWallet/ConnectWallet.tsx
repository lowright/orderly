import { FC } from 'react';

// Import types
import { IConnectWaller } from './types';

// Import styled components
import { ConnectWrapperButton, Logotype } from './ConnectWalletStyled';

export const ConnectWallet: FC<IConnectWaller> = ({ logo, wallet }) => {
	return (
		<ConnectWrapperButton>
			<Logotype src={logo.src} alt={logo.alt} />
		</ConnectWrapperButton>
	);
};
