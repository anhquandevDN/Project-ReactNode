

// Param socket nó sẽ phải được lấy từ thư viện socket.io
export const inviteUserToBoardSocket = (socket) => {
  // Lắng nghe sự kiện từ phía client có tên là c_user_invited_to_board
  socket.on('c_user_invited_to_board', (invitation) => {
    // Cách làm nhanh & đơn giản nhất: Emit ngược lại một sự kiện về cho mọi client khác (ngoại trừ chính cái thằng gửi request lên), rồi để phía FE check
    socket.broadcast.emit('s_user_invited_to_board', invitation)
  })
}
