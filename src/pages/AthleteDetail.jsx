import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Divider,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  ArrowBack,
  Favorite,
  FavoriteBorder,
  Add as AddIcon,
  PersonOutlined,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

function AthleteDetail() {
  const navigate = useNavigate();
  const { athleteId } = useParams();
  const [isFavorited, setIsFavorited] = useState(true);
  const [newNote, setNewNote] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editingNoteContent, setEditingNoteContent] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Excellent technical skills, particularly in ball control and passing accuracy. Shows great vision on the field and makes intelligent runs. Needs to improve defensive positioning.",
      timestamp: "2024-03-15T10:30:00",
    },
    {
      id: 2,
      content: "Strong physical presence for his age. Good aerial ability and tackling. Could work on speed and agility to become more versatile.",
      timestamp: "2024-03-12T14:15:00",
    },
  ]);

  // Mock athlete data - in real app this would come from API
  const athlete = {
    id: athleteId || '1',
    name: 'John Smith',
    position: 'Forward',
    team: 'LA Galaxy',
    squad: 'U18',
    age: 18,
    graduationYear: 2025,
    dateAdded: 'March 15, 2024',
    tag: 'Must Sign',
    image: null, // Would be athlete photo URL
    seasonStats: {
      goals: 12,
      assists: 8,
      matches: 15,
      minutes: 1350,
      shots: 45,
      shotsOnTarget: 28,
      passAccuracy: 78,
      tackles: 12,
      interceptions: 8,
    },
    leagueComparison: {
      goals: { value: 12, percentile: 85 },
      assists: { value: 8, percentile: 72 },
      passAccuracy: { value: 78, percentile: 65 },
      tackles: { value: 12, percentile: 45 },
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        content: newNote,
        timestamp: new Date().toISOString(),
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  const handleEditNote = (noteId) => {
    const note = notes.find(n => n.id === noteId);
    if (note) {
      setEditingNoteId(noteId);
      setEditingNoteContent(note.content);
    }
  };

  const handleSaveEdit = () => {
    if (editingNoteContent.trim()) {
      setNotes(notes.map(note => 
        note.id === editingNoteId 
          ? { ...note, content: editingNoteContent, timestamp: new Date().toISOString() }
          : note
      ));
      setEditingNoteId(null);
      setEditingNoteContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setEditingNoteContent('');
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case 'Must Sign': return 'error';
      case 'High Potential': return 'success';
      case 'Monitor': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header with back button */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/favorites')} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, flexGrow: 1 }}>
          {athlete.name}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Athlete Profile Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    bgcolor: 'primary.main',
                    mb: 2,
                    fontSize: '3rem'
                  }}
                >
                  <PersonOutlined sx={{ fontSize: '3rem' }} />
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {athlete.name}
                </Typography>
                <Chip 
                  label={athlete.tag} 
                  color={getTagColor(athlete.tag)}
                  sx={{ mb: 2 }}
                />
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Position:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.position}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Team:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.team}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Squad:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.squad}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Age:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.age}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Graduation Year:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.graduationYear}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Date Added:</Typography>
                  <Typography variant="body2" fontWeight="medium">{athlete.dateAdded}</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button 
                  variant="outlined" 
                  color={isFavorited ? "error" : "primary"}
                  fullWidth
                  onClick={handleToggleFavorite}
                  startIcon={isFavorited ? <Favorite /> : <FavoriteBorder />}
                >
                  {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Season Statistics and League Comparison */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Season Statistics */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Season Statistics
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {athlete.seasonStats.goals}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Goals
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {athlete.seasonStats.assists}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Assists
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {athlete.seasonStats.matches}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Matches
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {athlete.seasonStats.minutes}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Minutes
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* League Comparison */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    League Comparison (vs {athlete.position}s)
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Metric</TableCell>
                          <TableCell>Value</TableCell>
                          <TableCell>Percentile</TableCell>
                          <TableCell>Progress</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Goals</TableCell>
                          <TableCell>{athlete.leagueComparison.goals.value}</TableCell>
                          <TableCell>{athlete.leagueComparison.goals.percentile}%</TableCell>
                          <TableCell>
                            <LinearProgress 
                              variant="determinate" 
                              value={athlete.leagueComparison.goals.percentile}
                              sx={{ width: 100 }}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Assists</TableCell>
                          <TableCell>{athlete.leagueComparison.assists.value}</TableCell>
                          <TableCell>{athlete.leagueComparison.assists.percentile}%</TableCell>
                          <TableCell>
                            <LinearProgress 
                              variant="determinate" 
                              value={athlete.leagueComparison.assists.percentile}
                              sx={{ width: 100 }}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Pass Accuracy</TableCell>
                          <TableCell>{athlete.leagueComparison.passAccuracy.value}%</TableCell>
                          <TableCell>{athlete.leagueComparison.passAccuracy.percentile}%</TableCell>
                          <TableCell>
                            <LinearProgress 
                              variant="determinate" 
                              value={athlete.leagueComparison.passAccuracy.percentile}
                              sx={{ width: 100 }}
                            />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tackles</TableCell>
                          <TableCell>{athlete.leagueComparison.tackles.value}</TableCell>
                          <TableCell>{athlete.leagueComparison.tackles.percentile}%</TableCell>
                          <TableCell>
                            <LinearProgress 
                              variant="determinate" 
                              value={athlete.leagueComparison.tackles.percentile}
                              sx={{ width: 100 }}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Notes Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Scout Notes
              </Typography>
              
              {/* Add Note */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Write your notes about this player..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleAddNote}
                  disabled={!newNote.trim()}
                >
                  Add Note
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Notes List */}
              <List>
                {notes.map((note) => (
                  <ListItem key={note.id} alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        <PersonOutlined />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(note.timestamp)}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        editingNoteId === note.id ? (
                          <Box sx={{ mt: 1 }}>
                            <TextField
                              fullWidth
                              multiline
                              rows={3}
                              value={editingNoteContent}
                              onChange={(e) => setEditingNoteContent(e.target.value)}
                              sx={{ mb: 1 }}
                            />
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Button
                                size="small"
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={handleSaveEdit}
                                disabled={!editingNoteContent.trim()}
                              >
                                Save
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                startIcon={<CancelIcon />}
                                onClick={handleCancelEdit}
                              >
                                Cancel
                              </Button>
                            </Box>
                          </Box>
                        ) : (
                          <Box sx={{ mt: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <Typography
                                component="span"
                                variant="body2"
                                color="text.primary"
                                sx={{ flexGrow: 1 }}
                              >
                                {note.content}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditNote(note.id)}
                                  sx={{ color: 'primary.main' }}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteNote(note.id)}
                                  sx={{ color: 'error.main' }}
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Box>
                            </Box>
                          </Box>
                        )
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AthleteDetail;
