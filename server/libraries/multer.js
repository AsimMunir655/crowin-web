import multer from "multer";
import fs from "fs";

var dir = "./dist/data";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

export const file = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./dist/data");
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
});
