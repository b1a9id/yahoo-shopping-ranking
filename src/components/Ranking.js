import React from 'react';
import PropTypes from 'prop-types';

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
		return (
			<div>
				<h2>Rankingコンポーネント</h2>
				<p>カテゴリーID: {this.props.categoryId }</p>
			</div>
		)
	}
}

Ranking.propTypes = {
	categoryId: PropTypes.string,
	// onMount, onUpdate追加
	onMount: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};
Ranking.defaultProps = {
	categoryId: '1'
};
