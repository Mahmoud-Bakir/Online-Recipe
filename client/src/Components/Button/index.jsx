import './style.css';
const Button = ({name,onSubmit}) => {
    return (
        <button className='button-register' onClick={onSubmit}>
            {name}
        </button>
    );
}
export default Button;