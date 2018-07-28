const corrector = map => {
  const correctedMap = Object.assign({}, map)
  for (const scale of Object.keys(correctedMap)) {
    console.log(scale)
    correctedMap[scale] = correctedMap[scale].concat([correctedMap[scale][0]])
  }
  console.log('--------->', correctedMap)
  return correctedMap
}

module.exports = {
  corrector
}
