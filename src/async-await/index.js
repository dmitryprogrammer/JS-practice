export function main() {
    function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, 500);
        });
    }

    async function add1(x) {
        const a = resolveAfter2Seconds(20);
        const b = resolveAfter2Seconds(30);

        return x + await a + await b;
    }

    add1(10)
        .then(v => console.log(v));

    function add1ByPromises(x) {
        const a = resolveAfter2Seconds(20);
        const b = resolveAfter2Seconds(30);

        return Promise.all([a, b, x]);
    }

    add1ByPromises(10)
        .then(v => console.log("promises", v[0] + v[1] + v[2]));
}