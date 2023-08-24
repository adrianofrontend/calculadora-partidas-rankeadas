let result = qtdWins(90, 101)

function qtdWins(wins, loss) {
    if (wins < 10) {
        console.log("Nível Ferro")
    } else if (wins >= 11 && wins <= 20) {
        console.log("Nível Bronze")
    } else if (wins >= 21 && wins <= 50) {
        console.log("Nível Prata")
    }
    else if (wins >= 51 && wins <= 80) {
        console.log("Nível Ouro")
    } else if (wins >= 81 && wins <= 90) {
        console.log("Nível Diamante")
    }
    else if (wins >= 91 && wins <= 100) {
        console.log("Nível Lendário")
    }
    else if (wins >= 101) {
        console.log("Nível Imortal")
    }

    return wins - loss;
}


