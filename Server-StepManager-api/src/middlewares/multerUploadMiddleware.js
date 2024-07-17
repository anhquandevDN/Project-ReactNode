import multer from 'multer'
import { LIMIT_COMMON_FILE_SIZE, ALLOW_COMMON_FILE_TYPES } from '~/utils/validators'

/** Hầu hết những thứ bên dưới đều có ở docs của multer, chỉ là tổ chức lại sao cho khoa học và gọn gàng nhất có thể
 * https://www.npmjs.com/package/multer
 */

// Function Kiểm tra loại file nào được chấp nhận
const customFileFilter = (req, file, callback) => {
  // Thông qua multer thì kiểm tra loại file cần sử dụng mimetype
  // console.log('multer file: ', file)
  if (!ALLOW_COMMON_FILE_TYPES.includes(file.mimetype)) {
    const errMessage = 'File type is invalid'
    return callback(errMessage, null)
  }
  return callback(null, true)
}

// khởi tạo func upload được bọc bởi thằng multer
const upload = multer({
  limits: { fileSize: LIMIT_COMMON_FILE_SIZE }, // giới hạn file tối đa 10mb
  fileFilter: customFileFilter
})

export const multerUploadMiddleware = {
  upload
}
