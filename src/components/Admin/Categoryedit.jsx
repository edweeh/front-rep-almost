
import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../Api'
import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './reg.css'

const Categoryedit = (props) => {
    
    const navigate = useNavigate();
      const [catData, setcatData] = useState(props.data);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setcatData((inputs) => ({ ...inputs, [name]: value }));
      };
    
    //savedata code:
    const SaveData = () => {
        if (props.method === 'put')
        {
            console.log("Attempting to save data:", catData);
            axios.put( baseUrl+"/category/cedit/"+catData._id, catData)
              .then((response) => {
                console.log("post data"+response.data)
                alert("Success");
              })
              .catch((err) => console.log(err));
          }
          navigate('/Categoryview')
        }
     
        
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


export default Categoryedit
