export function main() {
    const firstSymbol = Symbol("firstSymbol");
    const myObj = {[firstSymbol]: "test symbol", Rusich: "Rusich"};

    Symbol.for("test");


    console.log(myObj[firstSymbol], myObj, Symbol.keyFor(Symbol.for("test")));
}