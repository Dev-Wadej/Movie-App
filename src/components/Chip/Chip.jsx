import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const ClickableAndDeletableChips = ({ title }) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1} sx={{ display: 'flex' }}>
      <Chip
        label={`${title}`}
        // onClick={handleClick}
        // onDelete={handleDelete}
      />
    </Stack>
  );
};

export const ChipWithoutDelete = ({ handleClick }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Clickable Link"
        component="a"
        href="#basic-chip"
        clickable
        onClick={() => handleClick()}
      />
    </Stack>
  );
};
