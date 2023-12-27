import { useEffect, useState } from 'react';
import { fetchRandomUserList } from '../helpers/Fetch';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

export type UserProps = {
	id?: {
		name: string;
		value: string;
	};
	name: {
		first: string;
		last: string;
	};
	gender?: string;
	email: string;
	location?: {
		city: string;
		country: string;
		state: string;
	};
	picture: {
		thumbnail: string;
	};
};

const UsersList = () => {
	const [query, setQuery] = useState('');
	const [users, setUsers] = useState<UserProps[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<UserProps[]>([]);

	const fetchHandler = async () => {
		const fetchedData = await fetchRandomUserList();
		setUsers(fetchedData.results);
		setFilteredUsers(fetchedData.results);
	};

	const searchHandler = (input: string) => {
		setQuery(input);
	};

	useEffect(() => {
		fetchHandler();
	}, []);

	useEffect(() => {
		const userSearch = users.filter((user) => {
			const name = user.name.first + ' ' + user.name.last;
			return name.includes(query) || user.email.includes(query);
		});
		setFilteredUsers(userSearch);
	}, [query]);

	return (
		<div>
			<SearchBar query={query} queryHandler={searchHandler} />
			{filteredUsers.map((item, i) => (
				<div className="flex" key={i}>
					<UserCard
						name={{
							first: item.name.first,
							last: item.name.last,
						}}
						email={item.email}
						picture={{
							thumbnail: item.picture.thumbnail,
						}}
					/>
				</div>
			))}
		</div>
	);
};

export default UsersList;
