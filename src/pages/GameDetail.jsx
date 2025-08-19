import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ArrowBack,
  SportsSoccer,
  Person,
  Event,
  Group,
  Edit,
  Add,
  Remove,
  Warning,
  CheckCircle,
  Cancel,
  Sports,
  Favorite,
  FavoriteBorder,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function GameDetail() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [gameType, setGameType] = useState('regular');
  const [viewMode, setViewMode] = useState('list');
  const [teamView, setTeamView] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [favoritePlayers, setFavoritePlayers] = useState(new Set());
  const [playerCategories, setPlayerCategories] = useState({});
  const [newNote, setNewNote] = useState('');
  const [gameNotes, setGameNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editingNoteContent, setEditingNoteContent] = useState('');
  const [favoriteModalOpen, setFavoriteModalOpen] = useState(false);
  const [selectedPlayerForFavorite, setSelectedPlayerForFavorite] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [notesModalOpen, setNotesModalOpen] = useState(false);
  const [selectedPlayerForNotes, setSelectedPlayerForNotes] = useState(null);
  const [playerNote, setPlayerNote] = useState('');
  const [playerNotes, setPlayerNotes] = useState({});

  const handleFavoriteClick = (player) => {
    console.log('Opening favorite modal for player:', player.name);
    setSelectedPlayerForFavorite(player);
    setSelectedCategory(playerCategories[player.id] || '');
    setFavoriteModalOpen(true);
  };

  const handleAddToFavorites = () => {
    if (selectedPlayerForFavorite && selectedCategory) {
      setFavoritePlayers(prev => {
        const newFavorites = new Set(prev);
        newFavorites.add(selectedPlayerForFavorite.id);
        return newFavorites;
      });
      setPlayerCategories(prev => ({
        ...prev,
        [selectedPlayerForFavorite.id]: selectedCategory
      }));
      setFavoriteModalOpen(false);
      setSelectedPlayerForFavorite(null);
      setSelectedCategory('');
    }
  };

  const handleUnfavorite = (player) => {
    setFavoritePlayers(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(player.id);
      return newFavorites;
    });
    setPlayerCategories(prev => {
      const newCategories = { ...prev };
      delete newCategories[player.id];
      return newCategories;
    });
  };

  const handleCancelFavorite = () => {
    setFavoriteModalOpen(false);
    setSelectedPlayerForFavorite(null);
    setSelectedCategory('');
  };

  const handleNoteClick = (player) => {
    setSelectedPlayerForNotes(player);
    // Load existing notes for this player into the input field
    const existingNotes = playerNotes[player.id] || [];
    const notesText = existingNotes.map(note => note.content).join('\n\n');
    setPlayerNote(notesText);
    setNotesModalOpen(true);
  };

  const handleAddPlayerNote = () => {
    if (playerNote.trim() && selectedPlayerForNotes) {
      const newNote = {
        id: Date.now(),
        content: playerNote.trim(),
        timestamp: new Date()
      };
      
      setPlayerNotes(prev => ({
        ...prev,
        [selectedPlayerForNotes.id]: [
          ...(prev[selectedPlayerForNotes.id] || []),
          newNote
        ]
      }));
      
      setPlayerNote('');
      setNotesModalOpen(false);
      setSelectedPlayerForNotes(null);
    }
  };



  const handleSaveNotes = () => {
    if (selectedPlayerForNotes) {
      if (playerNote.trim()) {
        // Save the current note if there's text in the input
        const newNote = {
          id: Date.now(),
          content: playerNote.trim(),
          timestamp: new Date()
        };
        
        setPlayerNotes(prev => ({
          ...prev,
          [selectedPlayerForNotes.id]: [newNote]
        }));
      } else {
        // Remove the player's notes if the input is empty
        setPlayerNotes(prev => {
          const newNotes = { ...prev };
          delete newNotes[selectedPlayerForNotes.id];
          return newNotes;
        });
      }
    }
    
    setNotesModalOpen(false);
    setSelectedPlayerForNotes(null);
    setPlayerNote('');
  };

  const handleCancelNotes = () => {
    setNotesModalOpen(false);
    setSelectedPlayerForNotes(null);
    setPlayerNote('');
  };

  const handleAddGameNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        content: newNote.trim(),
        timestamp: new Date()
      };
      setGameNotes(prev => [note, ...prev]);
      setNewNote('');
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleEditNote = (noteId) => {
    const note = gameNotes.find(n => n.id === noteId);
    if (note) {
      setEditingNoteId(noteId);
      setEditingNoteContent(note.content);
    }
  };

  const handleSaveEdit = () => {
    if (editingNoteContent.trim()) {
      setGameNotes(prev => prev.map(note => 
        note.id === editingNoteId 
          ? { ...note, content: editingNoteContent.trim() }
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
    setGameNotes(prev => prev.filter(note => note.id !== noteId));
  };

  // Get game data from schedule - in real app this would come from API
  const scheduleData = [
    {
      id: 1,
      home: 'LA Galaxy U18',
      score: '2:1',
      away: 'LAFC U18',
      matchId: 'MAT-001',
      squad: 'U18',
      competition: 'MLS Next U18',
      date: '2024-03-15',
      time: '15:00',
      location: 'Dignity Health Sports Park',
      accessStatus: 'Approved'
    },
    {
      id: 2,
      home: 'New York Red Bulls U16',
      score: '0:0',
      away: 'NYCFC U16',
      matchId: 'MAT-002',
      squad: 'U16',
      competition: 'MLS Next U16',
      date: '2024-03-16',
      time: '14:30',
      location: 'Red Bull Arena',
      accessStatus: 'Requested'
    },
    {
      id: 3,
      home: 'Atlanta United U17',
      score: '1:3',
      away: 'Orlando City U17',
      matchId: 'MAT-003',
      squad: 'U17',
      competition: 'MLS Next U17',
      date: '2024-03-17',
      time: '16:00',
      location: 'Mercedes-Benz Stadium',
      accessStatus: 'Rejected'
    }
  ];

  const scheduleGame = scheduleData.find(game => game.id === parseInt(gameId)) || scheduleData[0];
  
  // Parse score to get home and away scores
  const [homeScore, awayScore] = scheduleGame.score.split(':').map(Number);
  
  const game = {
    id: scheduleGame.id,
    homeTeam: scheduleGame.home,
    awayTeam: scheduleGame.away,
    homeScore: homeScore,
    awayScore: awayScore,
    homeHalfScore: 0, // Would come from actual game data
    awayHalfScore: 0, // Would come from actual game data
    date: scheduleGame.date,
    time: scheduleGame.time,
    location: scheduleGame.location,
    competition: scheduleGame.competition,
    squad: scheduleGame.squad,
    matchId: scheduleGame.matchId,
    homePlayers: [
      { id: 1, name: 'Aaron Kosta', jersey: '01', position: 'GK', dob: '08', designation: 'Primary' },
      { id: 2, name: 'John Winston', jersey: '03', position: 'CB', dob: '08', designation: 'Primary(P)' },
      { id: 3, name: 'Wilson Pinstein', jersey: '04', position: 'RB', dob: '09', designation: 'Future' },
      { id: 4, name: 'David Oliver', jersey: '02', position: 'RB', dob: '09', designation: 'Primary' },
      { id: 5, name: 'Bruno Richard', jersey: '08', position: 'CB', dob: '10', designation: 'Primary' },
      { id: 6, name: 'Bruno Orlando', jersey: '15', position: 'DM', dob: '10', designation: 'Primary' },
      { id: 7, name: 'Cathal Erickson', jersey: '18', position: 'RW', dob: '08', designation: 'Primary' },
      { id: 8, name: 'Anderson Barcelos', jersey: '32', position: 'CM', dob: '09', designation: 'Primary' },
      { id: 9, name: 'Brendon Smith', jersey: '11', position: 'RB', dob: '08', designation: 'Future' },
      { id: 10, name: 'Peter Touring', jersey: '31', position: 'LW', dob: '08', designation: 'Future' },
      { id: 11, name: 'Richard Taumas', jersey: '33', position: 'AM', dob: '09', designation: 'Primary' },
      { id: 12, name: 'Victor Glover', jersey: '38', position: 'Oth', dob: '09', designation: 'Primary' },
    ],
    awayPlayers: [
      { id: 14, name: 'John Attorna', jersey: '10', position: 'FW', dob: '08', designation: 'Primary' },
      { id: 15, name: 'Ronda Taumas', jersey: '09', position: 'MF', dob: '09', designation: 'Primary' },
      { id: 16, name: 'Marcus Johnson', jersey: '11', position: 'FW', dob: '08', designation: 'Primary' },
      { id: 17, name: 'Carlos Rodriguez', jersey: '12', position: 'MF', dob: '09', designation: 'Future' },
      { id: 18, name: 'James Wilson', jersey: '13', position: 'DF', dob: '10', designation: 'Primary' },
      { id: 19, name: 'Michael Brown', jersey: '14', position: 'DF', dob: '08', designation: 'Primary' },
      { id: 20, name: 'Alex Thompson', jersey: '15', position: 'MF', dob: '09', designation: 'Future' },
      { id: 21, name: 'Ryan Davis', jersey: '16', position: 'FW', dob: '10', designation: 'Primary' },
      { id: 22, name: 'Chris Martinez', jersey: '17', position: 'DF', dob: '08', designation: 'Primary' },
      { id: 23, name: 'Kevin Lee', jersey: '18', position: 'MF', dob: '09', designation: 'Future' },
      { id: 24, name: 'Daniel Garcia', jersey: '19', position: 'FW', dob: '10', designation: 'Primary' },
      { id: 25, name: 'Robert Taylor', jersey: '20', position: 'GK', dob: '08', designation: 'Primary' },
    ],
    awayStaff: [
      { name: 'Mike Johnson', role: 'Head Coach' },
      { name: 'Sarah Williams', role: 'Assistant Coach' },
      { name: 'Tom Rodriguez', role: 'Equipment Manager' },
      { name: 'Lisa Chen', role: 'Athletic Trainer/Therapist' },
    ],
    events: [
      { id: 38, type: 'substitution', player: 'Victor Glover', team: 'Home team', action: 'Sub-out', time: 32, additionalTime: 0, reason: 'IL', subIn: 'Brendon Smith' },
      { id: 32, type: 'redCard', player: 'Anderson Barcelos', team: 'Home team', action: 'LH', time: 29, additionalTime: 0, reason: 'Unsporting behavior' },
      { id: 15, type: 'yellowCard', player: 'John Attorna', team: 'Away team', action: 'LH', time: 23, additionalTime: 0, reason: 'Serious foul play' },
      { id: 33, type: 'goal', player: 'Ronda Taumas', team: 'Home team', action: 'IR', time: 15, additionalTime: 0, ownGoal: false },
      { id: 38, type: 'goal', player: 'Victor Glover', team: 'Home team', action: 'IR', time: 18, additionalTime: 0, ownGoal: false },
    ],
    homeStaff: [
      { name: 'Lucas Adams', role: 'Head Coach' },
      { name: 'Jo Beverly', role: 'Assistant Coach' },
      { name: 'Daniel Boerio', role: 'Equipment Manager' },
      { name: 'Bruno Bullard', role: 'Athletic Trainer/Therapist' },
    ],
    notes: 'Anderson Barcelos - red card for striking opponent player. John Attorna - yellow card for delaying the restart of play.',
    disciplinaryIssue: true,
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'goal': return <SportsSoccer color="success" />;
      case 'yellowCard': return <Warning sx={{ color: '#ff9800' }} />;
      case 'redCard': return <Cancel sx={{ color: '#f44336' }} />;
      case 'substitution': return <Add sx={{ color: '#2196f3' }} />;
      default: return <Event />;
    }
  };

  const getDesignationColor = (designation) => {
    if (designation.includes('Primary')) return 'primary';
    if (designation.includes('Future')) return 'secondary';
    return 'default';
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
        <IconButton onClick={() => navigate('/schedule')} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, flexGrow: 1 }}>
          {game.homeTeam} vs {game.awayTeam}
        </Typography>
      </Box>

      {/* Score Display with Game Type Toggle and Game Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            {/* Game Type Selection */}
            <Box>
              <ToggleButtonGroup
                value={gameType}
                exclusive
                onChange={(e, newValue) => newValue && setGameType(newValue)}
                size="small"
              >
                <ToggleButton value="regular">Regular / Extra Time</ToggleButton>
                <ToggleButton value="penalty">Penalty Shoot-out</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* Score Display - Centered */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2
            }}>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                {game.homeTeam.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </Avatar>
              <Typography variant="h4" fontWeight="bold">
                {game.homeScore} - {game.awayScore}
              </Typography>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                {game.awayTeam.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </Avatar>
            </Box>

            {/* Game Information - Right side */}
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" gutterBottom>
                {game.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {game.date} at {game.time}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* View Mode Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={(e, newValue) => newValue && setViewMode(newValue)}
            size="small"
          >
            <ToggleButton value="list">List view</ToggleButton>
            <ToggleButton value="pitch">Pitch view</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Player Roster */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Player Roster
                </Typography>
                <ToggleButtonGroup
                  value={teamView}
                  exclusive
                  onChange={(e, newValue) => newValue && setTeamView(newValue)}
                  size="small"
                >
                  <ToggleButton value="home">Home Team</ToggleButton>
                  <ToggleButton value="away">Away Team</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Player</TableCell>
                      <TableCell>Jersey no.</TableCell>
                      <TableCell>Position</TableCell>
                      <TableCell>DOB</TableCell>
                      <TableCell>Designation</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(teamView === 'home' ? game.homePlayers : game.awayPlayers).map((player) => (
                      <TableRow key={player.id}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 1, width: 24, height: 24, fontSize: '0.75rem' }}>
                              <Person fontSize="small" />
                            </Avatar>
                            <Typography variant="body2">{player.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>#{player.jersey}</TableCell>
                        <TableCell>{player.position}</TableCell>
                        <TableCell>{player.dob}</TableCell>
                                                                         <TableCell>
                          <Chip 
                            label={player.designation} 
                            size="small" 
                            color={getDesignationColor(player.designation)}
                          />
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                            <Tooltip 
                              title={favoritePlayers.has(player.id) && playerCategories[player.id] ? playerCategories[player.id] : ''}
                              placement="bottom"
                              disableHoverListener={!favoritePlayers.has(player.id) || !playerCategories[player.id]}
                              arrow
                              sx={{ 
                                '& .MuiTooltip-tooltip': {
                                  fontSize: '12px',
                                  padding: '4px 8px'
                                }
                              }}
                            >
                              <IconButton
                                size="small"
                                onClick={() => favoritePlayers.has(player.id) ? handleUnfavorite(player) : handleFavoriteClick(player)}
                                sx={{ color: favoritePlayers.has(player.id) ? 'primary.main' : 'action.disabled' }}
                              >
                                {favoritePlayers.has(player.id) ? <Favorite /> : <FavoriteBorder />}
                              </IconButton>
                            </Tooltip>
                            <Box sx={{ position: 'relative' }}>
                              <IconButton
                                size="small"
                                onClick={() => handleNoteClick(player)}
                                sx={{ color: 'action.active' }}
                                aria-label={`Add note for ${player.name}`}
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                  note_add
                                </span>
                              </IconButton>
                              {playerNotes[player.id] && playerNotes[player.id].length > 0 && (
                                <Box
                                  sx={{
                                    position: 'absolute',
                                    top: 4,
                                    right: 4,
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: 'primary.main',
                                    border: '1px solid white'
                                  }}
                                />
                              )}
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Event List */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Event list
              </Typography>
              
              {/* Filters */}
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Events</InputLabel>
                  <Select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    label="Events"
                  >
                    <MenuItem value="">All Events</MenuItem>
                    <MenuItem value="goal">Goals</MenuItem>
                    <MenuItem value="card">Cards</MenuItem>
                    <MenuItem value="substitution">Substitutions</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Players</InputLabel>
                  <Select
                    value={selectedPlayer}
                    onChange={(e) => setSelectedPlayer(e.target.value)}
                    label="Players"
                  >
                    <MenuItem value="">All Players</MenuItem>
                    {game.homePlayers.concat(game.awayPlayers).map((player) => (
                      <MenuItem key={player.id} value={player.id}>{player.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* Events */}
              <List>
                {game.events.map((event) => (
                  <ListItem key={event.id} sx={{ px: 0 }}>
                    <ListItemAvatar>
                      {getEventIcon(event.type)}
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" fontWeight="medium">
                            Event #{event.id}: {event.player} ({event.team})
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {event.time} min
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.primary">
                            {event.action}
                          </Typography>
                          {event.type === 'substitution' && event.subIn && (
                            <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }}>
                              {event.subIn} Sub in
                            </Typography>
                          )}
                          {event.reason && (
                            <Typography variant="caption" color="text.secondary">
                              Reason: {event.reason}
                            </Typography>
                          )}
                          {event.type === 'goal' && (
                            <FormControlLabel
                              control={<Switch size="small" checked={event.ownGoal} />}
                              label="Mark as own goal"
                              sx={{ mt: 1 }}
                            />
                          )}

                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Staff */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Staff
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Staff</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(teamView === 'home' ? game.homeStaff : game.awayStaff).map((member, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ mr: 1, width: 24, height: 24, fontSize: '0.75rem' }}>
                              <Person fontSize="small" />
                            </Avatar>
                            <Typography variant="body2">{member.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{member.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Game Notes */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Game notes
              </Typography>
              
              {/* Add Note */}
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Add notes about the game..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  sx={{ mb: 1 }}
                />
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleAddGameNote}
                  disabled={!newNote.trim()}
                >
                  Add Note
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Notes List */}
              <List>
                {gameNotes.map((note) => (
                  <ListItem key={note.id} alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemText
                      primary={
                        <Box sx={{ textAlign: 'left' }}>
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

      {/* Favorite Modal */}
      <Dialog
        open={favoriteModalOpen}
        onClose={handleCancelFavorite}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Add "{selectedPlayerForFavorite?.name}" to favorites
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Choose a category to apply to the athlete.
          </Typography>
          
          <RadioGroup
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{ '& .MuiFormControlLabel-root': { mb: 1 } }}
          >
            <FormControlLabel
              value="Must Sign"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Must Sign
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    High priority athlete that should be signed immediately
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="High Potential"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    High Potential
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Athlete with excellent potential for future development
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="Monitor"
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Monitor
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Athlete to keep an eye on for potential opportunities
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelFavorite}>
            Cancel
          </Button>
          <Button 
            onClick={handleAddToFavorites}
            variant="contained"
            disabled={!selectedCategory}
          >
            Add to favorites
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notes Modal */}
      <Dialog
        open={notesModalOpen}
        onClose={handleCancelNotes}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Add notes
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <TextField
              fullWidth
              multiline
              rows={8}
              placeholder="Enter your notes here..."
              value={playerNote}
              onChange={(e) => setPlayerNote(e.target.value)}
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelNotes}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveNotes}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default GameDetail;
