export const formatAddress = ({ address }: { address: string }) => {
	/* eslint-disable fp/no-let */
	let modified: string = '';

	if (address.length > 9) {
		modified = `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;
	}

	return modified;
};

export const FilterInputForNumber = ({ value }: { value: string }) => {
	const filterRule = /\D/g;
	return value.replace(filterRule, '');
};

export const prettierBalance = ({ str }: { str: string }) => `${Math.trunc(+str * 11.25 * 100) / 100}`;
