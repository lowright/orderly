export interface IChildren {
	children: React.ReactNode;
}
export interface IWallet {
	readonly wallet_address: string;
	wallet_name: string;
	total_balance: string;
	accessible_balance: string;
	wallet_currency: string;
}
