//Styled
import styled from "styled-components";
//BOOTSTRAP
import { Spinner } from "react-bootstrap";


export const Loader = styled(Spinner)`
 display: ${({ show }) => (show ? 'block' : 'none')};
 width: 4rem;
 height: 4rem;
 margin: 1.5rem;
`