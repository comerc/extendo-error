import { ChildError } from "./";

export default class GrandChildError extends ChildError {
    public functionA() {

    }

    public functionB () {

    }

    public get propertyA(): string {
        return "a";
    }

    public get propertyB(): string {
        return "b";
    }

    public fieldA: string = "A";
    public fieldB: string = "B";
}