import React from 'react'

export default function Alert(props) {
    let alertType='';
    if(props.alert!=null || props.alert!=undefined){
        alertType =props.alert.type;
    let capitalWord =alertType.charAt(0);
    capitalWord=capitalWord.toUpperCase();
    alertType= capitalWord+ alertType.slice(1);
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{alertType}</strong> {props.alert.message}
</div>
    </div>
  )}
  else{return;}
  
}
