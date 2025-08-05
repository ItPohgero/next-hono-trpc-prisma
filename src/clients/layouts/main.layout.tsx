import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<header>
				<h1>Welcome to the Main Layout</h1>
			</header>
			<main>{children}</main>
			<footer>
				<p>&copy; 2023 Your Company</p>
			</footer>
		</div>
	);
};
