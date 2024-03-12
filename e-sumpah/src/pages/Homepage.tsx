import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';
import Button from '../components/Button';
import arrowsvg from '../assets/arrow.svg';
import TableInfo from '../components/tableInfo';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='document-task'>
                <p>Sign Documents</p>
                <Button fontSize="16px">Upload Documents <img src={arrowsvg} alt="Arrow" /></Button>
            </div>
            

            <TableInfo />
            {/* <div className='document-text'>
                <p className='document-main-text'>You haven't signed any documents yet</p>
                <p className='document-sub-text'>Upload a document to get notarized or eSigned now.</p>
            </div>
            <div className='document-action'>
                <Button fontSize="16px" color='#CC0000' backgroundColor='white' paddingLeft="28px" paddingRight="28px" border='2px solid #CC0000'>eSign a Document</Button>
                <Button fontSize="16px" color='rgba(204, 0, 0, 0.3)' backgroundColor='white' paddingLeft="18px" paddingRight="18px" border='2px solid rgba(204, 0, 0, 0.3)'>Notarize a Document</Button>
            </div> */}
        </div>
    );
}

export default HomePage;
