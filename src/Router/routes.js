import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home/Home'
import AllCards from '../Components/CardViews/AllCards/AllCards'
import Random from '../Components/CardViews/Random/Random'
// import MyDeck from '../Components/CardViews/MyDeck/MyDeck'
// import Account from '../Components/Account/Account'

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/all" component={AllCards} />
		{/* <Route path="/mydeck" component={MyDeck} /> */}
		{/* <Route path="/account" component={Account} /> */}
		<Route path="/random" component={Random} />
	</Switch>
)
