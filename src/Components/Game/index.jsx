import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormFirstPage from '../../Containers/Game/WizardFormFirstPage'
import WizardFormSecondPage from '../../Containers/Game/WizardFormSecondPage'


class WizardForm extends Component {
  componentDidMount() {
    this.props.loadItems();
  }

  state = { page: 1 }

  nextPage = () => this.setState({ page: this.state.page + 1 })
  previousPage = () => this.setState({ page: this.state.page - 1 })

  render() {
    const { onSubmit } = this.props
    const { page } = this.state

    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (<WizardFormSecondPage previousPage={this.previousPage} />)}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}


export default WizardForm;
