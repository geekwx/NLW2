import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://cdn.bulbagarden.net/upload/thumb/b/b8/025Pikachu_LG.png/600px-025Pikachu_LG.png" alt="Pikachu"/>
                        <div>
                           <strong>Pikachu</strong> 
                           <span> Quimica</span>
                        </div>
                    </header>
                    <p>
                    Cientista desde muito novo Dr. Pikachu esta aqui para te mostrar o amor de quimita<br/><br/>
                    Utilizando desde quimica basica a avançada e punindo os indiciplados com o choque do trovão, venha aprender com esse professor especial. 
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                        <img src={whatsappIcon} alt="WhatsApp" />Entre em Contato
                        </button>
                    </footer>
                </article>

    );
}
export default TeacherItem;