import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Ranking from './containers/Ranking';
import Nav from './containers/Nav';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Reboot/>

				<AppBar>
					<ToolBar>
						<Typography type="title" color="inherit">
							Yahoo!ショッピングランキング
						</Typography>
					</ToolBar>
				</AppBar>

				<Nav />

				<Switch>
					{/* 総合ランキングのルート */}
					<Route path="/all" component={Ranking}/>
					<Route path="/category/1" render={() => <Redirect to="/all" />}/>
					<Route path="/category/:id" render={({match}) => <Ranking categoryId={match.params.id} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
