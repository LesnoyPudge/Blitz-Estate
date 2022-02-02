import { useForm } from "../../hooks/form.hook";



export function UpdateApartmentForm(props) {
    const {isLoading, handleSubmit, handleChange, message} = useForm();

    return (
        <form 
            action="/api/apartments/update" 
            method="POST" 
            style={{display: 'flex', flexDirection: 'column', gap: '15px', border: '2px solid red', margin: '30px', padding: '10px'}}
            onSubmit={handleSubmit}
        >

            <label htmlFor="apartment-label">
                Label
            </label>
            <input 
                type="text" 
                id="apartment-label" 
                name="label" 
                onChange={handleChange}
            />

            <label htmlFor="apartment-image">
                Image
            </label>
            <input 
                type="text" 
                id="apartment-image" 
                name="image" 
                onChange={handleChange} 
            />

            <label htmlFor="apartment-lot">
                Lot
            </label>
            <input 
                type="number" 
                id="apartment-lot" 
                name="lot" 
                onChange={handleChange} 
            />

            <label htmlFor="apartment-price">
                Price
            </label>
            <input 
                type="number" 
                id="apartment-price" 
                name="price" 
                onChange={handleChange} 
            />

            <label htmlFor="apartment-area">
                Area
            </label>
            <input 
                type="number" 
                id="apartment-area" 
                name="area" 
                onChange={handleChange} 
            />

            <label htmlFor="apartment-floor">
                Floor
            </label>
            <input 
                type="number" 
                id="apartment-floor" 
                name="floor" 
                onChange={handleChange} 
            />

            <button type="submit">
                {(isLoading) ? 'Загрузка...' : 'Обновить'}
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