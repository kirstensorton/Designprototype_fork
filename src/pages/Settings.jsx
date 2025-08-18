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
  ListItemText,
  ListItemIcon,
  Switch,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Alert
} from '@mui/material'
import { 
  SettingsOutlined,
  NotificationsOutlined,
  SecurityOutlined,
  PersonOutlined,
  LanguageOutlined,
  PaletteOutlined,
  DataUsageOutlined,
  HelpOutlined
} from '@mui/icons-material'

function Settings() {
  const [notifications, setNotifications] = React.useState(true)
  const [emailAlerts, setEmailAlerts] = React.useState(true)
  const [darkMode, setDarkMode] = React.useState(false)
  const [language, setLanguage] = React.useState('en')

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          <SettingsOutlined sx={{ mr: 2, verticalAlign: 'middle' }} />
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your account preferences and application settings.
        </Typography>
      </Box>

      {/* Settings Content */}
      <Grid container spacing={3}>
        {/* Profile Settings */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <PersonOutlined sx={{ mr: 1 }} />
                Profile Settings
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  defaultValue="John Scout"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="john.scout@example.com"
                  margin="normal"
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  defaultValue="+1 (555) 123-4567"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Organization"
                  defaultValue="Kitman Labs"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Position"
                  defaultValue="Senior Scout"
                  margin="normal"
                />
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <NotificationsOutlined sx={{ mr: 1 }} />
                Notifications
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <NotificationsOutlined />
                  </ListItemIcon>
                  <ListItemText
                    primary="Push Notifications"
                    secondary="Receive notifications for new messages and updates"
                  />
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <NotificationsOutlined />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email Alerts"
                    secondary="Get email notifications for important events"
                  />
                  <Switch
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance Settings */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <PaletteOutlined sx={{ mr: 1 }} />
                Appearance
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PaletteOutlined />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dark Mode"
                    secondary="Switch between light and dark themes"
                  />
                  <Switch
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <LanguageOutlined />
                  </ListItemIcon>
                  <ListItemText
                    primary="Language"
                    secondary="Choose your preferred language"
                  />
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                      <MenuItem value="fr">French</MenuItem>
                      <MenuItem value="de">German</MenuItem>
                    </Select>
                  </FormControl>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <SecurityOutlined sx={{ mr: 1 }} />
                Security
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Change Password
                </Button>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Enable Two-Factor Authentication
                </Button>
                <Button variant="outlined" fullWidth>
                  View Login History
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Data & Privacy */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <DataUsageOutlined sx={{ mr: 1 }} />
                Data & Privacy
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Export My Data
                </Button>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Privacy Settings
                </Button>
                <Button variant="outlined" color="error" fullWidth>
                  Delete Account
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Help & Support */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <HelpOutlined sx={{ mr: 1 }} />
                Help & Support
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  View Documentation
                </Button>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Contact Support
                </Button>
                <Button variant="outlined" fullWidth>
                  Report a Bug
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* System Information */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                System Information
              </Typography>
              
              <Alert severity="info" sx={{ mb: 2 }}>
                Application Version: 1.0.0 • Last Updated: March 15, 2024
              </Alert>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Browser: Chrome 120.0
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    OS: macOS 14.0
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Screen: 1920x1080
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="body2" color="text.secondary">
                    Timezone: UTC-5
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Settings
