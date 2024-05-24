"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var medicalSchema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  medicalHistory: {
    type: String
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("MedicalHistory", medicalSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvbWVkaWNhbEhpc3RvcnkubW9kZWwuanMiXSwibmFtZXMiOlsibWVkaWNhbFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJtZWRpY2FsSGlzdG9yeSIsIlN0cmluZyIsInRpbWVzdGFtcHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLElBQUlDLHFCQUFTQyxNQUFiLENBQ3BCO0FBQ0VDLEVBQUFBLE1BQU0sRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVILHFCQUFTQyxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFBOUI7QUFBd0NDLElBQUFBLEdBQUcsRUFBRTtBQUE3QyxHQURWO0FBRUVDLEVBQUFBLGNBQWMsRUFBRTtBQUFFSixJQUFBQSxJQUFJLEVBQUVLO0FBQVI7QUFGbEIsQ0FEb0IsRUFLcEI7QUFBRUMsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FMb0IsQ0FBdEI7O2VBUWVULHFCQUFTVSxLQUFULENBQWUsZ0JBQWYsRUFBaUNYLGFBQWpDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IG1lZGljYWxTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdXNlcklkOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIlVzZXJcIiB9LFxuICAgIG1lZGljYWxIaXN0b3J5OiB7IHR5cGU6IFN0cmluZyB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJNZWRpY2FsSGlzdG9yeVwiLCBtZWRpY2FsU2NoZW1hKTtcbiJdfQ==