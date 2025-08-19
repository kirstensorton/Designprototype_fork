import React from 'react'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import { 
  DashboardOutlined,
  FavoriteOutlined,
  NoteOutlined,
  EventOutlined
} from '@mui/icons-material'

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          <DashboardOutlined sx={{ mr: 2, verticalAlign: 'middle' }} />
          Scout Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome to your scouting dashboard. Monitor your activities and track your progress.
        </Typography>
      </Box>

      {/* Dashboard Content */}
      <Grid container spacing={3}>
        {/* Quick Stats */}
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Upcoming Games
              </Typography>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Next 2 weeks
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Pending game requests
              </Typography>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This week
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Favorites
              </Typography>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                10
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Saved athletes
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Messaged
              </Typography>
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Athletes
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content Area */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, minHeight: '400px' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Recent Activity
            </Typography>
            <List sx={{ mt: 2 }}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <FavoriteOutlined color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Favorited John Smith"
                  secondary="March 15, 2024"
                />
              </ListItem>
              
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <NoteOutlined color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Wrote note on Sarah Johnson"
                  secondary="March 14, 2024"
                />
              </ListItem>
              
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <EventOutlined color="success" />
                </ListItemIcon>
                <ListItemText
                  primary="Access approved for LA Galaxy U18 vs LAFC U18 (March 15, 2024)"
                  secondary="March 13, 2024"
                />
              </ListItem>
              
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <FavoriteOutlined color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Favorited Mike Davis"
                  secondary="March 12, 2024"
                />
              </ListItem>
              
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <NoteOutlined color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Wrote note on Alex Rodriguez"
                  secondary="March 11, 2024"
                />
              </ListItem>
              
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <EventOutlined color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Requested access to NY Red Bulls U16 vs NYCFC U16 (March 16, 2024)"
                  secondary="March 10, 2024"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ justifyContent: 'flex-start', py: 1.5 }}
              >
                View Upcoming Games
              </Button>
              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ justifyContent: 'flex-start', py: 1.5 }}
              >
                Review Favorites
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
