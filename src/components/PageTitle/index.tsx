import React from "react";
import { Helmet } from "react-helmet";

interface IPageTitleProps {
  title: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({
  title
}) => {
	return (
		<Helmet>
			<meta charSet='utf-8' />
			<title>{ title } | Days off management</title>
		</Helmet>
	);
};
