import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

 function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='mailto:naaaahahahahh@gmail.com' role='button'>
             <MDBIcon fas icon="at" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/hansal-vaikkath-558a43139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/09hanvaik' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='mb-4'>
          <p>
            Thank you for visiting my portfolio page! Hope you have a good day <MDBIcon fas icon="smile-beam" />
          </p>
        </section>
    </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;