import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

export default class Ranking extends React.Component {
	// componentWillMount, componentWillReceiveProps
	componentWillMount() {
		this.props.onMount(this.props.categoryId);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.categoryId !== nextProps.categoryId) {
			// props.categoryIdに変化があるので、ページ遷移が発生してる
			this.props.onUpdate(nextProps.categoryId);
		}
	}

	render() {
		const { category, ranking, error } = this.props;

		return (
			<div>
				<h2>{
					typeof category !== 'undefined'
					? `${category.name}のランキング`
					: ''
				}</h2>

				{(() => {
					if (error) {
						// エラー表示
						return <p>エラーが発生しました。リロードしてください。</p>;
					} else if (typeof ranking === 'undefined') {
						// リクエスト完了前
						return <p>読み込み中...</p>;
					} else {
						return ranking.map((item, i) => (
							<Card
								key={`ranking-item-${item.code}`}
								style={{maxWidth: '500px', margin: '32px auto'}}
							>
								<CardMedia
									image={item.imageUrl}
									title={`${i + 1}位 ${item.name}`}
									style={{height: '200px'}}
								/>
								<CardContent>
									<Typography type="title">
										{`${i + 1}位 ${item.name}`}
									</Typography>
								</CardContent>
							</Card>
						));

						return (
							<ol>
								{ranking.map(item => (
									<li key={`ranking-item-${item.code}`}>
										<img alt={item.name} src={item.imageUrl} />
										<a href={item.url} target="_blank">{item.name}</a>
									</li>
								))}
							</ol>
						);
					}
				})()}
			</div>
		);
	}
}

Ranking.propTypes = {
	categoryId: PropTypes.string.isRequired,
	onMount: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,

	category: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}),
	ranking: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
		})
	),
	error: PropTypes.bool.isRequired
};
Ranking.defaultProps = {
	categoryId: '1'
};
