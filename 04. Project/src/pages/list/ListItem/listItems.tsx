import { FunctionComponent } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import IExercise from '../../../models/exercise.ts'

interface ListItemsProps {
    exercises: IExercise[];
}

const ListItems: FunctionComponent<ListItemsProps> = ({ exercises }) => {
    const uniekeLesWaarden = [...new Set(exercises.map((exercise) => exercise.les))];

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 1000,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 500,
                '& ul': { padding: 0 },
            }}
        >
            {uniekeLesWaarden.map((les) => (
                <li key={`section-${les}`}>
                    <ul>
                        <ListSubheader>{`${les}`}</ListSubheader>
                        {exercises
                            .filter((exercise) => exercise.les === les)
                            .map((exercise) => (
                                <ListItem key={`item-${exercise.id}`}>
                                    <ListItemText
                                        primary={
                                            <span>
                                                <strong>Nederlands:</strong> {exercise.nederlands} -{' '}
                                                <strong>Frans:</strong> {exercise.frans}
                                                {exercise.geslacht && (
                                                    <span>
                                                         {' - '} <strong>Geslacht:</strong> {exercise.geslacht}
                                                    </span>
                                                )}
                                            </span>
                                        }
                                    />
                                </ListItem>
                            ))}
                    </ul>
                </li>
            ))}
        </List>
    );
};

export default ListItems;
