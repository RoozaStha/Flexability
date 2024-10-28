import React from 'react';
import { assets } from '../../assets/assets';

const AddDoctor = () => {
  return (
    <form action="">
      <h2>Add Doctor</h2>

      <div>
        {/* Upload Doctor Picture */}
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="Upload Area" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>Upload Doctor <br /> picture</p>
        </div>

        {/* Doctor Details */}
        <div>
          <div>
            <label>
              <p>Doctor Name</p>
              <input type="text" name="name" placeholder="Name" required />
            </label>

            <label>
              <p>Doctor Email</p>
              <input type="email" name="email" placeholder="Email" required />
            </label>

            <label>
              <p>Doctor Password</p>
              <input type="password" name="password" placeholder="Password" required />
            </label>

            <label>
              <p>Experience</p>
              <select name="experience" required>
                {[...Array(10).keys()].map(year => (
                  <option key={year} value={`${year + 1} Year`}>{year + 1} Year</option>
                ))}
              </select>
            </label>

            <label>
              <p>Fees</p>
              <input type="number" name="fees" placeholder="Fees" required />
            </label>
          </div>

          {/* Doctor Speciality, Education, Address */}
          <div>
            <label>
              <p>Speciality</p>
              <select name="speciality" required>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </label>

            <label>
              <p>Education</p>
              <input type="text" name="education" placeholder="Education" required />
            </label>

            <label>
              <p>Address</p>
              <input type="text" name="address1" placeholder="Address 1" required />
              <input type="text" name="address2" placeholder="Address 2" required />
            </label>
          </div>

          {/* About Doctor */}
          <div>
            <label>
              <p>About Doctor</p>
              <textarea name="about" placeholder="Write about doctor" rows="5" required />
            </label>
          </div>
        </div>
      </div>

      <button type="submit">Add Doctor</button>
    </form>
  );
};

export default AddDoctor;
