module.exports = {
	...require("./jest.common"),
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	// testPathIgnorePatterns: ["dist/", "lib/"],
	// modulePathIgnorePatterns: ["dist/", "lib/"],
	// watchPathIgnorePatterns: ["dist/", "lib/"],
	/* coverageThreshold: {
		global: {
			statements: 34,
			branches: 24,
			functions: 34,
			lines: 29,
		},
	}, */
};
