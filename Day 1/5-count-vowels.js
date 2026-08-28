const countVowels = (text) => {
    let vowelCount = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u') {
            vowelCount += 1;
        };
    };
    return vowelCount;
}
console.log(countVowels("Gaurav"));