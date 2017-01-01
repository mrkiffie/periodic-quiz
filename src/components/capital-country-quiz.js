import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectCountry, loadQuiz} from '../actions';
import Score from './score';

class CapitalCountryQuiz extends Component {

  onClick(option) {
    this.props.selectCountry(option);
    setTimeout(() => {
      this.props.loadQuiz();
    }, 2500);
  }

  renderOptions() {
    const {answer, selected} = this.props;
    return this.props.options.map(option => {
      const correct = option.iso === answer.iso;
      const incorrect = selected && selected.iso === option.iso && !correct;
      
      return (
        <li key={option.iso3} >
            <button 
              className={`${incorrect ? 'incorrect' : ''} ${selected && correct ? 'correct' : ''}`}
              onClick={() => this.onClick(option)} > 
              {option.name} 
            </button>
        </li>
      );
    });
  }

  render() {
    const answer = this.props.answer;

    if (!answer) {
      return <div></div>;
    }

    return (
      <div className="capital-country-quiz">
        <Score score={this.props.score} count={this.props.count}/>
        <h1>{answer.capital}</h1>
        <ul className="name-list cf">
          {this.renderOptions()}
        </ul>      
      </div>
    );
  }
}

export default connect(state => ({...state.quiz}), {selectCountry, loadQuiz})(CapitalCountryQuiz);
