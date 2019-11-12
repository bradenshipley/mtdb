import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Components/Home/Home'
// import AllCards from '../components/AllCards/AllCards'
// import Random from '../components/Random/Random'
// import Account from '../containers/Account/Account'

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		{/* <Route path="/all" component={AllCards} />
		<Route path="/mydeck" component={MyDeck} />
		<Route path="/account" component={Account} />
		<Route path="/random" component={Random} /> */}
	</Switch>
)
