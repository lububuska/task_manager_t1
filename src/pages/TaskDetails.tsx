import { Container, Typography, Box, Button, TextField, FormControl, Select, MenuItem } from '@mui/material';
import { colors } from '../styles/colors';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { textFieldStyles, selectMenuProps } from '../styles/textField';

// interface Task {
//   title: string;
//   description: string;
//   category: string;
//   status: string;
//   priority: string;
// }

export default function TaskDetails() {
  const navigate = useNavigate();
  // const { taskId } = useParams();

  // const [formData, setFormData] = useState<Task>({
  //   title: '',
  //   description: '',
  //   category: '',
  //   status: '',
  //   priority: ''
  // });

  // useEffect(() => {
  //   // В будущем здесь будет запрос к API
  //   setFormData({
  //     title: `Задача ${taskId}`,
  //     description: `Достаточно длинное описание задачи. Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. ${taskId}`,
  //     category: 'Documentation',
  //     status: 'To do',
  //     priority: 'High'
  //   });
  // }, [taskId]);

  // const handleChange = (field: string) => (event: any) => {
  //   setFormData({
  //     ...formData,
  //     [field]: event.target.value
  //   });
  // };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = () => {
    navigate('/');
  };

  return (
    <Container disableGutters maxWidth="xl" sx={{ maxWidth: '1024px !important', mx: 'auto', px: 0, width: '100%' }}>
      <Typography variant="h3" sx={{ mb: {xs: 6, sm: 7, md: 8}, fontSize: { xs: 24, sm: 24, md: 40 } }}>
        Редактирование задачи
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography sx={{ mb: 1, fontSize: {xs: 16, sm: 20, md: 24}, textAlign: 'left' }}>Название</Typography>
          <TextField
            fullWidth
            // value={formData.title}
            // onChange={handleChange('title')}
            sx={textFieldStyles}
          />
        </Box>

        <Box>
          <Typography sx={{ mb: 1, fontSize: {xs: 16, sm: 20, md: 24}, textAlign: 'left' }}>Описание</Typography>
          <TextField
            fullWidth
            multiline
            rows={7}
            // value={formData.description}
            // onChange={handleChange('description')}
            sx={textFieldStyles}
          />
        </Box>

        <Box>
          <Typography sx={{ mb: 1, fontSize: {xs: 16, sm: 20, md: 24}, textAlign: 'left' }}>Категория</Typography>
          <FormControl fullWidth>
            <Select
              // value={formData.category}
              // onChange={handleChange('category')}
              sx={textFieldStyles}
              MenuProps={selectMenuProps} 
            >
              <MenuItem value="Bug">Bug</MenuItem>
              <MenuItem value="Feature">Feature</MenuItem>
              <MenuItem value="Documentation">Documentation</MenuItem>
              <MenuItem value="Refactor">Refactor</MenuItem>
              <MenuItem value="Test">Test</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography sx={{ mb: 1, fontSize: {xs: 16, sm: 20, md: 24}, textAlign: 'left' }}>Статус</Typography>
          <FormControl fullWidth>
            <Select
              // value={formData.status}
              // onChange={handleChange('status')}
              sx={textFieldStyles}
              MenuProps={selectMenuProps} 
            >
              <MenuItem value="To do">To do</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Done">Done</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography sx={{ mb: 1, fontSize: {xs: 16, sm: 20, md: 24}, textAlign: 'left' }}>Сложность</Typography>
          <FormControl fullWidth>
            <Select
              // value={formData.priority}
              // onChange={handleChange('priority')}
              sx={textFieldStyles}
              MenuProps={selectMenuProps} 
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, sm: 6 }, mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: colors.main || '#1976d2',
              color: 'black',
              width: { xs: 200, sm: 250, md: 300 },
              height: 50,
              borderRadius: 30,
              fontSize: { xs: 14, sm: 18, md: 24 }
            }}
          >
            Сохранить
          </Button>
          <Button
            variant="contained"
            onClick={handleCancel}
            sx={{
              backgroundColor: colors.main || '#1976d2',
              color: 'black',
              width: { xs: 200, sm: 250, md: 300 },
              height: 50,
              borderRadius: 30,
              fontSize: { xs: 14, sm: 18, md: 24 }
            }}
          >
            Отмена
          </Button>
        </Box>
      </Box>
    </Container>
  );
}