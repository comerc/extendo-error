import { Expect, Test } from "alsatian";
import { ChildError, GrandChildError } from "../errors";

export default class ChildErrorTests {

    @Test("is instance of Error")
    public grandChildErrorIsInstanceOfError() {
        Expect(new GrandChildError() instanceof Error).toBe(true);
    }

    @Test("is instance of it's type")
    public grandChildErrorIsInstanceOfItsType() {
        Expect(new GrandChildError() instanceof GrandChildError).toBe(true);
    }

    @Test("is instance of it's parent type")
    public grandChildErrorIsInstanceOfItsParentType() {
        Expect(new GrandChildError() instanceof ChildError).toBe(true);
    }

    @Test("has grand child error name is constructor name")
    public hasChildErrorHasItsConstructorsName() {
        Expect(new GrandChildError().name).toBe("GrandChildError");
    }

    @Test("has it's functions")
    public hasChildErrorHasFunctions() {
        Expect(new GrandChildError().functionA).not.toThrow();
        Expect(new GrandChildError().functionB).not.toThrow();
    }

    @Test("has it's properties")
    public hasChildErrorHasProperties() {
        Expect(new GrandChildError().propertyA).toBe("a");
        Expect(new GrandChildError().propertyB).toBe("b");
    }

    @Test("has it's fields")
    public hasChildErrorHasFields() {
        Expect(new GrandChildError().fieldA).toBe("A");
        Expect(new GrandChildError().fieldB).toBe("B");
    }

    @Test("has parent's functions")
    public hasChildErrorHasParentFunctions() {
        Expect(new GrandChildError().doSomething).not.toThrow();
        Expect(new GrandChildError().doSomethingElse).not.toThrow();
    }

    @Test("has parent's properties")
    public hasChildErrorHasParentProperties() {
        Expect(new GrandChildError().theAnswer).toBe(42);
        Expect(new GrandChildError().thisMuch).toBe(true);
    }

    @Test("has parent's fields")
    public hasChildErrorHasParentFields() {
        Expect(new GrandChildError().aMagicNumber).toBe(3);
        Expect(new GrandChildError().theWord).toBe("bird");
    }
}