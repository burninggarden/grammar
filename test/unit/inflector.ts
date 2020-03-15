import Inflector from 'inflector';

describe('singularize()', () => {
	it('returns the expected form for a generic noun', () => {
		const result = Inflector.singularize('preferences');

		expect(result).toStrictEqual('preference');
	});

	it('returns the expected form for a noun ending in -ies', () => {
		const result = Inflector.singularize('parties');

		expect(result).toStrictEqual('party');
	});

	it('returns the expected form for a noun ending in -i', () => {
		const result = Inflector.singularize('octopi');

		expect(result).toStrictEqual('octopus');
	});

	it('returns the expected form for a noun that is explicitly mapped', () => {
		const result = Inflector.singularize('loot');

		expect(result).toStrictEqual('loot');
	});
});

describe('pluralize()', () => {
	it('returns the expected form for a generic noun', () => {
		const result = Inflector.pluralize('preference');

		expect(result).toStrictEqual('preferences');
	});

	it('returns the expected form for a noun ending in -y', () => {
		const result = Inflector.pluralize('party');

		expect(result).toStrictEqual('parties');
	});

	it('returns the expected form for a noun ending in -us', () => {
		const result = Inflector.pluralize('octopus');

		expect(result).toStrictEqual('octopi');
	});

	it('returns the expected form for a noun ending in -ch', () => {
		const result = Inflector.pluralize('church');

		expect(result).toStrictEqual('churches');
	});

	it('returns the expected form for a noun ending in -ss', () => {
		const result = Inflector.pluralize('mass');

		expect(result).toStrictEqual('masses');
	});

	it('returns the expected form for a noun that is explicitly mapped', () => {
		const result = Inflector.pluralize('loot');

		expect(result).toStrictEqual('loot');
	});
});

describe('singularizeOrPluralize()', () => {
	it('returns the expected form for a single instance', () => {
		const result = Inflector.singularizeOrPluralize(1, 'account');

		expect(result).toStrictEqual('1 account');
	});

	it('returns the expected form for multiple instances', () => {
		const result = Inflector.singularizeOrPluralize(2, 'account');

		expect(result).toStrictEqual('2 accounts');
	});
});
