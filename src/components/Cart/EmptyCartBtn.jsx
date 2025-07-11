import { FaRegTrashAlt } from "react-icons/fa";

const EmptyCartBtn = ({clear}) => {
    return (
        <button className="btn btn-danger me-2" onClick={clear}>
            <FaRegTrashAlt /> Vaciar
        </button>
    );
};

export default EmptyCartBtn;