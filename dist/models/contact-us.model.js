"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var contactSchema = new _mongoose["default"].Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  subject: {
    type: String
  },
  messafe: {
    type: String
  }
}, {
  timestamps: true
});

var ContactUs = _mongoose["default"].model("ContactUs", contactSchema);

var _default = ContactUs;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvY29udGFjdC11cy5tb2RlbC5qcyJdLCJuYW1lcyI6WyJjb250YWN0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZmUiLCJ0aW1lc3RhbXBzIiwiQ29udGFjdFVzIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxJQUFJQyxxQkFBU0MsTUFBYixDQUNwQjtBQUNFQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBRFI7QUFFRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUZUO0FBR0VFLEVBQUFBLE9BQU8sRUFBRTtBQUFFSCxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FIWDtBQUlFRyxFQUFBQSxPQUFPLEVBQUU7QUFBRUosSUFBQUEsSUFBSSxFQUFFQztBQUFSO0FBSlgsQ0FEb0IsRUFPcEI7QUFBRUksRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FQb0IsQ0FBdEI7O0FBVUEsSUFBTUMsU0FBUyxHQUFHVCxxQkFBU1UsS0FBVCxDQUFlLFdBQWYsRUFBNEJYLGFBQTVCLENBQWxCOztlQUNlVSxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb250YWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc3ViamVjdDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBtZXNzYWZlOiB7IHR5cGU6IFN0cmluZyB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuY29uc3QgQ29udGFjdFVzID0gbW9uZ29vc2UubW9kZWwoXCJDb250YWN0VXNcIiwgY29udGFjdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7XG4iXX0=