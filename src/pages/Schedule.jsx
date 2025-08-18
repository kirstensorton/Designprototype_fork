import React from 'react'
import { useNavigate } from 'react-router-dom'
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
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Avatar,
  IconButton,
  Menu,
  ListItemButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material'
import { 
  CalendarMonthOutlined,
  EventOutlined,
  LocationOnOutlined,
  PersonOutlined,
  ViewListOutlined,
  CalendarViewMonthOutlined,
  SearchOutlined,
  MoreVertOutlined
} from '@mui/icons-material'

function Schedule() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = React.useState(0)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [dateRange, setDateRange] = React.useState({ start: '', end: '' })
  const [selectedSquad, setSelectedSquad] = React.useState('')
  const [selectedClub, setSelectedClub] = React.useState('')
  const [selectedAccess, setSelectedAccess] = React.useState('')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selectedRowId, setSelectedRowId] = React.useState(null)
  const [withdrawModalOpen, setWithdrawModalOpen] = React.useState(false)

  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  const handleViewChange = (event, newValue) => {
    setViewMode(newValue)
  }

  const handleMoreMenuOpen = (event, rowId) => {
    setAnchorEl(event.currentTarget)
    setSelectedRowId(rowId)
  }

  const handleMoreMenuClose = () => {
    setAnchorEl(null)
    setSelectedRowId(null)
  }

  const handleWithdrawRequest = () => {
    setWithdrawModalOpen(true)
    handleMoreMenuClose()
  }

  const handleWithdrawSubmit = () => {
    // Handle withdraw request logic here
    console.log('Withdraw request submitted for row:', selectedRowId)
    setWithdrawModalOpen(false)
  }

  const handleWithdrawCancel = () => {
    setWithdrawModalOpen(false)
  }

  // Helper function to get team logo or create avatar with initials
  const getTeamLogo = (teamName) => {
    // For now, we'll use avatars with team initials since MLS logos aren't available
    // When MLS logos are added to assets, this can be updated to use actual logo paths
    const initials = teamName.split(' ').map(word => word[0]).join('').slice(0, 2)
    
    return (
      <Avatar 
        sx={{ 
          width: 32, 
          height: 32, 
          fontSize: '12px',
          bgcolor: 'primary.main',
          mr: 1
        }}
      >
        {initials}
      </Avatar>
    )
  }

  // Sample data for the table
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
    },
    {
      id: 4,
      home: 'Seattle Sounders U19',
      score: '2:2',
      away: 'Portland Timbers U19',
      matchId: 'MAT-004',
      squad: 'U19',
      competition: 'MLS Next U19',
      date: '2024-03-18',
      time: '17:30',
      location: 'Lumen Field',
      accessStatus: null
    },
    {
      id: 5,
      home: 'FC Dallas U18',
      score: '3:0',
      away: 'Houston Dynamo U18',
      matchId: 'MAT-005',
      squad: 'U18',
      competition: 'MLS Next U18',
      date: '2024-03-19',
      time: '18:00',
      location: 'Toyota Stadium',
      accessStatus: null
    },
    {
      id: 6,
      home: 'Sporting Kansas City U17',
      score: '1:1',
      away: 'Minnesota United U17',
      matchId: 'MAT-006',
      squad: 'U17',
      competition: 'MLS Next U17',
      date: '2024-03-20',
      time: '19:00',
      location: 'Children\'s Mercy Park',
      accessStatus: 'Approved'
    },
    {
      id: 7,
      home: 'Colorado Rapids U16',
      score: '0:2',
      away: 'Real Salt Lake U16',
      matchId: 'MAT-007',
      squad: 'U16',
      competition: 'MLS Next U16',
      date: '2024-03-21',
      time: '16:30',
      location: 'Dick\'s Sporting Goods Park',
      accessStatus: 'Requested'
    },
    {
      id: 8,
      home: 'Vancouver Whitecaps U18',
      score: '2:0',
      away: 'San Jose Earthquakes U18',
      matchId: 'MAT-008',
      squad: 'U18',
      competition: 'MLS Next U18',
      date: '2024-03-22',
      time: '17:00',
      location: 'BC Place',
      accessStatus: null
    },
    {
      id: 9,
      home: 'Montreal Impact U19',
      score: '1:4',
      away: 'Toronto FC U19',
      matchId: 'MAT-009',
      squad: 'U19',
      competition: 'MLS Next U19',
      date: '2024-03-23',
      time: '18:30',
      location: 'Saputo Stadium',
      accessStatus: 'Rejected'
    },
    {
      id: 10,
      home: 'DC United U17',
      score: '3:1',
      away: 'Philadelphia Union U17',
      matchId: 'MAT-010',
      squad: 'U17',
      competition: 'MLS Next U17',
      date: '2024-03-24',
      time: '15:30',
      location: 'Audi Field',
      accessStatus: null
    }
  ]

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          <CalendarMonthOutlined sx={{ mr: 2, verticalAlign: 'middle' }} />
          Schedule
        </Typography>
        <Button variant="contained" color="primary">
          Download Schedule
        </Button>
      </Box>

      {/* View Toggle */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={viewMode} onChange={handleViewChange}>
          <Tab label="Table View" icon={<ViewListOutlined />} iconPosition="start" />
          <Tab label="Calendar View" icon={<CalendarViewMonthOutlined />} iconPosition="start" />
        </Tabs>
      </Box>

      {/* Content based on view mode */}
      {viewMode === 0 && (
        /* Table View */
        <Box>
          {/* Filters */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2} alignItems="center">
              {/* Search */}
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  placeholder="Search matches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                />
              </Grid>

              {/* Date Range */}
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  type="date"
                  label="From Date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  type="date"
                  label="To Date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              {/* Squad Filter */}
              <Grid item xs={12} md={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Squad</InputLabel>
                  <Select
                    value={selectedSquad}
                    label="Squad"
                    onChange={(e) => setSelectedSquad(e.target.value)}
                  >
                    <MenuItem value="">All Squads</MenuItem>
                    <MenuItem value="U16">U16</MenuItem>
                    <MenuItem value="U17">U17</MenuItem>
                    <MenuItem value="U18">U18</MenuItem>
                    <MenuItem value="U19">U19</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Clubs Filter */}
              <Grid item xs={12} md={2}>
                <FormControl fullWidth size="small">
                  <InputLabel>Clubs</InputLabel>
                  <Select
                    value={selectedClub}
                    label="Clubs"
                    onChange={(e) => setSelectedClub(e.target.value)}
                  >
                    <MenuItem value="">All Clubs</MenuItem>
                    <MenuItem value="LA Galaxy">LA Galaxy</MenuItem>
                    <MenuItem value="LAFC">LAFC</MenuItem>
                    <MenuItem value="NY Red Bulls">NY Red Bulls</MenuItem>
                    <MenuItem value="NYCFC">NYCFC</MenuItem>
                    <MenuItem value="Atlanta United">Atlanta United</MenuItem>
                    <MenuItem value="Orlando City">Orlando City</MenuItem>
                    <MenuItem value="Seattle Sounders">Seattle Sounders</MenuItem>
                    <MenuItem value="Portland Timbers">Portland Timbers</MenuItem>
                    <MenuItem value="FC Dallas">FC Dallas</MenuItem>
                    <MenuItem value="Houston Dynamo">Houston Dynamo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Access Filter */}
              <Grid item xs={12} md={1}>
                <FormControl fullWidth size="small">
                  <InputLabel>Access</InputLabel>
                  <Select
                    value={selectedAccess}
                    label="Access"
                    onChange={(e) => setSelectedAccess(e.target.value)}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Requested">Requested</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="None">No Access</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="schedule table">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.100' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Home</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Score</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Away</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Match ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Squad</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Competition</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Location/Pitch</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Access Status</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ 
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: row.accessStatus === 'Approved' ? 'pointer' : 'default',
                      '&:hover': row.accessStatus === 'Approved' ? {
                        backgroundColor: 'action.hover'
                      } : {}
                    }}
                    onClick={row.accessStatus === 'Approved' ? () => handleGameClick(row.id) : undefined}
                  >
                     <TableCell>
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
                         {getTeamLogo(row.home)}
                         <Typography variant="body2">{row.home}</Typography>
                       </Box>
                     </TableCell>
                     <TableCell>{row.score}</TableCell>
                     <TableCell>
                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
                         {getTeamLogo(row.away)}
                         <Typography variant="body2">{row.away}</Typography>
                       </Box>
                     </TableCell>
                     <TableCell>{row.matchId}</TableCell>
                     <TableCell>{row.squad}</TableCell>
                    <TableCell>{row.competition}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.time}</TableCell>
                                         <TableCell>{row.location}</TableCell>
                     <TableCell>
                       {row.accessStatus ? (
                         <Chip 
                           label={row.accessStatus} 
                           size="small" 
                           sx={{
                             backgroundColor: row.accessStatus === 'Requested' ? '#fbbf24' : undefined,
                             color: row.accessStatus === 'Requested' ? '#000000' : undefined,
                             '& .MuiChip-label': {
                               color: row.accessStatus === 'Requested' ? '#000000' : undefined
                             }
                           }}
                           color={
                             row.accessStatus === 'Approved' ? 'success' :
                             row.accessStatus === 'Rejected' ? 'error' :
                             'default'
                           }
                         />
                       ) : (
                         <Button 
                           variant="outlined" 
                           size="small" 
                           color="secondary"
                         >
                           Request Access
                         </Button>
                                              )}
                     </TableCell>
                     <TableCell>
                       {(row.accessStatus === 'Requested' || row.accessStatus === 'Approved') && (
                         <IconButton
                           size="small"
                           onClick={(event) => handleMoreMenuOpen(event, row.id)}
                           sx={{ color: 'text.secondary' }}
                         >
                           <MoreVertOutlined />
                         </IconButton>
                       )}
                     </TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>

           {/* More Menu */}
           <Menu
             anchorEl={anchorEl}
             open={Boolean(anchorEl)}
             onClose={handleMoreMenuClose}
             PaperProps={{
               sx: {
                 minWidth: 150,
                 boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
               }
             }}
           >
             <ListItemButton onClick={handleWithdrawRequest}>
               <ListItemText primary="Withdraw Request" />
             </ListItemButton>
           </Menu>
        </Box>
      )}

      {viewMode === 1 && (
        /* Calendar View */
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                March 2024
              </Typography>
              
              {/* Calendar Grid */}
              <Box sx={{ mt: 2 }}>
                {/* Day Headers */}
                <Grid container sx={{ mb: 1 }}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <Grid item xs={12/7} key={day}>
                      <Box sx={{ 
                        p: 1, 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                        color: 'text.secondary',
                        fontSize: '0.875rem'
                      }}>
                        {day}
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Calendar Days */}
                <Grid container spacing={0.5}>
                  {/* Empty cells for days before March 1st (March 1st, 2024 is a Friday) */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <Grid item xs={12/7} key={`empty-${i}`}>
                      <Box sx={{ 
                        height: 100, 
                        border: '1px solid #e0e0e0',
                        bgcolor: '#fafafa'
                      }} />
                    </Grid>
                  ))}
                  
                  {/* March 1st - March 31st */}
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1
                    const dayGames = scheduleData.filter(game => {
                      const gameDate = new Date(game.date)
                      return gameDate.getDate() === day
                    })
                    
                    return (
                      <Grid item xs={12/7} key={day}>
                        <Box sx={{ 
                          height: 100, 
                          border: '1px solid #e0e0e0',
                          p: 0.5,
                          position: 'relative',
                          bgcolor: 'white',
                          '&:hover': {
                            bgcolor: '#f5f5f5'
                          }
                        }}>
                          {/* Day Number */}
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              fontWeight: 'bold',
                              mb: 0.5,
                              color: dayGames.length > 0 ? 'primary.main' : 'text.primary'
                            }}
                          >
                            {day}
                          </Typography>
                          
                          {/* Games for this day */}
                          {dayGames.map((game, index) => (
                            <Box 
                              key={game.id}
                              sx={{ 
                                fontSize: '0.7rem',
                                p: 0.5,
                                mb: 0.5,
                                borderRadius: 1,
                                bgcolor: game.accessStatus === 'Approved' ? 'success.light' :
                                         game.accessStatus === 'Requested' ? '#fbbf24' :
                                         game.accessStatus === 'Rejected' ? 'error.light' :
                                         'grey.100',
                                color: game.accessStatus === 'Requested' ? 'black' : 'text.primary',
                                border: '1px solid',
                                borderColor: game.accessStatus === 'Approved' ? 'success.main' :
                                           game.accessStatus === 'Requested' ? '#fbbf24' :
                                           game.accessStatus === 'Rejected' ? 'error.main' :
                                           'grey.300',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                '&:hover': {
                                  bgcolor: game.accessStatus === 'Approved' ? 'success.main' :
                                           game.accessStatus === 'Requested' ? '#f59e0b' :
                                           game.accessStatus === 'Rejected' ? 'error.main' :
                                           'grey.200',
                                  color: 'white'
                                }
                              }}
                            >
                              {game.home.split(' ')[0]} vs {game.away.split(' ')[0]}
                            </Box>
                          ))}
                        </Box>
                      </Grid>
                    )
                  })}
                </Grid>
              </Box>
            </Paper>
          </Grid>

                    <Grid item xs={12} lg={4}>
            <Paper sx={{ p: 3, height: '600px' }}>
              <Typography variant="h6" component="h2" gutterBottom>
                My Upcoming Events
              </Typography>
              
              <List sx={{ mt: 2 }}>
                {scheduleData
                  .filter(game => game.accessStatus === 'Approved' || game.accessStatus === 'Requested')
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .slice(0, 5)
                  .map((game) => {
                    const gameDate = new Date(game.date)
                    const today = new Date()
                    const diffTime = gameDate - today
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
                    
                    let timeLabel = ''
                    let chipColor = 'default'
                    
                    if (diffDays === 0) {
                      timeLabel = 'Today'
                      chipColor = 'primary'
                    } else if (diffDays === 1) {
                      timeLabel = 'Tomorrow'
                      chipColor = 'info'
                    } else if (diffDays <= 7) {
                      timeLabel = 'Next 2 weeks'
                      chipColor = 'info'
                    } else if (diffDays <= 14) {
                      timeLabel = 'Next Week'
                      chipColor = 'default'
                    } else {
                      timeLabel = `${diffDays} days`
                      chipColor = 'default'
                    }
                    
                    return (
                      <ListItem key={game.id} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <EventOutlined color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${game.home} vs ${game.away}`}
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                <LocationOnOutlined sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                                {game.location}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {gameDate.toLocaleDateString('en-US', { 
                                  weekday: 'short', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}, {game.time}
                              </Typography>
                            </Box>
                          }
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5 }}>
                          <Chip 
                            label={timeLabel} 
                            size="small" 
                            color={chipColor}
                          />
                          <Chip 
                            label={game.accessStatus} 
                            size="small" 
                            color={game.accessStatus === 'Approved' ? 'success' : 'warning'}
                            variant="outlined"
                          />
                        </Box>
                      </ListItem>
                    )
                  })}
                
                {scheduleData.filter(game => game.accessStatus === 'Approved' || game.accessStatus === 'Requested').length === 0 && (
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="No upcoming events"
                      secondary="You haven't requested access to any games yet."
                    />
                  </ListItem>
                )}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Withdraw Request Modal */}
      <Dialog
        open={withdrawModalOpen}
        onClose={handleWithdrawCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Withdraw request?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This removes the scout from the game, revoking their access. To regain access, another request must be submitted.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleWithdrawCancel} 
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleWithdrawSubmit} 
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Schedule
