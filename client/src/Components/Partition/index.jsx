import  './style.css';

const Partition=({Name,Itype,onChange,holder,lab},)=>{  
    return(
    <div className="part">
        <label htmlFor="">{lab}</label>
        <input name={Name} type={Itype} onChange={onChange} placeholder={holder} required/>
    </div>
    );
}
export default Partition;
