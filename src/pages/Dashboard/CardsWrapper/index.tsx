import React from "react";
import { Card, Row, Col } from "antd";
import { ICard } from "../../../utils/types";
import "./cards.scss";
import { Link } from "react-router-dom";

interface ICardsWrapperProps {
	cards: ICard[];
}

export const CardsWrapper: React.FC<ICardsWrapperProps> = ({ cards }) => {
	return (
		<Row gutter={16}>
			{cards.map((card) => (
				<Col key={card.title} span={6}>
					<Link to={ card.link }>
						<Card className={`theme-color ${card.themeColor}`}>
							<h2 className='card-title'>{card.title}</h2>
							{card.icon}
						</Card>
					</Link>
				</Col>
			))}
		</Row>
	);
};
