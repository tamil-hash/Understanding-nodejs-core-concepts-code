/**
 * About Buffer Object
 * Extended class from Uint8Array which is extended from the class TypedArray
 */

const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(4); //4 bytes allocated means 8 bits each byte 4*8 = 32bits

memoryContainer[0] = 0x12345 // if the hex value given higher than the allocated bytes it will take the last 2 number in this case it will take 0x12345 as 0x45
memoryContainer[1] = 0xff13 // example 2 for higher space than allocated memory  here 0xff13 will be 0x13
memoryContainer[2] = 0x22
memoryContainer[3] = 0x12

console.log(memoryContainer)
console.log(`0 = ${memoryContainer[0]}`)
console.log(`1 = ${memoryContainer[1]}`)
console.log(`2 = ${memoryContainer[2]}`)
console.log(`3 = ${memoryContainer[3]}`)