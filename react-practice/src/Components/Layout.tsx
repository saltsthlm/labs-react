import Footer from './Footer';
import Header from './Header';
import UsersList from './UsersList';

const Layout = () => {
	return (
		<>
			<h1>Hi!</h1>
			<Header />
			<main>
				<UsersList />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
