import { FC, PropsWithChildren } from "react";
import { MainLayout } from "@/clients/layouts/main.layout";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>;
};
export default Layout;
