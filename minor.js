const majorMap = require('./major').majorMap
const corrector = require('./utils/corrector').corrector
console.log(majorMap)

const minorMap = {}

const minorTranslator = scale => {
  const newScale = scale.slice(5)
  return newScale.concat(scale.slice(0, 5))
}

for (const majorScale of Object.keys(majorMap)) {
  console.log(majorScale)
  const minorScale = minorTranslator(majorMap[majorScale])
  minorMap[minorScale[0].toLowerCase()] = minorScale
}
const correctedMinorMap = corrector(minorMap)
// console.log('minorMap', correctedMinorMap)
