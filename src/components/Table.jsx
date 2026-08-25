import { Link } from "../Router";

function Table() {
    return (
        <>
         <img src= "src/assets/table_.webp" className="table_"/>

         <div style={{ marginTop: '20px' }}>
         <Link to="/tasks/123" className="myCustomLink">БАЗА</Link>
         <li><Link to="/tasks/123" className="myCustomLink1">ПРОФИЛЬ</Link></li>
         </div>

         <p className="base-part-description">Изучайте базовую часть<br></br>ЕГЭ бесплатно.</p>
         <p className="profile-part-description">Изучайте профильную часть<br></br>ЕГЭ бесплатно.</p>

         <p className="base-part-notes">•Задания из новейших учебников<br></br>и решебников.
         <br></br><br></br>
         •Разбор задач с объяснениями.
         <br></br><br></br>
         •Рисунки, а также пошаговые схемы.
         <br></br><br></br>
         •Интерактив в виде досок и гиф-картинок.
         </p>
         <p className="try-now-text">Попробуйте прямо сейчас!</p>


         <p className="profile-part-notes">•Задания из новейших учебников<br></br>и решебников.
         <br></br><br></br>
         •Разбор  с объяснениями.
         <br></br><br></br>
         •Рисунки, а также пошаговые схемы.
         <br></br><br></br>
         •Интерактив в виде досок и гиф-картинок.
         </p>
         <p className="try-now-text2">Попробуйте прямо сейчас!</p>
        </>
    )
}

export default Table;  
