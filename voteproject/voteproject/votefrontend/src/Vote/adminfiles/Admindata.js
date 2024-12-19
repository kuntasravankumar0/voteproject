import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; // Import the DataTable component
import { TextField, Typography, CircularProgress } from '@mui/material'; // Import CircularProgress for the loading indicator
import Adminapi from '../adminfiles/adminapi';
import { useNavigate } from 'react-router-dom';


function Admindata() {
  const [array, setArray] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true); // Loading state
   const navigate = useNavigate(); 

  useEffect(() => {
    // Start loading when fetching data
    setLoading(true);

    // Fetch data from the API
    Adminapi.voteall()
      .then((res) => {
        setArray(res.data); // Set the array state with the data fetched
        console.log(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching payment data:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#24a0ed',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
    headCells: {
      style: {
        color: 'white',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '13px',
        backgroundColor: '',
      },
    },
    pagination: {
      style: {
        backgroundColor: '',
        color: 'black',
        fontSize: '13px',
        fontWeight: 'bold',
      },
      pageButtonsStyle: {
        color: 'black',
        fill: 'black',
        '&:hover': {
          color: '#ccc',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const columns = [
    {
      name: 'Id',
      selector: (row) => row.id,
      sortable: true,
      width: '81px',
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      width: '201px',
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
      width: '250px',
    },
    {
      name: 'Mobile',
      selector: (row) => row.mobile,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Age',
      selector: (row) => row.age,
      sortable: true,
      width: '90px',
    },
    {
      name: 'Aadhar',
      selector: (row) => row.aadhar,
      sortable: true,
      width: '151px',
    },
    {
      name: 'Password',
      selector: (row) => row.password,
      sortable: true,
      width: '130px',
    },
  ];

  const filteredFiles = array.filter((file) => {
    const idString = file.id ? String(file.id).toLowerCase() : '';
    const zipFileNameString = file.mobile ? String(file.mobile).toLowerCase() : '';
    const paymentIdText = file.aadhar ? String(file.aadhar).toLowerCase() : '';
    return (
      idString.includes(filterText.toLowerCase()) ||
      zipFileNameString.includes(filterText.toLowerCase()) ||
      paymentIdText.includes(filterText.toLowerCase())
    );
  });

  return (
    <div className='container'>
      <div className='' style={{ width: '63%', height: '700px', padding: '', marginLeft: '250px' }}>
        
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            
            <Typography variant="h6" style={{ marginLeft: '20px' }}>
            
            
            
            <div className='loader'></div>  Loading voter data...
            </Typography>
          </div>
        ) : (
          // Show the DataTable once the data is loaded
          <DataTable
            columns={columns}
            data={filteredFiles}
            customStyles={customStyles}
            pagination
            highlightOnHover
            subHeader
            className='react-data-table rounded'
            subHeaderComponent={
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" style={{ marginRight: '480px', color: 'green' }}>
                  <br />
                  <br />
                  Admin login
                  <br />
                  <h2>voter data</h2>
                </Typography>
                <TextField
                  
                  placeholder="Search "
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ marginBottom: '7px', width: '300px', height:"80px" }}
                />
              </div>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Admindata;
