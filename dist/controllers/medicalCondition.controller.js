"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMedicalCondition = exports.getMedicalCondition = exports.createMedicalCondition = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var _this = void 0;

var createMedicalCondition = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var body, user, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = req.body, user = req.user;
            _context.next = 4;
            return _models.MedicalCondition.findOneAndUpdate({
              userId: user._id
            }, {
              userId: user === null || user === void 0 ? void 0 : user._id,
              condition: {
                conditionType: body === null || body === void 0 ? void 0 : body.conditionType,
                comments: body === null || body === void 0 ? void 0 : body.comments
              }
            }, {
              "new": true,
              upsert: true,
              setDefaultsOnInsert: true
            });

          case 4:
            data = _context.sent;
            res.status(200).json({
              message: "Added Medical Condition",
              data: data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function createMedicalCondition(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMedicalCondition = createMedicalCondition;

var getMedicalCondition = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$user, medicalCondition;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.MedicalCondition.findOne({
              userId: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            });

          case 3:
            medicalCondition = _context2.sent;
            res.status(200).json({
              message: "Success",
              medicalCondition: medicalCondition === null || medicalCondition === void 0 ? void 0 : medicalCondition.condition
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              message: _context2.t0.message
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getMedicalCondition(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMedicalCondition = getMedicalCondition;

var updateMedicalCondition = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user, body, medicalCondition;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            user = req.user, body = req.body;
            _context3.next = 4;
            return _models.MedicalCondition.findOneAndUpdate({
              userId: user === null || user === void 0 ? void 0 : user._id
            }, {
              $set: {
                condition: {
                  conditionType: (body === null || body === void 0 ? void 0 : body.conditionType) || (_this === null || _this === void 0 ? void 0 : _this.conditionType),
                  comments: (body === null || body === void 0 ? void 0 : body.comments) || (_this === null || _this === void 0 ? void 0 : _this.comments)
                }
              }
            }, {
              "new": true
            });

          case 4:
            medicalCondition = _context3.sent;
            res.status(200).json(medicalCondition === null || medicalCondition === void 0 ? void 0 : medicalCondition.condition);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(400).json({
              message: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function updateMedicalCondition(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateMedicalCondition = updateMedicalCondition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9tZWRpY2FsQ29uZGl0aW9uLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlTWVkaWNhbENvbmRpdGlvbiIsInJlcSIsInJlcyIsImJvZHkiLCJ1c2VyIiwiTWVkaWNhbENvbmRpdGlvbiIsImZpbmRPbmVBbmRVcGRhdGUiLCJ1c2VySWQiLCJfaWQiLCJjb25kaXRpb24iLCJjb25kaXRpb25UeXBlIiwiY29tbWVudHMiLCJ1cHNlcnQiLCJzZXREZWZhdWx0c09uSW5zZXJ0IiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZ2V0TWVkaWNhbENvbmRpdGlvbiIsImZpbmRPbmUiLCJtZWRpY2FsQ29uZGl0aW9uIiwidXBkYXRlTWVkaWNhbENvbmRpdGlvbiIsIiRzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVPLElBQU1BLHNCQUFzQjtBQUFBLDJGQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMUJDLFlBQUFBLElBRjBCLEdBRVhGLEdBRlcsQ0FFMUJFLElBRjBCLEVBRXBCQyxJQUZvQixHQUVYSCxHQUZXLENBRXBCRyxJQUZvQjtBQUFBO0FBQUEsbUJBR2ZDLHlCQUFpQkMsZ0JBQWpCLENBQ2pCO0FBQUVDLGNBQUFBLE1BQU0sRUFBRUgsSUFBSSxDQUFDSTtBQUFmLGFBRGlCLEVBRWpCO0FBQ0VELGNBQUFBLE1BQU0sRUFBRUgsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVJLEdBRGhCO0FBRUVDLGNBQUFBLFNBQVMsRUFBRTtBQUNUQyxnQkFBQUEsYUFBYSxFQUFFUCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRU8sYUFEWjtBQUVUQyxnQkFBQUEsUUFBUSxFQUFFUixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRVE7QUFGUDtBQUZiLGFBRmlCLEVBU2pCO0FBQUUs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QkEsZ0JBQWdCLENBQUVYLFNBQXZDO0FBbEJrQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9CbENQLFlBQUFBLEdBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQUFBLE9BQU8sRUFBRSxhQUFNQTtBQUFqQixhQUFyQjs7QUFwQmtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCSSxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWRpY2FsQ29uZGl0aW9uIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWVkaWNhbENvbmRpdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYm9keSwgdXNlciB9ID0gcmVxO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBNZWRpY2FsQ29uZGl0aW9uLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IHVzZXJJZDogdXNlci5faWQgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcklkOiB1c2VyPy5faWQsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIGNvbmRpdGlvblR5cGU6IGJvZHk/LmNvbmRpdGlvblR5cGUsXG4gICAgICAgICAgY29tbWVudHM6IGJvZHk/LmNvbW1lbnRzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHsgbmV3OiB0cnVlLCB1cHNlcnQ6IHRydWUsIHNldERlZmF1bHRzT25JbnNlcnQ6IHRydWUgfVxuICAgICk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWRkZWQgTWVkaWNhbCBDb25kaXRpb25cIiwgZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWVkaWNhbENvbmRpdGlvbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IG1lZGljYWxDb25kaXRpb24gPSBhd2FpdCBNZWRpY2FsQ29uZGl0aW9uLmZpbmRPbmUoe1xuICAgICAgdXNlcklkOiByZXE/LnVzZXI/Ll9pZCxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiU3VjY2Vzc1wiLFxuICAgICAgbWVkaWNhbENvbmRpdGlvbjogbWVkaWNhbENvbmRpdGlvbj8uY29uZGl0aW9uLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVNZWRpY2FsQ29uZGl0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VyLCBib2R5IH0gPSByZXE7XG4gICAgY29uc3QgbWVkaWNhbENvbmRpdGlvbiA9IGF3YWl0IE1lZGljYWxDb25kaXRpb24uZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHtcbiAgICAgICAgdXNlcklkOiB1c2VyPy5faWQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICBjb25kaXRpb25UeXBlOiBib2R5Py5jb25kaXRpb25UeXBlIHx8IHRoaXM/LmNvbmRpdGlvblR5cGUsXG4gICAgICAgICAgICBjb21tZW50czogYm9keT8uY29tbWVudHMgfHwgdGhpcz8uY29tbWVudHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1lZGljYWxDb25kaXRpb24/LmNvbmRpdGlvbik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59O1xuIl19