import React from 'react'
import './Home.scss'
import Layer1 from '../../Assets/pimg/Layer 1.png'
import Layer2 from '../../Assets/pimg/Layer 2.png'
import Layer3 from '../../Assets/pimg/Layer 3.png'
import Layer4 from '../../Assets/pimg/Layer 4.png'
import Layer5 from '../../Assets/pimg/Layer 5.png'
import Layer6 from '../../Assets/pimg/Layer 6.png'
import Layer7 from '../../Assets/pimg/Layer 7.png'
import Layer8 from '../../Assets/pimg/Layer 8.png'
import Layer9 from '../../Assets/pimg/Layer 9.png'
import Layer10 from '../../Assets/pimg/Layer 10.png'
import Layer11 from '../../Assets/pimg/Layer 11.png'
import Layer12 from '../../Assets/pimg/Layer 12.png'
import Layer2x from '../../Assets/pimg/Layer2x.png'



const Data = [
  {
    id: 1,
    img: Layer1,
    patient: 'Emily Williams',
    gender: 'Female',
    Age: ' ,18',
  },

  {
    id: 2,
    img: Layer2,
    patient: 'Ryan Johnson',
    gender: 'Male',
    Age: ' ,45',
  },

  {
    id: 3,
    img: Layer3,
    patient: 'Brandon Mitchell',
    gender: 'Male',
    Age: ' ,36',
  },

  {
    id: 4,
    img: Layer4,
    patient: 'Jessica Taylor',
    gender: 'Female',
    Age: ' ,28',
  },

  {
    id: 5,
    img: Layer5,
    patient: 'Samantha Johnson',
    gender: 'Female',
    Age: ' ,56',
  },

  {
    id: 6,
    img: Layer6,
    patient: 'Ashely Martinez',
    gender: 'Female',
    Age: ' ,54',
  },

  {
    id: 7,
    img: Layer7,
    patient: 'Olivia Brown',
    gender: 'Female',
    Age: ' ,52',
  },

  {
    id: 8,
    img: Layer8,
    patient: 'Tyler Davis',
    gender: 'Male',
    Age: ' ,19',
  },

  {
    id: 9,
    img: Layer9,
    patient: 'Kevin Anderson',
    gender: 'Male',
    Age: ' ,30'
  },

  {
    id: 10,
    img: Layer10,
    patient: 'Dylan Thompson',
    gender: 'Male',
    Age: ' ,36',
  },

  {
    id: 11,
    img: Layer11,
    patient: 'Nathan Evans',
    gender: 'Male',
    Age: ' ,58',
  },

  {
    id: 12,
    img: Layer12,
    patient: 'Nike Nolan',
    gender: 'Male',
    Age: ' ,31',
  },
]



const Home = () => {
  return (
    <div className="Home1">
      <div className="Home">
        <h2>Patients</h2>
        {Data.map(({ id, img, patient, gender, Age }) => (
          <div key={id} className='patient'>
            <img src={img} alt={patient} />

            <div className="description">
              <span><strong>{patient}</strong></span>
              <div className="info">
                <span>{gender}</span>
                <span>{Age}</span>
              </div>
            </div>

          </div>
        ))}
      </div >

      <div className="middle">
        <h2>Diagnostics</h2>
      </div>

      <div className="Last">
        <img src={Layer2x} alt="" />


      </div>
    </div>

  )
}

export default Home