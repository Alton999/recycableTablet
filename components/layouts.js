import BottomNav from "./bottomNav";

const Layout = ({ children }) => {
	return (
		<>
			<main className="h-90v">{children}</main>
			<BottomNav />
		</>
	);
};

export default Layout;
