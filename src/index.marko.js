function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<!doctype html> <html lang="en"><head><meta charset="UTF-8"><title>Hello marko</title></head><body></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);