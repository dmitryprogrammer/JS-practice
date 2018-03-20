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

export function main() {
    let firstGeneratorTrying = firstGenerator();
    for (let value of firstGeneratorTrying) {
        console.log(value);
    }

    let str = "";

    for (let code of generateAlphaNum()) {
        str += String.fromCharCode(code);
    }

    console.log(str);
}
