
import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../Api'
import { useNavigate } from 'react-router-dom'
import './reg.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Category = () => {
  const navigate = useNavigate();
    const CatData = {
        Categoryname: '',
        Status:'ACTIVE'
      };
    
      const [catData, setcatData] = useState(CatData);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcatData((inputs) => ({ ...inputs, [name]: value }));
      };
    
    //savedata code:
    const SaveData = () => {
      console.log("Attempting to save data:", catData);
      axios.post( baseUrl+'/category/cnew', catData)
        .then((response) => {
          alert("Record Saved");
        })
        .catch((err) => console.log(err));
        navigate('/Categoryview')
    };
    
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
    
      //   // Use FormData to handle file uploads
      //   const formData = new FormData();
      //   formData.append('Categoryname', catData.Categoryname);
      //   formData.append('Status', catData.Status);
    
      //   try {
      //     // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where you handle form submissions
      //     await axios.post(baseUrl+'/category/cnew', formData, {
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      //     });
    
      //     // Handle successful submission, e.g., redirect or show a success message
      //     console.log('Category added successfully!');
      //   } catch (error) {
      //     // Handle errors
      //     console.error('Error adding Category:', error);
      //   }
    
      //   // Reset form data after submission
      //   setcatData(catData);
      // };
    
      const handleReset = () => {
        // Reset form data
        setcatData(catData);
      };
    
      return (
        <div>

          <Topbar/>
          <Sidebar/>
        <div className='aa'>
          
          <h1>Add Category</h1>
          <form >
            <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                    <label htmlFor="Categoryname">Category Name:</label>
                    <input type="text" name="Categoryname" value={catData.Categoryname} onChange={handleInputChange} required />
                  </td>
                 
                </tr>
    
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                    <label htmlFor="Status">Status :</label>
                    <select name="Status" value={catData.Status} onChange={handleInputChange} required >
                        <option value="ACTIVE" >ACTIVE</option>
                        <option value="INACTIVE" >INACTIVE</option>
                    </select>
                  </td>
                 
                </tr>
    
                
              </tbody>
            </table>
    
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={SaveData} style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                ADD 
              </button>
    
              <button type="button" onClick={handleReset} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                RESET
              </button>
            </div>
          </form>
        </div>
        </div>
        
        
      );
    };


export default Category
