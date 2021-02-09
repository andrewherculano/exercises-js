//Break and continue
const scores = [30, 45, 12, 0, 98, 100, 43, 22]

for (let i = 0; i < scores.length; i++) {
    const score = scores[i]

    if (score === 0) {
        continue
    }

    console.log(`Sua pontuação foi: ${score}`)

    if (score === 100) {
        console.log(`Parabéns você atingiu a pontuação maxima de ${score} pontos!!!`)

        break
    }
}