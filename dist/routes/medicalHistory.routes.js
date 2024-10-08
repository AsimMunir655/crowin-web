"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../middlewares/Auth/auth");

var _medicalHistory = require("../controllers/medicalHistory.controller");

var router = _express["default"].Router();

router.route("/medical-history").get(_auth.userAuth, _medicalHistory.getMedicalHistory).put(_auth.userAuth, _medicalHistory.createMedicalHistory);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9yb3V0ZXMvbWVkaWNhbEhpc3Rvcnkucm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsImdldCIsInVzZXJBdXRoIiwiZ2V0TWVkaWNhbEhpc3RvcnkiLCJwdXQiLCJjcmVhdGVNZWRpY2FsSGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBTUEsSUFBTUEsTUFBTSxHQUFHQyxvQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQ0hHLEtBREgsQ0FDUyxrQkFEVCxFQUVHQyxHQUZILENBRU9DLGNBRlAsRUFFaUJDLGlDQUZqQixFQUdHQyxHQUhILENBR09GLGNBSFAsRUFHaUJHLG9DQUhqQjtlQUtlUixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IHVzZXJBdXRoIH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL0F1dGgvYXV0aFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlTWVkaWNhbEhpc3RvcnksXG4gIGdldE1lZGljYWxIaXN0b3J5LFxuICB1cGRhdGVNZWRpY2FsSGlzdG9yeSxcbn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL21lZGljYWxIaXN0b3J5LmNvbnRyb2xsZXJcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyXG4gIC5yb3V0ZShcIi9tZWRpY2FsLWhpc3RvcnlcIilcbiAgLmdldCh1c2VyQXV0aCwgZ2V0TWVkaWNhbEhpc3RvcnkpXG4gIC5wdXQodXNlckF1dGgsIGNyZWF0ZU1lZGljYWxIaXN0b3J5KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19