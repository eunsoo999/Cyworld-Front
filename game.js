const startWord = () => {
    const word = document.getElementById("word").innerText
    const lastWord = word[word.length - 1]
    
    const myWord = document.getElementById("myword").value
    const firstWord = myWord[0]

    if (lastWord === firstWord) {
        document.getElementById("result").innerText = "정답입니다🎉"
        document.getElementById("word").innerText = myWord
    } else {
        document.getElementById("result").innerText = "틀렸습니다❌"
    }
}

const startLotto = () => {
    const lotto = []
    for (let i = 0; lotto.length < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 45 + 1);
        if (!lotto.includes(randomNumber)) {
            lotto.push(randomNumber)
        } 
    }

    lotto.sort(function(a, b){ return a-b; })
    document.getElementById("lotto__number").innerText = lotto.join(" ")
}