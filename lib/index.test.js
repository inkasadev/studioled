import { StudioLed } from ".";
describe("StudioLed library", function () {
  document.body.innerHTML = "<div class='led'></div>";
  var led = new StudioLed({
    element: document.querySelector(".led")
  });
  describe("smoke tests", function () {
    it("should exist the render method", function () {
      expect(led.render).not.toBeNull();
    });
    it("should exist the setValue method", function () {
      expect(led.setValue).not.toBeNull();
    });
    it("should exist the getValue method", function () {
      expect(led.getValue).not.toBeNull();
    });
    it("should exist the setStatus method", function () {
      expect(led.setStatus).not.toBeNull();
    });
    it("should exist the addBreakpoint method", function () {
      expect(led.addBreakpoint).not.toBeNull();
    });
  });
  describe("Method calls", function () {
    it("should call render method", function () {
      expect(function () {
        return led.render();
      }).toThrowError(new Error("Error rendering LED display."));
    });
    it("should call setValue method", function () {
      expect(led.setValue(42)).toBe("42");
    });
    it("should call setValue method", function () {
      led.setValue(42);
      var value = led.getValue();
      expect(value).toBe("42");
    });
    it("should call setStatus('default') method", function () {
      var value = led.setStatus("default");
      expect(value).toBe("default");
    });
    it("should call setStatus('success') method", function () {
      var value = led.setStatus("success");
      expect(value).toBe("success");
    });
    it("should call setStatus('error') method", function () {
      var value = led.setStatus("error");
      expect(value).toBe("error");
    });
    it("should call addBreakpoint method", function () {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(function (query) {
          return {
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            // Deprecated
            removeListener: jest.fn(),
            // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn()
          };
        })
      });
      var value = led.addBreakpoint(600, 200, 200);
      expect(value).toBe(undefined);
    });
  });
  describe("Test Failures", function () {
    it("should throw error when element is not object", function () {
      expect(function () {
        return new StudioLed({
          element: 123
        });
      }).toThrowError(new Error("Please pass a valid element to the constructor"));
    });
    it("should throw error when element is not informed", function () {
      expect(function () {
        return new StudioLed({});
      }).toThrowError(new Error("Please pass a valid element to the constructor"));
    });
    it("should call setValue method", function () {
      expect(led.setValue(42)).not.toBe("10");
    });
    it("should call setValue method", function () {
      led.setValue(42);
      var value = led.getValue();
      expect(value).not.toBe("10");
    });
    it("should throw error when call setStatus() with wrong value", function () {
      expect(function () {
        return led.setStatus("wrong");
      }).toThrowError(new Error("Status invalid"));
    });
  });
  it("should create led with extra segments", function () {
    var ledWithExtraSegments = new StudioLed({
      element: document.querySelector(".led"),
      baseDigits: 3
    });
    ledWithExtraSegments.setValue(42);
    var value = ledWithExtraSegments.getValue();
    expect(value).toBe("042");
  });
});