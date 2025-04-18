import React, { useState } from 'react';
import { Grid, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface Props {
  filterUsers: (filter: string) => void;
  resetFilter: () => void;
}

const FilterUsersByUsername: React.FC<Props> = ({ filterUsers, resetFilter }) => {
  const [filter, setFilter] = useState<string>('');

  const filterChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilter(value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    filterUsers(filter);
  };

  const resetFilterFields = () => {
    setFilter('');
    resetFilter();
  };

  return (
    <Grid
      size={12}
      component="form"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      onSubmit={submitFormHandler}
    >
      <TextField
        fullWidth
        size="small"
        type="text"
        label="Filter by name"
        variant="outlined"
        value={filter}
        onChange={filterChangeHandler}
      />
      <IconButton type="submit" size="small" sx={{ mx: 0.5 }}>
        <SearchIcon />
      </IconButton>
      <IconButton type="reset" color="error" size="small" onClick={resetFilterFields}>
        <SearchOffIcon />
      </IconButton>
    </Grid>
  );
};

export default FilterUsersByUsername;
