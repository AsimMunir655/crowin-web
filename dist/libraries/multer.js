"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.file = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _fs = _interopRequireDefault(require("fs"));

var dir = "./dist/data";

if (!_fs["default"].existsSync(dir)) {
  _fs["default"].mkdirSync(dir);
}

var file = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, "./dist/data");
    },
    filename: function filename(req, file, cb) {
      cb(null, "".concat(new Date().getTime(), "_").concat(file.originalname));
    }
  })
});
exports.file = file;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9saWJyYXJpZXMvbXVsdGVyLmpzIl0sIm5hbWVzIjpbImRpciIsImZzIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsImZpbGUiLCJzdG9yYWdlIiwibXVsdGVyIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImNiIiwiZmlsZW5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm9yaWdpbmFsbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBSUEsR0FBRyxHQUFHLGFBQVY7O0FBRUEsSUFBSSxDQUFDQyxlQUFHQyxVQUFILENBQWNGLEdBQWQsQ0FBTCxFQUF5QjtBQUN2QkMsaUJBQUdFLFNBQUgsQ0FBYUgsR0FBYjtBQUNEOztBQUVNLElBQU1JLElBQUksR0FBRyx3QkFBTztBQUN6QkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBT0MsV0FBUCxDQUFtQjtBQUMxQkMsSUFBQUEsV0FEMEIsdUJBQ2RDLEdBRGMsRUFDVEwsSUFEUyxFQUNITSxFQURHLEVBQ0M7QUFDekJBLE1BQUFBLEVBQUUsQ0FBQyxJQUFELEVBQU8sYUFBUCxDQUFGO0FBQ0QsS0FIeUI7QUFJMUJDLElBQUFBLFFBSjBCLG9CQUlqQkYsR0FKaUIsRUFJWkwsSUFKWSxFQUlOTSxFQUpNLEVBSUY7QUFDdEJBLE1BQUFBLEVBQUUsQ0FBQyxJQUFELFlBQVUsSUFBSUUsSUFBSixHQUFXQyxPQUFYLEVBQVYsY0FBa0NULElBQUksQ0FBQ1UsWUFBdkMsRUFBRjtBQUNEO0FBTnlCLEdBQW5CO0FBRGdCLENBQVAsQ0FBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0ZXIgZnJvbSBcIm11bHRlclwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG52YXIgZGlyID0gXCIuL2Rpc3QvZGF0YVwiO1xuXG5pZiAoIWZzLmV4aXN0c1N5bmMoZGlyKSkge1xuICBmcy5ta2RpclN5bmMoZGlyKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpbGUgPSBtdWx0ZXIoe1xuICBzdG9yYWdlOiBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICAgIGRlc3RpbmF0aW9uKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAgIGNiKG51bGwsIFwiLi9kaXN0L2RhdGFcIik7XG4gICAgfSxcbiAgICBmaWxlbmFtZShyZXEsIGZpbGUsIGNiKSB7XG4gICAgICBjYihudWxsLCBgJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1fJHtmaWxlLm9yaWdpbmFsbmFtZX1gKTtcbiAgICB9LFxuICB9KSxcbn0pO1xuIl19