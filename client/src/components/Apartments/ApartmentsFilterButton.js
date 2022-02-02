


export function ApartmentsFilterButton(props) {
    return (
        <button 
            className={`apartments-form__form-filter-button form-filter-button ` 
            + ((props.isActive) ? ` form-filter-button--active ` : '')
            + ` button `} 
            type="button" 
            data-min={props.min}
            data-max={props.max}
            onClick={props.onClick}
        >
            {
                props.text
            }
        </button>
    );
}