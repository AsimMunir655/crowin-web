"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.myDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../models");

var updateUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$user, _req$body, firstName, gender, dateOfBirth, height, weight, bloodGroup, adress, state, zipCode, city, country, user, patient;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req === null || req === void 0 ? void 0 : req.body, firstName = _req$body.firstName, gender = _req$body.gender, dateOfBirth = _req$body.dateOfBirth, height = _req$body.height, weight = _req$body.weight, bloodGroup = _req$body.bloodGroup, adress = _req$body.adress, state = _req$body.state, zipCode = _req$body.zipCode, city = _req$body.city, country = _req$body.country;
            console.log(req === null || req === void 0 ? void 0 : req.body);
            user = {};
            _context.next = 6;
            return _models.User.findOneAndUpdate({
              _id: req === null || req === void 0 ? void 0 : req.user._id
            }, {
              firstName: firstName
            }, {
              "new": true
            });

          case 6:
            user = _context.sent;
            _context.next = 9;
            return _models.Patient.findOneAndUpdate({
              userId: req === null || req === void 0 ? void 0 : (_req$user = req.user) === null || _req$user === void 0 ? void 0 : _req$user._id
            }, {
              personalDetails: {
                gender: gender,
                height: height,
                weight: weight,
                bloodGroup: bloodGroup,
                dateOfBirth: new Date(dateOfBirth)
              },
              adressDetails: {
                adress: adress,
                zipCode: zipCode,
                country: country,
                state: state,
                city: city
              }
            }, {
              "new": true
            });

          case 9:
            patient = _context.sent;
            res.status(200).json({
              message: "Success",
              user: user,
              patient: patient
            });
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            res.status(404).json({
              message: _context.t0.message
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function updateUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var myDetails = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$user2, user;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.User.aggregate([{
              $match: {
                _id: req === null || req === void 0 ? void 0 : (_req$user2 = req.user) === null || _req$user2 === void 0 ? void 0 : _req$user2._id
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
              $addFields: {
                personalDetails: "$patient.personalDetails",
                address: "$patient.adressDetails"
              }
            }, {
              $project: {
                __v: 0,
                password: 0,
                updatedAt: 0,
                patient: 0,
                confirmPassword: 0
              }
            }]);

          case 3:
            user = _context2.sent;
            user = user ? user[0] : null;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Error Loading Profile"
            }));

          case 7:
            res.status(200).json({
              message: "Success",
              user: user
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            res.status(404).json({
              message: _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function myDetails(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.myDetails = myDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb250cm9sbGVycy9wYXRpZW50LmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsidXBkYXRlVXNlciIsInJlcSIsInJlcyIsImJvZHkiLCJmaXJzdE5hbWUiLCJnZW5kZXIiLCJkYXRlT2ZCaXJ0aCIsImhlaWdodCIsIndlaWdodCIsImJsb29kR3JvdXAiLCJhZHJlc3MiLCJzdGF0ZSIsInppcENvZGUiLCJjaXR5IiwiY291bnRyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiVXNlciIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJQYXRpZW50IiwidXNlcklkIiwicGVyc29uYWxEZXRhaWxzIiwiRGF0ZSIsImFkcmVzc0RldGFpbHMiLCJwYXRpZW50Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJteURldGFpbHMiLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCIkbG9va3VwIiwiZnJvbSIsImxvY2FsRmllbGQiLCJmb3JlaWduRmllbGQiLCJhcyIsIiR1bndpbmQiLCIkYWRkRmllbGRzIiwiYWRkcmVzcyIsIiRwcm9qZWN0IiwiX192IiwicGFzc3dvcmQiLCJ1cGRhdGVkQXQiLCJjb25maXJtUGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxJQUFNQSxVQUFVO0FBQUEsMkZBQUcsaUJBQU9DLEdBQVAsRUFBWUMsR0FBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFjbEJELEdBZGtCLGFBY2xCQSxHQWRrQix1QkFjbEJBLEdBQUcsQ0FBRUUsSUFkYSxFQUdwQkMsU0FIb0IsYUFHcEJBLFNBSG9CLEVBSXBCQyxNQUpvQixhQUlwQkEsTUFKb0IsRUFLcEJDLFdBTG9CLGFBS3BCQSxXQUxvQixFQU1wQkMsTUFOb0IsYUFNcEJBLE1BTm9CLEVBT3BCQyxNQVBvQixhQU9wQkEsTUFQb0IsRUFRcEJDLFVBUm9CLGFBUXBCQSxVQVJvQixFQVNwQkMsTUFUb0IsYUFTcEJBLE1BVG9C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IGZyb20gXCIuLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7XG4gICAgICBmaXJzdE5hbWUsXG4gICAgICBnZW5kZXIsXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdlaWdodCxcbiAgICAgIGJsb29kR3JvdXAsXG4gICAgICBhZHJlc3MsXG4gICAgICBzdGF0ZSxcbiAgICAgIHppcENvZGUsXG4gICAgICBjaXR5LFxuICAgICAgY291bnRyeSxcbiAgICB9ID0gcmVxPy5ib2R5O1xuICAgIGNvbnNvbGUubG9nKHJlcT8uYm9keSk7XG4gICAgbGV0IHVzZXIgPSB7fTtcbiAgICB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyBfaWQ6IHJlcT8udXNlci5faWQgfSxcbiAgICAgIHsgZmlyc3ROYW1lIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgKTtcblxuICAgIGxldCBwYXRpZW50ID0gYXdhaXQgUGF0aWVudC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAgeyB1c2VySWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB7XG4gICAgICAgIHBlcnNvbmFsRGV0YWlsczoge1xuICAgICAgICAgIGdlbmRlcixcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgd2VpZ2h0LFxuICAgICAgICAgIGJsb29kR3JvdXAsXG4gICAgICAgICAgZGF0ZU9mQmlydGg6IG5ldyBEYXRlKGRhdGVPZkJpcnRoKSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRyZXNzRGV0YWlsczoge1xuICAgICAgICAgIGFkcmVzcyxcbiAgICAgICAgICB6aXBDb2RlLFxuICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgY2l0eSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7IG5ldzogdHJ1ZSB9XG4gICAgKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJTdWNjZXNzXCIsIHVzZXIsIHBhdGllbnQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbXlEZXRhaWxzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmFnZ3JlZ2F0ZShbXG4gICAgICB7XG4gICAgICAgICRtYXRjaDogeyBfaWQ6IHJlcT8udXNlcj8uX2lkIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogXCJwYXRpZW50c1wiLFxuICAgICAgICAgIGxvY2FsRmllbGQ6IFwiX2lkXCIsXG4gICAgICAgICAgZm9yZWlnbkZpZWxkOiBcInVzZXJJZFwiLFxuICAgICAgICAgIGFzOiBcInBhdGllbnRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7ICR1bndpbmQ6IFwiJHBhdGllbnRcIiB9LFxuICAgICAge1xuICAgICAgICAkYWRkRmllbGRzOiB7XG4gICAgICAgICAgcGVyc29uYWxEZXRhaWxzOiBcIiRwYXRpZW50LnBlcnNvbmFsRGV0YWlsc1wiLFxuICAgICAgICAgIGFkZHJlc3M6IFwiJHBhdGllbnQuYWRyZXNzRGV0YWlsc1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJHByb2plY3Q6IHtcbiAgICAgICAgICBfX3Y6IDAsXG4gICAgICAgICAgcGFzc3dvcmQ6IDAsXG4gICAgICAgICAgdXBkYXRlZEF0OiAwLFxuICAgICAgICAgIHBhdGllbnQ6IDAsXG4gICAgICAgICAgY29uZmlybVBhc3N3b3JkOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTtcbiAgICB1c2VyID0gdXNlciA/IHVzZXJbMF0gOiBudWxsO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJFcnJvciBMb2FkaW5nIFByb2ZpbGVcIiB9KTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiwgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn07XG4iXX0=