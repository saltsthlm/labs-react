import { FC } from 'react';

type SearchProps = {
	query: string;
	queryHandler: (input: string) => void;
};

const SearchBar: FC<SearchProps> = ({ query, queryHandler }) => {
	return (
		<input
			type="text"
			value={query}
			onChange={(e) => queryHandler(e.target.value)}
		/>
	);
};

export default SearchBar;
