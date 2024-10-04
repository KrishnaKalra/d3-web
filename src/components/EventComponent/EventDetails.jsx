import React from 'react';
import './EventComponent.css';

function EventDetails({ props }) {
  return (
    <div className="registeration_events">
      <div className='outer-border'>
      <div>
        <p className='Event'>{props.Event}</p>
        <p className='Details'>{props.Details}</p>
        {console.log(props)}
      </div>
      <div className='linkWrapper'>
        <a className='GoogleLink' href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          Go to Google
        </a>
      </div>
    </div>
    </div>
  );
}

export default EventDetails;