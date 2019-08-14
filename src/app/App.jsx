import React from 'react';
import { connect } from 'react-redux';
import * as flashCardActions from '../flashCards/flashCardsActionCreators';
import FlashCardList from '../flashCards/FlashCardList.jsx';
import FlashCardDetail from '../flashCards/FlashCardDetail.jsx';

class App extends React.Component {
    componentDidMount() {
        if (!this.props.flashCards.cards) {
            this.props.fetchCards();
        }
    }
    render() {
        return (
            <>
                <FlashCardList {...this.props} />
                <FlashCardDetail {...this.props} />
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { flashCards: state.flashCards };
}

const mapDispatchToProps = {
    fetchCards: flashCardActions.fetchCards,
    fetchCard: flashCardActions.fetchCardDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(App);