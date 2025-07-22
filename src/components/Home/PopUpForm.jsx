import React from 'react'

const PopUpForm = () => {
  return (
    <div className="container">
        <header>
      <h1>Welcome To Baobab</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>Sign Up</button>
      </header> 

      <section>
        <section>
            {/* close Btn */}
            <button className="">X</button>
            {/* Modal content  */}
            <div className="">
                <h1>Sign Up</h1>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter email" />
                    </div>
                     <div>
                        <label htmlFor="passWord">Password</label>
                        <input type="text" placeholder="Enter PassWord" />
                    </div>


                      <div>
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input type="text" placeholder="Enter PassWord" />
                    </div>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </section>
      </section>
    </div>
  )
}

export default PopUpForm