import { Expect, Test, TestFixture } from "alsatian";
import { ChildError, AnotherChildError } from "../errors";

@TestFixture("extending an error")
export default class ChildErrorTests {

    @Test("child error is instance of Error")
    public childErrorIsInstanceOfError() {
        Expect(new ChildError() instanceof Error).toBe(true);
    }

    @Test("child error is instance of it's type")
    public childErrorIsInstanceOfItsType() {
        Expect(new ChildError() instanceof ChildError).toBe(true);
    }

    @Test("child error name is constructor name")
    public childErrorHasItsConstructorsName() {
        Expect(new ChildError().name).toBe("ChildError");
    }

    @Test("child error has functions")
    public childErrorHasFunctions() {
        Expect(new ChildError().doSomething).not.toThrow();
        Expect(new ChildError().doSomethingElse).not.toThrow();
    }

    @Test("child error has properties")
    public childErrorHasProperties() {
        Expect(new ChildError().theAnswer).toBe(42);
        Expect(new ChildError().thisMuch).toBe(true);
    }

    @Test("child error has fields")
    public childErrorHasFields() {
        Expect(new ChildError().aMagicNumber).toBe(3);
        Expect(new ChildError().theWord).toBe("bird");
    }

    @Test("another child error is instance of Error")
    public anotherChildErrorIsInstanceOfError() {
        Expect(new AnotherChildError() instanceof Error).toBe(true);
    }

    @Test("another child error is instance of it's type")
    public anotherChildErrorIsInstanceOfItsType() {
        Expect(new AnotherChildError() instanceof AnotherChildError).toBe(true);
    }

    @Test("another child error name is constructor name")
    public anotherChildErrorHasItsConstructorsName() {
        Expect(new AnotherChildError().name).toBe("AnotherChildError");
    }

    @Test("another child error has functions")
    public anotherChildErrorHasFunctions() {
        Expect(new AnotherChildError().doSomething).not.toThrow();
        Expect(new AnotherChildError().doSomethingElse).not.toThrow();
    }

    @Test("another child error has properties")
    public anotherChildErrorHasProperties() {
        Expect(new AnotherChildError().theAnswer).toBe(42);
        Expect(new AnotherChildError().thisMuch).toBe(true);
    }

    @Test("another child error has fields")
    public anotherChildErrorHasFields() {
        Expect(new AnotherChildError().aMagicNumber).toBe(3);
        Expect(new AnotherChildError().theWord).toBe("bird");
    }
}