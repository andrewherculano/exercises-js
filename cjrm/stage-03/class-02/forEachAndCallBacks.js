//Callback
const myFunc = (callback) => {
    const value = 337

    callback(value)
}

myFunc((number) => {
    //console.log(number)
})

//Example two
const socialNetWorks = ['instragram', 'facebook', 'twitter', 'telegram']

socialNetWorks.forEach((socialNetWork, index, array) => {
    console.log(`${index + 1}: ${socialNetWork}`)
})