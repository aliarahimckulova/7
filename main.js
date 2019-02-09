function throughOnce (fn) {
    let word = false;
    return (text) => {
        word = !word;
        return word ? fn(text) : console.log('');
    };
}

let logThroughOnce = throughOnce(function(text) {
    console.log(text);
});
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //
logThroughOnce("Hello World!"); // "Hello World!"
logThroughOnce("Hello World!"); //