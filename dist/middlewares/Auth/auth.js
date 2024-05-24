"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAuth = exports.adminAuth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../../config/index"));

var _models = require("../../models");

// Check it the user is authenticated or not
var adminAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$headers, _req$headers$authoriz, token, decoded, user;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers["x-access-token"] || (req === null || req === void 0 ? void 0 : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : (_req$headers$authoriz = _req$headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[1]);

            if (!(!token || token === "null")) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: "Login first to access the resource."
            }));

          case 4:
            decoded = _jsonwebtoken["default"] === null || _jsonwebtoken["default"] === void 0 ? void 0 : _jsonwebtoken["default"].verify(token, _index["default"].JWT_SECRET);
            _context.next = 7;
            return _models.User.findOne({
              _id: decoded.id
            });

          case 7:
            user = _context.sent;

            if (user) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: "Token expired, please generate new one"
            }));

          case 10:
            if (!(user.role !== "admin")) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "Unauthorized"
            }));

          case 12:
            _context.next = 14;
            return _models.User.findById(decoded.id);

          case 14:
            req.user = _context.sent;
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              message: "Request Failed",
              error: _context.t0.message
            }));

          case 20:
            next();

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function adminAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.adminAuth = adminAuth;

var userAuth = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$headers2, _req$headers2$authori, token, decoded, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            token = req.headers["x-access-token"] || (req === null || req === void 0 ? void 0 : (_req$headers2 = req.headers) === null || _req$headers2 === void 0 ? void 0 : (_req$headers2$authori = _req$headers2.authorization) === null || _req$headers2$authori === void 0 ? void 0 : _req$headers2$authori.split(" ")[1]);

            if (!(!token || token === "null")) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              message: "Login first to access the resource."
            }));

          case 4:
            decoded = _jsonwebtoken["default"] === null || _jsonwebtoken["default"] === void 0 ? void 0 : _jsonwebtoken["default"].verify(token, _index["default"].JWT_SECRET);
            _context2.next = 7;
            return _models.User.findOne({
              _id: decoded.id
            });

          case 7:
            user = _context2.sent;

            if (user) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              message: "Token expired, please generate new one"
            }));

          case 10:
            _context2.next = 12;
            return _models.User.findById(decoded.id);

          case 12:
            req.user = _context2.sent;
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(401).json({
              message: "There is a problem with your token, please login again",
              error: _context2.t0
            }));

          case 18:
            next();

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function userAuth(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.userAuth = userAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9taWRkbGV3YXJlcy9BdXRoL2F1dGguanMiXSwibmFtZXMiOlsiYWRtaW5BdXRoIiwicmVxIiwicmVzIiwibmV4dCIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzcGxpdCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsImNvbmZpZyIsIkpXVF9TRUNSRVQiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwidXNlciIsInJvbGUiLCJmaW5kQnlJZCIsImVycm9yIiwidXNlckF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNPLElBQU1BLFNBQVM7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZkMsWUFBQUEsS0FGZSxHQUduQkgsR0FBRyxDQUFDSSxPQUFKLENBQVksZ0JBQVosTUFDQUosR0FEQSxhQUNBQSxHQURBLHVDQUNBQSxHQUFHLENBQUVJLE9BREwsMEVBQ0EsYUFBY0MsYUFEZCwwREFDQSxzQkFBNkJDLEtBQTdCLENBQW1DLEdBQW5DLEVBQXdDLENBQXhDLENBREEsQ0FIbUI7O0FBQUEsa0JBTWpCLENBQUNILEtBQUQsSUFBVUEsS0FBSyxLQUFLLE1BTkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBT1pGLEdBQUcsQ0FDUE0sTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBRkQsQ0FQWTs7QUFBQTtBQVlmQyxZQUFBQSxPQVplLEdBWUxDLHdCQVpLLGFBWUxBLHdCQVpLLHVCQVlMQSx5QkFBS0MsTUFBTCxDQUFZVCxLQUFaLEVBQW1CVSxrQkFBT0MsVUFBMUIsQ0FaSztBQUFBO0FBQUEsbUJBYUZDLGFBQUtDLE9BQUwsQ0FBYTtBQUFFQyxj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QUFIOztBQUFBLGtCQUFScUIsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvaW5kZXhcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5cbi8vIENoZWNrIGl0IHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgb3Igbm90XG5leHBvcnQgY29uc3QgYWRtaW5BdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPVxuICAgICAgcmVxLmhlYWRlcnNbXCJ4LWFjY2Vzcy10b2tlblwiXSB8fFxuICAgICAgcmVxPy5oZWFkZXJzPy5hdXRob3JpemF0aW9uPy5zcGxpdChcIiBcIilbMV07XG5cbiAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIm51bGxcIikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIGZpcnN0IHRvIGFjY2VzcyB0aGUgcmVzb3VyY2UuXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dD8udmVyaWZ5KHRva2VuLCBjb25maWcuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDEpXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJUb2tlbiBleHBpcmVkLCBwbGVhc2UgZ2VuZXJhdGUgbmV3IG9uZVwiIH0pO1xuICAgIH1cbiAgICBpZiAodXNlci5yb2xlICE9PSBcImFkbWluXCIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXEudXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoZGVjb2RlZC5pZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiUmVxdWVzdCBGYWlsZWRcIixcbiAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPVxuICAgICAgcmVxLmhlYWRlcnNbXCJ4LWFjY2Vzcy10b2tlblwiXSB8fFxuICAgICAgcmVxPy5oZWFkZXJzPy5hdXRob3JpemF0aW9uPy5zcGxpdChcIiBcIilbMV07XG5cbiAgICBpZiAoIXRva2VuIHx8IHRva2VuID09PSBcIm51bGxcIikge1xuICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAuc3RhdHVzKDQwMSlcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIGZpcnN0IHRvIGFjY2VzcyB0aGUgcmVzb3VyY2UuXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dD8udmVyaWZ5KHRva2VuLCBjb25maWcuSldUX1NFQ1JFVCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiByZXNcbiAgICAgICAgLnN0YXR1cyg0MDEpXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJUb2tlbiBleHBpcmVkLCBwbGVhc2UgZ2VuZXJhdGUgbmV3IG9uZVwiIH0pO1xuICAgIH1cblxuICAgIHJlcS51c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChkZWNvZGVkLmlkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oe1xuICAgICAgbWVzc2FnZTogXCJUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB5b3VyIHRva2VuLCBwbGVhc2UgbG9naW4gYWdhaW5cIixcbiAgICAgIGVycm9yLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xufTtcbiJdfQ==