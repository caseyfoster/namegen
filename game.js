const gear = {
    mice: ['gpro', 'deathadder', 'aerox', 'finalmouse'],
    keyboard: ['gmmk pro', 'apex pro', 'k97'],
    headset: ['arctis 7', 'cloud flight', 'icemat']
}

let gearList = []

//generate random number
const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}

//loop through perf in gear object
for (let perf in gear) {
    let prefName = randomNum(gear[perf].length);

    // iterate through each item in the object
    switch(perf) {
        case 'mice':
            gearList.push(`Mouse of choice: ${gear[perf][prefName]}`)
            break
        case 'keyboard':
            gearList.push(`Keyboard of choice: ${gear[perf][prefName]}`)
            break
        case 'headset':
            gearList.push(`Headset of choice: ${gear[perf][prefName]}`)
            break
        default:
            gearList.push(`Not enough info`)
        }
}

function message(print) {
    console.log(gearList)
}

message();



