import React from 'react';
import './searchBar.scss';

interface ISearchBarProps {
  searchHandler: (filterQuery: string) => void;
  filterQuery: string;
}

export default class SearchBar extends React.Component<ISearchBarProps> {
  onChange(e: React.FormEvent<HTMLInputElement>): void {
    const filterQuery = e.currentTarget.value;
    this.props.searchHandler(filterQuery);
    localStorage.setItem('searchQuery', filterQuery);
  }

  render(): React.ReactNode {
    const { filterQuery } = this.props;

    return (
      <form className="search__form" role="search">
        <input
          type="search"
          placeholder="Search"
          value={filterQuery}
          onInput={(e) => this.onChange(e)}
          data-testid="input"
        />
      </form>
    );
  }
}
