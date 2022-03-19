import { AccountBalance } from 'near-api-js/lib/account';
import * as nearAPI from 'near-api-js';
import { InitContract } from 'services/connect-wallet';

export const GetAccountBalance = async (): Promise<AccountBalance> => {
	const { near, nearConfig } = await InitContract();
	const account = await near.account(nearConfig.contractName);
	const balance = await account.getAccountBalance();

	return {
		total: nearAPI.utils.format.formatNearAmount(balance.total),
		available: nearAPI.utils.format.formatNearAmount(balance.available),
		stateStaked: balance.stateStaked,
		staked: balance.staked,
	};
};
