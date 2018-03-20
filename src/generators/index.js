export function* firstGenerator() {
    let increment = 0;
    ++increment;
    yield increment;
    ++increment;
    yield increment;
    ++increment;
    return increment;
}

export function main() {
    let firstGeneratorTrying = firstGenerator();
    let secondForOfGeneratorTrying = firstGenerator();

    for (let value of secondForOfGeneratorTrying) {
        console.log(value);
    }
}