import { Container, Typography, Box, Button } from '@mui/material';
import TaskItem from '../components/TaskItem';
import Grid from '@mui/material/Grid';
import { colors } from '../styles/colors';
import React from 'react';

export default function TaskListPage() {
  const tasks = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container disableGutters maxWidth="xl" sx={{ maxWidth: { xl: '1440px !important' }, mx: 0, px: 0, width: '100%', mb: 0 }}>
      <Typography variant="h3" sx={{ mb: {xs: 6, sm: 7, md: 8}, fontSize: { xs: 24, sm: 24, md: '2.125rem' } }}>Менеджер задач</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 3, sm: 4, md: 5 }, mb: {xs: 7, sm: 8, md: 9}, px: {xs: 0, sm: 0, md: 7, lg: 0} }}>
        <Button variant="contained" sx={{ backgroundColor: colors.main || '#1976d2', color: 'black', width: { xs: 200, sm: 250, md: 300 }, height: 45, borderRadius: 30, fontSize: { xs: 13, sm: 18, md: 20 } }}>+ Добавить задачу
        </Button>
        <Button variant="text" sx={{ backgroundColor: 'none', color: 'black', fontSize: { xs: 13, sm: 18, md: 20 } }}>Фильтр</Button>
      </Box>
      <Grid container spacing={8} justifyContent="center">
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
            <TaskItem taskId={task} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}