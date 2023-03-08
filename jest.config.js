module.exports = {
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json'
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	testMatch: [
		'**/*.test.(ts|tsx|js|jsx)'
	],
	transformIgnorePatterns: [
		'<rootDir>/node_modules/.+\.js$'
	],
	roots: [
		'<rootDir>'
	],
	modulePaths: [
		'<rootDir>'
	],
	moduleDirectories: [
		'node_modules'
	],
	moduleNameMapper: {
		'^\/(.*)$': '<rootDir>/$1',
	},
	collectCoverageFrom: [
		'!**/index.{js,jsx}'
	],
	coverageDirectory: '<rootDir>/.jest/coverage',
	resetMocks: true,
	testPathIgnorePatterns: [
	],
	verbose: true,
};
