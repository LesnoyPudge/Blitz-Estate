import { useForm } from "../../hooks/form.hook";



export function DeleteApartmentForm(props) {
    const {isLoading, handleSubmit, handleChange, message} = useForm();

    return (
        <form 
            action="/api/apartments/delete" 
            method="POST" 
            style={{display: 'flex', flexDirection: 'column', gap: '15px', border: '2px solid red', margin: '30px', padding: '10px'}}
            onSubmit={handleSubmit}
        >

            <label htmlFor="apartment-lot">
                Lot
            </label>
            <input 
                type="number" 
                id="apartment-lot" 
                name="lot" 
                onChange={handleChange} 
            />

            <button type="submit">
                {(isLoading) ? 'Загрузка...' : 'Удалить'}
            </button>

            {
                message ?
                    <span>
                        {message ? message : ''}
                    </span> 
                : ''
            }
            
        </form>
    );
}