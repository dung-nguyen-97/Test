function getNumberOfLayers(rug) {
    var result = rug.filter(function(item, index) {
       return rug.indexOf(item) == index;
     });
     return result.length
   }

module.exports = getNumberOfLayers;
