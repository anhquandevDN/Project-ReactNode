

/**
 * LƯU Ý:
 * Đây là file cấu hình cũ của Brevo - Sendinblue với gói thư viện sib-api-v3-sdk
 * HIỆN TẠI KHÔNG DÙNG GÓI NÀY NỮA MÀ CHUYỂN SANG @getbrevo/brevo
*/

import Brevo from 'sib-api-v3-sdk'
import { env } from '~/config/environment'

/**
 * Xem nhanh phần docs cấu hình theo từng ngôn ngữ khác nhau tùy dự án ở Brevo Dashboard > Account > SMTP & API > API Keys
 * https://brevo.com
 * Một cái hướng dẫn khá nhanh để đọc:
 * https://levelup.gitconnected.com/how-to-send-emails-from-node-js-with-sendinblue-c4caacb68f31
 */
const defaultClient = Brevo.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = env.BREVO_API_KEY

// Tạo một cái API Instance dùng để gửi mail
const apiInstance = new Brevo.TransactionalEmailsApi()

const sendEmail = async (recipientEmail, customSubject, customHtmlContent) => {
  try {
    // Tài khoản gửi mail: lưu ý địa chỉ admin email phải là cái email mà các bạn tạo tài khoản trên Brevo
    const adminSender = { email: env.ADMIN_EMAIL_ADDRESS, name: env.ADMIN_EMAIL_NAME }
    // recipients phải là một Array để sau chúng ta có thể tùy biến gửi 1 email tới nhiều user tùy tính năng dự án nhé
    const recipients = [
      { email: recipientEmail }
    ]

    // Khởi tạo một cái mailOptions với những thông tin cần thiết
    const mailOptions = {
      sender: adminSender,
      to: recipients,
      subject: customSubject,
      htmlContent: customHtmlContent
    }

    // Gọi hành động gửi mail
    return apiInstance.sendTransacEmail(mailOptions)
  } catch (error) {
    // Nếu có lỗi trong việc gửi mail thì hãy log cái error ở đây để debug nguyên nhân
    //console.log('BrevoProvider > sendEmail > Error: ', error)
    throw new Error(error)
  }
}

export const BrevoProvider = {
  sendEmail
}