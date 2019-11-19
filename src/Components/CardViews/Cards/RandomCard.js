import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	card: {
		maxWidth: 250
	},
	media: {
		height: 350,
		width: 250
	}
})

export default function RandomCard(props) {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={
						props.card.imageUrl
							? props.card.imageUrl
							: 'No Image Available'
					}
					title={props.card.flavor || props.card.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.card.name}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.text}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.type}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.rarity}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.power}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.toughness}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{props.card.legality}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
