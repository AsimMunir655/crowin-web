"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMedicalHistory = exports.createMedicalHistory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var createMedicalHistory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$user, body, user, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = req.body, user = req.user;
            console.log(body);
            _context.next = 5;
            return _models.MedicalHistory.findOneAndUpdate({
              userId: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              userId: user === null || user === void 0 ? void 0 : user._id,
              medicalHistory: JSON.stringify(body)
            }, {
              upsert: true,
              "new": true,
              setDefaultsOnInsert: true
            });

          case 5:
            data = _context.sent;
            _context.next = 8;
            return _models.User.findOneAndUpdate({
              _id: user === null || user === void 0 ? void 0 : user._id
            }, {
              $set: {
                isProfileCompleted: true
              }
            });

          case 8:
            res.status(200).json({
              message: "Added Medical History",
              data: data
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: _context.t0.message
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function createMedicalHistory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMedicalHistory = createMedicalHistory;

var getMedicalHistory = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$user2, medicalHistory, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.MedicalHistory.findOne({
              userId: req === null || req === void 0 ? void 0 : (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2._id
            });

          case 3:
            medicalHistory = _context2.sent;
            data = medicalHistory ? JSON.parse(medicalHistory === null || medicalHistory === void 0 ? void 0 : medicalHistory.medicalHistory) : "";
            res.status(200).json({
              message: "Success",
              data: data
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              message: _context2.t0.message
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getMedicalHistory(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // export const updateMedicalHistory = async (req, res) => {
//   try {
//     const { user, body } = req;
//     const medicalHistory = await MedicalHistory.findOneAndUpdate(
//       {
//         userId: user?._id,
//       },
//       {
//         $set: {
//           medicalHistory: JSON.stringify(body),
//         },
//       },
//       { new: true }
//     );
//     let data = {
//       userId: medicalHistory.userId,
//       history: JSON.parse(medicalHistory.medicalHistory),
//     };
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


exports.getMedicalHistory = getMedicalHistory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9tZWRpY2FsSGlzdG9yeS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1lZGljYWxIaXN0b3J5IiwicmVxIiwicmVzIiwiYm9keSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiTWVkaWNhbEhpc3RvcnkiLCJmaW5kT25lQW5kVXBkYXRlIiwidXNlcklkIiwiX2lkIiwibWVkaWNhbEhpc3RvcnkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBzZXJ0Iiwic2V0RGVmYXVsdHNPbkluc2VydCIsImRhdGEiLCJVc2VyIiwiJHNldCIsImlzUHJvZmlsZUNvbXBsZXRlZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZ2V0TWVkaWNhbEhpc3RvcnkiLCJmaW5kT25lIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxvQkFBb0I7QUFBQSwyRkFBRyxpQkFBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV4QkMsWUFBQUEsSUFGd0IsR0FFVEYsR0FGUyxDQUV4QkUsSUFGd0IsRUFFbEJDLElBRmtCLEdBRVRILEdBRlMsQ0FFbEJHLElBRmtCO0FBR2hDQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUhnQztBQUFBLG1CQUtiSSx1QkFBZUMsZ0JBQWYsQ0FDakI7QUFBRUMsY0FBQUEsTUFBTSxFQUFFUixHQUFGLGFBQUVBLEdBQUYsb0NBQUVBLEdBQUcsQ0FBRUcsSUFBUCw4Q0FBRSxVQUFXTTtBQUFyQixhQURpQixFQUVqQjtBQUNFRCxjQUFBQSxNQUFNLEVBQUVMLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFTSxHQURoQjtBQUVFQyxjQUFBQSxjQUFjLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FBRmxCLGFBRmlCLEVBTWpCO0FBQUVXLGNBQUFBLE1BQU0sRUFBRSxJQUFWO0FBQWdCLHFCQUFLLElBQXJCO0FBQTJCQyxjQUFBQSxtQkFBbUIsRUFBRTtBQUFoRCxhQU5pQixDQUxhOztBQUFBO0FBSzFCQyxZQUFBQSxJQUwwQjtBQUFBO0FBQUEsbUJBYTFCQyxhQUFLVCxnQkFBTCxDQUNKO0FBQUVFLGNBQUFBLEdBQUcsRUFBRU4sSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVNO0FBQWIsYUFESSxFQUVKO0FBQUVRLGNBQUFBLElBQUksRUFBRTtBQUFFQyxnQkFBQUEsa0JBQWtCLEVBQUU7QUFBdEI7QUFBUixhQUZJLENBYjBCOztBQUFBO0FBaUJoQ2pCLFlBQUFBLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxjQUFBQSxPQUFPLEVBQUUsdUJBQVg7QUFBb0NOLGNBQUFBLElBQUksRUFBSkE7QUFBcEMsYUFBckI7QUFqQmdDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJoQ2QsWUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQUFBLE9BQU8sRUFBRSxZQUFFQTtBQUFiLGFBQXJCOztBQW5CZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBcEJ0QixvQkFBb0I7QUFBQTtBQUFBO0FBQUEsR0FBMUI7Ozs7QUF1QkEsSUFBTXVCLGlCQUFpQjtBQUFBLDRGQUFHLGtCQUFPdEIsR0FBUCxFQUFZQyxHQUFaO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUFLLHVCQUFlaUIsT0FBZixDQUF1QjtBQUNsRGYsY0FBQUEsTUFBTSxFQUFFUixHQUFGLGFBQUVBLEdBQUYscUNBQUVBLEdBQUcsQ0FBRUcsSUFBUCwrQ0FBRSxXQUFXTTtBQUQrQixhQUF2QixDQUZBOztBQUFBO0FBRXZCQyxZQUFBQSxjQUZ1QjtBQUt2QkssWUFBQUEsSUFMdUIsR0FLaEJMLGNBQWMsR0FDdkJDLElBQUksQ0FBQ2EsS0FBTCxDQUFXZCxjQUFYLGFBQVdBLGNBQVgsdUJBQVdBLGNBQWMsQ0FBRUEsY0FBM0IsQ0FEdUIsR0FFdkIsRUFQeUI7QUFRN0JULFlBQUFBLEdBQUcsQ0FBQ2tCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxjQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQk4sY0FBQUEsSUFBSSxFQUFKQTtBQUF0QixhQUFyQjtBQVI2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVU3QmQsWUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGNBQUFBLE9BQU8sRUFBRSxhQUFFQTtBQUFiLGFBQXJCOztBQVY2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFqQkMsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEdBQXZCLEMsQ0FjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciwgTWVkaWNhbEhpc3RvcnkgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZWRpY2FsSGlzdG9yeSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgYm9keSwgdXNlciB9ID0gcmVxO1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IE1lZGljYWxIaXN0b3J5LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IHVzZXJJZDogcmVxPy51c2VyPy5faWQgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcklkOiB1c2VyPy5faWQsXG4gICAgICAgIG1lZGljYWxIaXN0b3J5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIH0sXG4gICAgICB7IHVwc2VydDogdHJ1ZSwgbmV3OiB0cnVlLCBzZXREZWZhdWx0c09uSW5zZXJ0OiB0cnVlIH1cbiAgICApO1xuICAgIGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHsgX2lkOiB1c2VyPy5faWQgfSxcbiAgICAgIHsgJHNldDogeyBpc1Byb2ZpbGVDb21wbGV0ZWQ6IHRydWUgfSB9XG4gICAgKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQWRkZWQgTWVkaWNhbCBIaXN0b3J5XCIsIGRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1lZGljYWxIaXN0b3J5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWVkaWNhbEhpc3RvcnkgPSBhd2FpdCBNZWRpY2FsSGlzdG9yeS5maW5kT25lKHtcbiAgICAgIHVzZXJJZDogcmVxPy51c2VyPy5faWQsXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IG1lZGljYWxIaXN0b3J5XG4gICAgICA/IEpTT04ucGFyc2UobWVkaWNhbEhpc3Rvcnk/Lm1lZGljYWxIaXN0b3J5KVxuICAgICAgOiBcIlwiO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTdWNjZXNzXCIsIGRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuLy8gZXhwb3J0IGNvbnN0IHVwZGF0ZU1lZGljYWxIaXN0b3J5ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgeyB1c2VyLCBib2R5IH0gPSByZXE7XG4vLyAgICAgY29uc3QgbWVkaWNhbEhpc3RvcnkgPSBhd2FpdCBNZWRpY2FsSGlzdG9yeS5maW5kT25lQW5kVXBkYXRlKFxuLy8gICAgICAge1xuLy8gICAgICAgICB1c2VySWQ6IHVzZXI/Ll9pZCxcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICRzZXQ6IHtcbi8vICAgICAgICAgICBtZWRpY2FsSGlzdG9yeTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgeyBuZXc6IHRydWUgfVxuLy8gICAgICk7XG5cbi8vICAgICBsZXQgZGF0YSA9IHtcbi8vICAgICAgIHVzZXJJZDogbWVkaWNhbEhpc3RvcnkudXNlcklkLFxuLy8gICAgICAgaGlzdG9yeTogSlNPTi5wYXJzZShtZWRpY2FsSGlzdG9yeS5tZWRpY2FsSGlzdG9yeSksXG4vLyAgICAgfTtcblxuLy8gICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbi8vICAgfVxuLy8gfTtcbiJdfQ==