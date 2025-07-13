import { Paper, Box, Chip, Typography, Stack } from '@mui/material';
import { colors } from '../styles/colors';
import { useNavigate } from 'react-router-dom';

interface TaskItemProps {
  taskId: number;
}

export default function TaskItem({ taskId }: TaskItemProps) {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      onClick={() => navigate(`/task/${taskId}`)}
      sx={{
        width: {
          xs: '250px',
          sm: '280px',
          lg: '280px',
          xl: '300px'
        },
        height: {
          xs: '250px',
          sm: '280px',
          lg: '280px',
          xl: '300px'
        },
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        border: 2,
        borderColor: 'black',
        borderRadius: 5,
        px: 1.25,
        py: 1.625,
        gap: 3.125,
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: '100%', gap: 1}}>
        <Box sx={{ alignSelf: 'flex-start' }}>
          <Chip 
            label="High" 
            size="small"
            sx={{ 
              backgroundColor: colors.high,
              border: 2,
              borderColor: 'black',
              width: { xs: 80, sm: 100, md: 120 }
            }}
          />
        </Box>
        <Typography sx={{ alignSelf: 'flex-start', fontFamily: 'Montserrat Alternates', fontSize: { xs: 20, sm: 24 } }}>Задача {taskId}</Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            alignSelf: 'flex-start',
            textAlign: 'left',
            fontSize: { xs: 14, sm: 16 }
          }}
        >
          Достаточно длинное описание задачи. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. {taskId}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 'auto', alignSelf: 'flex-start' }}>
          <Chip 
            label="To do" 
            size="small" 
            variant="outlined"
            sx={{ borderColor: 'black', border: 2 }}
          />
          <Chip 
            label="Documentary" 
            size="small"
            variant="outlined"
            sx={{ borderColor: 'black', border: 2 }}
          />
        </Stack>
      </Box>
    </Paper>
  );
}