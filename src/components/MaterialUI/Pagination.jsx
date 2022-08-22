import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { usePaginate } from '../../hooks/usePaginate';

export default function PaginationRounded() {
  const { pagenumber, setpagenumber } = usePaginate();
  const handleClick = (e) => {
    if (e.target.localName.includes('svg' || 'path')) {
      setpagenumber((prev) => {
        return prev + 1;
      });
      return;
    }
    const number = parseInt(e.target.textContent);
    setpagenumber(number);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handleClick}
        count={1000}
        sx={{ color: 'text.primary' }}
        shape="rounded"
        page={pagenumber}
        hideNextButton={true}
        hidePrevButton={true}
      />
    </Stack>
  );
}
