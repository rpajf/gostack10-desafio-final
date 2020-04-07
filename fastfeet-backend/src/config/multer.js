import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
        // null instead of err
      });
    },
  }),
};

/*
  cb -> function that receives the error
  if theres no error cb is the function
  with the final filename
*/

// multer can handle multi-part-form data
