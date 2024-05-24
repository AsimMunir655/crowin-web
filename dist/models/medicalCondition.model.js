"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var schema = new _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  condition: {
    conditionType: {
      type: String
    },
    comments: {
      type: String
    }
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("MedicalCondition", schema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvbWVkaWNhbENvbmRpdGlvbi5tb2RlbC5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29uZGl0aW9uIiwiY29uZGl0aW9uVHlwZSIsIlN0cmluZyIsImNvbW1lbnRzIiwidGltZXN0YW1wcyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMscUJBQVNDLE1BQWIsQ0FDYjtBQUNFQyxFQUFBQSxNQUFNLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFSCxxQkFBU0MsTUFBVCxDQUFnQkcsS0FBaEIsQ0FBc0JDLFFBQTlCO0FBQXdDQyxJQUFBQSxHQUFHLEVBQUU7QUFBN0MsR0FEVjtBQUVFQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsYUFBYSxFQUFFO0FBQUVMLE1BQUFBLElBQUksRUFBRU07QUFBUixLQUROO0FBRVRDLElBQUFBLFFBQVEsRUFBRTtBQUFFUCxNQUFBQSxJQUFJLEVBQUVNO0FBQVI7QUFGRDtBQUZiLENBRGEsRUFRYjtBQUFFRSxFQUFBQSxVQUFVLEVBQUU7QUFBZCxDQVJhLENBQWY7O2VBV2VYLHFCQUFTWSxLQUFULENBQWUsa0JBQWYsRUFBbUNiLE1BQW5DLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB1c2VySWQ6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiIH0sXG4gICAgY29uZGl0aW9uOiB7XG4gICAgICBjb25kaXRpb25UeXBlOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgY29tbWVudHM6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFwiTWVkaWNhbENvbmRpdGlvblwiLCBzY2hlbWEpO1xuIl19