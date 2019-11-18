import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
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

export default function MagicCard(props) {
	const [showText, updateShowText] = useState(false)
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={
						props.imageUrl ? props.imageUrl : 'No Image Available'
					}
					title={props.flavor || props.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.name}
					</Typography>
					{showText && (
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							{props.text}
						</Typography>
					)}
				</CardContent>
			</CardActionArea>
			<CardActions>
				{!showText ? (
					<Button
						size="small"
						color="primary"
						onClick={() => {
							updateShowText(true)
						}}
					>
						Show Text
					</Button>
				) : (
					<Button
						size="small"
						color="primary"
						onClick={() => {
							updateShowText(false)
						}}
					>
						Hide Text
					</Button>
				)}
			</CardActions>
		</Card>
	)
}
