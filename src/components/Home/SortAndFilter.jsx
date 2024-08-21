import { useDispatch } from "react-redux";
import {
  changeFilter,
  changeSortType,
} from "../../features/filterAndSortSlice/filterAndSortSlice";

export default function SortAndFilter() {
  const dispatch = useDispatch();

  const onSortChange = ({ target: { value } }) => {
    dispatch(changeSortType(value));
  };

  const onFilterChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={onSortChange}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* handle filter on button click */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                defaultChecked=""
                className="radio"
                value="all"
                onChange={onFilterChange}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                value="saved"
                onChange={onFilterChange}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
