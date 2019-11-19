import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Navbar from '../../Navbar/Navbar'
import axios from 'axios'
import RandomCard from '../Cards/RandomCard'

const Random = () => {
	const [card, setCard] = useState([])
	useEffect(() => {
		axios
			.get(
				`https://api.magicthegathering.io/v1/cards/?page=${Math.random() *
					100}/random`
			)
			.then(res => {
				setCard(res.data.cards[0])
				console.log(res.data.cards[0])
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
				alignItems="flexStart"
				p={1}
				bgcolor="background.paper"
			>
				{card && <RandomCard card={card} />}
			</Box>
		</>
	)
}

export default Random
