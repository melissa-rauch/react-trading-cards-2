//**********************************************
//*************** Static Data ******************
//**********************************************

class TradingCard extends React.Component {
  render() {
  return (
    <div className="card">
      <p>Name: {this.props.name}</p>
      <img src={this.props.imgUrl} />
      <p>Skill: {this.props.skill} </p>
    </div>
  );
  }
}

//*********************************************************
//*************** Trading Card Component ******************
//*********************************************************


class TradingCardContainer extends React.Component {
  constructor() {
    super();

    this.state = { cards: [] }; 
    this.updateCards = this.updateCards.bind(this);
  }

//----------------------updateCards--------------------------

  updateCards() {
    const floatCard = {
      name: 'Float',
      skill: 'baking pretzels',
      imgUrl: '/static/img/float.jpg'
    };

//-----------------------setState-----------------------------

    this.setState({
      cards: [ floatCard ]
    });
  }

//--------------------componentDidMount-----------------------

  componentDidMount() {
    this.updateCards();
  }

//-----------------------render call--------------------------

  render() {
    const tradingCards = [];

    for (const currentCard of this.state.cards) {
      tradingCards.push(
        <TradingCard
          key={currentCard.name}
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div>{tradingCards}</div>
    );
  }
}

//*********************************************************
//******************* ReactDOM.render *********************
//*********************************************************

ReactDOM.render(
  <TradingCardContainer/>, 
  document.getElementById('app')
);

