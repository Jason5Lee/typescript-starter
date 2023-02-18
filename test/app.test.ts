import { assert } from "console";

describe("2 + 2", () => {
    it("should not be 5", (done) => {
        assert(2 + 2 != 5);
        done();
    });
});