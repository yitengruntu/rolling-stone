// const upOrder = ['C', 'C♯', 'D', 'D♯', 'E', 'E♯', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B']
// const downOrder = ['C♭', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B']
// const majorUp = ['C', 'G', 'D', 'A', 'E', 'B', '#F']
// const majorDown = ['C', 'F', 'B♭', 'E♭', 'A♭', 'D♭', 'G♭']
const corrector = require('./utils/corrector').corrector

const majorMap = {}

const cMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

const majorUpArray = []
const majorDownArray = []
majorUpArray.push(cMajor)
majorDownArray.push(cMajor)

// 升序计算
const majorUpCal = currentScale => {
  const index = 4
  const newScale = currentScale.concat()
  // 调整顺序
  for (let i = 0; i < index; i++) {
    const tempNote = newScale.shift()
    newScale.push(tempNote)
  }
  // 升第七音
  newScale[6] = `${newScale[6]}♯`
  return newScale
}

// 降序计算
const majorDownCal = currentScale => {
  const index = 3
  const newScale = currentScale.concat()
  // 调整顺序
  for (let i = 0; i < index; i++) {
    const tempNote = newScale.shift()
    newScale.push(tempNote)
  }
  // 降第四音
  newScale[3] = `${newScale[3]}♭`
  return newScale
}

while(majorUpArray.length < 7) {
  majorUpArray.push(majorUpCal(majorUpArray[majorUpArray.length - 1]))
}
while(majorDownArray.length < 6) {
  majorDownArray.push(majorDownCal(majorDownArray[majorDownArray.length - 1]))
}
// up [ [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
//   [ 'G', 'A', 'B', 'C', 'D', 'E', '#F' ],
//   [ 'D', 'E', '#F', 'G', 'A', 'B', '#C' ],
//   [ 'A', 'B', '#C', 'D', 'E', '#F', '#G' ],
//   [ 'E', '#F', '#G', 'A', 'B', '#C', '#D' ],
//   [ 'B', '#C', '#D', 'E', '#F', '#G', '#A' ],
//   [ '#F', '#G', '#A', 'B', '#C', '#D', 'F' ] ]
// down [ [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
//   [ 'F', 'G', 'A', 'bB', 'C', 'D', 'E' ],
//   [ 'bB', 'C', 'D', 'bE', 'F', 'G', 'A' ],
//   [ 'bE', 'F', 'G', 'bA', 'bB', 'C', 'D' ],
//   [ 'bA', 'bB', 'C', 'bD', 'bE', 'F', 'G' ],
//   [ 'bD', 'bE', 'F', 'bF', 'bA', 'bB', 'C' ],
//   [ 'bF', 'bA', 'bB', undefined, 'bD', 'bE', 'F' ] ]

// console.log('up', majorUpArray)
// console.log('down', majorDownArray)
// console.log('correctionUp', correctedMajorUpArray)
// console.log('correctionDown', correctedMajorDownArray)

const setArrayToMap = (array, map) => {
  for (const major of array) {
    const scale = major[0]
    map[scale] = major
  }
}

setArrayToMap(majorUpArray, majorMap)
setArrayToMap(majorDownArray, majorMap)
// correction
const correctedMajorMap = corrector(majorMap)

// console.log('majorMap', correctedMajorMap)
module.exports = {
  majorMap,
  correctedMajorMap
}
