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
  
  // Get saved categories from localStorage
  const getSavedCategories = () => {
    return JSON.parse(localStorage.getItem('athleteCategories') || '{}');
  };
  
  // State for managing current and past favorites
  const [currentFavorites, setCurrentFavorites] = React.useState([
    {
      id: '1',
      name: 'John Smith',
      position: 'Forward',
      age: 18,
      club: 'LA Galaxy',
      squad: 'U18',
      graduationYear: '2025',
      dateAdded: 'March 15, 2024',
      tag: 'Must Sign',
      tagColor: 'error',
      avatarColor: 'primary.main'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      position: 'Midfielder',
      age: 17,
      club: 'NYCFC',
      squad: 'U17',
      graduationYear: '2026',
      dateAdded: 'March 12, 2024',
      tag: 'Monitor',
      tagColor: 'warning',
      avatarColor: 'secondary.main'
    },
    {
      id: '3',
      name: 'Mike Davis',
      position: 'Defender',
      age: 19,
      club: 'Atlanta United',
      squad: 'U19',
      graduationYear: '2024',
      dateAdded: 'March 10, 2024',
      tag: 'High Potential',
      tagColor: 'success',
      avatarColor: 'warning.main'
    },
    {
      id: '4',
      name: 'Alex Rodriguez',
      position: 'Midfielder',
      age: 16,
      club: 'NY Red Bulls',
      squad: 'U16',
      graduationYear: '2027',
      dateAdded: 'March 8, 2024',
      tag: 'Monitor',
      tagColor: 'warning',
      avatarColor: 'info.main'
    },
    {
      id: '5',
      name: 'Emma Wilson',
      position: 'Forward',
      age: 17,
      club: 'Portland Timbers',
      squad: 'U17',
      graduationYear: '2026',
      dateAdded: 'March 7, 2024',
      tag: 'Must Sign',
      tagColor: 'error',
      avatarColor: 'success.main'
    },
    {
      id: '6',
      name: 'Carlos Martinez',
      position: 'Defender',
      age: 18,
      club: 'FC Dallas',
      squad: 'U18',
      graduationYear: '2025',
      dateAdded: 'March 6, 2024',
      tag: 'High Potential',
      tagColor: 'success',
      avatarColor: 'secondary.main'
    },
    {
      id: '7',
      name: 'Jordan Thompson',
      position: 'Goalkeeper',
      age: 19,
      club: 'Seattle Sounders',
      squad: 'U19',
      graduationYear: '2024',
      dateAdded: 'March 5, 2024',
      tag: 'Monitor',
      tagColor: 'warning',
      avatarColor: 'error.main'
    },
    {
      id: '8',
      name: 'Sophia Chen',
      position: 'Midfielder',
      age: 16,
      club: 'Vancouver Whitecaps',
      squad: 'U16',
      graduationYear: '2027',
      dateAdded: 'March 4, 2024',
      tag: 'High Potential',
      tagColor: 'success',
      avatarColor: 'warning.main'
    },
    {
      id: '9',
      name: 'Marcus Johnson',
      position: 'Forward',
      age: 17,
      club: 'Orlando City',
      squad: 'U17',
      graduationYear: '2026',
      dateAdded: 'March 3, 2024',
      tag: 'Must Sign',
      tagColor: 'error',
      avatarColor: 'info.main'
    },
    {
      id: '10',
      name: 'Isabella Garcia',
      position: 'Defender',
      age: 18,
      club: 'Houston Dynamo',
      squad: 'U18',
      graduationYear: '2025',
      dateAdded: 'March 2, 2024',
      tag: 'Monitor',
      tagColor: 'warning',
      avatarColor: 'success.main'
    }
  ]);

  const [pastFavorites, setPastFavorites] = React.useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAthleteClick = (athleteId, isCurrentFavorite = true) => {
    console.log('Navigating to athlete:', athleteId, 'isCurrentFavorite:', isCurrentFavorite);
    navigate(`/athlete/${athleteId}`, { 
      state: { 
        isCurrentFavorite,
        fromFavorites: true 
      } 
    });
  };

  const handleUnfavorite = (athleteId) => {
    // Find the athlete in current favorites
    const athleteToMove = currentFavorites.find(athlete => athlete.id === athleteId);
    
    if (athleteToMove) {
      // Add date unfavorited
      const athleteWithUnfavoriteDate = {
        ...athleteToMove,
        dateUnfavorited: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
      
      // Remove from current favorites
      setCurrentFavorites(prev => prev.filter(athlete => athlete.id !== athleteId));
      
      // Add to past favorites
      setPastFavorites(prev => [athleteWithUnfavoriteDate, ...prev]);
      
      // Remove the category from localStorage
      const athleteCategories = JSON.parse(localStorage.getItem('athleteCategories') || '{}');
      delete athleteCategories[athleteId];
      localStorage.setItem('athleteCategories', JSON.stringify(athleteCategories));
    }
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
                {currentFavorites.map((athlete) => (
                  <TableRow key={athlete.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, bgcolor: athlete.avatarColor }}>
                          <PersonOutlined />
                        </Avatar>
                        <Typography 
                          variant="body1" 
                          sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                          onClick={() => handleAthleteClick(athlete.id, true)}
                        >
                          {athlete.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{athlete.position}</TableCell>
                    <TableCell>{athlete.age}</TableCell>
                    <TableCell>{athlete.club}</TableCell>
                    <TableCell>{athlete.squad}</TableCell>
                    <TableCell>{athlete.graduationYear}</TableCell>
                    <TableCell>{athlete.dateAdded}</TableCell>
                    <TableCell>
                      {(() => {
                        const savedCategories = getSavedCategories();
                        const savedCategory = savedCategories[athlete.id];
                        const tagToShow = savedCategory || athlete.tag;
                        const tagColor = savedCategory ? 
                          (savedCategory === 'Must Sign' ? 'error' : 
                           savedCategory === 'High Potential' ? 'success' : 
                           savedCategory === 'Monitor' ? 'warning' : 'default') : 
                          athlete.tagColor;
                        return <Chip label={tagToShow} size="small" color={tagColor} />;
                      })()}
                    </TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        size="small"
                        onClick={() => handleUnfavorite(athlete.id)}
                      >
                        <Favorite />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          {pastFavorites.length > 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="past favorites athletes table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'grey.100' }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Athlete</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Position</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Club</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Squad</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Graduation Year</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Date Added</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Date Removed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pastFavorites.map((athlete) => (
                    <TableRow key={athlete.id}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ mr: 2, bgcolor: athlete.avatarColor }}>
                            <PersonOutlined />
                          </Avatar>
                          <Typography 
                            variant="body1" 
                            sx={{ fontWeight: 500, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                            onClick={() => handleAthleteClick(athlete.id, false)}
                          >
                            {athlete.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{athlete.position}</TableCell>
                      <TableCell>{athlete.age}</TableCell>
                      <TableCell>{athlete.club}</TableCell>
                      <TableCell>{athlete.squad}</TableCell>
                      <TableCell>{athlete.graduationYear}</TableCell>
                      <TableCell>{athlete.dateAdded}</TableCell>
                      <TableCell>{athlete.dateUnfavorited}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No past favorites yet
            </Typography>
          )}
        </Box>
      )}
    </Box>
  )
}

export default Favorites
