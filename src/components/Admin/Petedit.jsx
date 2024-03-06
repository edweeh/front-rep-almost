import React, { useState,useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../Api'
import { useNavigate } from 'react-router-dom';
import {Buffer} from 'buffer';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import './reg.css'
const Petedit = (props) => {


  const [petData, setPetData] = useState(props.data);
   var [selectedimage,setSelectedimage] = useState(null);
  var[Category,setCategory] = useState([]);

  const navigate= useNavigate();
  

  useEffect(()=>{
    axios.get(baseUrl + "/category/cfetch")
    .then(response =>{
        console.log(response.data)
        setCategory(response.data)
    })
    .catch(err=>console.log(err))
},[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData((inputs) => ({ ...inputs, [name]: value }));
    
  };

  

//savedata code:
// const SaveData = () => {
//     if (props.method === 'put')
//     {
//         console.log("Attempting to save data:", petData);
//         axios.put( baseUrl+"/pet/pedit/"+petData._id, petData)
//           .then((response) => {
//             console.log("post data"+response.data)
//             alert("Success");
//           })
//           .catch((err) => console.log(err));
//       }
     
// };

const SaveData = () => {

const formData = new FormData();
formData.append('Petcode', petData.Petcode);
formData.append('PetName', petData.PetName);
formData.append('cid', petData.cid);
formData.append('Breed', petData.Breed);
formData.append('Age', petData.Age);
formData.append('Gender', petData.Gender);
formData.append('Price', petData.Price);
formData.append('Color', petData.Color);
formData.append('Description', petData.Description);
formData.append('Status', petData.Status);
formData.append('Image', selectedimage);

fetch(baseUrl+`/pet/petedit/${petData._id}`,
{ method: 'put', body: formData, })
.then((response) => response.json())
.then((data) => {
    alert("record saved")
})
.catch((err) => {
    console.log("error", err)
})


  navigate('/Petview')

}


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file)
  };

  

//   const handleReset = () => {
//     // Reset form data
//     setPetData(initialPetData);
//   };

  return (
    <div>
     <Topbar/>
          <Sidebar/>
        <div className='aa'>
      <h1>Add a New Pet</h1>
      <form >
        <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
          <tbody>

          <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Petcode">Pet Code:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Petcode" value={petData.Petcode} onChange={handleInputChange} required />
              </td>
            </tr>


            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="PetName">Pet Name:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="PetName" value={petData.PetName} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Category">Category</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>

              <select name="cid" value={petData.cid} onChange={handleInputChange}  >
                {
                  Category.map((value,index)=>{
                   return(
                    <option key={index} value={value._id}>{value.Categoryname}</option>
                )


            })
        }
    </select>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Breed">Breed:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Breed" value={petData.Breed} onChange={handleInputChange} required />
              </td>
            </tr>

          
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Age">Age(in months):</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Age" value={petData.Age} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Gender">Gender:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <select name="Gender" value={petData.Gender} onChange={handleInputChange} required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Price">Price:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Price" value={petData.Price} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Color">Color:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Color" value={petData.Color} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Image">Image:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              <img src={`data:image/*;base64,${Buffer.from(petData.Image.data).toString()}`} width="50" height="50" alt='Error' />   
                <input type="file" name="Image" accept="image/*" onChange={handleImageChange}  />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Description">Description:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <textarea
                  name="Description"
                  value={petData.Description}
                  onChange={handleInputChange}
                  rows="4"
                  cols="50"
                  required
                />
              </td>
            </tr>

            <tr>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                    <label htmlFor="Status">Status :</label>
                    <select name="Status" value={petData.Status} onChange={handleInputChange} required >
                        <option value="ACTIVE" >ACTIVE</option>
                        <option value="INACTIVE" >INACTIVE</option>
                    </select>
                  </td>
                 
                </tr>
            
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button  onClick={() => { SaveData();
          }} style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
            ADD 
          </button>

          {/* <button type="button" onClick={handleReset} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
            RESET
          </button> */}
        </div>
      </form>
    </div>
    </div>
  );
};

export default Petedit;
