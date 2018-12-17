import React from 'react'
import { Modal } from '@material-ui/core'

import Form from './Form'

import { withStyles } from '@material-ui/core/styles'

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ModalComponent extends React.Component {

  state = {
    current: {}
  }

  handleChange = (name) => () => {
    const { metadata } = this.props

  }

  render() {
    const { open, onClose, metadata, classes } = this.props
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Form metadata={metadata} />
        </div>
    </Modal>
    )
}
}

export default withStyles(styles, { withTheme: true })(ModalComponent)
