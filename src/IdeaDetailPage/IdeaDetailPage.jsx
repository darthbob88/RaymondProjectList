import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './IdeaDetailPage.styles';

class IdeaDetailPage extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('IdeaDetailPage will mount');
  }

  componentDidMount = () => {
    console.log('IdeaDetailPage mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('IdeaDetailPage will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('IdeaDetailPage will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('IdeaDetailPage did update');
  }

  componentWillUnmount = () => {
    console.log('IdeaDetailPage will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="IdeaDetailPageWrapper">
        Test content
      </div>
    );
  }
}

IdeaDetailPage.propTypes = {
  // bla: PropTypes.string,
};

IdeaDetailPage.defaultProps = {
  // bla: 'test',
};

export default IdeaDetailPage;
