import { useState } from 'react'

export default function CVform() {
   const [formData, setFormData] = useState ({
         firstName: 'Alexandra',
         lastName: 'Chen',
         jobPosition: 'Senior Full Stack Developer',
         email: 'alex.chen@devportfolio.com',
         phoneNumber: '+1 (234) 567-8910',
         address: 'San Francisco, CA 12345',
         languages: ['English', 'Mandarin', 'Spanish'],
         skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'],
         education: 'Harvard University.',
         experience: 'Worked at Tech Innovations Inc. leading a team of 8 developers in building scalable apps.',
         summary: 'Full-stack developer specialized in React apps.',

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
                     onChange={handleChange} //for updating live
                     value={formData.firstName}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="lastName"
                     onChange={handleChange} //for updating live
                     value={formData.lastName}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="jobPosition">Job Position</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="jobPosition"
                     onChange={handleChange} //for updating live
                     value={formData.jobPosition}
                  />
               </div>
               
               <div className="input-section">
                  <label htmlFor="email">Email</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="email"
                     onChange={handleChange} //for updating live
                     value={formData.email}
                  />
               </div>
      
               <div className="input-section">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="phoneNumber"
                     onChange={handleChange} //for updating live
                     value={formData.phoneNumber}
                  />
               </div>
              <div className="input-section">
                  <label htmlFor="address">Address</label>
                  <input 
                     type="text"
                     className="form-input"
                     name="address"
                     onChange={handleChange} //for updating live
                     value={formData.address}
                  />
               </div>
            </div>

            <h2>Languages</h2>
            <div className="input-section">
               <label htmlFor="languages">Languages (comma-separated)</label>
               <input
                  type="text"
                  className="form-input"
                  name="languages"
                  value={formData.languages.join(',')}
                  onChange={(e) => handleArrayChange(e, 'languages')}
               />
            <small className="input-hint">Separate languages with commas</small>
            </div>

            <h2>Skills</h2>
            <div className="input-section">
               <label htmlFor="skills">Skills (comma-separated)</label>
               <input
                  type="text"
                  className="form-input"
                  name="skills"
                  value={formData.skills.join(',')}
                  onChange={(e) => handleArrayChange(e, 'skills')}
               />
            <small className="input-hint">Separate skills with commas</small>
            </div>

            <h2>Education</h2>
            <div className="input-section">
               <label htmlFor="education"></label>
               <textarea
                  type="text"
                  className="form-input"
                  name="education"
                  value={formData.education}   
                  onChange={handleChange}
                  rows="5"
               />
            </div>
            <h2>Experience</h2>
            <div className="input-section">
               <label htmlFor="experience">Experience</label>
               <textarea
                  type="text"
                  className="form-input"
                  name="experience"
                  value={formData.experience}   
                  onChange={(e) => handleArrayChange(e, 'experience')}
                  rows="5"
               />
            </div>
            <h2>Professional Summary</h2>
            <div className="input-section">
               <label htmlFor="summary">Career Summary</label>
               <textarea
                  type="text"
                  className="form-input"
                  name="summary"
                  value={formData.summary}   
                  onChange={(e) => handleArrayChange(e, 'summary')}
                  rows="5"
               />
            </div>
         
         </form>

         {/*Preview Section */}
         <div className="cv-preview">
         <h2>{formData.firstName} {formData.lastName}</h2>
         <h3>{formData.jobPosition}</h3>
         <div className="preview-content">
            <div className="cv-info-section">

               <p><strong>Email:</strong> {formData.email}</p>
               <p><strong>Phone:</strong> {formData.phoneNumber}</p>
               <p><strong>Address:</strong> {formData.address}</p>
            </div>
            
            <div className="cv-info-section">
               <p><strong>Languages:</strong> {formData.languages.join(', ')}</p>
            </div>

            <div className="cv-info-section">
               <p><strong>Skills:</strong> {formData.skills.join(', ')}</p>
            </div>
            
            <div className="cv-info-section">
            <p><strong>Education:</strong> {formData.education}</p>
            </div>

            <div className="cv-info-section">
            <p><strong>Experience:</strong> {formData.experience}</p>
            </div>

            <div className="cv-info-section">
            <p><strong>Summary:</strong> {formData.summary}</p>
            </div>
         </div>
        </div>

      </div>
   )
}
