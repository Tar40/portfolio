import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(true)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/avatar.jpg" />

        <Title title="TUKSIN PHUANGCHIM (TAR)">
          <h3>Position : It Support</h3>
        </Title>

        <Title title="Contact">
     
          <p>current date: {moment().format("D MMM YYYY")}</p>
          <p>Date of Birth: {moment("2000/04/03").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66841115489
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'hide'}
          </button>
          <p>Email : s64122202040@ssru.ac.th</p>
          <p>www.Tar6440.com</p>
        </Title>
    
        <Title title="Education">
          <p>2564-2566</p>
          <p>Bachelor of Science in Information Technology (IT)</p>
          <p>Suan Sunandha Rajabhat University</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>สวัสวัดีคดีรับรั ผมนาย ทักทัษิณ พ่วงฉิม ชื่อชื่เล่น ชื่อต้านะครับตอนนี้กำลังศึกษาอยู่ที่ ไม่มีปมีระสบการณ์ในการทำงานมาก่อนเลยอยากจะออกหาประสบการณ์ในการฝึกงานครับ</p>
        </Title>


        <Title title="EXPERIENCE">
          <p>• PART TIME 7ELEVEN บริการลูกค้า</p>
          <p>• PART TIME SWENSENS บริการลูกค้า</p>
          <p>• PART TIME JD SPORTS เชียร์ขายสินค้าต่างๆภายในร้าน ได้ฝึกการทำงานกันเป็นทีมกับเพื่อนร่วมงาน ได้มีการคุยกับชาวต่างชาติมากกว่า60เปอเซ็นต์</p>
        </Title>

      </div>
    </main>
  )
}

export default App
