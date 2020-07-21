import { assert } from "console";

describe("1984 Reference", () => {
    it("2 + 2 should not be 5", (done) => {
        assert(2 + 2 != 5);
        done()
    });
});