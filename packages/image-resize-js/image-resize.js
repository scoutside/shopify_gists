String.prototype.imgURL = function(size) {
  return this
    .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
    .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function(match) {
      return '_'+size+match;
    })
  ;
};

function imgURL(src, size) {
  return src
    .replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
    .replace(/\.jpg|\.png|\.gif|\.jpeg/g, function(match) {
      return '_'+size+match;
    })
  ;
}