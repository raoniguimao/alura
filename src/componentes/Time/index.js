import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const cssSection = { backgroundColor: props.corSecundaria };
    const cssH3 = { borderColor: props.corPrimaria };
    
    return (
        props.colaboradores.length > 0 && 
        <section className='time' style={ cssSection }>
            <h3 style={ cssH3 }>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador =>
                <Colaborador key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />
            )}
            </div>
        </section>
    );
};


export default Time;