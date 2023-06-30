import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Repository } from '../../store/ducks/repositories/types';

import { ApplicationState } from '../../store';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps{
  loadRequest(): void;
}

type Props = StateProps & DispatchProps

class Test extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const {repositories} = this.props;
    console.log('teste: ',repositories)
    return (
      <ul>
      {repositories.map((repo, key ) =>{
        return (
          <li key={key}>{repo.visibility}</li>)}
        )
      } 
    </ul>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
repositories: state.repositories.data 
});

const mapDispatchToProps = (dispatch:Dispatch) => bindActionCreators(RepositoriesActions,dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test)