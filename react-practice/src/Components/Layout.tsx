import Footer from "./Footer";
import Header from "./Header";
import UsersList from "./UsersList";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <UsersList />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
