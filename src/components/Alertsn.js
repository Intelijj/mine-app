import React from 'react'

export default function Alertsn(props) {
  return (
    
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 {props.alert.type}{props.alert.message}
 
</div>
      
    
  )
}
