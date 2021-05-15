// CommonJS, every file is module (by default)
 // modules - Encapsulated code (only share minimum)

 const names= require('./4names')
const sayHi= require('./5utils')
const data=require('./6alternativemod')
require('./7mind-grenade')
sayHi(names.siddiq)
sayHi(names.swanand)
