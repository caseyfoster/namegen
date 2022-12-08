const names = {
    dogNames: ['chloe', 'wes', 'linus', 'mazy', 'coco'],
    boatNames: ['mastercraft', 'malibu', 'moomba', 'supra', 'axis'],
    shoeNames: ['nike', 'puma', 'champion', 'converse', 'jordan', 'lebrons']
}

let message = ['Here is an existing message'];

let randomNum = (num) => {
    return Math.floor(Math.random() * num)
} 

for (let item in names) {
    let itemId = randomNum(names[item].length);

    switch(item) {
        case 'dogNames':
            message.push(`Your favorite dog name is ${names[item][itemId]}.`)
            break
        case 'boatNames' :
            message.push(`Your favorite boat brand is ${names[item][itemId]}.`)
            break
        case 'shoeNames': 
            message.push(`Your favorite shoe brand is ${names[item][itemId]}.`)
            break
        default:
            message.push('Not enough info')
    }
};

function formatMessages(messages) {
    const formatted = message.join('\n')
    console.log(formatted)
  }

  formatMessages(message)