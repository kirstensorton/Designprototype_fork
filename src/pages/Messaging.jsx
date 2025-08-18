import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  Button,
  Divider,
  Chip,
  IconButton,
  Badge
} from '@mui/material'
import { 
  MessageOutlined,
  SendOutlined,
  SearchOutlined,
  MoreVertOutlined,
  CircleOutlined
} from '@mui/icons-material'

function Messaging() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          <MessageOutlined sx={{ mr: 2, verticalAlign: 'middle' }} />
          Messaging
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Communicate with your team and other scouts.
        </Typography>
      </Box>

      {/* Messaging Interface */}
      <Grid container spacing={3} sx={{ height: 'calc(100vh - 200px)' }}>
        {/* Contacts List */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 0 }}>
              {/* Search */}
              <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <TextField
                  fullWidth
                  placeholder="Search contacts..."
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: <SearchOutlined sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </Box>

              {/* Contacts */}
              <List sx={{ p: 0 }}>
                <ListItem sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={<CircleOutlined sx={{ fontSize: 12, color: 'success.main' }} />}
                    >
                      <Avatar sx={{ bgcolor: 'primary.main' }}>JD</Avatar>
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary="John Doe"
                    secondary="Head Scout"
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  <Chip label="3" size="small" color="primary" />
                </ListItem>

                <ListItem sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>SM</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sarah Miller"
                    secondary="Regional Coordinator"
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>

                <ListItem sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={<CircleOutlined sx={{ fontSize: 12, color: 'success.main' }} />}
                    >
                      <Avatar sx={{ bgcolor: 'warning.main' }}>RJ</Avatar>
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Robert Johnson"
                    secondary="Youth Coach"
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                  <Chip label="1" size="small" color="primary" />
                </ListItem>

                <ListItem sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'info.main' }}>LW</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Lisa Wilson"
                    secondary="Team Manager"
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>

                <ListItem sx={{ px: 2, py: 1.5, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'error.main' }}>MC</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Mike Chen"
                    secondary="Analyst"
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Chat Area */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>JD</Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" component="h2">
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head Scout • Online
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVertOutlined />
              </IconButton>
            </Box>

            {/* Messages */}
            <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Paper sx={{ p: 2, maxWidth: '70%', bgcolor: 'primary.main', color: 'white' }}>
                  <Typography variant="body2">
                    Hi John, I've completed the scouting report for the youth league match. Should I send it over?
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', mt: 1 }}>
                    2:30 PM
                  </Typography>
                </Paper>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                <Paper sx={{ p: 2, maxWidth: '70%', bgcolor: 'grey.100' }}>
                  <Typography variant="body2">
                    Yes, please send it over. I need to review it before the team meeting tomorrow.
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', mt: 1 }}>
                    2:32 PM
                  </Typography>
                </Paper>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Paper sx={{ p: 2, maxWidth: '70%', bgcolor: 'primary.main', color: 'white' }}>
                  <Typography variant="body2">
                    Perfect! I'll also include some video highlights from the match. The new forward we discussed showed great potential.
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8, display: 'block', mt: 1 }}>
                    2:35 PM
                  </Typography>
                </Paper>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
                <Paper sx={{ p: 2, maxWidth: '70%', bgcolor: 'grey.100' }}>
                  <Typography variant="body2">
                    Excellent! Looking forward to reviewing the footage. How did the technical assessment go?
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.6, display: 'block', mt: 1 }}>
                    2:37 PM
                  </Typography>
                </Paper>
              </Box>
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  placeholder="Type a message..."
                  variant="outlined"
                  size="small"
                  multiline
                  maxRows={3}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: 'auto', px: 2 }}
                >
                  <SendOutlined />
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Messaging
