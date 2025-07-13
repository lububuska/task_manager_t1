import { Container, Typography, Box, Button, Paper, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { colors } from '../styles/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskListPage() {
  const tasks = [1, 2, 3, 4, 5, 6];
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3">Менеджер задач</Typography>
      <Box>
        <Button variant="contained" sx={{ backgroundColor: colors.main || '#1976d2', color: 'black' }}>
          + Добавить задачу
        </Button>
        <Button variant="text">Фильтр</Button>
      </Box>
      <Grid container spacing={5} justifyContent="center">
        {tasks.map((task, index) => (
          <Grid
            key={index}
            size = {{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={0}
              onClick={() => navigate(`/task/${task}`)}
              sx={{
                width: '100%',
                maxWidth: 300,
                aspectRatio: '1 / 1',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                fontSize: 24,
                border: 2,
                borderColor: 'black',
                borderRadius: 5,
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <Chip 
                  label='High'
                  size='small'
                  sx={{ 
                    backgroundColor: colors.high,
                    border: 2,
                    borderColor: 'black' 
                  }}
              />
              Задача {task}
              <Typography variant="subtitle1">
                Описание задачи {task}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip 
                  label='To do'
                  size='small'
                  variant='outlined'
                  sx={{ borderColor: 'black', border: 2 }}
                />
                <Chip 
                  label='Documentary'
                  size='small'
                  variant='outlined'
                  sx={{ borderColor: 'black', border: 2 }}
                />
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}