import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../Api';
import {Buffer} from 'buffer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Petedit from './Petedit';
import './reg.css'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
const PetV = () => {
  const [petList, setPetList] = useState([]);
  var[selected,setSelected] = useState();
  var[update,setUpdate] = useState(false);

  useEffect(() => {
    // Fetch pet data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(baseUrl+'/pet/tfetch');
      console.log(response.data);
      
      setPetList(response.data);
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }
  };

  const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put(baseUrl+"/pet/updatestatus/"+id)
    .then((response)=>{
        alert("DELETED")
     })
  }

  const updatevalues =(value)=>{
    console.log("updated",value);
    setSelected(value);
    setUpdate(true);
    }
    var result=

    <div>
          <Topbar/>
          <Sidebar/>
        <div className='aa'>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>View All Pets</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Pet Code</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Pet Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>CategoryName</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Breed</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Gender</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Color</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Image</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Edit</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Delete</th>

            {/* Add other fields here */}
          </tr>
        </thead>
        <tbody>
          {petList.map((pet) => (
            <tr key={pet._id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Petcode}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.PetName}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.pet[0].Categoryname}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Breed}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Age}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Gender}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Price}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Color}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Description}</td>
              <img src={`data:image/*;base64,${Buffer.from(pet.Image.data).toString()}`} width="50" height="50" alt='Error' />   
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Status}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
              <ModeEditOutlineIcon color='success' onClick={()=>updatevalues(pet)} />
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
               <DeleteForeverIcon color='error' onClick={()=>deletevalues(pet._id)}/>
              </td>
              {/* Add other fields here */}

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

  if(update)
  {
    result=<Petedit data={selected} method='put'/>
  }
return (result)
};

export default PetV;
