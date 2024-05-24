"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactUs = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var contactUs = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, email, subject, message;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req === null || req === void 0 ? void 0 : req.body, name = _req$body.name, email = _req$body.email, subject = _req$body.subject, message = _req$body.message;

            if (!(!name || !email || !message)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "Incomplete details provided"
            }));

          case 4:
            _context.next = 6;
            return _models.Contact.create({
              name: name,
              email: email,
              message: message,
              subject: subject || ""
            });

          case 6:
            res.status(200).json({
              message: "Thanks for contacting Us, we have received your information"
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: "An error Occurres",
              error: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function contactUs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.contactUs = contactUs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9jb250YWN0LXVzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY29udGFjdFVzIiwicmVxIiwicmVzIiwiYm9keSIsIm5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwic3RhdHVzIiwianNvbiIsIkNvbnRhY3QiLCJjcmVhdGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLElBQU1BLFNBQVM7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUVxQkQsR0FGckIsYUFFcUJBLEdBRnJCLHVCQUVxQkEsR0FBRyxDQUFFRSxJQUYxQixFQUViQyxJQUZhLGFBRWJBLElBRmEsRUFFUEMsS0FGTyxhQUVQQSxLQUZPLEVBRUFDLE9BRkEsYUFFQUEsT0FGQSxFQUVTQyxPQUZULGFBRVNBLE9BRlQ7O0FBQUEsa0JBR2pCLENBQUNILElBQUQsSUFBUyxDQUFDQyxLQUFWLElBQW1CLENBQUNFLE9BSEg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBSVpMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVGLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQXJCLENBSlk7O0FBQUE7QUFBQTtBQUFBLG1CQU1mRyxnQkFBUUMsTUFBUixDQUFlO0FBQ25CUCxjQUFBQSxJQUFJLEVBQUpBLElBRG1CO0FBRW5CQyxjQUFBQSxLQUFLLEVBQUxBLEtBRm1CO0FBR25CRSxjQUFBQSxPQUFPLEVBQVBBLE9BSG1CO0FBSW5CRCxjQUFBQSxPQUFPLEVBQUVBLE9BQU8sSUFBSTtBQUpELGFBQWYsQ0FOZTs7QUFBQTtBQVlyQkosWUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJGLGNBQUFBLE9BQU8sRUFBRTtBQURVLGFBQXJCO0FBWnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JyQkwsWUFBQUEsR0FBRyxDQUNBTSxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVE7QUFBRUYsY0FBQUEsT0FBTyxFQUFFLG1CQUFYO0FBQWdDSyxjQUFBQSxLQUFLLEVBQUUsWUFBTUw7QUFBN0MsYUFGUjs7QUFoQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRQLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0VXMgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSByZXE/LmJvZHk7XG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhbWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJJbmNvbXBsZXRlIGRldGFpbHMgcHJvdmlkZWRcIiB9KTtcbiAgICB9XG4gICAgYXdhaXQgQ29udGFjdC5jcmVhdGUoe1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QgfHwgXCJcIixcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBtZXNzYWdlOiBcIlRoYW5rcyBmb3IgY29udGFjdGluZyBVcywgd2UgaGF2ZSByZWNlaXZlZCB5b3VyIGluZm9ybWF0aW9uXCIsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDQwNClcbiAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJBbiBlcnJvciBPY2N1cnJlc1wiLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufTtcbiJdfQ==