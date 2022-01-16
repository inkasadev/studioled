import {StudioLed} from ".";

describe("StudioLed library", () => {
	document.body.innerHTML = "<div class='led'></div>";
	const led = new StudioLed({
		element: document.querySelector(".led"),
	});

	describe("smoke tests", () => {
		it("should exist the render method", () => {
			expect(led.render).not.toBeNull();
		});

		it("should exist the setValue method", () => {
			expect(led.setValue).not.toBeNull();
		});

		it("should exist the getValue method", () => {
			expect(led.getValue).not.toBeNull();
		});

		it("should exist the setStatus method", () => {
			expect(led.setStatus).not.toBeNull();
		});

		it("should exist the addBreakpoint method", () => {
			expect(led.addBreakpoint).not.toBeNull();
		});
	});

	describe("Method calls", () => {
		it("should call render method", () => {
			expect(() => led.render()).toThrowError(
				new Error("Error rendering LED display."),
			);
		});

		it("should call setValue method", () => {
			expect(led.setValue(42)).toBe("42");
		});

		it("should call setValue method", () => {
			led.setValue(42);
			const value = led.getValue();
			expect(value).toBe("42");
		});

		it("should call setStatus('default') method", () => {
			const value = led.setStatus("default");
			expect(value).toBe("default");
		});

		it("should call setStatus('success') method", () => {
			const value = led.setStatus("success");
			expect(value).toBe("success");
		});

		it("should call setStatus('error') method", () => {
			const value = led.setStatus("error");
			expect(value).toBe("error");
		});

		it("should call addBreakpoint method", () => {
			Object.defineProperty(window, "matchMedia", {
				writable: true,
				value: jest.fn().mockImplementation((query) => ({
					matches: false,
					media: query,
					onchange: null,
					addListener: jest.fn(), // Deprecated
					removeListener: jest.fn(), // Deprecated
					addEventListener: jest.fn(),
					removeEventListener: jest.fn(),
					dispatchEvent: jest.fn(),
				})),
			});
			const value = led.addBreakpoint(600, 200, 200);
			expect(value).toBe(undefined);
		});
	});

	describe("Test Failures", () => {
		it("should throw error when element is not object", () => {
			expect(() => {
				return new StudioLed({
					element: 123,
				});
			}).toThrowError(
				new Error("Please pass a valid element to the constructor"),
			);
		});

		it("should throw error when element is not informed", () => {
			expect(() => {
				return new StudioLed({});
			}).toThrowError(
				new Error("Please pass a valid element to the constructor"),
			);
		});

		it("should call setValue method", () => {
			expect(led.setValue(42)).not.toBe("10");
		});

		it("should call setValue method", () => {
			led.setValue(42);
			const value = led.getValue();
			expect(value).not.toBe("10");
		});

		it("should throw error when call setStatus() with wrong value", () => {
			expect(() => led.setStatus("wrong")).toThrowError(
				new Error("Status invalid"),
			);
		});
	});

	it("should create led with extra segments", () => {
		const ledWithExtraSegments = new StudioLed({
			element: document.querySelector(".led"),
			baseDigits: 3,
		});
		ledWithExtraSegments.setValue(42);
		const value = ledWithExtraSegments.getValue();
		expect(value).toBe("042");
	});
});
