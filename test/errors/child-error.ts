import ExtendoError from "../../src/extendo-error";

export default class ChildError extends ExtendoError {
    public get theAnswer(): number {
        return 42;
    }

    public get thisMuch(): boolean {
        return true;
    }

    public doSomething() {

    }

    public doSomethingElse() {

    }

    public aMagicNumber: number = 3;
    public theWord: string = "bird";
}