function Button({text,btnclass}){
    return <button className={`btn ${btnclass}`}>{text}</button>

}
export default Button;