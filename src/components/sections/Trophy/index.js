import React from 'react';
//IMPORT ELEMENTS
import * as S from "./elements.sc";
//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

//BOOTSTRAP
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

import UserScore from "./UserScore"


const Trophy = ({ isOpen, toggle }) => {
  return (
<S.Link>
    <OverlayTrigger
      trigger={['hover', 'focus']}
      key='bottom'
      placement='bottom'
      overlay={
        <Popover id={`popover-positioned-bottom`} >
          <Popover.Content>
            <UserScore/>
          </Popover.Content>
        </Popover>
      }
    >
      <div>Top 5 Scores<FontAwesomeIcon icon={faTrophy} /></div>
    </OverlayTrigger>
</S.Link>
  );
};

export default Trophy;




