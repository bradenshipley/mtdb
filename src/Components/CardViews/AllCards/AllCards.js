import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'

import Navbar from '../../Navbar/Navbar'
import axios from 'axios'
import MagicCard from '../Card/Card'
const AllCards = () => {
	const [cards, setCards] = useState([])
	useEffect(() => {
		axios
			.get('https://api.magicthegathering.io/v1/cards')
			.then(res => {
				console.table(res.data.cards)
				setCards(...cards, res.data.cards)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<>
			<Navbar></Navbar>
			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="center"
				p={1}
				bgcolor="background.paper"
			>
				{cards &&
					cards.map((el, i) => {
						return (
							<MagicCard
								name={el.name}
								text={el.text}
								flavor={el.flavor}
								imageUrl={el.imageUrl}
							/>
						)
					})}
			</Box>
		</>
	)
}

export default AllCards
