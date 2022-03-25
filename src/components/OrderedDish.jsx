import React, {useState} from 'react'
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

const OrderedDish = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [comment, setComment] = useState();

    return (
    <>
        <div className="dishContainer">
            <img className="thumbnail" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"/>
            <p>2</p>


            <p>Avocado Maki</p>
            <p>4.50€</p>
            
            <div className="changeNumber">
                <Button variant="contained">-</Button>
                <span>  </span>
                <Button variant="contained">+</Button>
            </div>
            
            <div>
                <FormControl >
                    <Input onMouseDown={handleShow} onChange={(e) => setComment(e.target.value)} id="my-input" type="textarea" placeholder="add note ..." value={comment}/>
                </FormControl>
                {show && 
                <div>
                    <Button variant="outlined" onClick={handleClose}>
                    Cancel
                    </Button>
                    <Button variant="contained" type="submit" onClick={() => {
                        console.log('submitted')
                    }} >
                    Add
                    </Button>
                </div>}
            </div>
            <i className="fa fa-trash" >delete</i>
        </div>
        <hr/>
    </>
    )
}

export default OrderedDish