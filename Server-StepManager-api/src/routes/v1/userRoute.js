
import express from 'express'
import { userValidation } from '~/validations/userValidation'
import { userController } from '~/controllers/userController'
import { authMiddleware } from '~/middlewares/authMiddleware'
import { multerUploadMiddleware } from '~/middlewares/multerUploadMiddleware'

const Router = express.Router()

Router.route('/register')
  .post(userValidation.createNew, userController.createNew)

Router.route('/verify')
  .put(userValidation.verifyAccount, userController.verifyAccount)

Router.route('/login')
  .post(userValidation.login, userController.login)

Router.route('/logout')
  .delete(userController.logout)

Router.route('/refresh_token')
  .get(userController.refreshToken)

// Lưu ý ở đây chúng ta đang xử lý upload 1 file với hàm .single, và phía client gửi lên qua FormData với key là 'avatar', trường hợp upload nhiều file hơn thì sẽ dùng tới .array hoặc .fields của multer
// https://www.npmjs.com/package/multer#arrayfieldname-maxcount
Router.route('/update')
  .put(authMiddleware.isAuthorized, multerUploadMiddleware.upload.single('avatar'), userValidation.update, userController.update)

export const userRoute = Router
