"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _chalk = _interopRequireDefault(require("chalk"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var dbConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            }, function () {
              console.log(_chalk["default"].bold.green("✓"), _chalk["default"].yellow("Db Connected"));
            });

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function dbConnection() {
    return _ref.apply(this, arguments);
  };
}();

var _default = dbConnection;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9kYi9jb25uZWN0aW9uLmpzIl0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsImRiQ29ubmVjdGlvbiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIiwiY2hhbGsiLCJib2xkIiwiZ3JlZW4iLCJ5ZWxsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQUEsbUJBQU9DLE1BQVA7O0FBRUEsSUFBTUMsWUFBWTtBQUFBLDJGQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVhDLHFCQUFTQyxPQUFULENBQ0pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQURSLEVBRUo7QUFDRUMsY0FBQUEsZUFBZSxFQUFFLElBRG5CO0FBRUVDLGNBQUFBLGtCQUFrQixFQUFFO0FBRnRCLGFBRkksRUFNSixZQUFNO0FBQ0pDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBTUMsSUFBTixDQUFXQyxLQUFYLENBQWlCLEdBQWpCLENBQVosRUFBbUNGLGtCQUFNRyxNQUFOLENBQWEsY0FBYixDQUFuQztBQUNELGFBUkcsQ0FGVzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYWpCTCxZQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBYmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVpULFlBQVk7QUFBQTtBQUFBO0FBQUEsR0FBbEI7O2VBaUJlQSxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IGRiQ29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KFxuICAgICAgcHJvY2Vzcy5lbnYuTU9OR09fVVJJLFxuICAgICAge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoYWxrLmJvbGQuZ3JlZW4oXCLinJNcIiksIGNoYWxrLnllbGxvdyhcIkRiIENvbm5lY3RlZFwiKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdGlvbjtcbiJdfQ==