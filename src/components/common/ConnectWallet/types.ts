// Import types
import { IWallet } from 'types';

export type TLogo = {
	src: string;
	alt?: string;
};

export interface IConnectWaller {
	connected?: boolean;
	logo: TLogo;
	wallet: Pick<IWallet, 'total_balance' | 'wallet_id' | 'wallet_name' | 'wallet_currency'>;
}
