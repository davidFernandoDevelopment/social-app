import styles from './search.module.scss';

interface Props {
  p?: string;
}

const Search = ({ p = '' }: Props) => {

  const parent = p ? p : '';

  return (
    <div className={styles['c-search']}>
      <i className={styles['c-search__icon']}></i>
      <input
        type="text"
        className={styles['c-search__input']}
        placeholder="Que buscaremos ..."
      />
    </div>
  );
};

export default Search;