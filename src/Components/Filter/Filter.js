import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import filterActions from '../../redux/filter/filter-Actions';
import { getFilter } from '../../redux/selectors';
let Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChangeFilter = e => {
    dispatch(filterActions(e));
  };
  return (
    <section>
      <label>
        Find contacts by name
        <input
          onChange={e => handleChangeFilter(e.target.value)}
          value={filter}
          name="filter"
          type="text"
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
export default Filter;
