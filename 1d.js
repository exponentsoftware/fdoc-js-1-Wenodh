// 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function varietyOfWords(sentence) {
    let result = new Set(sentence.replace(/[^\w\s]/gi, '').split(' '));
    return result.size;
}

console.log(varietyOfWords(sentence));
