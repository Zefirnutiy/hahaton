import './App.css';
import Footer from './Component/UI/Footer';
import Header from './Component/UI/Header';
import SuperGeek from './Media/Image/СУПЕР ГИК.svg';
import Button from './Component/UI/Button.jsx'
import Form from './Component/UI/Form/Form.jsx'
// import BgAnimated from './Component/UI/BgAnimated.jsx';
function App() {
  return (
    <div className="App">
    {/* <BgAnimated /> */}
      <Header className='header'/>
        <section id='general'>
          <div className='general_container'>
            <div className='left_general_text'>
              <p>14.11 - 16.11</p>
              <p>09:00 - 16:00</p>
            </div>

            <h1 className='title_montserrat'>IT ФОРУМ</h1>

            <div className='right_general_text'>
              <p>IT Колледж</p>
              <p>Курган</p>
            </div>
          </div>

          <img className='super_geek_image' src={SuperGeek} alt='SUPER GEEK'/>
          
          <Button btnClass ={'inline'}></Button>
        </section> 
        <section className='description_block'>
        <section id='description'>
            <h1 className='title section'>Конкурс для молодых и талантливых</h1>
            <div className='flex_description'>  
              <div className='stage_info'>
                <h1 className='title subtitle left'>1 ЭТАП</h1>
                  <p className='text'> 
                  Участники должны решить задачи по программированию на время.
                </p>
                  <p className='text'>
                  Задачи могут быть разной сложности и могут включать в себя алгоритмы, структуры данных, работу с базами данных и другие темы.        
                  </p>
              </div>
              <div className='description_container'>
                  <p className='title description_title right'>IT ФОРУМ</p>
                  <p className='text description'>
                    Проводится с целью выявления и поддержки перспективных программистов и инженеров.
                  </p>
              </div>
          </div>

          <div className='flex_description'>
            <div className='description_container'>
              <p className='title description_title left'>СУПЕР ГИК</p>
              <p className='text description left'>
               Это отличная возможность для обмена опытом, обучения новым технологиям и общения с единомышленниками.
              </p>
            </div>
            <div className='stage_info'>
            <h1 className='title subtitle left'>2 ЭТАП</h1>
            <p className='text'>
              Участникам предлагается разработать и защитить свой проект в области IT.
            </p>
            <p className='text'>
              Проект может быть связан с разработкой программного обеспечения, созданием веб-приложений, мобильных приложений, систем искусственного интеллекта и других направлений.        
            </p>
            </div>
          </div>
        </section>

        <section id="possibilities">
        <h1 className='title section possibilities_title left'>ВОЗМОЖНОСТЬ ПОЛУЧИТЬ</h1>
          <div className='possibilities_container'>
            <div className='possibilities_plash text plash'>Возможность трудоустройства в ведущих IT-компаниях страны </div>
            <div className='possibilities_plash text plash'>Использование проектов в портфолио и резюме</div>
            <div className='possibilities_plash text plash'>Ценные подарки от спонсоров</div>
          </div>
        </section>
        </section>
        
      <section id='programm'>
      <h1 className='title section'>Программа</h1>
        <div className='programm_container'>
          <div className='programm_content'>
            <h1 className='title subtitle'>1 ДЕНЬ</h1>
                <p className='text'> 
                  09:00–10:30 Открытие форума и приветственные слова от организаторов и приглашённых гостей.
                </p>
                <p className='text'>
                  10:30–12:00 Мастер-классы по программированию и обучение новым технологиям.        
                </p>
                <p className='text'> 
                  12:00–13:30 Круглый стол с экспертами IT-индустрии, обсуждение актуальных вопросов и трендов.
                </p>
                <p className='text'> 
                  13:30–16:00 Презентация проектов и возможность для участников предложить свои идеи.
                </p>
          </div>
          <div className='programm_content'>
            <h1 className='title subtitle'>2 ДЕНЬ</h1>
                <p className='text'> 
                  09:00 - 11:00 Продолжение мастер-классов и обучения новым технологиям от приглашенных гостей.
                </p>
                <p className='text'>
                  11:00 - 13:00 Семинары и тренинги по развитию навыков работы в команде и управлению проектами.       
                </p>
                <p className='text'> 
                  13:00 - 15:00 Встреча с инвесторами и представителями компаний, заинтересованных в поиске талантов.
                </p>
                <p className='text'> 
                  15:00 - 16:00 Закрытие форума и прощальные слова от организаторов и приглашённых гостей 
                </p>
          </div>
        </div>
      </section>
      <section id='reg'>
        <div className='form_container'>
          <Form />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
