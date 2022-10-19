import React, { useState} from 'react'

function Admin({ onHandleAddReview }) {
    const [formData, setFormData] = useState ({
        full_name: "",
        email: "",
        password: "",
    })
    
    function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    
        function handleSubmit(e) {
            e.preventDefault()
    
            e.target.reset();
    
            fetch("/myreviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                full_name: formData.full_name,
                email: formData.email
                })
    
            })
                .then((resp) => resp.json())
                .then((data) => {
                    onHandleAddReview(data)
                    setFormData({...formData, full_name: "", email:"", password:""})
                })
    
            alert("New Clerk added successfully!");
    
    
        }
    
    
        return (
            <div className="clerk-container" style={{ margin: "auto", height: 90 + "vh", color: "white", borderRadius: "15px", padding: "15px", marginTop: "5px"}}>       
                    <form onSubmit={handleSubmit}>
    
                        <input type="text" name="Full Name" placeholder="full name" value={formData.full_name} onChange={handleChange}/>
                        <input type="text" name="Email" placeholder="email" value={formData.email} onChange={handleChange}/>
                        <input type="text" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                        <input type="number" name="Review score" placeholder="Review score" value={formData.score} onChange={handleChange}/>
                        <button type="submit">Add Clerk</button>
                    </form>
            </div>
    
        )
    }
    export default Admin;