import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}>
                <option value="">-</option>
            { props.items.map( item =>
                <option key={item}>{item}</option>
            ) }
            </select>
        </div>
    );
}

export default ListaSuspensa;