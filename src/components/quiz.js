import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui';
import { Flag, Container, AnswerStatus, Heading } from './ui';
import Score from './score';
import { selectCountry, loadQuiz } from '../actions';

class Quiz extends Component {

  onClick(option) {
    if (this.props.selected) {
      return; // option already selected - prevent duplicate clicks
    }
    this.props.selectCountry(option);
    setTimeout(() => {
      this.props.loadQuiz();
    }, 2500);
  }

  renderOptions(type) {
    return this.props.options.map(option => (
      <ListItem
        key={option.iso3}
        onClick={() => this.onClick(option)}
        innerDivStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {type === 'flag' ? <Flag iso3={option.iso3} /> : ''}
        {type === 'country' ? option.name : ''}
        {type === 'capital' ? option.capital : ''}
        <AnswerStatus {...this.props} option={option} />
      </ListItem>
    ));
  }

  render() {
    const { answer, params, score, count } = this.props;

    if (!answer) {
      return <div />;
    }

    const { from, to } = params;

    return (
      <div>

        <Score score={score} count={count} />
        {from === 'flag' ? <Container>
          <Flag iso3={answer.iso3} large />
        </Container> : '' }
        {from === 'country' ? <Heading>{answer.name}</Heading> : ''}
        {from === 'capital' ? <Heading>{answer.capital}</Heading> : ''}
        <List style={{ maxWidth: '100%', width: '35em', margin: '0 auto' }}>
          {this.renderOptions(to)}
        </List>
      </div>
    );
  }
}

export default connect(state => ({ ...state.quiz }), { selectCountry, loadQuiz })(Quiz);
