import { useState } from 'react'

export default function CVform() {
   const [formData, setFormData] = useState ({
      firstName: '',
      lastName: '',
      jobPosition: '',
      email: '',
      phoneNumber: '',
      address: '',
      languages: [],
      skills: [],
      summary: '',
   });

   // handle input changes:
   const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prev => ({
         ...prev,
         [name]:value
      }));
   }

   // for when array changes:
   const handleArrayChange = (e,field) => {
      const {value} = e.target;
      const items =value.split(',').map(item => item.trim()).filter(item => item);
      setFormData(prev => ({
         ...prev,
         [field]:items
      }));
   }

   return (
      <div className="cv-app">
         <form className="cv-form">
            <h2>General Info</h2>
            
            <div className="form-group">
              
               <div className="input-section">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="firstName"
                     value={formData.firstName}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="lastName"
                     value={formData.lastName}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="jobPosition">Job Position</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="jobPosition"
                     value={formData.jobPosition}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="email">Email</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="email"
                     value={formData.email}
                  />
               </div>
      
               <div className="input-section">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="phoneNumber"
                     value={formData.phoneNumber}
                  />
               </div>
              <div className="input-section">
                  <label htmlFor="address">Address</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="address"
                     value={formData.address}
                  />
               </div>

            </div>

         </form>

      </div>
   )
}
