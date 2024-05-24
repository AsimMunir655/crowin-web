"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userExists = exports.updateProfileValidator = exports.loginValidator = exports.confirmPasswordValidator = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validator = _interopRequireDefault(require("validator"));

var _models = require("../models");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var loginValidator = function loginValidator(_ref) {
  var email = _ref.email,
      password = _ref.password;
  var errors = {
    messages: []
  };

  if (!email) {
    errors.messages.push("Please enter your email");
  }

  if (!password) {
    errors.messages.push("Please enter your password");
  }

  return {
    errors: errors,
    isValid: errors.messages.length
  };
};

exports.loginValidator = loginValidator;

var updateProfileValidator = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2, image, _ref3) {
    var firstName, lastName, password, phoneNumber, confirmPassword, realEmail, prevProfile, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            firstName = _ref2.firstName, lastName = _ref2.lastName, password = _ref2.password, phoneNumber = _ref2.phoneNumber, confirmPassword = _ref2.confirmPassword;
            realEmail = _ref3.email;
            _context.next = 4;
            return _models.User.findOne({
              email: realEmail
            });

          case 4:
            prevProfile = _context.sent;

            if (prevProfile) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", null);

          case 7:
            _context.next = 9;
            return confirmPasswordValidator(password, confirmPassword);

          case 9:
            if (_context.sent) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", null);

          case 11:
            user = {};
            user.firstName = firstName || (prevProfile === null || prevProfile === void 0 ? void 0 : prevProfile.firstName) || "";
            user.lastName = lastName || (prevProfile === null || prevProfile === void 0 ? void 0 : prevProfile.lastName) || "";
            user.phoneNumber = phoneNumber || (prevProfile === null || prevProfile === void 0 ? void 0 : prevProfile.phoneNumber) || "";

            if (!password) {
              _context.next = 19;
              break;
            }

            _context.next = 18;
            return _bcryptjs["default"].hash(password, 10);

          case 18:
            user.password = _context.sent;

          case 19:
            if (image) {
              user.profilePicture = image === null || image === void 0 ? void 0 : image.path;
            }

            return _context.abrupt("return", user);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateProfileValidator(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProfileValidator = updateProfileValidator;

var confirmPasswordValidator = function confirmPasswordValidator(password, confirmPassword) {
  return password === confirmPassword;
};

exports.confirmPasswordValidator = confirmPasswordValidator;

var userExists = function userExists(data) {
  return _models.User.exists(_objectSpread({}, data));
};

exports.userExists = userExists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci92YWxpZGF0b3JzL3ZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJsb2dpblZhbGlkYXRvciIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJtZXNzYWdlcyIsInB1c2giLCJpc1ZhbGlkIiwibGVuZ3RoIiwidXBkYXRlUHJvZmlsZVZhbGlkYXRvciIsImltYWdlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaG9uZU51bWJlciIsImNvbmZpcm1QYXNzd29yZCIsInJlYWxFbWFpbCIsIlVzZXIiLCJmaW5kT25lIiwicHJldlByb2ZpbGUiLCJjb25maXJtUGFzc3dvcmRWYWxpZGF0b3IiLCJ1c2VyIiwiYmNyeXB0IiwiaGFzaCIsInByb2ZpbGVQaWN0dXJlIiwicGF0aCIsInVzZXJFeGlzdHMiLCJkYXRhIiwiZXhpc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDckQsTUFBTUMsTUFBTSxHQUFHO0FBQUVDLElBQUFBLFFBQVEsRUFBRTtBQUFaLEdBQWY7O0FBQ0EsTUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDVkUsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQix5QkFBckI7QUFDRDs7QUFDRCxNQUFJLENBQUNILFFBQUwsRUFBZTtBQUNiQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCLDRCQUFyQjtBQUNEOztBQUNELFNBQU87QUFDTEYsSUFBQUEsTUFBTSxFQUFOQSxNQURLO0FBRUxHLElBQUFBLE9BQU8sRUFBRUgsTUFBTSxDQUFDQyxRQUFQLENBQWdCRztBQUZwQixHQUFQO0FBSUQsQ0FaTTs7OztBQWNBLElBQU1DLHNCQUFzQjtBQUFBLDRGQUFHLHdCQUVwQ0MsS0FGb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xDQyxZQUFBQSxTQURrQyxTQUNsQ0EsU0FEa0MsRUFDdkJDLFFBRHVCLFNBQ3ZCQSxRQUR1QixFQUNiVCxRQURhLFNBQ2JBLFFBRGEsRUFDSFUsV0FERyxTQUNIQSxXQURHLEVBQ1VDLGVBRFYsU0FDVUEsZUFEVjtBQUczQkMsWUFBQUEsU0FIMkIsU0FHbENiLEtBSGtDO0FBQUE7QUFBQSxtQkFLVmMsYUFBS0MsT0FBTCxDQUFhO0FBQUVmLGNBQUFBLEtBQUssRUFBRWE7QUFBVCxhQUFiLENBTFU7O0FBQUE7QUFLOUJHLFlBQUFBLFdBTDhCOztBQUFBLGdCQU0vQkEsV0FOK0I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBTzNCLElBUDJCOztBQUFBO0FBQUE7QUFBQSxtQkFTeEJDLHdCQUF3QixDQUFDaEIsUUFBRCxFQUFXVyxlQUFYLENBVEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FVM0IsSUFWMkI7O0FBQUE7QUFZOUJNLFlBQUFBLElBWjhCLEdBWXZCLEVBWnVCO0FBYXBDQSxZQUFBQSxJQUFJLENBQUNULFNBQUwsR0FBaUJBLFNBQVMsS0FBSU8sV0FBSixhQUFJQSxXQUFKLHVCQUFJQSxXQUFXLENBQUVQLFNBQWpCLENBQVQsSUFBdUMsRUFBeEQ7QUFDQVMsWUFBQUEsSUFBSSxDQUFDUixRQUFMLEdBQWdCQSxRQUFRLEtBQUlNLFdBQUosYUFBSUEsV0FBSix1QkFBSUEsV0FBVyxDQUFFTixRQUFqQixDQUFSLElBQXFDLEVBQXJEO0FBQ0FRLFlBQUFBLElBQUksQ0FBQ1AsV0FBTCxHQUFtQkEsV0FBVyxLQUFJSyxXQUFKLGFBQUlBLFdBQUosdUJBQUlBLFdBQVcsQ0FBRUwsV0FBakIsQ0FBWCxJQUEyQyxFQUE5RDs7QUFmb0MsaUJBZ0JoQ1YsUUFoQmdDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBaUJaa0IscUJBQU9DLElBQVAsQ0FBWW5CLFFBQVosRUFBc0IsRUFBdEIsQ0FqQlk7O0FBQUE7QUFpQmxDaUIsWUFBQUEsSUFBSSxDQUFDakIsUUFqQjZCOztBQUFBO0FBbUJwQyxnQkFBSU8sS0FBSixFQUFXO0FBQ1RVLGNBQUFBLElBQUksQ0FBQ0csY0FBTCxHQUFzQmIsS0FBdEIsYUFBc0JBLEtBQXRCLHVCQUFzQkEsS0FBSyxDQUFFYyxJQUE3QjtBQUNEOztBQXJCbUMsNkNBc0I3QkosSUF0QjZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXRCWCxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsR0FBNUI7Ozs7QUF5QkEsSUFBTVUsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDaEIsUUFBRCxFQUFXVyxlQUFYO0FBQUEsU0FDdENYLFFBQVEsS0FBS1csZUFEeUI7QUFBQSxDQUFqQzs7OztBQUdBLElBQU1XLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVVixhQUFLVyxNQUFMLG1CQUFpQkQsSUFBakIsRUFBVjtBQUFBLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbGlkYXRvciBmcm9tIFwidmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmV4cG9ydCBjb25zdCBsb2dpblZhbGlkYXRvciA9ICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHsgbWVzc2FnZXM6IFtdIH07XG4gIGlmICghZW1haWwpIHtcbiAgICBlcnJvcnMubWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCIpO1xuICB9XG4gIGlmICghcGFzc3dvcmQpIHtcbiAgICBlcnJvcnMubWVzc2FnZXMucHVzaChcIlBsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZXJyb3JzLFxuICAgIGlzVmFsaWQ6IGVycm9ycy5tZXNzYWdlcy5sZW5ndGgsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZmlsZVZhbGlkYXRvciA9IGFzeW5jIChcbiAgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwYXNzd29yZCwgcGhvbmVOdW1iZXIsIGNvbmZpcm1QYXNzd29yZCB9LFxuICBpbWFnZSxcbiAgeyBlbWFpbDogcmVhbEVtYWlsIH1cbikgPT4ge1xuICBjb25zdCBwcmV2UHJvZmlsZSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZWFsRW1haWwgfSk7XG4gIGlmICghcHJldlByb2ZpbGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIShhd2FpdCBjb25maXJtUGFzc3dvcmRWYWxpZGF0b3IocGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdXNlciA9IHt9O1xuICB1c2VyLmZpcnN0TmFtZSA9IGZpcnN0TmFtZSB8fCBwcmV2UHJvZmlsZT8uZmlyc3ROYW1lIHx8IFwiXCI7XG4gIHVzZXIubGFzdE5hbWUgPSBsYXN0TmFtZSB8fCBwcmV2UHJvZmlsZT8ubGFzdE5hbWUgfHwgXCJcIjtcbiAgdXNlci5waG9uZU51bWJlciA9IHBob25lTnVtYmVyIHx8IHByZXZQcm9maWxlPy5waG9uZU51bWJlciB8fCBcIlwiO1xuICBpZiAocGFzc3dvcmQpIHtcbiAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgfVxuICBpZiAoaW1hZ2UpIHtcbiAgICB1c2VyLnByb2ZpbGVQaWN0dXJlID0gaW1hZ2U/LnBhdGg7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yID0gKHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpID0+XG4gIHBhc3N3b3JkID09PSBjb25maXJtUGFzc3dvcmQ7XG5cbmV4cG9ydCBjb25zdCB1c2VyRXhpc3RzID0gKGRhdGEpID0+IFVzZXIuZXhpc3RzKHsgLi4uZGF0YSB9KTtcbiJdfQ==