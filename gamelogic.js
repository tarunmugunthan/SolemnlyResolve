var money = 0;
var appeal = 0;
var transparency = 0;
var backing = 0;

var playerNames = {
    A=``,
    B=``,
    C=``,
    D=``
};

var playerCoins = {
    A=0,
    B=0,
    C=0,
    D=0
};


// -------------------------
// To update the text inside span
// $("#id")[0].textContent="";

// ------------------------


function scenarioSelect(number = 0) {
    switch (number) {
        case 1:
            setStats([75, 25, 25, 50]);
            break;
        case 2:
            setStats([25, 75, 25, 50]);
            break;
        case 3:
            setStats([25, 50, 75, 25]);
            break;
        case 4:
            setStats([50, 25, 25, 75]);
            break;
        default:
            scenarioSelect(getRandomIntInclusive(1, 4));
            break;
    }
}

function updateStats(delta = [0, 0, 0, 0]) {
    money = money + delta[0];
    appeal = appeal + delta[1];
    transparency = transparency + delta[2];
    backing = backing + delta[3];
}

function setStats(init = [0, 0, 0, 0]) {
    money = init[0];
    appeal = init[1];
    transparency = init[2];
    backing = init[3];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const scenario1 = {
    index: 1,
    text: `Parliament has passed a new law, which states that village communities shall be responsible for protection of biodiversity in the forest. The law also gives village communities the right to convert forest villages into revenue villages, allowing construction, sale and commercial activity.`,
    choice1: `Conservationists argue against the law stating that such a move will only favour influential village communities and also lead to degradation of forest land over time.

    Support their demand of repealing the law.`,
    choice2: `A large section of civil society argues in favour of the law stating that it will finally decentralise governance over land and allow local communities to plan for their needs.

    Support their demand of notifying the localised governance provisions at the earliest.`,
    choice3: `Industry and farmer association argue in favour of the law stating that this will enable better food security and improvement of livelihood opportunities for local communities.

    Support their demand of implementing the law in its entirety.`,
    delta1: [-5, 5, 0, -5],
    delta2: [-5, 10,5, 0],
    delta3: [5, 10, -5, 5],
    preamble: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
};


const scenario1 = {
    index: 1,
    text: ``,
    choice1: ``,
    choice2:``,
    choice3: ``,
    delta1: [-5, 5, 0, -5],
    delta2: [-5, 10,5, 0],
    delta3: [5, 10, -5, 5],
    preamble: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
};