const dogNames = ['chloe', 'wes', 'linus', 'mazy', 'coco'];
const boatNames = ['mastercraft', 'malibu', 'moomba', 'supra', 'axis'];
const shoeNames = ['nike', 'puma', 'champion', 'converse', 'jordan', 'lebrons'];

const random = (arr) => {
    let message = [''];
    return Math.floor(Math.random() * arr.length);
    message.push(arr[random])
    console.log(message);
} 


console.log(boatNames[random(boatNames)] + " " + dogNames[random(dogNames)] + " " + shoeNames[random(shoeNames)]);
