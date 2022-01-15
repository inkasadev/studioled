module.exports = {
	...require("./jest.common"),
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	/* coverageThreshold: {
		global: {
			statements: 34,
			branches: 24,
			functions: 34,
			lines: 29,
		},
	}, */
};
