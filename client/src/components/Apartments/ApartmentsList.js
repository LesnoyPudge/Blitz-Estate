import { ApartmentsListItem } from "./ApartmantsListItem";
import './index.scss';



export function ApartmentsList(props) {

    return (
        <ul className="apartments-form-output__list">
            {props.apartments.map((apartment) => {
                return (
                    <ApartmentsListItem 
                        apartment={apartment}
                        key={apartment._id}
                    />
                );
            })}                 
        </ul>
        
    );
}