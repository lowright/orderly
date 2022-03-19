/* eslint-disable fp/no-let */
import * as nearAPI from 'near-api-js';
import { getConfig } from './getConfig';

export const InitContract = async () => {
	const nearConfig = getConfig();
	const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
	const near = await nearAPI.connect({ keyStore, ...nearConfig });
	const walletConnection = new nearAPI.WalletConnection(near, '');

	let currentUser;
	if (walletConnection.getAccountId()) {
		currentUser = {
			accountId: walletConnection.getAccountId(),
			balance: (await walletConnection.account().state()).amount,
		};
	}

	const contract = new nearAPI.Contract(walletConnection.account(), nearConfig.contractName, {
		viewMethods: ['getMessages'],
		changeMethods: ['addMessage'],
		sender: walletConnection.getAccountId(),
	});

	return { contract, currentUser, nearConfig, walletConnection, near };
};
