import './search.scss';

interface Props {
  p?: string;
}

const Search = ({ p = '' }: Props) => {

  const parent = p ? `${p}-search` : '';

  return (
    <div className={['c-search', parent].join(' ')}>
      <i className={[
        'uil uil-search',
        'c-search__icon',
        `${parent}__icon`
      ].join(' ')}></i>
      <input
        type="text"
        className={[
          'c-search__input',
          `${parent}__input`
        ].join(' ')}
        placeholder="Que buscaremos ..."
      />
    </div>
  );
};

export default Search;