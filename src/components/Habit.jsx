import * as React from 'react';
import {
    Card, CardHeader, CardContent, CardActions,
    Avatar, IconButton, Typography,
    Checkbox, FormControlLabel, Box
} from '@mui/material';
import { red, orange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Habit(props) {
    const { id, title, description, checked, streak, handleChange, handleRemove } = props;

    return (
        <Card sx={{ width: 500 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="habit">
                        {title.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={title}
                action={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocalFireDepartmentIcon sx={{ color: orange[800] }} />
                        <Typography variant="body2">{streak}</Typography>
                    </Box>
                }
            />

            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    { description }
                </Typography>
            </CardContent>

            <CardActions>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={() => handleChange(id)}
                            slotProps={{ input: { "aria-label": "mark habit done" } }}
                        />
                    }
                    label="Mark Done"
                />

                <Box sx={{ flexGrow: 1 }} />

                <IconButton
                    aria-label="remove habit"
                    onClick={() => handleRemove(id)}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Habit;