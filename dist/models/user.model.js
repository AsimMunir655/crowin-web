"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var userSchema = _mongoose["default"].Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  confirmPassword: {
    type: String
  },
  mobileNumber: {
    type: String
  },
  isProfileCompleted: {
    type: Boolean,
    "default": false
  },
  status: {
    type: String,
    "enum": ["active", "block"],
    "default": "active"
  },
  role: {
    type: String,
    "enum": ["patient", "admin"],
    "default": "patient"
  },
  profilePicture: {
    type: String,
    "default": ""
  }
}, {
  timestamps: true
}); //Encrypting Password Before Saving User


userSchema.pre("save", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!this.isModified("password")) {
              next();
            }

            _context.next = 3;
            return _bcryptjs["default"].hash(this.password, 10);

          case 3:
            this.password = _context.sent;
            _context.next = 6;
            return _bcryptjs["default"].hash(this.confirmPassword, 10);

          case 6:
            this.confirmPassword = _context.sent;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // Compare user password

userSchema.methods.comparePassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(enteredPassword) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(enteredPassword, this.password);
            _context2.next = 3;
            return _bcryptjs["default"].compare(enteredPassword, this.password);

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // Return JWT


userSchema.methods.getJwtToken = function () {
  return _jsonwebtoken["default"].sign({
    id: this._id
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME
  });
};

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9tb2RlbHMvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwibW9iaWxlTnVtYmVyIiwiaXNQcm9maWxlQ29tcGxldGVkIiwiQm9vbGVhbiIsInN0YXR1cyIsInJvbGUiLCJwcm9maWxlUGljdHVyZSIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImJjcnlwdCIsImhhc2giLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiZW50ZXJlZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImNvbXBhcmUiLCJnZXRKd3RUb2tlbiIsImp3dCIsInNpZ24iLCJpZCIsIl9pZCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwiSldUX0VYUElSRV9USU1FIiwiVXNlciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxxQkFBU0MsTUFBVCxDQUNqQjtBQUNFQyxFQUFBQSxTQUFTLEVBQUU7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBRGI7QUFFRUMsRUFBQUEsUUFBUSxFQUFFO0FBQUVGLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUZaO0FBR0VFLEVBQUFBLEtBQUssRUFBRTtBQUFFSCxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FIVDtBQUlFRyxFQUFBQSxRQUFRLEVBQUU7QUFBRUosSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBSlo7QUFLRUksRUFBQUEsZUFBZSxFQUFFO0FBQUVMLElBQUFBLElBQUksRUFBRUM7QUFBUixHQUxuQjtBQU1FSyxFQUFBQSxZQUFZLEVBQUU7QUFBRU4sSUFBQUEsSUFBSSxFQUFFQztBQUFSLEdBTmhCO0FBT0VNLEVBQUFBLGtCQUFrQixFQUFFO0FBQUVQLElBQUFBLElBQUksRUFBRVEsT0FBUjtBQUFpQixlQUFTO0FBQTFCLEdBUHRCO0FBUUVDLEVBQUFBLE1BQU0sRUFBRTtBQUFFVCxJQUFBQSxJQUFJLEVBQUVDLE1BQVI7QUFBZ0IsWUFBTSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQXRCO0FBQTJDLGVBQVM7QUFBcEQsR0FSVjtBQVNFUyxFQUFBQSxJQUFJLEVBQUU7QUFDSlYsSUFBQUEsSUFBSSxFQUFFQyxNQURGO0FBRUosWUFBTSxDQUFDLFNBQUQsRUFBWSxPQUFaLENBRkY7QUFHSixlQUFTO0FBSEwsR0FUUjtBQWNFVSxFQUFBQSxjQUFjLEVBQUU7QUFBRVgsSUFBQUEsSUFBSSxFQUFFQyxNQUFSO0FBQWdCLGVBQVM7QUFBekI7QUFkbEIsQ0FEaUIsRUFpQmpCO0FBQUVXLEVBQUFBLFVBQVUsRUFBRTtBQUFkLENBakJpQixDQUFuQixDLENBb0JBOzs7QUFDQWhCLFVBQVUsQ0FBQ2lCLEdBQVgsQ0FBZSxNQUFmO0FBQUEsMkZBQXVCLGlCQUFnQkMsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQixnQkFBSSxDQUFDLEtBQUtDLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBTCxFQUFrQztBQUNoQ0QsY0FBQUEsSUFBSTtBQUNMOztBQUhvQjtBQUFBLG1CQUtDRSxxQkFBT0MsSUFBUCxDQUFZLEtBQUtiLFFBQWpCLEVBQTJCLEVBQTNCLENBTEQ7O0FBQUE7QUFLckIsaUJBQUtBLFFBTGdCO0FBQUE7QUFBQSxtQkFNUVkscUJBQU9DLElBQVAsQ0FBWSxLQUFLWixlQUFqQixFQUFrQyxFQUFsQyxDQU5SOztBQUFBO0FBTXJCLGlCQUFLQSxlQU5nQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLLENBU0E7O0FBQ0FULFVBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUJDLGVBQW5CO0FBQUEsNEZBQXFDLGtCQUFnQkMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQ0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGVBQVosRUFBNkIsS0FBS2hCLFFBQWxDO0FBRG1DO0FBQUEsbUJBRXRCWSxxQkFBT08sT0FBUCxDQUFlSCxlQUFmLEVBQWdDLEtBQUtoQixRQUFyQyxDQUZzQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJDOztBQUFBO0FBQUE7QUFBQTtBQUFBLEksQ0FJQTs7O0FBQ0FSLFVBQVUsQ0FBQ3NCLE9BQVgsQ0FBbUJNLFdBQW5CLEdBQWlDLFlBQVk7QUFDM0MsU0FBT0MseUJBQUlDLElBQUosQ0FBUztBQUFFQyxJQUFBQSxFQUFFLEVBQUUsS0FBS0M7QUFBWCxHQUFULEVBQTJCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBdkMsRUFBbUQ7QUFDeERDLElBQUFBLFNBQVMsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRGlDLEdBQW5ELENBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLElBQUksR0FBR3JDLHFCQUFTc0MsS0FBVCxDQUFlLE1BQWYsRUFBdUJ2QyxVQUF2QixDQUFiOztlQUNlc0MsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGZpcnN0TmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBsYXN0TmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgbW9iaWxlTnVtYmVyOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlzUHJvZmlsZUNvbXBsZXRlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcImFjdGl2ZVwiLCBcImJsb2NrXCJdLCBkZWZhdWx0OiBcImFjdGl2ZVwiIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZW51bTogW1wicGF0aWVudFwiLCBcImFkbWluXCJdLFxuICAgICAgZGVmYXVsdDogXCJwYXRpZW50XCIsXG4gICAgfSxcbiAgICBwcm9maWxlUGljdHVyZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbi8vRW5jcnlwdGluZyBQYXNzd29yZCBCZWZvcmUgU2F2aW5nIFVzZXJcbnVzZXJTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xuICBpZiAoIXRoaXMuaXNNb2RpZmllZChcInBhc3N3b3JkXCIpKSB7XG4gICAgbmV4dCgpO1xuICB9XG5cbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIDEwKTtcbiAgdGhpcy5jb25maXJtUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLmNvbmZpcm1QYXNzd29yZCwgMTApO1xufSk7XG5cbi8vIENvbXBhcmUgdXNlciBwYXNzd29yZFxudXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChlbnRlcmVkUGFzc3dvcmQpIHtcbiAgY29uc29sZS5sb2coZW50ZXJlZFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKGVudGVyZWRQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG59O1xuLy8gUmV0dXJuIEpXVFxudXNlclNjaGVtYS5tZXRob2RzLmdldEp3dFRva2VuID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gand0LnNpZ24oeyBpZDogdGhpcy5faWQgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwge1xuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX0VYUElSRV9USU1FLFxuICB9KTtcbn07XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19