export function* firstGenerator() {
    let increment = 0;
    ++increment;
    yield increment;
    ++increment;
    yield increment;
    ++increment;
    return increment;
}

export function* generateSequence(start, end) {
    if (start && end) {
        for (let i = start; i <= end; i++) yield i;
    }
}

export function* generateAlphaNum() {
    yield* generateSequence(48, 57);
    yield* generateSequence(65, 90);
    yield* generateSequence(97, 122);
}

//  ping pong generator
export function* pingPongGenerator() {
    let yield1 = yield 1;
    console.log("variable1", yield1);
    let yield2 = yield 2;
    console.log("variable2", yield2);
    let yield3 = yield 3;
    console.log("variable2", yield3);
}

export function main() {
    let firstGeneratorTrying = firstGenerator();
    for (let value of firstGeneratorTrying) {
        console.log(value);
    }

    let str = "";

    for (let code of generateAlphaNum()) {
        str += String.fromCharCode(code);
    }

    let pingPongGeneratorExample = pingPongGenerator();
    console.log(pingPongGeneratorExample.next().value);
    console.log(pingPongGeneratorExample.next(5).value);
    console.log(pingPongGeneratorExample.next(10).value);
    console.log(pingPongGeneratorExample.next(15).done);
}
