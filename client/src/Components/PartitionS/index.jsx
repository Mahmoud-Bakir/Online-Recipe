import  './style.css';

const SearchPartition=({Name,Itype,onChange,holder,lab},)=>{  
    return(
    <div className="part-search">
        <label htmlFor="">{lab}</label>
        <input name={Name} type={Itype} onChange={onChange} placeholder={holder} required/>
    </div>
    );
}
export default SearchPartition;
