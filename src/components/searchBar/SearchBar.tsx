import React from 'react';
import './searchBar.scss';

interface ISearchBarProps {
  searchHandler: (filterQuery: string) => void;
  filterQuery: string;
}

export default class SearchBar extends React.Component<ISearchBarProps> {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const filterQuery = e.target.value;
    this.props.searchHandler(filterQuery);
    localStorage.setItem('searchQuery', filterQuery);
    this.setState({
      filterQuery,
    });
  }

  render(): React.ReactNode {
    const { filterQuery } = this.props;

    return (
      <form className="search__form" role="search">
        <input
          type="search"
          placeholder="Search"
          value={filterQuery}
          onChange={(e) => this.onChange(e)}
          data-testid="input"
        />
      </form>
    );
  }
}
