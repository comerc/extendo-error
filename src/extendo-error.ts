export default class ExtendoError implements Error {

    private _message: string = null;
    public get message(): string {
        return this._message;
    }
    public set message(message: string) {
        this._message = message;
    }

    public get name(): string {
        return (<any>this).constructor.name;
    }

    public constructor(message?: string) {
        this._message = message;
        (<any>Object).setPrototypeOf(ExtendoError.prototype, Error.prototype);
    }
}