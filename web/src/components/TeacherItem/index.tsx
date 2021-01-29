import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/22477715?s=200&v=4" alt="Link"/>
                        <div>
                           <strong>Link</strong> 
                           <span> Quimica</span>
                        </div>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec aliquet elit.<br/><br/>
                    Aenean tempus elit dolor, vitae sollicitudin lorem tristique in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae elit sem. Mauris scelerisque lacinia odio et sollicitudin. Duis ornare tempus sem, non sodales tortor dictum id. Nam mattis lectus in efficitur molestie. 
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