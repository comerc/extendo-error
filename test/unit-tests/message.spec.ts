import { Expect, TestCase, Test, TestFixture } from "alsatian";
import ExtendoError from "../../src/extendo-error";

@TestFixture("ExtendoError.message tests")
export class MessageTests {

    @TestCase(null)
    @TestCase(undefined)
    @TestCase("")
    @TestCase("something went wrong")
    @TestCase("another awful thing happened")
    @Test("message set in constructor")
    public messageSetInConstructor(expectedMessage: string) {
        const extendoError = new ExtendoError(expectedMessage);

        Expect(extendoError.message).toBe(expectedMessage);
    }

    @TestCase(null)
    @TestCase(undefined)
    @TestCase("")
    @TestCase("something went wrong")
    @TestCase("another awful thing happened")
    @Test("message set in constructor")
    public messageCanBeSetAfterConstructor(expectedMessage: string) {
        const extendoError = new ExtendoError("original message.");

        extendoError.message = expectedMessage;

        Expect(extendoError.message).toBe(expectedMessage);
    }
}