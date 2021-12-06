/* IMPORT */

import * as React from 'react';
import {connect} from 'overstated';
import Content from './content';

/* MIDDLEBAR */

const Middlebar = ({ isFocus, isZen }) => {

  if ( isFocus || isZen ) return null;

  return (
    <div className="middlebar layout column">
      <Content />
    </div>
  );

};

/* EXPORT */

export default connect ({
})( Middlebar );
