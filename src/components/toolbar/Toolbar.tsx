import { Component } from 'react';
import './Toolbar.css';

type ToolbarProps = {
  filters: string[],
  selected: string,
  onSelectFilter: (filter: string) => void
}

export class Toolbar extends Component<ToolbarProps> {
  render() {
    const { filters, selected, onSelectFilter } = this.props;

    return (
      <div className='toolbar'>
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => onSelectFilter(filter)}
            className={filter === selected ? 'filterBtn_active' : 'filterBtn'}
          >
            {filter}
          </button>
        ))}  
      </div>
    );
  }
}
