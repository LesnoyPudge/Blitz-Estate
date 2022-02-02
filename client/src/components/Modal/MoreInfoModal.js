import './index.scss';


export function MoreInfoModal(props) {
    return (
        <>
            <div className="modal-inner__header">
                <div className="modal-inner__title">
                    Lorem ipsum dolor sit amet.
                </div>
                
                <button 
                    className="modal-inner__close-button modal-close-button button" 
                    type="button"
                    onClick={props.onClick}
                >
                    <svg className="image">
                        <use xlinkHref="#close-button" />
                    </svg>
                </button> 
            </div>
                
            <div className="modal-inner__content modal-content">
                <p>
                    <b>Lorem ipsum.</b> — Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus ipsa est tenetur modi, 
                    perferendis ad praesentium asperiores. Aperiam, aspernatur asperiores.
                </p>
                
                <p>
                    <b>Lorem, ipsum dolor.</b> Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Illo, fuga! 
                    Enim, saepe placeat nemo quam vero rerum 
                    illo, labore minima ipsum officia quo fugiat 
                    nostrum natus quidem odit! Totam sint enim 
                    deleniti sed nisi nemo facere inventore facilis corporis saepe?
                </p>
                
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, laudantium?
                </p>
                
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Sint assumenda porro facere iure cupiditate earum nihil, 
                    inventore ipsa, tenetur voluptates molestias maxime? Enim, 
                    corporis quia a cumque explicabo, dolorum laboriosam distinctio 
                    odit perspiciatis ut suscipit.
                </p>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis eaque eligendi quisquam molestiae fuga ipsam expedita 
                    repudiandae ea hic tenetur.
                </p>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, rerum.
                </p>
                
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequatur possimus officiis aut maxime cumque eaque, 
                    deleniti laudantium quos! Nesciunt qui quibusdam saepe 
                    recusandae delectus mollitia dolorum dignissimos odio impedit 
                    modi, consequatur nulla inventore. Inventore deleniti 
                    autem expedita velit? Quia quo aliquam pariatur cumque non. Facere!
                </p>
            </div>
        </>
    );
}