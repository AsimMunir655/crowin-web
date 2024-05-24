"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var adminSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

var Admin = _mongoose["default"].model("Admin", adminSchema);

var _default = Admin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvYWRtaW4ubW9kZWwuanMiXSwibmFtZXMiOlsiYWRtaW5TY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIkFkbWluIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxJQUFJQyxxQkFBU0MsTUFBYixDQUNsQjtBQUNFQyxFQUFBQSxNQUFNLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFSCxxQkFBU0ksS0FBVCxDQUFlQyxRQUF2QjtBQUFpQ0MsSUFBQUEsR0FBRyxFQUFFO0FBQXRDO0FBRFYsQ0FEa0IsRUFJbEI7QUFBRUMsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FKa0IsQ0FBcEI7O0FBT0EsSUFBTUMsS0FBSyxHQUFHUixxQkFBU1MsS0FBVCxDQUFlLE9BQWYsRUFBd0JWLFdBQXhCLENBQWQ7O2VBQ2VTLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGFkbWluU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHVzZXJJZDogeyB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIlVzZXJcIiB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuY29uc3QgQWRtaW4gPSBtb25nb29zZS5tb2RlbChcIkFkbWluXCIsIGFkbWluU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xuIl19