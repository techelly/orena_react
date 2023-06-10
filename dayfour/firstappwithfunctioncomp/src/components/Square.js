import "../index.css";
function Square(props){

return (
    <button className="square" onClick={
        function(){
            console.log('click');
        }
    }>
    {props.value}

    </button>
);
}

export default Square;
