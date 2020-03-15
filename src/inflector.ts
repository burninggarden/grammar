
const SINGULAR_TO_PLURAL_MAP: {[key: string]: string;} = {
	loot: 'loot'
};

class Inflector {
	public static singularize(pluralForm: string): string {
		for (let singularKey in SINGULAR_TO_PLURAL_MAP) {
			if (SINGULAR_TO_PLURAL_MAP[singularKey] === pluralForm) {
				return singularKey;
			}
		}

		if (pluralForm.slice(-3) === 'ies') {
			return pluralForm.slice(0, -3) + 'y';
		}

		if (pluralForm.slice(-1) === 'i') {
			return pluralForm.slice(0, -1) + 'us';
		}

		return pluralForm.slice(0, -1);
	}

	public static pluralize(singularForm: string): string {
		if (SINGULAR_TO_PLURAL_MAP[singularForm] !== undefined) {
			return SINGULAR_TO_PLURAL_MAP[singularForm];
		}

		if (singularForm.slice(-1) === 'y') {
			if (!this.isVowel(singularForm.slice(-2, -1))) {
				return singularForm.slice(0, -1) + 'ies';
			}
		}

		if (singularForm.slice(-2) === 'ch') {
			return singularForm + 'es';
		}

		if (singularForm.slice(-2) === 'us') {
			return singularForm.slice(0, -2) + 'i';
		}

		if (singularForm.slice(-2) === 'ss') {
			return singularForm + 'es';
		}

		return singularForm + 's';
	}

	/**
	 * Takes a number, and a singular suffix noun, and returns the correctly
	 * formatted result for the given number.
	 *
	 * Example:
	 *
	 *    singularizeOrPluralize(1, 'account')   =>   '1 account'
	 *    singularizeOrPluralize(6, 'account')   =>   '6 accounts'
	 */
	public static singularizeOrPluralize(
		amount: string | number,
		suffix: string
	): string {
		if (typeof amount === 'string') {
			amount = parseFloat(amount);
		}

		if (amount === 1) {
			return `${amount} ${suffix}`;
		}

		const pluralSuffix = this.pluralize(suffix);

		return `${amount} ${pluralSuffix}`;
	}

	private static isVowel(letter: string): boolean {
		return /[aeiou]/.test(letter.toLowerCase());
	}
}

export default Inflector;
