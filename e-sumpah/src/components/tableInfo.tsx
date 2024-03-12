import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from './Button';
import { Container } from '@mui/material';


const formatDate = (dateString: string): string => {
  const [day, month, year] = dateString.split(/[\/,\s:]/);
  return `${year}-${month}-${day}`;
};

const formatStatus = (status: string): string => {
  return status
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const TableInfo: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://esumpah-backend-admin-dev-l7ropoat7a-uc.a.run.app/api/request', {
      method: 'GET',
      headers: {
        'x-access-token': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        if (Array.isArray(data.data)) {
          setData(data.data);
        } else {
          console.error('Not an array:', data);
          setError('Failed to fetch data');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const filteredData = selectedFilter === 'All' ? data : data.filter((item: any) => formatStatus(item.status) === selectedFilter);

  return (
    <>
      <div className='document-filter'>
        <a href="#" className={selectedFilter === 'All' ? 'active' : ''} onClick={() => setSelectedFilter('All')}>All</a>
        <a href="#" className={selectedFilter === 'Unsigned' ? 'active' : ''} onClick={() => setSelectedFilter('Unsigned')}>Unsgnd</a>
        <a href="#" className={selectedFilter === 'Cfo Assigned' ? 'active' : ''} onClick={() => setSelectedFilter('Cfo Assigned')}>CFO-Assigned</a>
        <a href="#" className={selectedFilter === 'Cfo Unassigned' ? 'active' : ''} onClick={() => setSelectedFilter('Cfo Unassigned')}>CFO-Unassigned</a>
        <a href="#" className={selectedFilter === 'Cfo Unsgnd' ? 'active' : ''} onClick={() => setSelectedFilter('Cfo Unsgnd')}>CFO-Unsgnd</a>
        <a href="#" className={selectedFilter === 'Payment Pending' ? 'active' : ''} onClick={() => setSelectedFilter('Payment Pending')}>Pending Payment</a>
        <a href="#" className={selectedFilter === 'Rejected' ? 'active' : ''} onClick={() => setSelectedFilter('Rejected')}>Rejected</a>
        <a href="#" className={selectedFilter === 'Completed' ? 'active' : ''} onClick={() => setSelectedFilter('Completed')}>Completed</a>
      </div>
      <Container sx={{ mt: 4 }}>
        <TableContainer sx={{ flexDirection: 'column', height: 450 }}>
          <Table sx={{ minWidth: 650, width: 1110, m: 'auto' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 250 }}>File</TableCell>
                <TableCell sx={{ width: 150 }}>Date</TableCell>
                <TableCell sx={{ width: 150 }}>Status</TableCell>
                <TableCell sx={{ width: 100 }}></TableCell>
                <TableCell sx={{ width: 150 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5}>Loading...</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5}>Error: {error}</TableCell>
                </TableRow>
              ) : filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5}>No File found</TableCell>
                </TableRow>
              ) : (
                filteredData.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{item.documentData.document_name}</TableCell>
                    <TableCell>{formatDate(item.created_at)}</TableCell>
                    <TableCell>{formatStatus(item.status)}</TableCell>
                    <TableCell><Button fontSize="16px" color="#FF3D00" backgroundColor="white" paddingLeft="0" paddingRight="0" paddingTop="5px" paddingBottom="5px" width="90px" border="2px solid #FF3D00">View</Button></TableCell>
                    <TableCell>CFO-Instructions</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default TableInfo;
