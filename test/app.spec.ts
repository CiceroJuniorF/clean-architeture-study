import {App}  from "../src/app"

describe("App", () => {
    it("bootstrap", async () => {  
        expect(App.bootstrap()).toBe("stuff");
    });
});