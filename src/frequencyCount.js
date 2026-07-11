const str = "apple";
const freq = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}

console.log(freq);