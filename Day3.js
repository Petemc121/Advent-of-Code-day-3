const fs = require('fs');

var treeMapFile = fs.readFileSync('Day 3.txt', 'utf8')

function extraTreeMap(treeMap) { 

    var map = treeMap.split('\r\n')

    for (let i = 0; i < map.length; i++) {
      map[i] = map[i].repeat(1000)
      }

      return map
      
   }

const finalMap = extraTreeMap(treeMapFile)


    

    function ski(Map) {
       var treeCount = 0
      var position = 0
       for (var i = 0; i < Map.length; i++) {
         
          if (Map[i].charAt(position) === "#") {
             Map[i] = Map[i].substring(0, position) + 'O' + Map[i].substring(position + 1)

             treeCount++
          }
          position += 3

       }
       console.log(treeCount)
       return Map
       
    }

    Mapidentified = ski(finalMap);

    

    console.log(Mapidentified[0].length)
