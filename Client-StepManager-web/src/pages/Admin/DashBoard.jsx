import React from 'react'
import SideBar from '~/components/SideBar/SideBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function DashBoard() {
  return (
    <Box sx={{display:'flex'}}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'55px' }}>
        <Typography variant='h4'>
            Welcome to Dashboard Admin
        </Typography>
        <Typography paragraph>
          Hello. Wellcome Admin DashBoard HIEU GIAY HOANG DUNG. Have a nice day Dear!!!
        </Typography>
      </Box>
    </Box>
  )
}