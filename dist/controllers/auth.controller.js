"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPatient = exports.myProfile = exports.loginPatient = exports.loginHandler = exports.loginAdmin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models/");

var _validator = require("../validators/validator");

var loginHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _yield$loginValidator, errors, isValid, _req$body, email, password, user, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _validator.loginValidator)(req === null || req === void 0 ? void 0 : req.body);

          case 3:
            _yield$loginValidator = _context.sent;
            errors = _yield$loginValidator.errors;
            isValid = _yield$loginValidator.isValid;

            if (!(isValid > 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: errors.messages
            }));

          case 8:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 11;
            return _models.User.findOne({
              email: email
            });

          case 11:
            user = _context.sent;

            if (user) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "No user Found on this email"
            }));

          case 14:
            _context.next = 16;
            return user.comparePassword(password);

          case 16:
            if (_context.sent) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "Email/Password does not match"
            }));

          case 18:
            token = user.getJwtToken();
            res.token = token, res.role = user === null || user === void 0 ? void 0 : user.role, res.user = user;
            next();
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: _context.t0.message
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function loginHandler(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginHandler = loginHandler;

var loginAdmin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var token, role, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            token = res.token, role = res.role, user = res.user;

            if (!(!token || role !== "admin")) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              message: "Login Failed"
            }));

          case 4:
            res.status(200).json({
              message: "Logged In",
              token: token,
              user: user
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

  return function loginAdmin(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginAdmin = loginAdmin;

var loginPatient = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var token, role, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = res.token, role = res.role, user = res.user;

            if (!(!token || role !== "patient")) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              message: "Login Failed"
            }));

          case 4:
            res.status(200).json({
              message: "Logged In",
              token: token,
              user: user
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(404).json({
              message: _context3.t0.message
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function loginPatient(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.loginPatient = loginPatient;

var registerPatient = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _user, _req$body2, firstName, lastName, email, mobileNumber, dateOfBirth, password, confirmPassword, user, patient;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body2 = req === null || req === void 0 ? void 0 : req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, mobileNumber = _req$body2.mobileNumber, dateOfBirth = _req$body2.dateOfBirth, password = _req$body2.password, confirmPassword = _req$body2.confirmPassword;
            _context4.next = 4;
            return _models.User.findOne({
              email: email
            });

          case 4:
            user = _context4.sent;
            _context4.next = 7;
            return (0, _validator.userExists)({
              email: email
            });

          case 7:
            if (!_context4.sent) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "User Already exists on this email"
            }));

          case 9:
            _context4.next = 11;
            return !(0, _validator.confirmPasswordValidator)(password, confirmPassword);

          case 11:
            if (!_context4.sent) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "Password and confirm password does not match"
            }));

          case 13:
            user = new _models.User({
              firstName: firstName,
              lastName: lastName,
              email: email,
              mobileNumber: mobileNumber,
              password: password,
              confirmPassword: confirmPassword
            });
            patient = new _models.Patient({
              userId: (_user = user) === null || _user === void 0 ? void 0 : _user._id,
              personalDetails: {
                dateOfBirth: new Date(dateOfBirth)
              }
            });
            user.save();
            patient.save();
            res.status(200).json({
              message: "Registered"
            });
            _context4.next = 23;
            break;

          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](0);
            res.status(404).json({
              message: _context4.t0.message
            });

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 20]]);
  }));

  return function registerPatient(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.registerPatient = registerPatient;

var myProfile = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$user, user;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models.User.findOne({
              _id: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            });

          case 3:
            user = _context5.sent;
            res.status(200).json({
              user: user
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res.status(404).json({
              message: _context5.t0.message
            });

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function myProfile(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.myProfile = myProfile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9hdXRoLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsibG9naW5IYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHkiLCJlcnJvcnMiLCJpc1ZhbGlkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJVc2VyIiwiZmluZE9uZSIsInVzZXIiLCJjb21wYXJlUGFzc3dvcmQiLCJ0b2tlbiIsImdldEp3dFRva2VuIiwicm9sZSIsImxvZ2luQWRtaW4iLCJsb2dpblBhdGllbnQiLCJyZWdpc3RlclBhdGllbnQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm1vYmlsZU51bWJlciIsImRhdGVPZkJpcnRoIiwiY29uZmlybVBhc3N3b3JkIiwicGF0aWVudCIsIlBhdGllbnQiLCJ1c2VySWQiLCJfaWQiLCJwZXJzb25hbERldGFpbHMiLCJEYXRlIiwic2F2ZSIsIm15UHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQU1PLElBQU1BLFlBQVk7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVVLCtCQUFlRixHQUFmLGFBQWVBLEdBQWYsdUJBQWVBLEdBQUcsQ0FBRUcsSUFBcEIsQ0FGVjs7QUFBQTtBQUFBO0FBRWhCQyxZQUFBQSxNQUZnQix5QkFFaEJBLE1BRmdCO0FBRVJDLFlBQUFBLE9BRlEseUJBRVJBLE9BRlE7O0FBQUEsa0JBR3BCQSxPQUFPLEdBQUcsQ0FIVTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FJZkosR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsY0FBQUEsT0FBTyxFQUFFSixNQUFNLENBQUNLO0FBQWxCLGFBQXJCLENBSmU7O0FBQUE7QUFBQSx3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Q0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQXJCO0FBdEMyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdDM0JQLFlBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQUFBLE9BQU8sRUFBRSxhQUFNQTtBQUFqQixhQUFyQjs7QUF4QzJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWZhLGVBQWU7QUFBQTtBQUFBO0FBQUEsR0FBckI7Ozs7QUE0Q0EsSUFBTWEsU0FBUztBQUFBLDRGQUFHLGtCQUFPbEMsR0FBUCxFQUFZQyxHQUFaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUZXLGFBQUtDLE9BQUwsQ0FBYTtBQUFFaUIsY0FBQUEsR0FBRyxFQUFFOUIsR0FBRixhQUFFQSxHQUFGLG9DQUFFQSxHQUFHLENBQUVjLElBQVAsOENBQUUsVUFBV2dCO0FBQWxCLGFBQWIsQ0FGRTs7QUFBQTtBQUVmaEIsWUFBQUEsSUFGZTtBQUdyQmIsWUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU8sY0FBQUEsSUFBSSxFQUFKQTtBQUFGLGFBQXJCO0FBSHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS3JCYixZQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxjQUFBQSxPQUFPLEVBQUUsYUFBTUE7QUFBakIsYUFBckI7O0FBTHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVQwQixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyLCBQYXRpZW50IH0gZnJvbSBcIi4uL21vZGVscy9cIjtcbmltcG9ydCB7XG4gIGNvbmZpcm1QYXNzd29yZFZhbGlkYXRvcixcbiAgbG9naW5WYWxpZGF0b3IsXG4gIHVzZXJFeGlzdHMsXG59IGZyb20gXCIuLi92YWxpZGF0b3JzL3ZhbGlkYXRvclwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5IYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBlcnJvcnMsIGlzVmFsaWQgfSA9IGF3YWl0IGxvZ2luVmFsaWRhdG9yKHJlcT8uYm9keSk7XG4gICAgaWYgKGlzVmFsaWQgPiAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBlcnJvcnMubWVzc2FnZXMgfSk7XG4gICAgfVxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiTm8gdXNlciBGb3VuZCBvbiB0aGlzIGVtYWlsXCIgfSk7XG4gICAgfVxuICAgIGlmICghKGF3YWl0IHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkKSkpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiRW1haWwvUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSB1c2VyLmdldEp3dFRva2VuKCk7XG4gICAgKHJlcy50b2tlbiA9IHRva2VuKSwgKHJlcy5yb2xlID0gdXNlcj8ucm9sZSksIChyZXMudXNlciA9IHVzZXIpO1xuICAgIG5leHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbkFkbWluID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiwgcm9sZSwgdXNlciB9ID0gcmVzO1xuICAgIGlmICghdG9rZW4gfHwgcm9sZSAhPT0gXCJhZG1pblwiKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIEZhaWxlZFwiIH0pO1xuICAgIH1cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiTG9nZ2VkIEluXCIsIHRva2VuLCB1c2VyIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUGF0aWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdG9rZW4sIHJvbGUsIHVzZXIgfSA9IHJlcztcbiAgICBpZiAoIXRva2VuIHx8IHJvbGUgIT09IFwicGF0aWVudFwiKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIEZhaWxlZFwiIH0pO1xuICAgIH1cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiTG9nZ2VkIEluXCIsIHRva2VuLCB1c2VyIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUGF0aWVudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBtb2JpbGVOdW1iZXIsXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgY29uZmlybVBhc3N3b3JkLFxuICAgIH0gPSByZXE/LmJvZHk7XG4gICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICBpZiAoYXdhaXQgdXNlckV4aXN0cyh7IGVtYWlsIH0pKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiVXNlciBBbHJlYWR5IGV4aXN0cyBvbiB0aGlzIGVtYWlsXCIgfSk7XG4gICAgfVxuICAgIGlmIChhd2FpdCAhY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpKSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgICAgIC5zdGF0dXMoNDAwKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiUGFzc3dvcmQgYW5kIGNvbmZpcm0gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIiB9KTtcbiAgICB9XG4gICAgdXNlciA9IG5ldyBVc2VyKHtcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBtb2JpbGVOdW1iZXIsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGNvbmZpcm1QYXNzd29yZCxcbiAgICB9KTtcbiAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHtcbiAgICAgIHVzZXJJZDogdXNlcj8uX2lkLFxuICAgICAgcGVyc29uYWxEZXRhaWxzOiB7XG4gICAgICAgIGRhdGVPZkJpcnRoOiBuZXcgRGF0ZShkYXRlT2ZCaXJ0aCksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHVzZXIuc2F2ZSgpO1xuICAgIHBhdGllbnQuc2F2ZSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJSZWdpc3RlcmVkXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbXlQcm9maWxlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogcmVxPy51c2VyPy5faWQgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcbiJdfQ==