import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const ClickableAndDeletableChips = ({ title }) => {
  return (
    <Stack direction="row" spacing={1} sx={{ display: 'flex' }}>
      <Chip label={`${title}`} size="small" />
    </Stack>
  );
};

export const ChipWithoutDelete = ({ handleClick }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <Chip
        label="Clickable Link"
        component="a"
        size="small"
        href="#basic-chip"
        clickable
        onClick={() => handleClick()}
      />
    </Stack>
  );
};
