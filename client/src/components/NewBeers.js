import React from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/beers';
import {
  Container,
  Divider,
  Button,
  Segment,
  Rail,
  Loader,
  Image,
  Grid,
  Card,
  Header,
} from 'semantic-ui-react';

class NewBeers extends React.Component {

  componentDidMount() {
    const { dispacth } = this.props;
    this.props.dispatch(getBeers())
  }

  render() {
    return(
      <div>
        <Header as='h1' style={styles.text}>NewBeers Component</Header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{ beers: state.beers }
}

const styles = {
  text: {
    color: 'white'
  }
}

export default connect(mapStateToProps)(NewBeers);
