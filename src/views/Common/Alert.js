import React from 'react'

export default class Alert extends React.Component {
  render() {
    let classname = 'alert '
    if(this.props.type==='info') {
      classname+='alert-info'
    }
    if(this.props.type==='error') {
      classname+='alert-error'
    }
    if(this.props.type==='success') {
      classname+='alert-success'
    }

    return <div className={classname} hidden={this.props.hidden}>
      {this.props.message}
    </div>
  }
}