
import React from 'react'
import {useRef} from 'react'
import "../Order/order.css"

const Order = (props) => {
   const dateInputRef = useRef();
   const quantityInputRef = useRef();
   const itemInputRef = useRef();


    function submitHandler(e){
      e.preventDefault();

       const enteredDate = dateInputRef.current.value;
       const enteredquantity = quantityInputRef.current.value;
       const entereditem = itemInputRef.current.value;


       const OrderDetails={
           Date:enteredDate ,
           Item:entereditem,
           Quantity:enteredquantity,
      
       };

       props.onAddOrder(OrderDetails)

}
 
 
  return (
    <>
      {/* <section className='contact mtop'>
      
          <div className='main-content'>
            <h2>Enter Order</h2>
            <form  onSubmit={submitHandler}>
              <div className='grid1'>
               
                  <span>
                   Date <label>*</label>
                  </span>
                  <input type='date' name='date' ref={dateInputRef} required />
                  
                  <span>
                    Item Name <label>*</label>
                  </span>
                  <input type='text' name='item_name'  />
              

                  <span>
                    Quantity <label>*</label>
                  </span>
                  <input type='number' name='quantity' ref={quantityInputRef} required />
                  
     
             
              <button className ='primarybtn'>Submit Now</button>
              </div>
            </form>
          </div>

      
      </section> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form onSubmit={submitHandler} className='mt-5'>
            <h2>Enter Order</h2>
            <div class="form-group">
            <label htmlFor="item_name">Item Name</label>
              <input
              name='item_name'
              type="text"
              class="form-control"
              placeholder="Enter Item name"
              ref={itemInputRef}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              class="form-control"
              placeholder="date"
              ref={dateInputRef}
              required
              />
          </div>
    
          <div class="form-group">
            <label htmlFor="item_name">Quantity</label>
            <input
              type="number"
              name='quantity'
              ref={quantityInputRef}
              required
              className="form-control"
              placeholder="quantity"
            />
            </div>
            <input
              type="submit"
              className="form-control btn btn-primary my-4"
              
            />
          </form>
          </div>
        </div>
        </div>
    </>
  )
}

export default Order
