"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./auth.routes"));

var _admin = _interopRequireDefault(require("./admin.routes"));

var _patient = _interopRequireDefault(require("./patient.routes"));

var _medicalHistory = _interopRequireDefault(require("./medicalHistory.routes"));

var _medicalCondition = _interopRequireDefault(require("./medicalCondition.routes"));

var _contactUs = require("../controllers/contact-us.controller");

function router(api) {
  api.use("/api/auth", _auth["default"]);
  api.use("/api/admin", _admin["default"]);
  api.use("/api/patient", _patient["default"]);
  api.use("/api/patient", _medicalHistory["default"]);
  api.use("/api/patient", _medicalCondition["default"]);
  api.post("/api/contact-us", _contactUs.contactUs);
}

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9yb3V0ZXMvcm91dGVzLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImFwaSIsInVzZSIsImF1dGhSb3V0ZXMiLCJhZG1pblJvdXRlcyIsInBhdGllbnRSb3V0ZXMiLCJtZWRpY2FsSGlzdG9yeVJvdXRlcyIsIm1lZGljYWxDb25kaXRpb25Sb3V0ZXMiLCJwb3N0IiwiY29udGFjdFVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNuQkEsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsV0FBUixFQUFxQkMsZ0JBQXJCO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFlBQVIsRUFBc0JFLGlCQUF0QjtBQUNBSCxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxjQUFSLEVBQXdCRyxtQkFBeEI7QUFDQUosRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsY0FBUixFQUF3QkksMEJBQXhCO0FBQ0FMLEVBQUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLGNBQVIsRUFBd0JLLDRCQUF4QjtBQUNBTixFQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUyxpQkFBVCxFQUE0QkMsb0JBQTVCO0FBQ0Q7O2VBQ2NULE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGF1dGhSb3V0ZXMgZnJvbSBcIi4vYXV0aC5yb3V0ZXNcIjtcbmltcG9ydCBhZG1pblJvdXRlcyBmcm9tIFwiLi9hZG1pbi5yb3V0ZXNcIjtcbmltcG9ydCBwYXRpZW50Um91dGVzIGZyb20gXCIuL3BhdGllbnQucm91dGVzXCI7XG5pbXBvcnQgbWVkaWNhbEhpc3RvcnlSb3V0ZXMgZnJvbSBcIi4vbWVkaWNhbEhpc3Rvcnkucm91dGVzXCI7XG5pbXBvcnQgbWVkaWNhbENvbmRpdGlvblJvdXRlcyBmcm9tIFwiLi9tZWRpY2FsQ29uZGl0aW9uLnJvdXRlc1wiO1xuaW1wb3J0IHsgY29udGFjdFVzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NvbnRhY3QtdXMuY29udHJvbGxlclwiO1xuXG5mdW5jdGlvbiByb3V0ZXIoYXBpKSB7XG4gIGFwaS51c2UoXCIvYXBpL2F1dGhcIiwgYXV0aFJvdXRlcyk7XG4gIGFwaS51c2UoXCIvYXBpL2FkbWluXCIsIGFkbWluUm91dGVzKTtcbiAgYXBpLnVzZShcIi9hcGkvcGF0aWVudFwiLCBwYXRpZW50Um91dGVzKTtcbiAgYXBpLnVzZShcIi9hcGkvcGF0aWVudFwiLCBtZWRpY2FsSGlzdG9yeVJvdXRlcyk7XG4gIGFwaS51c2UoXCIvYXBpL3BhdGllbnRcIiwgbWVkaWNhbENvbmRpdGlvblJvdXRlcyk7XG4gIGFwaS5wb3N0KFwiL2FwaS9jb250YWN0LXVzXCIsIGNvbnRhY3RVcyk7XG59XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=