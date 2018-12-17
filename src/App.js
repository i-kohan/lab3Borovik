import React, { Component } from 'react'
import { AppBar, Tabs, Tab, LinearProgress, Button } from '@material-ui/core'

import RemoveCircle from '@material-ui/icons/RemoveCircle'
import Edit from '@material-ui/icons/Edit'

import { withStyles } from '@material-ui/core/styles'

import Table from './components/Table'
import Modal from './components/Modal'

import './App.css'

import { getCatalogsMetadata, getCatalogData } from './mongo'

const styles = {
  loading: {
    marginTop: 20,
  },
  table: {
    minWidth: 700,
  },
}

class App extends Component {

  state = {
    catalogs: [],
    currentCatalogMetadata: {},
    currentCatalogData: {},
    loading: true,
    modalOpen: false
  } 

  async componentDidMount() {
    const catalogs = await getCatalogsMetadata()
    const currentCatalogMetadata = catalogs[0]
    const currentCatalogData = await getCatalogData(currentCatalogMetadata.name)

    this.setState({
      catalogs,
      currentCatalogMetadata,
      currentCatalogData,
      loading: false
    })
  }

  handleModalOpen = () => this.setState({ modalOpen: true })
  handleModalClose = () => this.setState({ modalOpen: false })

  renderTabs = (tabs) => tabs.map(tab => (
    <Tab
      key={tab.name}
      label={tab.label}
      value={tab.name}
    />
  ))

  renderOperations = (id) => (
    <div>
      <Edit />
      <RemoveCircle />
    </div>
  )

  render() {
    const {
      catalogs,
      loading,
      currentCatalogData,
      currentCatalogMetadata,
      modalOpen
    } = this.state

    console.log(currentCatalogData)
    const { classes } = this.props
    return (
      <div className="App">
        {loading ? (
          <LinearProgress className={classes.loading}/>
        ) : (
        <>
          <AppBar position="static">
            <Tabs value={catalogs[0].name} onChange={this.handleChange}>
              {this.renderTabs(catalogs)}
            </Tabs>
          </AppBar>
          <Table
            renderOperations={this.renderOperations}
            headerRows={currentCatalogMetadata.gridFields}
            rows={currentCatalogData}
          />
          <Button color="primary" onClick={this.handleModalOpen}>Add new</Button>
          <Modal 
            open={modalOpen}
            onClose={this.handleModalClose}
            metadata={currentCatalogMetadata.formFields}
          />
        </>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(App)
