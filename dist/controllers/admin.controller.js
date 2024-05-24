"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.patientsList = exports.myProfile = exports.getPatient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var _validator = require("../validators/validator");

var _mongoose = require("mongoose");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ObjectId = _mongoose.Types.ObjectId;

var myProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              res.status(200).json({
                user: req === null || req === void 0 ? void 0 : req.user
              });
            } catch (error) {
              res.status(404).json({
                message: error.message
              });
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function myProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.myProfile = myProfile;

var updateProfile = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$user, user, updated;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _validator.updateProfileValidator)(req === null || req === void 0 ? void 0 : req.body, req === null || req === void 0 ? void 0 : req.file, req === null || req === void 0 ? void 0 : req.user);

          case 3:
            user = _context2.sent;

            if (user) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "An error occurred while updating your profile"
            }));

          case 6:
            _context2.next = 8;
            return _models.User.findOneAndUpdate({
              _id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, _objectSpread({}, user), {
              "new": true
            });

          case 8:
            updated = _context2.sent;
            updated.save();
            res.status(200).json({
              message: "Profile Updated",
              user: updated
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              message: _context2.t0.message
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function updateProfile(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateProfile = updateProfile;

var patientsList = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _patientsList;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.User.aggregate([{
              $match: {
                role: "patient"
              }
            }, {
              $lookup: {
                from: "patients",
                localField: "_id",
                foreignField: "userId",
                as: "patient"
              }
            }, {
              $unwind: "$patient"
            }, // { $addFields: { medical: "$patient.medical" } },
            {
              $project: {
                __v: 0,
                password: 0,
                updatedAt: 0 // patient: 0,

              }
            }]);

          case 3:
            _patientsList = _context3.sent;
            res.status(200).json({
              message: "Success",
              results: _patientsList.length,
              patients: _patientsList
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              message: _context3.t0.message
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function patientsList(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.patientsList = patientsList;

var getPatient = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$params, _id, user;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _id = new ObjectId(req === null || req === void 0 ? void 0 : (_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.id);
            _context4.next = 4;
            return _models.User.aggregate([{
              $match: {
                _id: ObjectId("61840a4c58b5dda2089998ad")
              }
            }, {
              $match: {
                _id: _id
              }
            }, {
              $lookup: {
                from: "patients",
                localField: "_id",
                foreignField: "userId",
                as: "patient"
              }
            }, {
              $unwind: "$patient"
            }, {
              $lookup: {
                from: "medicalconditions",
                localField: "_id",
                foreignField: "userId",
                as: "medicalCondition"
              }
            }, {
              $lookup: {
                from: "patients",
                localField: "_id",
                foreignField: "userId",
                as: "patientProfile"
              }
            }, {
              $unwind: "$medicalHistory"
            }, {
              $unwind: "$medicalCondition"
            }, {
              $unwind: "$patientProfile"
            }, {
              $project: {
                "patientProfile._id": 0,
                "patientProfile.userId": 0,
                "patientProfile.__v": 0,
                "patientProfile.createdAt": 0,
                "patientProfile.updatedAt": 0,
                "medicalCondition._id": 0,
                "medicalCondition.userId": 0,
                "medicalHistory._id": 0,
                "medicalHistory.userId": 0,
                "medicalHistory.__v": 0,
                "medicalHistory.createdAt": 0,
                "medicalHistory.updatedAt": 0,
                "medicalCondition.createdAt": 0,
                "medicalCondition.updatedAt": 0,
                "medicalCondition.__v": 0,
                _id: 0,
                password: 0,
                confirmPassword: 0,
                createdAt: 0,
                updatedAt: 0,
                __v: 0
              }
            }]);

          case 4:
            user = _context4.sent;
            console.log("user", user);
            user = user ? user[0] : null;

            if (user) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "User Not Found"
            }));

          case 9:
            res.status(200).json({
              message: "Success",
              user: user
            });
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.status(404).json({
              message: _context4.t0.message
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function getPatient(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getPatient = getPatient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9hZG1pbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIk9iamVjdElkIiwiVHlwZXMiLCJteVByb2ZpbGUiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwidXNlciIsImVycm9yIiwibWVzc2FnZSIsInVwZGF0ZVByb2ZpbGUiLCJib2R5IiwiZmlsZSIsIlVzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwidXBkYXRlZCIsInNhdmUiLCJwYXRpZW50c0xpc3QiLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJyb2xlIiwiJGxvb2t1cCIsImZyb20iLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiYXMiLCIkdW53aW5kIiwiJHByb2plY3QiLCJfX3YiLCJwYXNzd29yZCIsInVwZGF0ZWRBdCIsInJlc3VsdHMiLCJsZW5ndGgiLCJwYXRpZW50cyIsImdldFBhdGllbnQiLCJwYXJhbXMiLCJpZCIsImNvbmZpcm1QYXNzd29yZCIsImNyZWF0ZWRBdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGdCQUFNRCxRQUF2Qjs7QUFDTyxJQUFNRSxTQUFTO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCLGdCQUFJO0FBQ0ZBLGNBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGdCQUFBQSxJQUFJLEVBQUVKLEdBQUYsYUFBRUEsR0FBRix1QkFBRUEsR0FBRyxDQUFFSTtBQUFiLGVBQXJCO0FBQ0QsYUFGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYztBQUNkSixjQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxnQkFBQUEsT0FBTyxFQUFFRCxLQUFL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R0EsSUFBSSxDQUFDLENBQUQsQ0FBUCxHQUFhLElBQXhCOztBQTlEc0IsZ0JBK0RqQkEsSUEvRGlCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQWdFYkgsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsY0FBQUEsT0FBTyxFQUFFO0FBQVgsYUFBckIsQ0FoRWE7O0FBQUE7QUFrRXRCTCxZQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxjQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQkYsY0FBQUEsSUFBSSxFQUFKQTtBQUF0QixhQUFyQjtBQWxFc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvRXRCSCxZQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRyxjQUFBQSxPQUFPLEVBQUUsYUFBRUE7QUFBYixhQUFyQjs7QUFwRXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVYwQixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2ZpbGVWYWxpZGF0b3IgfSBmcm9tIFwiLi4vdmFsaWRhdG9ycy92YWxpZGF0b3JcIjtcbmltcG9ydCB7IFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE9iamVjdElkID0gVHlwZXMuT2JqZWN0SWQ7XG5leHBvcnQgY29uc3QgbXlQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyOiByZXE/LnVzZXIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZmlsZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1cGRhdGVQcm9maWxlVmFsaWRhdG9yKHJlcT8uYm9keSwgcmVxPy5maWxlLCByZXE/LnVzZXIpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwNClcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHlvdXIgcHJvZmlsZVwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBVc2VyLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IF9pZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHsgLi4udXNlciB9LFxuICAgICAgeyBuZXc6IHRydWUgfVxuICAgICk7XG4gICAgdXBkYXRlZC5zYXZlKCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlByb2ZpbGUgVXBkYXRlZFwiLCB1c2VyOiB1cGRhdGVkIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHBhdGllbnRzTGlzdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhdGllbnRzTGlzdCA9IGF3YWl0IFVzZXIuYWdncmVnYXRlKFtcbiAgICAgIHsgJG1hdGNoOiB7IHJvbGU6IFwicGF0aWVudFwiIH0gfSxcbiAgICAgIHtcbiAgICAgICAgJGxvb2t1cDoge1xuICAgICAgICAgIGZyb206IFwicGF0aWVudHNcIixcbiAgICAgICAgICBsb2NhbEZpZWxkOiBcIl9pZFwiLFxuICAgICAgICAgIGZvcmVpZ25GaWVsZDogXCJ1c2VySWRcIixcbiAgICAgICAgICBhczogXCJwYXRpZW50XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeyAkdW53aW5kOiBcIiRwYXRpZW50XCIgfSxcbiAgICAgIC8vIHsgJGFkZEZpZWxkczogeyBtZWRpY2FsOiBcIiRwYXRpZW50Lm1lZGljYWxcIiB9IH0sXG4gICAgICB7XG4gICAgICAgICRwcm9qZWN0OiB7XG4gICAgICAgICAgX192OiAwLFxuICAgICAgICAgIHBhc3N3b3JkOiAwLFxuICAgICAgICAgIHVwZGF0ZWRBdDogMCxcbiAgICAgICAgICAvLyBwYXRpZW50OiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBtZXNzYWdlOiBcIlN1Y2Nlc3NcIixcbiAgICAgIHJlc3VsdHM6IHBhdGllbnRzTGlzdC5sZW5ndGgsXG4gICAgICBwYXRpZW50czogcGF0aWVudHNMaXN0LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhdGllbnQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBfaWQgPSBuZXcgT2JqZWN0SWQocmVxPy5wYXJhbXM/LmlkKTtcbiAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuYWdncmVnYXRlKFtcbiAgICAgIHsgJG1hdGNoOiB7IF9pZDogT2JqZWN0SWQoXCI2MTg0MGE0YzU4YjVkZGEyMDg5OTk4YWRcIikgfSB9LFxuXG4gICAgICB7ICRtYXRjaDogeyBfaWQgfSB9LFxuICAgICAge1xuICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogXCJwYXRpZW50c1wiLFxuICAgICAgICAgIGxvY2FsRmllbGQ6IFwiX2lkXCIsXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiBcInVzZXJJZFwiLFxuICAgICAgICAgIGFzOiBcInBhdGllbnRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7ICR1bndpbmQ6IFwiJHBhdGllbnRcIiB9LFxuICAgICAge1xuICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogXCJtZWRpY2FsY29uZGl0aW9uc1wiLFxuICAgICAgICAgIGxvY2FsRmllbGQ6IFwiX2lkXCIsXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiBcInVzZXJJZFwiLFxuICAgICAgICAgIGFzOiBcIm1lZGljYWxDb25kaXRpb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRsb29rdXA6IHtcbiAgICAgICAgICBmcm9tOiBcInBhdGllbnRzXCIsXG4gICAgICAgICAgbG9jYWxGaWVsZDogXCJfaWRcIixcbiAgICAgICAgICBmb3JlaWduRmllbGQ6IFwidXNlcklkXCIsXG4gICAgICAgICAgYXM6IFwicGF0aWVudFByb2ZpbGVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7ICR1bndpbmQ6IFwiJG1lZGljYWxIaXN0b3J5XCIgfSxcbiAgICAgIHsgJHVud2luZDogXCIkbWVkaWNhbENvbmRpdGlvblwiIH0sXG4gICAgICB7ICR1bndpbmQ6IFwiJHBhdGllbnRQcm9maWxlXCIgfSxcbiAgICAgIHtcbiAgICAgICAgJHByb2plY3Q6IHtcbiAgICAgICAgICBcInBhdGllbnRQcm9maWxlLl9pZFwiOiAwLFxuICAgICAgICAgIFwicGF0aWVudFByb2ZpbGUudXNlcklkXCI6IDAsXG4gICAgICAgICAgXCJwYXRpZW50UHJvZmlsZS5fX3ZcIjogMCxcbiAgICAgICAgICBcInBhdGllbnRQcm9maWxlLmNyZWF0ZWRBdFwiOiAwLFxuICAgICAgICAgIFwicGF0aWVudFByb2ZpbGUudXBkYXRlZEF0XCI6IDAsXG4gICAgICAgICAgXCJtZWRpY2FsQ29uZGl0aW9uLl9pZFwiOiAwLFxuICAgICAgICAgIFwibWVkaWNhbENvbmRpdGlvbi51c2VySWRcIjogMCxcbiAgICAgICAgICBcIm1lZGljYWxIaXN0b3J5Ll9pZFwiOiAwLFxuICAgICAgICAgIFwibWVkaWNhbEhpc3RvcnkudXNlcklkXCI6IDAsXG4gICAgICAgICAgXCJtZWRpY2FsSGlzdG9yeS5fX3ZcIjogMCxcbiAgICAgICAgICBcIm1lZGljYWxIaXN0b3J5LmNyZWF0ZWRBdFwiOiAwLFxuICAgICAgICAgIFwibWVkaWNhbEhpc3RvcnkudXBkYXRlZEF0XCI6IDAsXG4gICAgICAgICAgXCJtZWRpY2FsQ29uZGl0aW9uLmNyZWF0ZWRBdFwiOiAwLFxuICAgICAgICAgIFwibWVkaWNhbENvbmRpdGlvbi51cGRhdGVkQXRcIjogMCxcbiAgICAgICAgICBcIm1lZGljYWxDb25kaXRpb24uX192XCI6IDAsXG4gICAgICAgICAgX2lkOiAwLFxuICAgICAgICAgIHBhc3N3b3JkOiAwLFxuICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogMCxcbiAgICAgICAgICBjcmVhdGVkQXQ6IDAsXG4gICAgICAgICAgdXBkYXRlZEF0OiAwLFxuICAgICAgICAgIF9fdjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyXCIsIHVzZXIpO1xuICAgIHVzZXIgPSB1c2VyID8gdXNlclswXSA6IG51bGw7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgTm90IEZvdW5kXCIgfSk7XG4gICAgfVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTdWNjZXNzXCIsIHVzZXIgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgfVxufTtcbiJdfQ==