import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import { 
  FavoriteOutlined,
  Favorite,
  PersonOutlined,
  DescriptionOutlined,
  MoreVertOutlined,
  StarOutlined,
  StarBorderOutlined
} from '@mui/icons-material'

function Favorites() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAthleteClick = (athleteId) => {
    navigate(`/athlete/${athleteId}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
            <FavoriteOutlined sx={{ mr: 2, verticalAlign: 'middle' }} />
            Favorites
          </Typography>
        </Box>
        <Button variant="contained" color="primary">
          Export Favorites
        </Button>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Current" icon={<PersonOutlined />} iconPosition="start" />
          <Tab label="Past" icon={<PersonOutlined />} iconPosition="start" />
        </Tabs>
      </Box>

            {/* Tab Content */}
      {tabValue === 0 && (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="current favorites athletes table">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.100' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Athlete</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Position</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Club</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Squad</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Graduation Year</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date Added</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Tag</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('1')}
                      >
                        John Smith
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Forward</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>LA Galaxy</TableCell>
                  <TableCell>U18</TableCell>
                  <TableCell>2025</TableCell>
                  <TableCell>March 15, 2024</TableCell>
                  <TableCell>
                    <Chip label="Must Sign" size="small" color="error" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'secondary.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('2')}
                      >
                        Sarah Johnson
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Midfielder</TableCell>
                  <TableCell>17</TableCell>
                  <TableCell>NYCFC</TableCell>
                  <TableCell>U17</TableCell>
                  <TableCell>2026</TableCell>
                  <TableCell>March 12, 2024</TableCell>
                  <TableCell>
                    <Chip label="Monitor" size="small" color="warning" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'warning.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('3')}
                      >
                        Mike Davis
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Defender</TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>Atlanta United</TableCell>
                  <TableCell>U19</TableCell>
                  <TableCell>2024</TableCell>
                  <TableCell>March 10, 2024</TableCell>
                  <TableCell>
                    <Chip label="High Potential" size="small" color="success" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'info.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('4')}
                      >
                        Alex Rodriguez
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Midfielder</TableCell>
                  <TableCell>16</TableCell>
                  <TableCell>NY Red Bulls</TableCell>
                  <TableCell>U16</TableCell>
                  <TableCell>2027</TableCell>
                  <TableCell>March 8, 2024</TableCell>
                  <TableCell>
                    <Chip label="Monitor" size="small" color="warning" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'success.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('5')}
                      >
                        Emma Wilson
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Forward</TableCell>
                  <TableCell>17</TableCell>
                  <TableCell>Portland Timbers</TableCell>
                  <TableCell>U17</TableCell>
                  <TableCell>2026</TableCell>
                  <TableCell>March 7, 2024</TableCell>
                  <TableCell>
                    <Chip label="Must Sign" size="small" color="error" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'secondary.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('6')}
                      >
                        Carlos Martinez
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Defender</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>FC Dallas</TableCell>
                  <TableCell>U18</TableCell>
                  <TableCell>2025</TableCell>
                  <TableCell>March 6, 2024</TableCell>
                  <TableCell>
                    <Chip label="High Potential" size="small" color="success" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'error.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('7')}
                      >
                        Jordan Thompson
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Goalkeeper</TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>Seattle Sounders</TableCell>
                  <TableCell>U19</TableCell>
                  <TableCell>2024</TableCell>
                  <TableCell>March 5, 2024</TableCell>
                  <TableCell>
                    <Chip label="Monitor" size="small" color="warning" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'warning.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('8')}
                      >
                        Sophia Chen
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Midfielder</TableCell>
                  <TableCell>16</TableCell>
                  <TableCell>Vancouver Whitecaps</TableCell>
                  <TableCell>U16</TableCell>
                  <TableCell>2027</TableCell>
                  <TableCell>March 4, 2024</TableCell>
                  <TableCell>
                    <Chip label="High Potential" size="small" color="success" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'info.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('9')}
                      >
                        Marcus Johnson
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Forward</TableCell>
                  <TableCell>17</TableCell>
                  <TableCell>Orlando City</TableCell>
                  <TableCell>U17</TableCell>
                  <TableCell>2026</TableCell>
                  <TableCell>March 3, 2024</TableCell>
                  <TableCell>
                    <Chip label="Must Sign" size="small" color="error" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2, bgcolor: 'success.main' }}>
                        <PersonOutlined />
                      </Avatar>
                      <Typography 
                        variant="body1" 
                        sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                        onClick={() => handleAthleteClick('10')}
                      >
                        Isabella Garcia
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Defender</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>Houston Dynamo</TableCell>
                  <TableCell>U18</TableCell>
                  <TableCell>2025</TableCell>
                  <TableCell>March 2, 2024</TableCell>
                  <TableCell>
                    <Chip label="Monitor" size="small" color="warning" />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <Favorite />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
            Past favorites will be displayed here
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default Favorites
