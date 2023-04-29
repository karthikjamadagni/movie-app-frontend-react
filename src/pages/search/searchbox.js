import './searchbox.css'

const Searchbox = (props) => {
    return ( 
        <div className="searcbox">
            <h2>Search Movies Here</h2>
            <input type="text" name="" id="" placeholder="Type To search" value = {props.searchValue} onChange={(event)=>props.setSearchValue(event.target.value)}/>
        </div>
     );
}
 
export default Searchbox;