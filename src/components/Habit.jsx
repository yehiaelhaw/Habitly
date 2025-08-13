import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, orange } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function Habit(props) {
    const { id, title, description, checked, streak, handleChange, handleRemove } = props;
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="habit">
                            { id }
                        </Avatar>
                    }
                    title={ title }
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        { description }
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton aria-label="remove habit">
                        <DeleteIcon
                            onClick={ handleRemove }
                        />
                    </IconButton>

                    <FormGroup>
                        <FormControlLabel
                            control={ <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ "aria-label": "controlled" }}
                            /> }
                            label="done"
                        />
                    </FormGroup>

                    <IconButton aria-label="streak">
                        <LocalFireDepartmentIcon sx={{ color: orange[800] }}/>
                        { streak }
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Habit;